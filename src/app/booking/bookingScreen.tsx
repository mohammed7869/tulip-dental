
// components/BookingModal.tsx
'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useEffect, useState, Suspense } from 'react';
import {  Check } from 'lucide-react';
import StepAppointment from './stepAppointment';
import StepInsuranceInfo from './stepInsuranceInfo';
import StepContactInfo from './stepContactInfo';
import RequestSubmitted from './requestSubmitted';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { apiService, TimeSlot } from '@/lib/apiService';

interface BookingModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}



// Component that uses useSearchParams - needs to be wrapped in Suspense
const BookingModalContent: React.FC<BookingModalProps> = ({ open, setOpen }) => {
  const [step, setStep] = useState(1);
  const [isNewClient, setIsNewPatient] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState('539 Bloomfield Avenue');
  const [formData, setFormData] = useState<any>({});
  const [dailyTimeSlots, setDailyTimeSlots] = useState<TimeSlot[]>([]);
  const [loadingDailySlots, setLoadingDailySlots] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isStepTransitioning, setIsStepTransitioning] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // e.g., "/service-areas"
  const searchParams = useSearchParams();

  const locations = [
    '539 Bloomfield Avenue',
    '240 Mulberry Street',
    'Downtown Newark'
  ];

  const nextStep = async () => {
    setIsStepTransitioning(true);
    // Add a small delay to show the loader
    await new Promise(resolve => setTimeout(resolve, 300));
    setStep((prev) => prev + 1);
    setIsStepTransitioning(false);
  };

  const prevStep = async () => {
    setIsStepTransitioning(true);
    // Add a small delay to show the loader
    await new Promise(resolve => setTimeout(resolve, 300));
    setStep((prev) => prev - 1);
    setIsStepTransitioning(false);
  };

  // Load daily time slots once when modal opens
  useEffect(() => {
    if (open && dailyTimeSlots.length === 0) {
      const loadDailySlots = async () => {
        try {
          setLoadingDailySlots(true);
          setIsLoading(true);
          const slots = await apiService.getDailyTimeSlots();
          setDailyTimeSlots(slots);
          console.log('Daily time slots loaded:', slots);
        } catch (error) {
          console.error('Error loading daily time slots:', error);
        } finally {
          setLoadingDailySlots(false);
          setIsLoading(false);
        }
      };

      loadDailySlots();
    }
  }, [open, dailyTimeSlots.length]);

  const handleComplete = async () => {
    try {
      // Handle appointment booking completion
      console.log('Appointment booked:', formData);
      
      // Here you would typically send the data to your backend
      // For now, we'll just proceed to the confirmation step
      setStep(4);

      // Update the URL to reflect booking confirmation state (keep literal =)
      router.push(`${pathname}?modal=booking=confirm`);
    } catch (error) {
      console.error('Error booking appointment:', error);
      // Handle error appropriately
    }
  };

  const resetModal = () => {
    setStep(1);
    setFormData({});
    setIsNewPatient(true);
    setSelectedLocation('539 Bloomfield Avenue');
    // Don't reset dailyTimeSlots as they should persist
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (open) {
      params.set('modal', 'booking');
    } else {
      params.delete('modal');
    }

    // Construct the new URL with current path and updated query
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl, { scroll: false }); // ✅ Updates the URL without full navigation
  }, [open]);

  return (
    <>

      
      <Dialog open={open} onOpenChange={(open) => {
        setOpen(open);
        if (!open) resetModal();
      }}>
        <DialogContent className="max-w-full w-[95vw] sm:w-[90vw] md:!max-w-[900px] lg:!max-w-[1000px] p-0 gap-0 max-h-[95vh] sm:max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b flex-shrink-0">
            <h2 className="text-lg sm:text-xl font-semibold">Appointment Request</h2>
            {/* <button
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-5 h-5" />
            </button> */}
          </div>

          <div className="p-3 sm:p-4 md:p-6 flex-1 overflow-y-auto">
            {/* New Patient Checkbox */}
            {/* <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isNewClient}
                  onChange={(e) => setIsNewPatient(e.target.checked)}
                  className="sr-only"
                />
                <div
                  onClick={() => setIsNewPatient(!isNewClient)}
                  className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center ${
                    isNewClient ? 'bg-primary border-primary' : 'border-gray-300'
                  }`}
                >
                  {isNewClient && <Check className="w-3 h-3 text-white" />}
                </div>
              </div>
              <label className="text-sm text-gray-700 cursor-pointer" onClick={() => setIsNewPatient(!isNewClient)}>
                I&lsquo;m a new patient at this practice
              </label>
            </div> */}

            {/* Location Selection */}
            {/* <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div> */}

            {/* Step Indicators */}
            {/* <div className="flex items-center gap-4 mb-6">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <span className={`text-sm ${step >= 1 ? 'text-gray-900' : 'text-gray-500'}`}>
                Appointment details
              </span>

              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <span className={`text-sm ${step >= 2 ? 'text-gray-900' : 'text-gray-500'}`}>
                Contact info
              </span>

              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                3
              </div>
              <span className={`text-sm ${step >= 3 ? 'text-gray-900' : 'text-gray-500'}`}>
                Insurance info
              </span>
            </div> */}

            {/* Step Content */}
            {step === 1 && (
              <StepAppointment
                nextStep={nextStep}
                formData={formData}
                setFormData={setFormData}
                dailyTimeSlots={dailyTimeSlots}
                loadingDailySlots={loadingDailySlots}
              />
            )}
            {step === 2 && (
              <StepContactInfo
                nextStep={nextStep}
                prevStep={prevStep}
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {step === 3 && (
              <StepInsuranceInfo
                prevStep={prevStep}
                formData={formData}
                setFormData={setFormData}
                onComplete={handleComplete}
              />
            )}
            {step === 4 && (
              <RequestSubmitted
                formData={formData}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Main Booking Modal Component with Suspense wrapper
const BookingModal: React.FC<BookingModalProps> = ({ open, setOpen }) => {
  return (
    <Suspense fallback={<div></div>}>
      <BookingModalContent open={open} setOpen={setOpen} />
    </Suspense>
  );
};

export default BookingModal;