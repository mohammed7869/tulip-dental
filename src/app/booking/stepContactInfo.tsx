// components/StepInsuranceInfo.tsx
import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Step 2: Contact Info Component
const StepContactInfo = ({
  nextStep,
  prevStep,
  formData,
  setFormData,
}: any) => {
  const [contactData, setContactData] = useState({
    firstName: formData.firstName || "",
    lastName: formData.lastName || "",
    email: formData.email || "",
    phone: formData.phone || "",
    dateOfBirth: formData.dateOfBirth || "",
    gender: formData.gender || "",
    reason: formData.reason || "",
    ...formData,
  });
  const provider = formData.provider; // Assuming provider is passed in formData
  const [isPoliciesAgreed, setisPoliciesAgreed] = useState(
    formData.isPoliciesAgreed || false
  );
  const [isMessagesAgreed, setisMessagesAgreed] = useState(
    formData.isMessagesAgreed || false
  );
  const [isLoading, setIsLoading] = useState(false);

  // Update local state when formData changes (when navigating back to this step)
  useEffect(() => {
    setContactData({
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      email: formData.email || "",
      phone: formData.phone || "",
      dateOfBirth: formData.dateOfBirth || "",
      gender: formData.gender || "",
      reason: formData.reason || "",
      ...formData,
    });
    setisPoliciesAgreed(formData.isPoliciesAgreed || false);
    setisMessagesAgreed(formData.isMessagesAgreed || false);
  }, [formData]);

  const handleChange = (field: string, value: string) => {
    const updatedContactData = { ...contactData, [field]: value };
    setContactData(updatedContactData);

    // Save to formData immediately to persist state
    setFormData({
      ...formData,
      ...updatedContactData,
    });
  };

  const handlePoliciesChange = (value: boolean) => {
    setisPoliciesAgreed(value);
    setFormData({
      ...formData,
      isPoliciesAgreed: value,
    });
  };

  const handleMessagesChange = (value: boolean) => {
    setisMessagesAgreed(value);
    setFormData({
      ...formData,
      isMessagesAgreed: value,
    });
  };

  const handleNext = async () => {
    if (
      contactData.firstName &&
      contactData.lastName &&
      contactData.email &&
      contactData.phone
    ) {
      setIsLoading(true);

      // Combine first and last name for patientName
      const patientName = `${contactData.firstName} ${contactData.lastName}`;

      // Update form data with contact information including checkbox states
      const updatedFormData = {
        ...formData,
        ...contactData,
        patientName: patientName,
        isPoliciesAgreed,
        isMessagesAgreed,
      };

      setFormData(updatedFormData);

      // Add a small delay to show the loader
      await new Promise((resolve) => setTimeout(resolve, 300));
      setIsLoading(false);
      nextStep();
    }
  };

  return (
    <>
      <div className="mt-4">
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
              {provider?.name || "Selected Location"}
            </h4>
            <div className="text-xs text-gray-600 space-y-1">
              <div>{provider?.address || "Address not available"}</div>
              <div>
                {provider?.city}, {provider?.state} {provider?.zipcode}
              </div>
              <div className="flex items-center gap-1 mt-2 pt-1">
                <Clock className="w-3 h-3" />
                <span>Appointments in EST</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 md:gap-4 mb-4 sm:mb-6 mt-3 w-full overflow-x-auto pb-2 sm:pb-0">
          {/* Step 1 */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-secondary text-white text-xs sm:text-sm font-medium">
              <Check className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
              Appointment details
            </span>
          </div>

          <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 min-w-[20px]"></div>

          {/* Step 2 */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs sm:text-sm font-medium">
              2
            </div>
            <span className="text-xs sm:text-sm text-gray-900 whitespace-nowrap">
              Contact info
            </span>
          </div>

          <div className="flex-1 h-1 bg-gray-300 min-w-[20px]"></div>

          {/* Step 3 */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-xs sm:text-sm font-medium">
              3
            </div>
            <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
              Insurance info
            </span>
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-medium mb-4">Contact info</h3>

        <div className="space-y-4 overflow-y-auto max-h-[35vh] sm:max-h-[40vh]">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Reason for visit (Optional)
            </label>
            <input
              type="text"
              value={contactData.reason || ""}
              onChange={(e) => handleChange("reason", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Regular checkup, tooth pain, cleaning"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                First Name *
              </label>
              <input
                type="text"
                value={contactData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                value={contactData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              value={contactData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Phone Number *
            </label>
            <PhoneInput
              country={"us"}
              value={contactData.phone}
              onChange={(phone) => handleChange("phone", phone)}
              placeholder="Enter phone number"
              inputStyle={{ width: "100%" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                value={contactData.dateOfBirth}
                onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Gender</label>
              <select
                value={contactData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>
          <div className="flex items-start gap-2 mb-4">
            <div className="relative">
              <input
                type="checkbox"
                checked={isPoliciesAgreed}
                onChange={(e) => setisPoliciesAgreed(e.target.checked)}
                className="sr-only"
              />
              <div
                onClick={() => handlePoliciesChange(!isPoliciesAgreed)}
                className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center ${
                  isPoliciesAgreed
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-600"
                    : "border-gray-300"
                }`}
              >
                {isPoliciesAgreed && <Check className="w-3 h-3 text-white" />}
              </div>
            </div>
            <label
              className="text-xs sm:text-sm text-gray-700 cursor-pointer"
              onClick={() => handlePoliciesChange(!isPoliciesAgreed)}
            >
              I have read and agreed to the Privacy Policy and Terms of Use that
              I am at least 13 and have the authority to make this appointment
            </label>
          </div>
          <div className="flex items-start gap-2 mb-4">
            <div className="relative">
              <input
                type="checkbox"
                checked={isMessagesAgreed}
                onChange={(e) => handleMessagesChange(e.target.checked)}
                className="sr-only"
              />
              <div
                onClick={() => handleMessagesChange(!isMessagesAgreed)}
                className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center ${
                  isMessagesAgreed
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-600"
                    : "border-gray-300"
                }`}
              >
                {isMessagesAgreed && <Check className="w-3 h-3 text-white" />}
              </div>
            </div>
            <label
              className="text-xs sm:text-sm text-gray-700 cursor-pointer"
              onClick={() => handleMessagesChange(!isMessagesAgreed)}
            >
              I agree to receive appointment reminders and other important
              messages via email and text message
            </label>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6 sm:mt-8">
          <Button
            onClick={prevStep}
            variant="outline"
            className="px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={
              !contactData.firstName ||
              !contactData.lastName ||
              !contactData.email ||
              !contactData.phone ||
              !isPoliciesAgreed ||
              !isMessagesAgreed
            }
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-2 rounded-md text-sm hover:from-blue-700 hover:to-cyan-700 font-semibold transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default StepContactInfo;
