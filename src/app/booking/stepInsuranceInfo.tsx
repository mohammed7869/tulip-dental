import { Button } from "@/components/ui/button";
import { Check, Clock, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { apiService, Insurance } from "@/lib/apiService";



// Step 3: Insurance Info Component
const StepInsuranceInfo = ({ prevStep, formData, setFormData, onComplete }: any) => {
  const [insuranceData, setInsuranceData] = useState({
    hasInsurance: formData.hasInsurance || 'yes',
    insuranceProvider: formData.insuranceProvider || '',
    insuranceId: formData.insuranceId || null, // Add insurance ID
    memberId: formData.memberId || '',
    groupNumber: formData.groupNumber || '',
    ...formData
  });
  const [insuranceList, setInsuranceList] = useState<Insurance[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: boolean}>({});
  
  const provider = formData.provider;

  // Update local state when formData changes (when navigating back to this step)
  useEffect(() => {
    setInsuranceData({
      hasInsurance: formData.hasInsurance || 'yes',
      insuranceProvider: formData.insuranceProvider || '',
      insuranceId: formData.insuranceId || null,
      memberId: formData.memberId || '',
      groupNumber: formData.groupNumber || '',
      ...formData
    });
  }, [formData]);

  // Fetch insurance list from API
  useEffect(() => {
    const fetchInsuranceList = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getInsuranceList();
        setInsuranceList(data);
      } catch (err) {
        console.error('Error fetching insurance list:', err);
        setError('Failed to load insurance providers. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchInsuranceList();
  }, []);

  const handleChange = (field: string, value: string) => {
    let updatedInsuranceData = { ...insuranceData, [field]: value };
    
    // If insurance is set to "no", clear all insurance-related fields
    if (field === 'hasInsurance' && value === 'no') {
      updatedInsuranceData = {
        ...updatedInsuranceData,
        insuranceId: null,
        insuranceProvider: '',
        memberId: '',
        groupNumber: ''
      };
    }
    
    setInsuranceData(updatedInsuranceData);
    
    // Clear validation error for this field when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: false }));
    }
    
    // Save to formData immediately to persist state
    setFormData({
      ...formData,
      ...updatedInsuranceData
    });
  };

  const handleInsuranceChange = (value: string) => {
    const selectedInsurance = insuranceList.find(insurance => insurance.id === parseInt(value));
    const updatedInsuranceData = { 
      ...insuranceData, 
      insuranceProvider: selectedInsurance?.name || '',
      insuranceId: value || null
    };
    setInsuranceData(updatedInsuranceData);
    
    // Clear validation error for insurance when user selects one
    if (validationErrors.insuranceId) {
      setValidationErrors(prev => ({ ...prev, insuranceId: false }));
    }
    
    // Save to formData immediately to persist state
    setFormData({
      ...formData,
      ...updatedInsuranceData
    });
  };

  const validateForm = () => {
    const errors: {[key: string]: boolean} = {};
    
    if (insuranceData.hasInsurance === 'yes') {
      if (!insuranceData.insuranceId) {
        errors.insuranceId = true;
      }
      if (!insuranceData.memberId.trim()) {
        errors.memberId = true;
      }
      if (!insuranceData.groupNumber.trim()) {
        errors.groupNumber = true;
      }
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      setSubmitting(true);
      // Update form data with insurance information
      const updatedFormData = { ...formData, ...insuranceData };
      setFormData(updatedFormData);

      // Prepare insurance info if user has insurance
      const insuranceInfo = insuranceData.hasInsurance === 'yes' ? {
        provider: insuranceData.insuranceProvider,
        providerId: insuranceData.insuranceId, // Add the insurance ID
        memberId: insuranceData.memberId,
        groupNumber: insuranceData.groupNumber
      } : undefined;

      // Ensure insuranceId is null when no insurance
      if (insuranceData.hasInsurance === 'no') {
        updatedFormData.insuranceId = null;
      }

      // Log the form data for debugging
      console.log('Form data being sent:', {
        ...updatedFormData,
        insuranceInfo
      });
      
      // Debug logging for insurance data
      console.log('Insurance data debug:', {
        hasInsurance: insuranceData.hasInsurance,
        insuranceId: insuranceData.insuranceId,
        insuranceInfo,
        updatedFormData
      });

      // Convert form data to booking format
      const bookingData = apiService.convertFormDataToBooking({
        ...updatedFormData,
        insuranceInfo
      });
      
      // Debug logging for final booking data
      console.log('Final booking data:', bookingData);

      console.log('Booking data converted:', bookingData);

      // Create appointment using the new API service
      const result = await apiService.createBooking(bookingData);

      console.log('Appointment created successfully:', result);
      
      // Call the completion handler
      onComplete();
    } catch (error) {
      console.error('Error creating appointment:', error);
      console.error('Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        code: (error as any)?.code,
        stack: error instanceof Error ? error.stack : undefined
      });
      
      // Provide more specific error messages
      let errorMessage = 'There was an error booking your appointment. Please try again.';
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to create appointment')) {
          errorMessage = 'Unable to save your appointment. Please check your internet connection and try again.';
        } else if (error.message.includes('Patient name is required')) {
          errorMessage = 'Please provide your full name.';
        } else if (error.message.includes('Email is required')) {
          errorMessage = 'Please provide your email address.';
        } else if (error.message.includes('Phone is required')) {
          errorMessage = 'Please provide your phone number.';
        } else if (error.message.includes('Appointment date is required')) {
          errorMessage = 'Please select an appointment date.';
        } else if (error.message.includes('Appointment time is required')) {
          errorMessage = 'Please select an appointment time.';
        } else if (error.message.includes('Location is required')) {
          errorMessage = 'Please select a location.';
        } else if (error.message.includes('Email sending failed')) {
          errorMessage = 'Appointment was created but there was an issue sending confirmation emails. Please contact us to confirm your appointment.';
        }
      }
      
      alert(errorMessage);
    } finally {
      setSubmitting(false);
      setIsLoading(false);
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
                        {provider?.name || 'Selected Location'}
                      </h4>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>{provider?.address || 'Address not available'}</div>
                        <div>{provider?.city}, {provider?.state} {provider?.zipcode}</div>
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
    <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Appointment details</span>
  </div>

  <div className="flex-1 h-1 bg-primary min-w-[20px]"></div>

  {/* Step 2 */}
  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-secondary text-white text-xs sm:text-sm font-medium">
      <Check className="w-3 h-3 sm:w-4 sm:h-4" />
    </div>
    <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Contact info</span>
  </div>

  <div className="flex-1 h-1 bg-primary min-w-[20px]"></div>

  {/* Step 3 */}
  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-primary text-white text-xs sm:text-sm font-medium">
      3
    </div>
    <span className="text-xs sm:text-sm text-gray-900 whitespace-nowrap">Insurance info</span>
  </div>
</div>
      <h3 className="text-base sm:text-lg font-medium mb-4">Insurance info</h3>
      
      <div className="space-y-4 overflow-y-auto max-h-[35vh] sm:max-h-[40vh]">
        <div>
          <label className="block text-sm text-gray-600 mb-2">Do you have insurance?</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="hasInsurance"
                value="yes"
                checked={insuranceData.hasInsurance === 'yes'}
                onChange={(e) => handleChange('hasInsurance', e.target.value)}
                className="mr-2 text-teal-600"
              />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="hasInsurance"
                value="no"
                checked={insuranceData.hasInsurance === 'no'}
                onChange={(e) => handleChange('hasInsurance', e.target.value)}
                className="mr-2 text-teal-600"
              />
              <span className="text-sm">No</span>
            </label>
          </div>
        </div>

        {insuranceData.hasInsurance === 'yes' && (
          <>
            <div>
            <label className="block text-sm text-gray-600 mb-1">
              Insurance <span className="text-gray-500">*</span>
            </label>
            <select
              value={insuranceData.insuranceId}
              onChange={(e) => handleInsuranceChange(e.target.value)}
              className={`w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 ${
                validationErrors.insuranceId 
                  ? 'border-red-500 ring-1 ring-red-500' 
                  : 'border-gray-300'
              }`}
            >
              <option value="">Select Insurance</option>
              {loading ? (
                <option value="">Loading...</option>
              ) : error ? (
                <option value="">{error}</option>
              ) : (
                insuranceList.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))
              )}
              
            </select>
            {validationErrors.insuranceId && (
              <p className="text-red-500 text-xs mt-1">Please select an insurance provider</p>
            )}
          </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Member ID <span className="text-gray-500">*</span>
              </label>
              <input
                type="text"
                value={insuranceData.memberId}
                onChange={(e) => handleChange('memberId', e.target.value)}
                className={`w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 ${
                  validationErrors.memberId 
                    ? 'border-red-500 ring-1 ring-red-500' 
                    : 'border-gray-300'
                }`}
              />
              {validationErrors.memberId && (
                <p className="text-red-500 text-xs mt-1">Please enter your member ID</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Group Number <span className="text-gray-500">*</span>
              </label>
              <input
                type="text"
                value={insuranceData.groupNumber}
                onChange={(e) => handleChange('groupNumber', e.target.value)}
                className={`w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 ${
                  validationErrors.groupNumber 
                    ? 'border-red-500 ring-1 ring-red-500' 
                    : 'border-gray-300'
                }`}
              />
              {validationErrors.groupNumber && (
                <p className="text-red-500 text-xs mt-1">Please enter your group number</p>
              )}
            </div>
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6 sm:mt-8">
        <Button 
          variant="outline" 
          onClick={prevStep}
          className="px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium"
        >
          Back
        </Button>
        <Button 
          onClick={handleSubmit}
          disabled={submitting}
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Booking...
            </>
          ) : (
            'Book Appointment'
          )}
        </Button>
      </div>
    </div>
    </>
  );
};

export default StepInsuranceInfo;