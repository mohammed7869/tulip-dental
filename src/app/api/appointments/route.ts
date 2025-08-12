import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { apiService } from '@/lib/apiService';
import { generateGoogleCalendarUrl } from '@/lib/utils';

// Email configuration
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'info.bawaan@gmail.com',
    pass: process.env.SMTP_PASS || 'narf fxgc niis wiub',
  },
};

// const adminEmail = 'banohusain12131@gmail.com';
const adminEmail = 'info.bawaan@gmail.com';

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

// Email templates
const createPatientEmailTemplate = (appointmentData: any) => {
  // Ensure we have a proper date object
  let appointmentDate;
  try {
    // Handle different date formats
    if (typeof appointmentData.appointmentDate === 'string') {
      appointmentDate = new Date(appointmentData.appointmentDate);
    } else if (appointmentData.appointmentDate instanceof Date) {
      appointmentDate = appointmentData.appointmentDate;
    } else {
      appointmentDate = new Date();
    }

    // Validate the date
    if (isNaN(appointmentDate.getTime())) {
      console.error('Invalid appointment date:', appointmentData.appointmentDate);
      appointmentDate = new Date(); // Fallback to current date
    }
  } catch (error) {
    console.error('Error parsing appointment date:', error);
    appointmentDate = new Date(); // Fallback to current date
  }

  const formattedDate = appointmentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const appointmentTime = appointmentData.appointmentTime;
  const endTime = calculateEndTime(appointmentTime, appointmentData.duration || '30 Minutes');

  // Generate Google Calendar URL
  const calendarUrl = generateGoogleCalendarUrl({
    patientName: appointmentData.patientName,
    appointmentDate: appointmentDate,
    appointmentTime: appointmentData.appointmentTime,
    duration: appointmentData.duration || '30 Minutes',
    location: appointmentData.location,
    reason: appointmentData.reason,
    provider: appointmentData.provider
  });

  // Format date for calendar display
  const calendarDate = appointmentDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
  const calendarDay = appointmentDate.toLocaleDateString('en-US', {
    weekday: 'short'
  });

  return {
    subject: `Appointment at Maple Dental - ${appointmentData.isNewClient ? 'New Patient' : 'Existing Patient'}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Appointment Confirmation</title>
        <style>
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0; 
            padding: 0; 
            background-color: #ffffff;
          }
          .container { 
            max-width: 800px; 
            margin: 0 auto; 
            background-color: white;
            padding: 20px;
          }
          .appointment-header {
            display: flex;
            background: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            margin: 20px 0;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .calendar-icon {
            background: #ffffff;
            border-right: 1px solid #e0e0e0;
            padding: 0;
            text-align: center;
            min-width: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            border-radius: 6px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .calendar-header {
            background: #4285f4;
            color: white;
            padding: 8px 12px;
            width: 100%;
            text-align: center;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .calendar-body {
            padding: 12px 8px;
            background: white;
            width: 100%;
            text-align: center;
          }
          .calendar-icon .day {
            font-size: 24px;
            margin-bottom: 4px;
            color: #333;
            font-weight: bold;
            line-height: 1;
          }
          .calendar-icon .weekday {
            font-size: 11px;
            color: #666;
            font-weight: normal;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .appointment-info {
            flex: 1;
            padding: 20px;
            background: white;
          }
          .appointment-title {
            font-size: 18px;
            font-weight: 600;
            color: #333;
            margin: 0 0 15px 0;
          }
          .appointment-detail {
            margin: 8px 0;
            font-size: 14px;
            color: #666;
          }
          .appointment-detail strong {
            color: #333;
          }
          .add-to-calendar-link {
            color: #1a73e8;
            text-decoration: none;
            font-size: 14px;
            margin-top: 15px;
            display: inline-block;
          }
          .add-to-calendar-link:hover {
            text-decoration: underline;
          }
          .agenda-section {
            background: white;
            border-left: 1px solid #e0e0e0;
            padding: 20px;
            min-width: 200px;
          }
          .agenda-title {
            font-size: 16px;
            font-weight: 600;
            color: #333;
            margin: 0 0 0px 0;
          }
          .agenda-date {
            font-size: 14px;
            color: #666;
            margin-bottom: 15px;
          }
          .agenda-event {
            font-size: 13px;
            color: #333;
            margin: 8px 0;
            padding: 5px 0;
            border-bottom: 1px solid #f0f0f0;
          }
          .agenda-event:last-child {
            border-bottom: none;
          }
          .confirmation-message {
            font-size: 16px;
            margin: 20px 0 0px 0;
            color: #333;
          }
          .confirmation-message strong {
            font-weight: bold;
          }
          .booking-details { 
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 25px; 
            margin: 25px 0; 
          }
          .booking-details h3 {
            margin: 0 0 20px 0;
            color: #1a73e8;
            font-size: 18px;
            font-weight: 600;
          }
          .detail-row { 
            margin: 12px 0; 
            display: flex;
            align-items: center;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 8px;
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .label { 
            font-weight: 600; 
            color: #555; 
            min-width: 120px;
            margin-right: 15px;
          }
          .value {
            color: #333;
            flex: 1;
          }
          .value a {
            color: #1a73e8;
            text-decoration: none;
          }
          .value a:hover {
            text-decoration: underline;
          }
          .footer { 
            text-align: center; 
            margin-top: 30px; 
            padding: 20px;
            background: #f8f9fa;
            border-top: 1px solid #e0e0e0;
          }
          .footer p {
            margin: 5px 0;
            color: #666;
          }
          .contact-info {
            font-weight: 600;
            color: #333;
          }
          @media (max-width: 768px) {
            .appointment-header {
              flex-direction: column;
            }
            .calendar-icon {
              border-right: none;
              border-bottom: 1px solid #e0e0e0;
              padding: 15px;
            }
            .agenda-section {
              border-left: none;
              border-top: 1px solid #e0e0e0;
              margin-top: 0;
            }
            .detail-row {
              flex-direction: column;
              align-items: flex-start;
              padding-bottom: 12px;
            }
            .label {
              min-width: auto;
              margin-bottom: 5px;
              margin-right: 0;
            }
            .booking-details {
              padding: 20px;
            }
            .container {
              padding: 15px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="appointment-header">
            <div class="calendar-icon">
              <div class="calendar-header">${calendarDate.split(' ')[0]}</div>
              <div class="calendar-body">
                <div class="day">${calendarDate.split(' ')[1]}</div>
                <div class="weekday">${calendarDay}</div>
              </div>
            </div>
            
            <div class="appointment-info">
              <div class="appointment-title">Appointment at Maple Dental - ${appointmentData.isNewClient ? 'New Patient' : 'Existing Patient'}</div>
              <div class="appointment-detail">
                <strong>When:</strong> ${calendarDay} ${calendarDate} ${appointmentDate.getFullYear()} ${appointmentTime} - ${endTime} (IST)
              </div>
              <div class="appointment-detail">
                <strong>Where:</strong> ${appointmentData.location}
              </div>
              <div class="appointment-detail">
                <strong>Who:</strong> Unknown Organizer*
              </div>
              <a href="${calendarUrl}" class="add-to-calendar-link" target="_blank">
                Add to calendar >>
              </a>
            </div>
            
            <div class="agenda-section">
              <div class="agenda-title">Agenda</div>
              <div class="agenda-date">${calendarDay} ${calendarDate} ${appointmentDate.getFullYear()}</div>
              <div class="agenda-event">12:15pm Marketing Catch-up</div>
              <div class="agenda-event">7pm nova logo review</div>
              <div class="agenda-event">${appointmentTime} Appointment at Maple Dental - ${appointmentData.isNewClient ? 'New Patient' : 'Existing Patient'}</div>
              <div class="agenda-event" style="color: #999; font-style: italic;">No later events</div>
            </div>
          </div>
          
          <p class="confirmation-message">Dear ${appointmentData.patientName},</p>
          
          <p class="confirmation-message">You have successfully scheduled your <strong>appointment</strong> on ${formattedDate} at ${appointmentTime} - ${endTime}.</p>
          
          <p class="confirmation-message"><strong>Location:</strong> ${appointmentData.location}</p>
          
          <div class="booking-details">
            <h3>Booking Details</h3>
            <div class="detail-row">
              <span class="label">Booking ID:</span>
              <span class="value">#${appointmentData.id || '23'}</span>
            </div>
            <div class="detail-row">
              <span class="label">Name:</span>
              <span class="value">${appointmentData.patientName}</span>
            </div>
            <div class="detail-row">
              <span class="label">Email:</span>
              <span class="value"><a href="mailto:${appointmentData.email}">${appointmentData.email}</a></span>
            </div>
            <div class="detail-row">
              <span class="label">Phone:</span>
              <span class="value">${appointmentData.phone}</span>
            </div>
            <div class="detail-row">
              <span class="label">Location:</span>
              <span class="value">${appointmentData.location}</span>
            </div>
            <div class="detail-row">
              <span class="label">Appointment:</span>
              <span class="value">${formattedDate} ${appointmentTime}</span>
            </div>
            <div class="detail-row">
              <span class="label">Duration:</span>
              <span class="value">${appointmentData.duration || '30 Minutes'}</span>
            </div>
            ${appointmentData.reason ? `
            <div class="detail-row">
              <span class="label">Note:</span>
              <span class="value">${appointmentData.reason}</span>
            </div>
            ` : ''}
          </div>
          
          <div class="footer">
            <p>Thank you for choosing Maple Dental NJ.</p>
            <p>For any inquiries, call us at: <span class="contact-info">(973) 528-3300</span></p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Dear ${appointmentData.patientName},

You have successfully scheduled your appointment on ${formattedDate} at ${appointmentTime} - ${endTime}.
Location: ${appointmentData.location}

Add to Calendar: ${calendarUrl}

Booking Details:
Booking ID: #${appointmentData.id || '23'}
Name: ${appointmentData.patientName}
Email: ${appointmentData.email}
Phone: ${appointmentData.phone}
Location: ${appointmentData.location}
Appointment: ${formattedDate} ${appointmentTime}
Duration: ${appointmentData.duration || '30 Minutes'}
${appointmentData.reason ? `Note: ${appointmentData.reason}` : ''}

Thank you for choosing Maple Dental NJ.
For any inquiries, call us at: (973) 528-3300

Maple Dental NJ
    `
  };
};

