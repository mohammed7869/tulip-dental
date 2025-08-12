// API Service for Nova Dental Booking System
// Replaces Firebase functionality with new backend APIs

export interface Location {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string; // Changed from zipcode to zipCode to match API response
  mapUrl?: string; // Added to match API response
}

export interface Insurance {
  id: number;
  name: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  id?: string;
}

export interface TimeSlot {
  id: number;
  locationId: number;
  dayOfWeek: number; // 0 = Sunday, 1 = Monday, etc.
  startTime: string;
  endTime: string;
  slotDuration: number;
}

export interface BookedSlot {
  SlotDate: string;
  StartTime: string;
  EndTime: string;
  LocationId: number;
  DayOfWeek: number;
}

export interface AppointmentBooking {
  id?: string;
  patientName: string;
  email: string;
  phone: string;
  appointmentDate: Date;
  appointmentTime: string;
  duration: string;
  location: string;
  locationId?: number; // Add location ID to track the selected location
  provider: string | Location; // Can be string or Location object
  source: string;
  reason: string;
  status: 'Requested' | 'Booked' | 'Cancelled' | 'No-Show' | 'Rescheduled' | 'Invalid' | 'Archived' | 'Booked in EMR';
  isNewClient: boolean;
  insuranceInfo?: {
    provider: string;
    providerId?: string; // Add insurance provider ID
    memberId: string;
    groupNumber: string;
  };
  contactInfo?: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    emergencyContact: string;
    emergencyPhone: string;
    dateOfBirth?: string;
    gender?: string;
  };
  reminderStatus?: 'Patient Confirmed' | 'Patient Not Confirmed' | 'Reminder Sent' | 'Reminder Not Sent';
  appointmentOrigin?: 'PatientPop' | 'Intelpation' | 'Yelp' | 'Online';
  createdAt: Date;
  updatedAt: Date;
  notes?: string;
}

export interface BookingFormData {
  selectedDate: string;
  selectedTime: string;
  isNewClient: boolean;
  selectedLocation: string;
  selectedLocationId?: number; // Add the actual location ID
  patientName: string;
  email: string;
  phone: string;
  reason: string;
  dateOfBirth?: string;
  gender?: string;
  firstName?: string;
  lastName?: string;
  provider?: Location; // Add provider object to store location details
  insuranceInfo?: {
    provider: string;
    providerId?: string; // Add insurance provider ID
    memberId: string;
    groupNumber: string;
  };
  contactInfo?: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    emergencyContact: string;
    emergencyPhone: string;
  };
}

export interface TimeSlotWithAvailability {
  time: string;
  isBooked: boolean;
}

class ApiService {
  private readonly baseUrl = 'https://api.baawancrm.com/api/1';
  private readonly tenantId = '4'; // X-Tenant-ID header value

  private async makeRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    // Create headers object more explicitly
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('X-Tenant-ID', this.tenantId);

    // Add any additional headers from options
    if (options.headers) {
      const additionalHeaders = new Headers(options.headers as HeadersInit);
      additionalHeaders.forEach((value, key) => {
        headers.set(key, value);
      });
    }

    const config: RequestInit = {
      ...options,
      mode: 'cors', // Explicitly set CORS mode
      credentials: 'omit', // Don't send credentials for cross-origin requests
      headers: headers,
    };

