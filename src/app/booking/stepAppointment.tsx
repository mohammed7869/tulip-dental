import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { apiService, Location, TimeSlot, BookedSlot, TimeSlotWithAvailability } from "@/lib/apiService";
import Image from 'next/image';

// Heart Loader Component
const HeartLoader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 overflow-hidden">
    <div className="flex flex-col items-center justify-center relative">
      <Image
        src="/Images/heart.gif"
        alt="Loading..."
        width={100}
        height={100}
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
        priority
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  </div>
);

// LocationTimeSlots Component
interface LocationTimeSlotsProps {
  locations: Location[];
  selectedLocation: number | null;
  selectedDateObj: any;
  selectedTime: string;
  onTimeSelect: (time: string, locationId: number) => void;
  getTimeSlotsForDate: (dateObj: any, locationId: number) => Promise<TimeSlotWithAvailability[]>;
}

const LocationTimeSlots: React.FC<LocationTimeSlotsProps> = ({
  locations,
  selectedLocation,
  selectedDateObj,
  selectedTime,
  onTimeSelect,
  getTimeSlotsForDate
}) => {
  const [timeSlotsMap, setTimeSlotsMap] = useState<Record<string, TimeSlotWithAvailability[]>>({});
  const [loadingSlots, setLoadingSlots] = useState<Record<string, boolean>>({});

  // Load time slots for selected date and locations
  useEffect(() => {
    if (!selectedDateObj) return;

    const loadTimeSlots = async () => {
      const locationsToLoad = selectedLocation
        ? locations.filter(loc => loc.id === selectedLocation)
        : locations;

      for (const location of locationsToLoad) {
        // Create a cache key that includes the date
        const cacheKey = `${location.id}-${selectedDateObj.fullDate}`;

        if (!timeSlotsMap[cacheKey] && !loadingSlots[cacheKey]) {
          setLoadingSlots(prev => ({ ...prev, [cacheKey]: true }));
          try {
            const slots = await getTimeSlotsForDate(selectedDateObj, location.id);
            setTimeSlotsMap(prev => ({ ...prev, [cacheKey]: slots }));
          } catch (error) {
            console.error(`Error loading time slots for location ${location.id}:`, error);
            setTimeSlotsMap(prev => ({ ...prev, [cacheKey]: [] }));
          } finally {
            setLoadingSlots(prev => ({ ...prev, [cacheKey]: false }));
          }
        }
      }
    };

    loadTimeSlots();
  }, [selectedDateObj, selectedLocation, locations]);

  const locationsToShow = selectedLocation
    ? locations.filter(loc => loc.id === selectedLocation)
    : []; // Don't show any locations if none selected

  return (
    <>
      {locationsToShow.map((location) => {
        const cacheKey = `${location.id}-${selectedDateObj?.fullDate}`;
        const timeSlots = timeSlotsMap[cacheKey] || [];
        const isLoading = loadingSlots[cacheKey];

        return (
          <div key={location.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
              {/* Provider Info */}
              <div className="lg:col-span-4">
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
                      {location.name.length > 20 ? `${location.name.substring(0, 20)}...` : location.name}
                    </h4>
                    <div className="text-xs text-gray-600 space-y-0.5">
                      <div>{location.address}</div>
                      <div>{location.city}, {location.state} {location.zipcode}</div>
                    </div>
                    <div className="flex items-center gap-1 mt-2 sm:mt-3 pt-1 border-t border-gray-100">
                      <Clock className="w-3 h-3 text-gray-500" />
                      <span className="text-xs text-gray-500">Appointments in EST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Slots */}
              <div className="lg:col-span-8">
                {!selectedDateObj ? (
                  <div className="flex items-center justify-center h-20 sm:h-24 text-gray-500 text-sm">
                    Please select a date to view available times
                  </div>
                ) : isLoading ? (
                  <div className="flex items-center justify-center h-20 sm:h-24 text-gray-500 text-sm">
                    Loading time slots...
                  </div>
                ) : timeSlots.length > 0 ? (
                  <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
                      {timeSlots.map((slot: TimeSlotWithAvailability) => (
                        <button
                          key={slot.time}
                          onClick={() => !slot.isBooked && onTimeSelect(slot.time, location.id)}
                          disabled={slot.isBooked}
                          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md border transition-all ${slot.isBooked
                            ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                            : selectedTime === slot.time && selectedLocation === location.id
                              ? 'bg-teal-600 text-white border-teal-600'
                              : 'bg-white text-teal-600 border-teal-200 hover:bg-teal-50'
                            }`}
                          title={slot.isBooked ? 'This time slot is already booked' : ''}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-20 sm:h-24 text-gray-500 text-sm">
                    — No appointments available
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

interface StepAppointmentProps {
  nextStep: () => void;
  formData: any;
  setFormData: (data: any) => void;
  dailyTimeSlots: TimeSlot[];
  loadingDailySlots: boolean;
}

const StepAppointment = ({ nextStep, formData, setFormData, dailyTimeSlots, loadingDailySlots }: StepAppointmentProps) => {
  const [selectedDate, setSelectedDate] = useState(formData.selectedDate || '');
  const [isNewClient, setIsNewClient] = useState(formData.isNewClient ?? true);
  const [selectedLocation, setSelectedLocation] = useState<number | null>(formData.selectedLocation || null);
  const [selectedTime, setSelectedTime] = useState(formData.selectedTime || '');
  
  // Update local state when formData changes (when navigating back to this step)
  useEffect(() => {
    setSelectedDate(formData.selectedDate || '');
    setIsNewClient(formData.isNewClient ?? true);
    setSelectedTime(formData.selectedTime || '');
    
    // Update currentWeekStart to show the week containing the selected date
    if (formData.selectedDate) {
      const selectedDateObj = new Date(formData.selectedDate);
      const weekStart = getMondayOfWeek(selectedDateObj);
      setCurrentWeekStart(weekStart);
      
      // Clear booked slots cache to force reload for the new week
      console.log('Clearing booked slots cache due to selected date change');
      setBookedSlotsCache({});
    }
    
    // Only update selectedLocation if we have a valid savedLocationId and it's different from current
    if (formData.selectedLocationId && formData.selectedLocationId !== selectedLocation) {
      setSelectedLocation(formData.selectedLocationId);
    }
  }, [formData, selectedLocation]);

  const handleNewClientChange = (checked: boolean) => {
    setIsNewClient(checked);
    setFormData({
      ...formData,
      isNewClient: checked
    });
  };
  
  // Helper function to get Monday of the current week
  const getMondayOfWeek = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
    return new Date(d.setDate(diff));
  };
  
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    // If there's a selected date in formData, show the week containing that date
    if (formData.selectedDate) {
      const selectedDateObj = new Date(formData.selectedDate);
      return getMondayOfWeek(selectedDateObj);
    }
    // Otherwise, show current week
    const today = new Date();
    return getMondayOfWeek(today);
  });











  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bookedSlotsCache, setBookedSlotsCache] = useState<Record<string, BookedSlot[]>>({});

  // Load locations from API
  useEffect(() => {
    const loadLocations = async () => {
      try {
        setLoading(true);
        const locationsData = await apiService.getLocations();
        setLocations(locationsData);

        console.log('Locations loaded:', locationsData.length, locationsData);

        // Set default location to first available location only if no location is already selected
        if (locationsData.length > 0 && !selectedLocation) {
          // Check if we have a saved location ID from formData
          const savedLocationId = formData.selectedLocationId;
          if (savedLocationId && locationsData.find(loc => loc.id === savedLocationId)) {
            setSelectedLocation(savedLocationId);
          } else {
            setSelectedLocation(locationsData[0].id);
          }
        }
      } catch (err) {
        console.error('Error loading locations:', err);
        setError('Failed to load locations. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadLocations();
  }, [formData.selectedLocationId, selectedLocation]);

  // Load booked slots for the current week when week changes or component first loads
  useEffect(() => {
    if (locations.length === 0 || !selectedLocation) return;

    const loadBookedSlots = async () => {
      try {
        // Calculate visible week start and end dates (use the actual displayed dates)
        const fromDateVisible = new Date(currentWeekStart);
        const toDateVisible = new Date(currentWeekStart);
        toDateVisible.setDate(fromDateVisible.getDate() + 6); // 7 days from start

        const fromDate = fromDateVisible.toISOString().split('T')[0] + 'T00:00:00.00';
        const toDate = toDateVisible.toISOString().split('T')[0] + 'T23:59:59.99';

        console.log('Loading booked slots for week:', { fromDate, toDate, locationId: selectedLocation, weekStart: currentWeekStart });

        const bookedSlots = await apiService.getBookedSlots(fromDate, toDate, selectedLocation);

        // Cache the booked slots with a key that includes the week and location
        const cacheKey = `${selectedLocation}-${fromDateVisible.toISOString().split('T')[0]}`;
        setBookedSlotsCache(prev => ({ 
          ...prev, 
          [cacheKey]: bookedSlots 
        }));

        console.log('Booked slots loaded and cached for week:', { cacheKey, bookedSlots: bookedSlots.length, slots: bookedSlots });
      } catch (error) {
        console.error('Error loading booked slots:', error);
      }
    };

    loadBookedSlots();
  }, [currentWeekStart, selectedLocation, locations.length]);

  // Generate dates for current and next month
  const generateDates = useCallback(() => {
    const dates = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to the start of the day
    const startDate = new Date(currentWeekStart);

    // Generate weeks worth of dates starting from Monday
    for (let i = 0; i < 84; i++) { // 12 weeks
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
      const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const dayKey = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

      const loopDate = new Date(date);
      loopDate.setHours(0, 0, 0, 0);

      dates.push({
        day: dayName,
        date: monthDay,
        fullDate: date.toISOString().split('T')[0],
        dayKey: dayKey,
        available: loopDate >= today
      });
    }

    return dates;
  }, [currentWeekStart]);

  const [dates, setDates] = useState(generateDates());

  useEffect(() => {
    setDates(generateDates());
  }, [generateDates]);

  // Get visible dates (show 7 days - Monday to Sunday)
  const getVisibleDates = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Calculate how many days from the first generated date to current week start
    const firstGeneratedDate = new Date(currentWeekStart);
    const startIndex = Math.floor((currentWeekStart.getTime() - firstGeneratedDate.getTime()) / (1000 * 60 * 60 * 24));
    
    return dates.slice(startIndex, startIndex + 7); // Always show exactly 7 days
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(currentWeekStart.getDate() + (direction === 'next' ? 7 : -7));

    // Don't go before the current week
    const today = new Date();
    const currentWeekMonday = getMondayOfWeek(today);
    
    // Normalize both dates to midnight for proper comparison
    const newDateNormalized = new Date(newDate);
    newDateNormalized.setHours(0, 0, 0, 0);
    
    const currentWeekMondayNormalized = new Date(currentWeekMonday);
    currentWeekMondayNormalized.setHours(0, 0, 0, 0);
    
    if (direction === 'prev' && newDateNormalized < currentWeekMondayNormalized) {
      // If navigating back would go before current week, don't allow it
      return;
    }

    setCurrentWeekStart(newDate);
    setSelectedTime(''); // Reset selected time when navigating
  };

  const getTimeSlotsForDate = async (dateObj: any, locationId: number) => {
    if (!dateObj.available || !locationId) {
      return [];
    }



    try {
      // Use the passed dailyTimeSlots instead of calling the API again
      if (loadingDailySlots || dailyTimeSlots.length === 0) {
        console.log('Daily time slots not ready yet');
        return [];
      }

      const dayOfWeek = new Date(dateObj.fullDate).getDay(); // 0 = Sunday, 1 = Monday, etc.

      // Filter slots for the specific location and day
      const relevantSlots = dailyTimeSlots.filter(slot =>
        slot.locationId === locationId && slot.dayOfWeek === dayOfWeek
      );

      if (relevantSlots.length === 0) {
        return [];
      }

      // Generate time slots based on the slot configuration
      const timeSlots: string[] = [];

      relevantSlots.forEach(slot => {
        const startTime = new Date(`2000-01-01T${slot.startTime}`);
        const endTime = new Date(`2000-01-01T${slot.endTime}`);

        // slotDuration interpretation:
        // 1 = 15 minutes, 2 = 30 minutes, 3 = 45 minutes, 4 = 1 hour
        const durationMinutes = slot.slotDuration * 15; // Convert to minutes (1=15min, 2=30min, etc.)

        let currentTime = new Date(startTime);

        while (currentTime < endTime) {
          const timeString = currentTime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          });

          timeSlots.push(timeString);

          // Add duration minutes to current time
          currentTime = new Date(currentTime.getTime() + (durationMinutes * 60 * 1000));
        }
      });

      // Sort time slots chronologically
      const allTimeSlots = timeSlots.sort((a, b) => {
        const timeA = new Date(`2000-01-01 ${a}`);
        const timeB = new Date(`2000-01-01 ${b}`);
        return timeA.getTime() - timeB.getTime();
      });

      // Get booked slots from cache for the current visible week
      const cacheKey = `${locationId}-${currentWeekStart.toISOString().split('T')[0]}`;
      const bookedSlots = bookedSlotsCache[cacheKey] || [];

      console.log('Getting time slots for date:', {
        dateString: dateObj.fullDate,
        locationId,
        cacheKey,
        bookedSlotsInCache: bookedSlots.length,
        allCacheKeys: Object.keys(bookedSlotsCache)
      });

      // Filter booked slots for the specific date
      const dateString = dateObj.fullDate;
      const bookedSlotsForDate = bookedSlots.filter(slot =>
        slot.SlotDate.startsWith(dateString)
      );

      console.log('Booked slots for specific date:', {
        dateString,
        bookedSlotsForDate: bookedSlotsForDate.length,
        slots: bookedSlotsForDate
      });

      // Create a set of booked time strings for easy lookup
      const bookedTimeSet = new Set<string>();
      bookedSlotsForDate.forEach(slot => {
        // Convert 24-hour format to 12-hour format for comparison
        const startTime = convert24To12Hour(slot.StartTime);

        // Only add the start time to the set (not the end time)
        bookedTimeSet.add(startTime);
      });


































      // Return all time slots with availability status
      const timeSlotsWithAvailability = allTimeSlots.map(timeSlot => {
        const isToday = dateString === new Date().toISOString().split('T')[0];
        const now = new Date();
        const slotTime = new Date(`${dateString} ${timeSlot}`);
        const isPast = isToday && slotTime < now;

        return {
          time: timeSlot,
          isBooked: bookedTimeSet.has(timeSlot) || isPast
        };
      });

      console.log(`Time slots with availability for ${dateString}:`, timeSlotsWithAvailability);
      console.log(`Booked slots for ${dateString}:`, bookedSlotsForDate);

      return timeSlotsWithAvailability;
    } catch (error) {
      console.error('Error getting time slots:', error);
      return [];
    }
  };

  // Helper method to convert 24-hour format to 12-hour format
  const convert24To12Hour = (time24: string): string => {
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  // Helper function to check if a date has available time slots
  const hasTimeSlotsForDate = (dateObj: any, locationId: number): boolean => {
    if (!dateObj.available || !locationId || loadingDailySlots || dailyTimeSlots.length === 0) {
      return false;
    }

    const dayOfWeek = new Date(dateObj.fullDate).getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Check if there are any slots configured for this day and location
    const relevantSlots = dailyTimeSlots.filter(slot =>
      slot.locationId === locationId && slot.dayOfWeek === dayOfWeek
    );

    return relevantSlots.length > 0;
  };















  const handleDateSelect = (dateStr: string) => {
    // Find the date object that matches the monthDay format
    const dateObj = dates.find(d => d.date === dateStr);
    if (dateObj) {
      setSelectedDate(dateObj.fullDate); // Use the full date (YYYY-MM-DD) instead of just monthDay
      
      // Save to formData immediately to persist state
      setFormData({
        ...formData,
        selectedDate: dateObj.fullDate
      });
    }
    setSelectedTime('');
  };

  const handleTimeSelect = (time: string, locationId: number) => {
    setSelectedTime(time);
    setSelectedLocation(locationId);
    
    // Save to formData immediately to persist state
    const selectedLocationData = locations.find(loc => loc.id === locationId);
    setFormData({
      ...formData,
      selectedDate,
      selectedTime: time,
      selectedLocation: selectedLocationData?.name || '',
      selectedLocationId: locationId,
      provider: selectedLocationData
    });
  };

  const handleNext = () => {
    if (selectedTime && selectedLocation) {
      const selectedLocationData = locations.find(loc => loc.id === selectedLocation);
      setFormData({
        ...formData,
        selectedDate,
        selectedTime,
        selectedLocation: selectedLocationData?.name || '',
        selectedLocationId: selectedLocation,
        provider: selectedLocationData,
        isNewClient
      });
      nextStep();
    }
  };

  const visibleDates = getVisibleDates();
  const selectedDateObj = dates.find(d => d.fullDate === selectedDate);




  return (
    <>
      {/* Heart Loader */}
      {loading && <HeartLoader />}
      
      <div className="mt-4">
        {/* New Patient Checkbox */}
        <div className="flex items-center gap-3 mb-6">
        <div className="relative">
          <input
            type="checkbox"
            checked={isNewClient}
            onChange={(e) => handleNewClientChange(e.target.checked)}
            className="sr-only"
          />
          <div
            onClick={() => handleNewClientChange(!isNewClient)}
            className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center ${isNewClient ? 'bg-teal-600 border-teal-600' : 'border-gray-300'
              }`}
          >
            {isNewClient && <Check className="w-3 h-3 text-white" />}
          </div>
        </div>
        <label className="text-sm text-gray-700 cursor-pointer" onClick={() => handleNewClientChange(!isNewClient)}>
          I&apos;m a new patient at this practice
        </label>
      </div>

      {/* Location Selection */}
      {loading ? (
        <div className="mb-6">
          <label className="w-full text-sm font-medium text-gray-700 mb-2">Location</label>
          <div className="text-sm bg-gray-100 p-2 rounded-md">
            <div>Loading locations...</div>
          </div>
        </div>
      ) : error ? (
        <div className="mb-6">
          <label className="w-full text-sm font-medium text-gray-700 mb-2">Location</label>
          <div className="text-sm bg-red-100 p-2 rounded-md text-red-600">
            <div>{error}</div>
          </div>
        </div>
      ) : (
        <div className="mb-6">
          <label className="w-full text-sm font-medium text-gray-700 mb-2">
            {locations.length === 1 ? 'Location' : 'Select Location *'}
          </label>

          {locations.length === 1 ? (
            // Single location - show location details directly
            <div className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50">
              {(() => {
                const location = locations[0];
                console.log('Single location mode:', location);
                return (
                  <div>
                    <div className="font-medium text-gray-900">{location.name}</div>                    <div className="text-gray-600">{location.address},{location.city}, {location.state} {location.zipcode}</div>
                  </div>
                );
              })()}
            </div>
          ) : (
            // Multiple locations - show dropdown
            <>
              {console.log('Multiple locations mode:', locations.length, locations)}
              <select
                value={selectedLocation || ''}
                onChange={(e) => {
                  const locationId = e.target.value ? parseInt(e.target.value) : null;
                  setSelectedLocation(locationId);
                  setSelectedTime(''); // Reset time when location changes
                  
                  // Save to formData immediately to persist state
                  if (locationId) {
                    const selectedLocationData = locations.find(loc => loc.id === locationId);
                    setFormData({
                      ...formData,
                      selectedLocationId: locationId,
                      selectedLocation: selectedLocationData?.name || '',
                      provider: selectedLocationData,
                      selectedTime: '' // Reset time in formData too
                    });
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">Choose a location</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                   {location.address},{location.city}, {location.state} {location.zipcode}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      )}

      {/* Progress Steps */}
      <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 w-full overflow-x-auto pb-2 sm:pb-0">
        {/* Step 1 */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-white text-xs sm:text-sm font-medium bg-teal-600">
            1
          </div>
          <span className="text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">Appointment details</span>
        </div>

        <div className="flex-1 h-0.5 bg-gray-300 min-w-[20px]"></div>

        {/* Step 2 */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-xs sm:text-sm font-medium">
            2
          </div>
          <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Contact info</span>
        </div>

        <div className="flex-1 h-0.5 bg-gray-300 min-w-[20px]"></div>

        {/* Step 3 */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-xs sm:text-sm font-medium">
            3
          </div>
          <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Insurance info</span>
        </div>
      </div>

      {/* Choose a time */}
      <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Choose a time</h3>

      {/* Date Navigation */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <button
          onClick={() => navigateWeek('prev')}
          className="p-1 sm:p-2 hover:bg-gray-100 rounded-full flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={(() => {
            const today = new Date();
            const currentWeekMonday = getMondayOfWeek(today);
            return currentWeekStart.getTime() <= currentWeekMonday.getTime();
          })()}
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        </button>

        <div className="flex gap-1 sm:gap-2 overflow-x-auto flex-1 mx-2 sm:mx-4 pb-2 sm:pb-0">
          {visibleDates.map((dateObj) => {
            const hasSlots = selectedLocation ? hasTimeSlotsForDate(dateObj, selectedLocation) : false;
            const isSelected = selectedDate === dateObj.fullDate;
            const isDisabled = !dateObj.available || !hasSlots;
            
            return (
              <button
                key={dateObj.fullDate}
                onClick={() => handleDateSelect(dateObj.date)}
                disabled={isDisabled}
                className={`flex flex-col items-center px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm min-w-[60px] sm:min-w-[80px] transition-all flex-shrink-0 ${isSelected
                  ? 'bg-teal-600 text-white shadow-md'
                  : !isDisabled
                    ? 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                    : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                  }`}
              >
                <span className="text-xs font-medium">{dateObj.day}</span>
                <span className="font-semibold">{dateObj.date}</span>

                {!hasSlots && dateObj.available && (
                  <span className="text-xs text-red-500 font-medium">Closed</span>
                )}
                {isSelected && (
                  <div className="w-2 h-2 bg-white rounded-full mt-1"></div>
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => navigateWeek('next')}
          className="p-1 sm:p-2 hover:bg-gray-100 rounded-full flex-shrink-0"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        </button>
      </div>

      {/* Providers and Time Slots */}
      <div className="space-y-4 sm:space-y-6 overflow-y-auto max-h-[25vh] sm:max-h-[30vh]">
        {loading ? (
          <div className="flex items-center justify-center h-32 text-gray-500 text-sm">
            Loading locations...
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-32 text-red-500 text-sm">
            {error}
          </div>
        ) : loadingDailySlots ? (
          <div className="flex items-center justify-center h-32 text-gray-500 text-sm">
            Loading time slots...
          </div>
        ) : !selectedLocation ? (
          <div className="flex items-center justify-center h-32 text-gray-500 text-sm">
            Please select a location to view available time slots
          </div>
        ) : (
          <LocationTimeSlots
            locations={locations}
            selectedLocation={selectedLocation}
            selectedDateObj={selectedDateObj}
            selectedTime={selectedTime}
            onTimeSelect={handleTimeSelect}
            getTimeSlotsForDate={getTimeSlotsForDate}
          />
        )}
      </div>

      {/* Next Button */}
      <div className="flex justify-end mt-6 sm:mt-8">
        <Button
          onClick={handleNext}
          disabled={!selectedTime || !selectedLocation}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </Button>
      </div>
    </div>
    </>
  );
};

export default StepAppointment;