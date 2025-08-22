import { Clock, Calendar } from "lucide-react";
import React from "react";
import { generateGoogleCalendarUrl, extractMapUrl } from "@/lib/utils";

const RequestSubmitted = ({ formData }: any) => {
  const provider = formData.provider;

  // Generate Google Calendar URL
  const calendarUrl = generateGoogleCalendarUrl({
    patientName: formData.patientName,
    appointmentDate: new Date(formData.selectedDate),
    appointmentTime: formData.selectedTime,
    duration: formData.duration || "30 Minutes",
    location: formData.selectedLocation,
    reason: formData.reason,
    provider: provider?.name,
    // Add additional fields if available
    email: formData.email,
    phone: formData.phone,
    address: provider?.address,
    city: provider?.city,
    state: provider?.state,
    zipCode: provider?.zipcode,
    locationName: formData.selectedLocation,
  });

  const handleAddToCalendar = () => {
    window.open(calendarUrl, "_blank");
  };

  // Helper function similar to Angular version
  const addToGoogleCalendar = (appointmentData: any) => {
    const calendarUrl = generateGoogleCalendarUrl({
      patientName: appointmentData.patientName,
      appointmentDate: new Date(appointmentData.selectedDate),
      appointmentTime: appointmentData.selectedTime,
      duration: appointmentData.duration || "30 Minutes",
      location: appointmentData.selectedLocation,
      reason: appointmentData.reason,
      provider: appointmentData.provider?.name,
      email: appointmentData.email,
      phone: appointmentData.phone,
      address: appointmentData.provider?.address,
      city: appointmentData.provider?.city,
      state: appointmentData.provider?.state,
      zipCode: appointmentData.provider?.zipcode,
      locationName: appointmentData.selectedLocation,
    });
    window.open(calendarUrl, "_blank");
  };

  return (
    <div className="mt-4">
      <h3 className="text-base sm:text-lg font-medium mb-4">
        Appointment Request Submitted
      </h3>
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
          <img
            src="/Images/doctor_9439268.png"
            alt="Provider Avatar"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
          />
        </div>

        {/* Provider Details */}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-gray-900 text-sm mb-1">
            {provider!.name}
          </h4>
          <div className="text-xs text-gray-600 space-y-1">
            <div>
              {provider!.address},{provider!.city},{provider!.state}{" "}
              {provider!.zipcode}
            </div>
            {/* <div>{provider.suite}</div>
                        <div>{provider.city}</div> */}
            <div className="flex items-center gap-1 mt-2 pt-1">
              <Clock className="w-3 h-3" />
              <span>Appointments in EST</span>
            </div>
          </div>
        </div>
      </div>
      <p className="my-3 text-sm sm:text-base">
        Thank you for your request. This is not a confirmation of your
        appointment. We will reach out promptly to confirm and finalize your
        appointment.
      </p>

      {/* Add to Calendar Button */}
      <div className="mb-6 text-center">
        <button
          onClick={handleAddToCalendar}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-2 rounded-md text-sm hover:from-blue-700 hover:to-cyan-700 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
        >
          <Calendar className="w-5 h-5" />
          Add to Google Calendar
        </button>
        <p className="text-xs text-gray-600 mt-2">
          Click to add this appointment to your Google Calendar
        </p>
      </div>

      <div className="flex-1 w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow">
        {provider!.mapUrl ? (
          <iframe
            src={extractMapUrl(provider!.mapUrl)}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">Map not available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestSubmitted;
