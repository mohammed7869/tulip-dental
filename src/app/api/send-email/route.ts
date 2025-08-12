import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration with better error handling
const emailConfig = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'info.bawaan@gmail.com',
    pass: 'rkmnjbkailndljpf',
  },
  tls: {
    rejectUnauthorized: false
  }
};

const adminEmail = 'banohusain12131@gmail.com';

// Create transporter with error handling
const createTransporter = () => {
  try {
    return nodemailer.createTransport(emailConfig);
  } catch (error) {
    console.error('Error creating transporter:', error);
    throw new Error('Failed to create email transporter');
  }
};

// Email templates
const createPatientEmailTemplate = (formData: any) => {
  return {
    subject: 'Message Received - We\'ll Contact You Soon',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Message Received</title>
        <style>
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0; 
            padding: 0; 
            background-color: #f8f9fa;
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #1a73e8 0%, #4285f4 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
          }
          .header p {
            margin: 10px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
          }
          .content {
            padding: 40px 30px;
          }
          .message-box {
            background: #f8f9fa;
            border-left: 4px solid #1a73e8;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
          }
          .message-box h3 {
            margin: 0 0 10px 0;
            color: #1a73e8;
            font-size: 18px;
          }
          .message-box p {
            margin: 0;
            color: #555;
            font-size: 16px;
          }
          .info-section {
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
          }
          .info-section h3 {
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
          .footer { 
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
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
          .cta-button {
            display: inline-block;
            background: #1a73e8;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin-top: 15px;
            transition: background-color 0.3s;
          }
          .cta-button:hover {
            background: #1557b0;
          }
          @media (max-width: 768px) {
            .container {
              margin: 10px;
            }
            .header {
              padding: 30px 20px;
            }
            .content {
              padding: 30px 20px;
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
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Message Received!</h1>
            <p>Thank you for reaching out to Maple Dental</p>
          </div>
          
          <div class="content">
            <div class="message-box">
              <h3>We've Got Your Message</h3>
              <p>Hi ${formData.first_name || 'there'},</p>
              <p>Thank you for contacting Maple Dental. We've received your message and our team will get back to you shortly via text message.</p>
            </div>
            
            <div class="info-section">
              <h3>Your Information</h3>
              <div class="detail-row">
                <span class="label">Name:</span>
                <span class="value">${formData.first_name} ${formData.last_name}</span>
              </div>
              <div class="detail-row">
                <span class="label">Email:</span>
                <span class="value">${formData.email}</span>
              </div>
              <div class="detail-row">
                <span class="label">Phone:</span>
                <span class="value">${formData.mobile}</span>
              </div>
              <div class="detail-row">
                <span class="label">Patient Type:</span>
                <span class="value">${formData.patient_type === 'new' ? 'New Patient' : 'Returning Patient'}</span>
              </div>
              ${formData.selectedLocation ? `
              <div class="detail-row">
                <span class="label">Preferred Location:</span>
                <span class="value">${formData.selectedLocation}</span>
              </div>
              ` : ''}
              ${formData.message ? `
              <div class="detail-row">
                <span class="label">Message:</span>
                <span class="value">${formData.message}</span>
              </div>
              ` : ''}
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="tel:+19735283300" class="cta-button">
                Call Us Now: (973) 528-3300
              </a>
            </div>
          </div>
          
          <div class="footer">
            <p>We'll text you shortly with more information.</p>
            <p>For immediate assistance, call us at: <span class="contact-info">(973) 528-3300</span></p>
            <p>Thank you for choosing Maple Dental NJ</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Hi ${formData.first_name || 'there'},

Thank you for contacting Maple Dental. We've received your message and our team will get back to you shortly via text message.

Your Information:
Name: ${formData.first_name} ${formData.last_name}
Email: ${formData.email}
Phone: ${formData.mobile}
Patient Type: ${formData.patient_type === 'new' ? 'New Patient' : 'Returning Patient'}
${formData.selectedLocation ? `Preferred Location: ${formData.selectedLocation}` : ''}
${formData.message ? `Message: ${formData.message}` : ''}

We'll text you shortly with more information.
For immediate assistance, call us at: (973) 528-3300

Thank you for choosing Maple Dental NJ
    `
  };
};

const createAdminEmailTemplate = (formData: any) => {
  return {
    subject: 'New Contact Form Submission - Maple Dental',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0; 
            padding: 0; 
            background-color: #f8f9fa;
          }
          .container { 
            max-width: 700px; 
            margin: 0 auto; 
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #dc3545 0%, #e74c3c 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
          }
          .header p {
            margin: 10px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
          }
          .content {
            padding: 40px 30px;
          }
          .alert-box {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #f39c12;
          }
          .alert-box h3 {
            margin: 0 0 10px 0;
            color: #856404;
            font-size: 18px;
          }
          .alert-box p {
            margin: 0;
            color: #856404;
            font-size: 16px;
          }
          .info-section {
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
          }
          .info-section h3 {
            margin: 0 0 20px 0;
            color: #1a73e8;
            font-size: 18px;
            font-weight: 600;
          }
          .detail-row { 
            margin: 12px 0; 
            display: flex;
            align-items: flex-start;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 8px;
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .label { 
            font-weight: 600; 
            color: #555; 
            min-width: 140px;
            margin-right: 15px;
          }
          .value {
            color: #333;
            flex: 1;
          }
          .message-box {
            background: #f8f9fa;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          .message-box h4 {
            margin: 0 0 10px 0;
            color: #333;
            font-size: 16px;
          }
          .message-content {
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 6px;
            padding: 15px;
            font-style: italic;
            color: #666;
          }
          .footer { 
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
          }
          .footer p {
            margin: 5px 0;
            color: #666;
          }
          .action-buttons {
            text-align: center;
            margin: 30px 0;
          }
          .action-button {
            display: inline-block;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 0 10px;
            transition: all 0.3s;
          }
          .primary-btn {
            background: #1a73e8;
            color: white;
          }
          .primary-btn:hover {
            background: #1557b0;
          }
          .secondary-btn {
            background: #28a745;
            color: white;
          }
          .secondary-btn:hover {
            background: #1e7e34;
          }
          @media (max-width: 768px) {
            .container {
              margin: 10px;
            }
            .header {
              padding: 30px 20px;
            }
            .content {
              padding: 30px 20px;
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
            .action-buttons {
              display: flex;
              flex-direction: column;
              gap: 10px;
            }
            .action-button {
              margin: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>Someone has submitted a contact form on your website</p>
          </div>
          
          <div class="content">
            <div class="alert-box">
              <h3>📧 New Message Received</h3>
              <p>A potential patient has submitted a contact form and is waiting for your response.</p>
            </div>
            
            <div class="info-section">
              <h3>Patient Information</h3>
              <div class="detail-row">
                <span class="label">Full Name:</span>
                <span class="value">${formData.first_name} ${formData.last_name}</span>
              </div>
              <div class="detail-row">
                <span class="label">Email Address:</span>
                <span class="value"><a href="mailto:${formData.email}">${formData.email}</a></span>
              </div>
              <div class="detail-row">
                <span class="label">Phone Number:</span>
                <span class="value"><a href="tel:${formData.mobile}">${formData.mobile}</a></span>
              </div>
              <div class="detail-row">
                <span class="label">Patient Type:</span>
                <span class="value">${formData.patient_type === 'new' ? 'New Patient' : 'Returning Patient'}</span>
              </div>
              ${formData.selectedLocation ? `
              <div class="detail-row">
                <span class="label">Preferred Location:</span>
                <span class="value">${formData.selectedLocation}</span>
              </div>
              ` : ''}
              <div class="detail-row">
                <span class="label">Submission Time:</span>
                <span class="value">${new Date().toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}</span>
              </div>
            </div>
            
            ${formData.message ? `
            <div class="message-box">
              <h4>Patient's Message:</h4>
              <div class="message-content">
                "${formData.message}"
              </div>
            </div>
            ` : ''}
          </div>
          
          <div class="footer">
            <p>This message was sent from your website's contact form.</p>
            <p>Please respond to the patient within 24 hours.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Contact Form Submission - Maple Dental

A potential patient has submitted a contact form and is waiting for your response.

Patient Information:
Full Name: ${formData.first_name} ${formData.last_name}
Email Address: ${formData.email}
Phone Number: ${formData.mobile}
Patient Type: ${formData.patient_type === 'new' ? 'New Patient' : 'Returning Patient'}
${formData.selectedLocation ? `Preferred Location: ${formData.selectedLocation}` : ''}
Submission Time: ${new Date().toLocaleString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})}

${formData.message ? `Patient's Message: "${formData.message}"` : ''}

Please respond to the patient within 24 hours.

This message was sent from your website's contact form.
    `
  };
};

// Send email function with better error handling
const sendEmail = async (to: string, subject: string, html: string, text: string) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: 'info.bawaan@gmail.com',
      to,
      subject,
      html,
      text,
    };

    console.log('Attempting to send email to:', to);
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
    
    console.log('Received form data:', body);
    
    // Validate required fields
    if (!body.email || !body.first_name || !body.mobile) {
      console.log('Missing required fields');
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields: email, first_name, mobile'
        },
        { status: 400 }
      );
    }

    console.log('Sending emails...');

    // Send email to patient
    const patientEmail = createPatientEmailTemplate(body);
    const patientEmailSent = await sendEmail(
      body.email,
      patientEmail.subject,
      patientEmail.html,
      patientEmail.text
    );

    console.log('Patient email sent:', patientEmailSent);

    // Send email to admin
    const adminEmailTemplate = createAdminEmailTemplate(body);
    const adminEmailSent = await sendEmail(
      adminEmail,
      adminEmailTemplate.subject,
      adminEmailTemplate.html,
      adminEmailTemplate.text
    );

    console.log('Admin email sent:', adminEmailSent);

    if (patientEmailSent && adminEmailSent) {
      console.log('All emails sent successfully');
      return NextResponse.json({
        success: true,
        message: 'Emails sent successfully'
      });
    } else {
      console.log('Failed to send one or more emails');
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send one or more emails'
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error in POST handler:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send emails',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 