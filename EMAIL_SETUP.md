# Email Notification System Setup

This document describes the email notification system implemented for the dental appointment booking system.

## Overview

The system sends email notifications to both patients and administrators when appointments are booked. It uses Nodemailer with Gmail SMTP for sending emails. **NEW**: The system now includes Google Calendar integration for easy appointment scheduling.

## Features

### Email Notifications
- **Patient Confirmation Emails**: Sent to patients with appointment details and Google Calendar link
- **Admin Notification Emails**: Sent to administrators (hatimghadiyali53@gmail.com) with appointment details and Google Calendar link
- **Professional HTML Templates**: Responsive design with clear appointment information

### Google Calendar Integration
- **One-Click Calendar Addition**: Both patients and admins can add appointments to their Google Calendar
- **Pre-filled Event Details**: Appointments are automatically populated with:
  - Event title: "Dental Appointment - [Patient Name]"
  - Location: Clinic address
  - Duration: Based on appointment duration
  - Description: Patient details, provider, reason for visit
  - Reminder: Arrive 10 minutes before appointment
- **Multiple Access Points**:
  - Patient booking confirmation page
  - Patient confirmation email
  - Admin notification email
  - Admin appointment details page
  - Admin appointment list (grid view)

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# SMTP Email (for nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info.bawaan@gmail.com
SMTP_PASS=rkmnjbkailndljpf
SMTP_FROM=info.bawaan@gmail.com
```

### Gmail App Password Setup

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in the `SMTP_PASS` environment variable

## Email Templates

### Patient Confirmation Email

**Subject:** `Dentist Appointment: [Location]`

**Content includes:**
- Appointment confirmation message
- **Google Calendar button** - One-click addition to calendar
- Booking details (ID, name, email, phone, location, date, time, duration)
- Patient notes (if provided)
- Professional styling with HTML and plain text versions

### Admin Notification Email

**Subject:** `New Appointment Received`

**Content includes:**
- Notification of new patient appointment
- **Google Calendar button** - One-click addition to calendar
- Complete appointment details
- Patient type (new/existing)
- Professional styling with HTML and plain text versions

## Google Calendar Integration

### How It Works

The system generates Google Calendar URLs using the Google Calendar API format:

```
https://calendar.google.com/calendar/render?action=TEMPLATE&text=[Event Title]&dates=[Start Date/Time]/[End Date/Time]&details=[Event Details]&location=[Location]&sf=true&output=xml
```

### Event Details Included

- **Title**: "Dental Appointment - [Patient Name]"
- **Start/End Time**: Calculated from appointment date, time, and duration
- **Location**: Clinic address
- **Description**: 
  - Patient name
  - Location
  - Provider
  - Duration
  - Reason for visit (if provided)
  - Reminder to arrive 10 minutes early

### Access Points

1. **Patient Side**:
   - Booking confirmation page (`requestSubmitted.tsx`)
   - Confirmation email

2. **Admin Side**:
   - Appointment details page
   - Appointment list grid
   - Notification emails

## API Endpoints

### 1. Appointment Creation with Email Notifications

**Endpoint:** `POST /api/appointments`

**Request Body:**
```json
{
  "patientName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "appointmentDate": "2025-01-15T00:00:00.000Z",
  "appointmentTime": "9:00 AM",
  "duration": "30 Minutes",
  "location": "Harrisburg, PA",
  "provider": "Dr. Smith",
  "reason": "Regular checkup",
  "isNewClient": true,
  "insuranceInfo": {
    "provider": "Blue Cross",
    "memberId": "123456789",
    "groupNumber": "ABC123"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Appointment created successfully and emails sent",
  "appointmentId": "generated-id"
}
```

## Testing

You can test the email and calendar functionality by:

1. **Starting the development server**: `npm run dev`
2. **Going through the appointment booking flow**
3. **Checking both patient and admin email inboxes**
4. **Clicking the "Add to Google Calendar" buttons** in:
   - Patient confirmation page
   - Email notifications
   - Admin appointment details
   - Admin appointment list

## Integration with Booking Flow

The email and calendar system is integrated into the appointment booking flow:

1. **Step 1:** Patient selects appointment details (date, time, location)
2. **Step 2:** Patient provides contact information
3. **Step 3:** Patient provides insurance information (optional)
4. **Submission:** System calls `/api/appointments` endpoint
5. **Database:** Appointment is saved to Firebase
6. **Emails:** Confirmation emails are sent to patient and admin with calendar links
7. **Confirmation:** Patient sees success message with calendar button
8. **Admin Access:** Admins can add appointments to calendar from multiple interfaces

## Error Handling

The system includes comprehensive error handling:

- **SMTP Connection Errors:** Logged and reported to user
- **Email Sending Failures:** Graceful degradation with user notification
- **Invalid Data:** Validation errors with specific messages
- **Network Issues:** Retry logic and user-friendly error messages
- **Calendar URL Generation:** Fallback handling for invalid date/time formats

## Security Considerations

1. **Environment Variables:** Sensitive data stored in `.env.local` (not committed to git)
2. **App Passwords:** Using Gmail app passwords instead of account passwords
3. **Input Validation:** All email addresses and data validated before sending
4. **Calendar URLs:** Generated server-side to prevent client-side manipulation
5. **Data Privacy:** Patient information properly encoded in calendar events

## Future Enhancements

Potential improvements for the calendar integration:

1. **Multiple Calendar Support:** Outlook, Apple Calendar, etc.
2. **Recurring Appointments:** Support for series of appointments
3. **Calendar Sync:** Two-way sync with external calendar systems
4. **Reminder Settings:** Customizable reminder times
5. **Calendar Analytics:** Track calendar usage and appointment confirmations 