const createAdminEmailTemplate = (appointmentData: any) => {
  // Ensure we have a proper date object
  let appointmentDate;
  try {
    // Handle different date formats
    if (typeof appointmentData.appointmentDate === 'string') {
      appointmentDate = new Date(appointmentData.appointmentDate);
    } else if (appointmentData.appointmentDate instanceof Date) {
      appointmentDate = appointmentData.appointmentDate;
    } else {
      appointmentDate = new Date();
    }

    // Validate the date
    if (isNaN(appointmentDate.getTime())) {
      console.error('Invalid appointment date:', appointmentData.appointmentDate);
      appointmentDate = new Date(); // Fallback to current date
    }
  } catch (error) {
    console.error('Error parsing appointment date:', error);
    appointmentDate = new Date(); // Fallback to current date
  }

  const formattedDate = appointmentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const appointmentTime = appointmentData.appointmentTime;
  const endTime = calculateEndTime(appointmentTime, appointmentData.duration || '30 Minutes');

  // Generate Google Calendar URL for admin
  const calendarUrl = generateGoogleCalendarUrl({
    patientName: appointmentData.patientName,
    appointmentDate: appointmentDate,
    appointmentTime: appointmentData.appointmentTime,
    duration: appointmentData.duration || '30 Minutes',
    location: appointmentData.location,
    reason: appointmentData.reason,
    provider: appointmentData.provider
  });

  // Format date for calendar display
  const calendarDate = appointmentDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
  const calendarDay = appointmentDate.toLocaleDateString('en-US', {
    weekday: 'short'
  });

  return {
    subject: 'New Appointment Received',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Appointment</title>
        <style>
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0; 
            padding: 0; 
            background-color: #ffffff;
          }
          .container { 
            max-width: 800px; 
            margin: 0 auto; 
            background-color: white;
            padding: 20px;
          }
          .appointment-header {
            display: flex;
            background: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            margin: 20px 0;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .calendar-icon {
            background: #ffffff;
            border-right: 1px solid #e0e0e0;
            padding: 0;
            text-align: center;
            min-width: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            border-radius: 6px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .calendar-header {
            background: #4285f4;
            color: white;
            padding: 8px 12px;
            width: 100%;
            text-align: center;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .calendar-body {
            padding: 12px 8px;
            background: white;
            width: 100%;
            text-align: center;
          }
          .calendar-icon .day {
            font-size: 24px;
            margin-bottom: 4px;
            color: #333;
            font-weight: bold;
            line-height: 1;
          }
          .calendar-icon .weekday {
            font-size: 11px;
            color: #666;
            font-weight: normal;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .appointment-info {
            flex: 1;
            padding: 20px;
            background: white;
          }
          .appointment-title {
            font-size: 18px;
            font-weight: 600;
            color: #333;
            margin: 0 0 15px 0;
          }
          .appointment-detail {
            margin: 8px 0;
            font-size: 14px;
            color: #666;
          }
          .appointment-detail strong {
            color: #333;
          }
          .add-to-calendar-link {
            color: #1a73e8;
            text-decoration: none;
            font-size: 14px;
            margin-top: 15px;
            display: inline-block;
          }
          .add-to-calendar-link:hover {
            text-decoration: underline;
          }
          .agenda-section {
            background: white;
            border-left: 1px solid #e0e0e0;
            padding: 20px;
            min-width: 200px;
          }
          .agenda-title {
            font-size: 16px;
            font-weight: 600;
            color: #333;
            margin: 0 0 10px 0;
          }
          .agenda-date {
            font-size: 14px;
            color: #666;
            margin-bottom: 15px;
          }
          .agenda-event {
            font-size: 13px;
            color: #333;
            margin: 8px 0;
            padding: 5px 0;
            border-bottom: 1px solid #f0f0f0;
          }
          .agenda-event:last-child {
            border-bottom: none;
          }
          .confirmation-message {
            font-size: 16px;
            margin: 30px 0 20px 0;
            color: #333;
          }
          .confirmation-message strong {
            
            padding: 2px 4px;
          }
          .appointment-details-section { 
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 25px; 
            margin: 25px 0; 
          }
          .appointment-details-section h3 {
            margin: 0 0 20px 0;
            color: #1a73e8;
            font-size: 18px;
            font-weight: 600;
          }
          .detail-row { 
            margin: 12px 0; 
            display: flex;
            align-items: center;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 8px;
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .label { 
            font-weight: 600; 
            color: #555; 
            min-width: 120px;
            margin-right: 15px;
          }
          .value {
            color: #333;
            flex: 1;
          }
          .value a {
            color: #1a73e8;
            text-decoration: none;
          }
          .value a:hover {
            text-decoration: underline;
          }
          @media (max-width: 768px) {
            .appointment-header {
              flex-direction: column;
            }
            .calendar-icon {
              border-right: none;
              border-bottom: 1px solid #e0e0e0;
              padding: 15px;
            }
            .agenda-section {
              border-left: none;
              border-top: 1px solid #e0e0e0;
              margin-top: 0;
            }
            .detail-row {
              flex-direction: column;
              align-items: flex-start;
              padding-bottom: 12px;
            }
            .label {
              min-width: auto;
              margin-bottom: 5px;
              margin-right: 0;
            }
            .appointment-details-section {
              padding: 20px;
            }
            .container {
              padding: 15px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="appointment-header">
            <div class="calendar-icon">
              <div class="calendar-header">${calendarDate.split(' ')[0]}</div>
              <div class="calendar-body">
                <div class="day">${calendarDate.split(' ')[1]}</div>
                <div class="weekday">${calendarDay}</div>
              </div>
            </div>
            
            <div class="appointment-info">
              <div class="appointment-title">Appointment at Maple Dental - ${appointmentData.isNewClient ? 'New Patient' : 'Existing Patient'}</div>
              <div class="appointment-detail">
                When: ${calendarDay} ${calendarDate} ${appointmentDate.getFullYear()} ${appointmentTime} - ${endTime} (IST)
              </div>
              <div class="appointment-detail">
                <strong>Who:</strong> ${appointmentData.patientName}
              </div>
              <a href="${calendarUrl}" class="add-to-calendar-link" target="_blank">
                Add to calendar »
              </a>
            </div>
            
            <div class="agenda-section">
              <div class="agenda-title">Agenda</div>
              <div class="agenda-date">${calendarDay} ${calendarDate} ${appointmentDate.getFullYear()}</div>
              <div class="agenda-event" style="color: #999; font-style: italic;">No earlier events</div>
              <div class="agenda-event">${appointmentTime} Appointment at Maple Dental - ${appointmentData.isNewClient ? 'New Patient' : 'Existing Patient'}</div>
              <div class="agenda-event" style="color: #999; font-style: italic;">No later events</div>
            </div>
          </div>
          
          <p class="confirmation-message">Hi Administrator,</p>
          
          <p class="confirmation-message">
            You have one confirmed <strong>${appointmentData.isNewClient ? 'New Patient' : 'Existing Patient'}</strong> appointment. The appointment has been added to your schedule.
          </p>
          
          <div class="appointment-details-section">
            <h3>Appointment Details</h3>
            <div class="detail-row">
              <span class="label">Booking ID:</span>
              <span class="value">#${appointmentData.id || '46'}</span>
            </div>
            <div class="detail-row">
              <span class="label">Name:</span>
              <span class="value">${appointmentData.patientName}</span>
            </div>
            <div class="detail-row">
              <span class="label">Email:</span>
              <span class="value"><a href="mailto:${appointmentData.email}">${appointmentData.email}</a></span>
            </div>
            <div class="detail-row">
              <span class="label">Phone:</span>
              <span class="value">${appointmentData.phone}</span>
            </div>
            <div class="detail-row">
              <span class="label">Patient Type:</span>
              <span class="value">${appointmentData.isNewClient ? 'New Patient' : 'Existing Patient'}</span>
            </div>
            <div class="detail-row">
              <span class="label">Appointment:</span>
              <span class="value">${formattedDate} ${appointmentTime}</span>
            </div>
            <div class="detail-row">
              <span class="label">Duration:</span>
              <span class="value">${appointmentData.duration || '30 Minutes'}</span>
            </div>
            ${appointmentData.reason ? `
            <div class="detail-row">
              <span class="label">Note:</span>
              <span class="value">${appointmentData.reason}</span>
            </div>
            ` : ''}
          </div>
          
          <div style="text-align: left; margin-top: 30px; color: #666;">
            <p>Thank you,</p>
            <p>Maple Dental NJ</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Hi Administrator,

You have one confirmed ${appointmentData.isNewClient ? 'New Patient' : 'Existing Patient'} appointment. The appointment has been added to your schedule.

Add to Calendar: ${calendarUrl}

Appointment Details:
Booking ID: #${appointmentData.id || '46'}
Name: ${appointmentData.patientName}
Email: ${appointmentData.email}
Phone: ${appointmentData.phone}
Patient Type: ${appointmentData.isNewClient ? 'New Patient' : 'Existing Patient'}
Appointment: ${formattedDate} ${appointmentTime}
Duration: ${appointmentData.duration || '30 Minutes'}
${appointmentData.reason ? `Note: ${appointmentData.reason}` : ''}

Thank you,
Maple Dental NJ
    `
  };
};

// Helper function to calculate end time
const calculateEndTime = (startTime: string, duration: string): string => {
  // Handle different time formats (e.g., "9:00 AM", "14:30", etc.)
  let hour = 0;
  let minute = 0;

  if (startTime.includes('AM') || startTime.includes('PM')) {
    // Format: "9:00 AM" or "2:30 PM"
    const timeMatch = startTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (timeMatch) {
      hour = parseInt(timeMatch[1]);
      minute = parseInt(timeMatch[2]);
      const period = timeMatch[3].toUpperCase();

      if (period === 'PM' && hour !== 12) hour += 12;
      if (period === 'AM' && hour === 12) hour = 0;
    }
  } else {
    // Format: "14:30" (24-hour)
    const [hours, minutes] = startTime.split(':');
    hour = parseInt(hours);
    minute = parseInt(minutes);
  }

  const startDate = new Date();
  startDate.setHours(hour, minute, 0, 0);

  // Add duration (assuming 30 minutes for now)
  const durationMinutes = duration.includes('30') ? 30 : 60;
  startDate.setMinutes(startDate.getMinutes() + durationMinutes);

  return startDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

// Send email function
const sendEmail = async (to: string, subject: string, html: string, text: string) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_FROM || 'info.bawaan@gmail.com',
      to,
      subject,
      html,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Debug logging for date information
    console.log('Received appointment data:', {
      appointmentDate: body.appointmentDate,
      appointmentDateType: typeof body.appointmentDate,
      appointmentDateInstance: body.appointmentDate instanceof Date
    });

    // Create appointment in database
    const appointment = await apiService.createBooking(body);

    // Debug logging for processed appointment
    console.log('Processed appointment data:', {
      appointmentDate: appointment.appointmentDate,
      appointmentDateType: typeof appointment.appointmentDate,
      appointmentDateInstance: appointment.appointmentDate instanceof Date
    });

    // Send email to patient
    const patientEmail = createPatientEmailTemplate(appointment);
    await sendEmail(
      appointment.email,
      patientEmail.subject,
      patientEmail.html,
      patientEmail.text
    );

    // Send email to admin
    const adminEmailTemplate = createAdminEmailTemplate(appointment);
    await sendEmail(
      adminEmail,
      adminEmailTemplate.subject,
      adminEmailTemplate.html,
      adminEmailTemplate.text
    );

    return NextResponse.json({
      success: true,
      message: 'Appointment created successfully and emails sent',
      appointmentId: appointment.id
    });

  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create appointment',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 