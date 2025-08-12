import Image from 'next/image'

export default function ContactInfo() {
    const hours = [
    "Monday: 9:00 AM - 6:00 PM",
    "Tuesday: 9:00 AM - 6:00 PM",
    "Wednesday: 9:00 AM - 6:00 PM",
    "Thursday: 9:00 AM - 6:00 PM",
    "Friday: 9:00 AM - 6:00 PM",
    "Saturday: 9:00 AM - 3:30 PM",
    "Sunday: Closed",
  ];
  return (
        <div className="relative bg-primary rounded-lg p-8 text-white shadow-lg overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 opacity-10">
        <img
          src="/Images/dentist4.jpg"
          alt="Dental professional"
          className="w-full h-full object-cover"
        />
      </div> */}
      
      {/* Green square decoration */}
      <div className="absolute top-4 left-4 w-4 h-4 bg-emerald-500"></div>
      
      {/* Up arrow decoration */}
      <div className="absolute top-4 right-4 text-emerald-500">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 14l5-5 5 5z"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 space-y-6">
        <div>
          <h4 className="font-bold text-lg mb-2">Address:</h4>
          <p className="text-white/90 leading-relaxed">
            1585 Springfield Avenue, Store #1, Maplewood, NJ 07040
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-2">Phone:</h4>
          <div className="space-y-1">
            <a href="tel:9736715500" className="text-white/90 hover:text-white transition-colors">973-671-5500</a>
            {/* <p className="text-white/90">+12345 987 456</p> */}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-2">Email:</h4>
          <div className="space-y-1">
            <p className="text-white/90"> <a href="mailto:maplewood@tulipdentalnj.com" className="underline"> maplewood@tulipdentalnj.com</a></p>
          </div>
        </div>

        {/* Working Hours Section */}
        <div>
          <h4 className="font-bold text-lg mb-3">Working Hours:</h4>
          <div className="space-y-2">
            {hours.map((hour, index) => {
              const [day, time] = hour.split(': ');
              const isClosed = time === 'Closed';
              const isToday = new Date().getDay() === (index + 1) % 7; // Assuming Monday is index 0
              
              return (
                <div 
                  key={index} 
                  className={`flex justify-between items-center py-1 px-2 rounded transition-colors ${
                    isToday ? 'bg-white/10 border-l-2 border-emerald-400' : ''
                  }`}
                >
                  <span className={`text-sm font-medium ${isToday ? 'text-emerald-300' : 'text-white/90'}`}>
                    {day}:
                  </span>
                  <span className={`text-sm ${
                    isClosed 
                      ? 'text-red-300 font-medium' 
                      : isToday 
                        ? 'text-emerald-300 font-medium' 
                        : 'text-white/80'
                  }`}>
                    {time}
                  </span>
                </div>
              );
            })}
          </div>
          
          {/* Current Status */}
          <div className="mt-3 pt-3 border-t border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-emerald-300 font-medium">
                Open Now - Closes at 6:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 