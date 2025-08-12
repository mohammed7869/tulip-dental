import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generate a Google Calendar URL for an appointment
 * @param appointmentData - The appointment data
 * @returns Google Calendar URL
 */
export function generateGoogleCalendarUrl(appointmentData: {
  patientName: string;
  appointmentDate: Date;
  appointmentTime: string;
  duration: string;
  location: string;
  reason?: string;
  provider?: string;
  startTime?: string;
  endTime?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  locationName?: string;
  hasInsurance?: boolean;
  insuranceName?: string;
}) {
  // Extract date from appointmentDate and handle timezone issues
  let dateOnly: string;
  
  if (appointmentData.appointmentDate) {
    // Extract just the date part to avoid timezone conversion issues
    dateOnly = appointmentData.appointmentDate.toISOString().split('T')[0]; // Get YYYY-MM-DD directly
  } else {
    // Fallback to current date
    dateOnly = new Date().toISOString().split('T')[0];
  }

  // Create start date by combining appointment date with startTime
  let startDate: Date;
  let endDate: Date;

  if (appointmentData.startTime && appointmentData.endTime) {
    // Parse startTime (format: "09:30:00" or "09:30 AM")
    let startHours: number, startMinutes: number;
    
    if (appointmentData.startTime.includes(':')) {
      if (appointmentData.startTime.includes('AM') || appointmentData.startTime.includes('PM')) {
        // Handle "09:30 AM" format
        const [time, period] = appointmentData.startTime.split(' ');
        const [hours, minutes] = time.split(':').map(Number);
        startHours = period === 'PM' && hours !== 12 ? hours + 12 : (period === 'AM' && hours === 12 ? 0 : hours);
        startMinutes = minutes;
      } else {
        // Handle "09:30:00" format
        [startHours, startMinutes] = appointmentData.startTime.split(':').map(Number);
      }
    } else {
      // Fallback
      startHours = 9;
      startMinutes = 0;
    }

    startDate = new Date(dateOnly + 'T00:00:00'); // Local time, no Z suffix
    startDate.setHours(startHours, startMinutes, 0);

    // Parse endTime (format: "10:00:00" or "10:00 AM")
    let endHours: number, endMinutes: number;
    
    if (appointmentData.endTime.includes(':')) {
      if (appointmentData.endTime.includes('AM') || appointmentData.endTime.includes('PM')) {
        // Handle "10:00 AM" format
        const [time, period] = appointmentData.endTime.split(' ');
        const [hours, minutes] = time.split(':').map(Number);
        endHours = period === 'PM' && hours !== 12 ? hours + 12 : (period === 'AM' && hours === 12 ? 0 : hours);
        endMinutes = minutes;
      } else {
        // Handle "10:00:00" format
        [endHours, endMinutes] = appointmentData.endTime.split(':').map(Number);
      }
    } else {
      // Fallback
      endHours = startHours + 1;
      endMinutes = startMinutes;
    }

    endDate = new Date(dateOnly + 'T00:00:00'); // Local time, no Z suffix
    endDate.setHours(endHours, endMinutes, 0);
  } else {
    // Fallback to appointmentTime if startTime/endTime not available
    const timeStr = appointmentData.appointmentTime;
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    
    // Convert to 24-hour format
    let startHour = hours;
    if (period === 'PM' && hours !== 12) {
      startHour = hours + 12;
    } else if (period === 'AM' && hours === 12) {
      startHour = 0;
    }
    
    // Create start date
    startDate = new Date(appointmentData.appointmentDate);
    startDate.setHours(startHour, minutes, 0, 0);
    
    // Calculate end time based on duration
    const durationMinutes = parseInt(appointmentData.duration) || 30;
    endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + durationMinutes);
  }

  // Format dates for Google Calendar URL
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  };

  // Create location string from address components if available
  const locationString = appointmentData.address && appointmentData.city && appointmentData.state && appointmentData.zipCode
    ? `${appointmentData.address}, ${appointmentData.city}, ${appointmentData.state} ${appointmentData.zipCode}`.trim()
    : appointmentData.location;

  // Create event details
  const eventTitle = encodeURIComponent(`Dental Appointment - ${appointmentData.patientName}`);
  const eventDetails = encodeURIComponent(
    `Patient: ${appointmentData.patientName}\n` +
    (appointmentData.email ? `Email: ${appointmentData.email}\n` : '') +
    (appointmentData.phone ? `Phone: ${appointmentData.phone}\n` : '') +
    `Location: ${appointmentData.locationName || appointmentData.location}\n` +
    (appointmentData.address && appointmentData.city && appointmentData.state && appointmentData.zipCode 
      ? `Address: ${appointmentData.address}, ${appointmentData.city}, ${appointmentData.state} ${appointmentData.zipCode}\n` 
      : '') +
    (appointmentData.provider ? `Provider: ${appointmentData.provider}\n` : '') +
    (appointmentData.reason ? `Reason: ${appointmentData.reason}\n` : '') +
    (appointmentData.hasInsurance && appointmentData.insuranceName ? `Insurance: ${appointmentData.insuranceName}\n` : '') +
    `\nPlease arrive 10 minutes before your scheduled appointment time.`
  );

  const startDateTime = formatDate(startDate);
  const endDateTime = formatDate(endDate);

  // Generate Google Calendar URL
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDateTime}/${endDateTime}&details=${eventDetails}&location=${encodeURIComponent(locationString)}&sf=true&output=xml`;

  return calendarUrl;
}

/**
 * Extract the src URL from an iframe HTML string
 * @param iframeHtml - The complete iframe HTML string
 * @returns The extracted src URL or empty string if not found
 */
export function extractMapUrl(iframeHtml: string): string {
  try {
    // Use regex to extract the src attribute from the iframe HTML
    const srcMatch = iframeHtml.match(/src="([^"]+)"/);
    return srcMatch ? srcMatch[1] : '';
  } catch (error) {
    console.error('Error extracting map URL:', error);
    return '';
  }
}