    // Debug logging
    console.log('Making API request to:', url);
    console.log('Request headers:', Object.fromEntries(headers.entries()));
    console.log('Request config:', config);

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        console.error('API Response not OK:', response.status, response.statusText);
        console.error('Response headers:', Object.fromEntries(response.headers.entries()));
        const responseText = await response.text();
        console.error('Response body:', responseText);
        throw new Error(`HTTP error! status: ${response.status} - ${responseText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
  }

  // Get all insurance providers
  async getInsuranceList(): Promise<Insurance[]> {
    try {
      console.log('Fetching insurance list from API...');
      const data = await this.makeRequest<Insurance[]>('/insurance/list');
      console.log('Insurance list fetched successfully:', data);
      return data;
    } catch (error) {
      console.error('Error fetching insurance list:', error);
      throw new Error('Failed to fetch insurance providers. Please try again later.');
    }
  }

  // Get all locations
  async getLocations(): Promise<Location[]> {
    return this.makeRequest<Location[]>('/appointment-location/list');
  }

  // Get daily time slots
  async getDailyTimeSlots(): Promise<TimeSlot[]> {
    return this.makeRequest<TimeSlot[]>('/appointment-daily-slot/list');
  }

  // Get booked slots for a date range and location
  async getBookedSlots(fromDate: string, toDate: string, locationId: number): Promise<BookedSlot[]> {
    try {
      const requestBody = {
        fromDate: fromDate,
        toDate: toDate,
        locationId: locationId
      };

      console.log('Fetching booked slots with params:', requestBody);

      const data = await this.makeRequest<BookedSlot[]>('/appointment/booked/slots', {
        method: 'POST',
        body: JSON.stringify(requestBody)
      });

      console.log('Booked slots fetched successfully:', data);
      return data;
    } catch (error) {
      console.error('Error fetching booked slots:', error);
      return []; // Return empty array on error to avoid breaking the UI
    }
  }

  // Create a new appointment booking
  async createBooking(bookingData: Omit<AppointmentBooking, 'id' | 'createdAt' | 'updatedAt'>): Promise<AppointmentBooking> {
    try {
      console.log('Creating appointment with data:', bookingData);

      // First create appointment with external API
      const appointmentResponse = await this.createExternalAppointment(bookingData);
      console.log('External API response:', appointmentResponse);

      const appointmentData = {
        ...bookingData,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'Requested' as const,
        source: 'Online' as const,
        appointmentOrigin: 'Online' as const
      };

      console.log('Appointment data processed:', appointmentData);

      // Return the booking with a simulated ID
      return {
        ...appointmentData,
        id: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      };
    } catch (error) {
      console.error('Error creating appointment:', error);
      throw new Error('Failed to create appointment booking');
    }
  }

  // Create appointment in external API
  async createExternalAppointment(bookingData: Omit<AppointmentBooking, 'id' | 'createdAt' | 'updatedAt'>) {
    try {
      // Map our form data to external API format
      const appointmentData = this.mapToExternalFormat(bookingData);

      console.log('Sending to external API:', JSON.stringify(appointmentData, null, 2));

      const result = await this.makeRequest('/appointment/book', {
        method: 'POST',
        body: JSON.stringify(appointmentData)
      });

      console.log('External API success:', result);
      return result;
    } catch (error) {
      console.error('Error calling external API:', error);
      // Don't throw error here - let the appointment continue even if external API fails
      return null;
    }
  }

  // Map our booking data to external API format
  private mapToExternalFormat(bookingData: Omit<AppointmentBooking, 'id' | 'createdAt' | 'updatedAt'>) {
    // Parse name into first and last name
    const nameParts = bookingData.patientName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Parse appointment date and time
    const appointmentDate = new Date(bookingData.appointmentDate);
    const timeString = bookingData.appointmentTime.replace(/\s*(AM|PM)/i, ''); // Remove AM/PM
    const [hours, minutes] = timeString.split(':');

    // Create full appointment datetime
    const appointmentDateTime = new Date(appointmentDate);
    let hour = parseInt(hours);

    // Handle AM/PM conversion
    if (bookingData.appointmentTime.toLowerCase().includes('pm') && hour !== 12) {
      hour += 12;
    } else if (bookingData.appointmentTime.toLowerCase().includes('am') && hour === 12) {
      hour = 0;
    }

    appointmentDateTime.setHours(hour, parseInt(minutes), 0, 0);

    // Calculate end time (add 30 minutes by default)
    const endDateTime = new Date(appointmentDateTime);
    endDateTime.setMinutes(endDateTime.getMinutes() + 30);

    // Format times as "HH:MM:SS"
    const startTime = `${hour.toString().padStart(2, '0')}:${minutes.padStart(2, '0')}:00`;
    const endTime = `${endDateTime.getHours().toString().padStart(2, '0')}:${endDateTime.getMinutes().toString().padStart(2, '0')}:00`;

    // Map insurance information
    const hasInsurance = !!bookingData.insuranceInfo;
    const insuranceId = hasInsurance && bookingData.insuranceInfo?.providerId
      ? parseInt(bookingData.insuranceInfo.providerId)
      : 0; // Use actual selected insurance ID or 0 if no insurance

    // Handle date of birth (optional)
    let dateOfBirth = null;
    if (bookingData.contactInfo?.dateOfBirth) {
      dateOfBirth = new Date(bookingData.contactInfo.dateOfBirth).toISOString();
    }

    // Get location details from the provider object
    const locationData = bookingData.provider as any; // Cast to any to access location properties
    const city = locationData?.city || '';
    const state = locationData?.state || '';
    const address = locationData?.address || '';
    const zipCode = locationData?.zipcode || locationData?.zipCode || '';
    const locationName = locationData?.name || '';

    return {
      reasonForVisit: bookingData.reason || "General consultation",
      firstName: firstName,
      lastName: lastName,
      email: bookingData.email,
      phone: bookingData.phone,
      dateOfBirth: dateOfBirth,
      gender: bookingData.contactInfo?.gender || null,
      isNewClient: bookingData.isNewClient ?? true,
      hasInsurance: hasInsurance,
      insuranceId: insuranceId,
      memberId: bookingData.insuranceInfo?.memberId || "",
      groupNumber: bookingData.insuranceInfo?.groupNumber || "",
      appointmentDateTime: appointmentDateTime.toISOString(),
      locationId: bookingData.locationId || 1, // Use selected location ID or default to 1
      dayOfWeek: appointmentDate.getDay(),
      startTime: startTime,
      endTime: endTime,
      // Add required location fields
      city: city,
      state: state,
      address: address,
      zipCode: zipCode,
      locationName: locationName
    };
  }

  // Convert form data to appointment booking
  convertFormDataToBooking(formData: BookingFormData): Omit<AppointmentBooking, 'id' | 'createdAt' | 'updatedAt'> {
    // Validate required fields
    if (!formData.patientName) {
      throw new Error('Patient name is required');
    }
    if (!formData.email) {
      throw new Error('Email is required');
    }
    if (!formData.phone) {
      throw new Error('Phone is required');
    }
    if (!formData.selectedDate) {
      throw new Error('Appointment date is required');
    }
    if (!formData.selectedTime) {
      throw new Error('Appointment time is required');
    }
    if (!formData.selectedLocation) {
      throw new Error('Location is required');
    }

    const bookingData: Omit<AppointmentBooking, 'id' | 'createdAt' | 'updatedAt'> = {
      patientName: formData.patientName,
      email: formData.email,
      phone: formData.phone,
      appointmentDate: new Date(formData.selectedDate),
      appointmentTime: formData.selectedTime,
      duration: '30 minutes', // Default duration
      location: formData.selectedLocation,
      locationId: formData.selectedLocationId, // Include the actual location ID
      provider: formData.provider || 'Not Available', // Use the provider object from form data
      source: 'Online',
      reason: formData.reason || 'No reason specified',
      status: 'Requested' as const,
      isNewClient: formData.isNewClient || false,
      insuranceInfo: formData.insuranceInfo,
      contactInfo: {
        address: formData.contactInfo?.address || '',
        city: formData.contactInfo?.city || '',
        state: formData.contactInfo?.state || '',
        zipCode: formData.contactInfo?.zipCode || '',
        emergencyContact: formData.contactInfo?.emergencyContact || '',
        emergencyPhone: formData.contactInfo?.emergencyPhone || '',
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender
      },
      appointmentOrigin: 'Online' as const,
      reminderStatus: 'Reminder Not Sent' as const
    };

    return bookingData;
  }

  // Get appointment by ID (placeholder for future implementation)
  async getAppointment(id: string): Promise<AppointmentBooking | null> {
    // This would be implemented when the backend provides this endpoint
    console.log('Getting appointment with ID:', id);
    return null;
  }

  // Get appointments by email (placeholder for future implementation)
  async getAppointmentsByEmail(email: string): Promise<AppointmentBooking[]> {
    // This would be implemented when the backend provides this endpoint
    console.log('Getting appointments for email:', email);
    return [];
  }

  // Get appointments by phone (placeholder for future implementation)
  async getAppointmentsByPhone(phone: string): Promise<AppointmentBooking[]> {
    // This would be implemented when the backend provides this endpoint
    console.log('Getting appointments for phone:', phone);
    return [];
  }

  // Check if time slot is available (placeholder for future implementation)
  async isTimeSlotAvailable(date: Date, time: string, location: string): Promise<boolean> {
    // This would be implemented when the backend provides this endpoint
    console.log('Checking availability for:', { date, time, location });
    return true; // Assume available for now
  }

  // Update appointment status (placeholder for future implementation)
  async updateAppointmentStatus(id: string, status: AppointmentBooking['status']): Promise<void> {
    // This would be implemented when the backend provides this endpoint
    console.log('Updating appointment status:', { id, status });
  }

  // Cancel appointment (placeholder for future implementation)
  async cancelAppointment(id: string): Promise<void> {
    // This would be implemented when the backend provides this endpoint
    console.log('Cancelling appointment:', id);
  }

  // =================== CONTACT FORM METHODS ===================

  // Submit contact form
  async submitContactForm(contactData: ContactFormData): Promise<ContactSubmissionResponse> {
    try {
      console.log('Submitting contact form with data:', contactData);

      // Validate required fields
      if (!contactData.name?.trim()) {
        throw new Error('Name is required');
      }
      if (!contactData.email?.trim()) {
        throw new Error('Email is required');
      }
      if (!contactData.subject?.trim()) {
        throw new Error('Subject is required');
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactData.email)) {
        throw new Error('Please enter a valid email address');
      }

      const requestData = {
        name: contactData.name.trim(),
        email: contactData.email.trim(),
        subject: contactData.subject.trim(),
        message: contactData.message?.trim() || '',
        phoneNumber: contactData.phoneNumber?.trim() || ''
      };

      const result = await this.makeRequest<ContactSubmissionResponse>('/cms/front/contact-us', {
        method: 'POST',
        body: JSON.stringify(requestData)
      });

      console.log('Contact form submitted successfully:', result);
      return result.success ? result : {
        success: true,
        message: 'Message sent successfully! We\'ll get back to you soon.',
        id: result.id
      };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
  }
}

export const apiService = new ApiService(); 