"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import BookingModal from "../booking/bookingScreen";

export default function ServicesSection() {
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>({});
  const isMobile = useIsMobile();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    { id: 0, title: "Family Dentistry", description: "Family Dentistry services", image: "/Images/family-dentistry.jpg", icon: "/Images/icons/Dental checkup.png", href: "/services/cosmetic-dentistry" },
    { id: 0, title: "Cosmetic Dentistry", description: "Cosmetic dentistry services", image: "/Images/Cosmetic Dentistry.jpg", icon: "/Images/icons/Dental checkup.png", href: "/services/cosmetic-dentistry" },
    { id: 1, title: "Emergency Dentistry", description: "Urgent oral care services", image: "/Images/Emergency Dentistry.jpeg", icon: "/Images/icons/Dental checkup.png", href: "/services/emergency-dentistry" },
    { id: 2, title: "Teeth Whitening", description: "Brighten your smile", image: "/Images/Whitening Veneers.png", icon: "/Images/icons/tooth-whitening.png", href: "/services/whitening-&-veneers" },
    { id: 3, title: "Orthodontics", description: "Orthodontic correction", image: "/Images/Orthodontics.jpg", icon: "/Images/icons/braces.png", href: "/services/orthodontics" },
    { id: 4, title: "Root Canal", description: "Save infected teeth", image: "/Images/Root Canal.jpg", icon: "/Images/icons/root-canal (1).png", href: "/services/root-canal" },
    { id: 5, title: "Dental Implants", description: "Permanent tooth replacement", image: "/Images/Dental Implants.jpg", icon: "/Images/icons/implant.png", href: "/services/dental-implants" },
    { id: 6, title: "Oral Surgery", description: "Advanced procedures", image: "/Images/Oral Surgery.jpg", icon: "/Images/icons/oral surgery.png", href: "/services/oral-surgery" },
    { id: 12, title: "Tooth Extraction", description: "Safe tooth removal", image: "/Images/Tooth Extraction.jpeg", icon: "/Images/icons/tooth-extraction.png", href: "/services/tooth-extraction" },
    { id: 14, title: "Crowns and Bridges", description: "Restore damaged teeth", image: "/Images/Dental Crown Bridge.webp", icon: "/Images/icons/dental-crown (1).png", href: "/services/crowns-and-bridges" },
    { id: 16, title: "Dental Fillings", description: "Repair cavities", image: "/Images/dental-fillings.png", icon: "/Images/icons/tooth-filling.png", href: "/services/fillings" },
  ];

  // Duplicate services for seamless infinite loop
  const duplicatedServices = [...services, ...services];

  const prevSlide = () => {
    setCurrentSlide(prev => {
      if (prev === 0) {
        return services.length - 1;
      }
      return prev - 1;
    });
    // Pause auto-scroll temporarily when manually navigating
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
  };

  const nextSlide = () => {
    setCurrentSlide(prev => {
      if (prev === services.length - 1) {
        return 0;
      }
      return prev + 1;
    });
    // Pause auto-scroll temporarily when manually navigating
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Auto-advance slides
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide(prev => {
          if (prev === services.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(timer);
    }
  }, [isPaused, services.length]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = services.map((service) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setImagesLoaded(prev => ({ ...prev, [service.image]: true }));
            resolve();
          };
          img.onerror = () => {
            setImagesLoaded(prev => ({ ...prev, [service.image]: true })); // Mark as loaded even if error
            resolve();
          };
          img.src = service.image;
        });
      });

      await Promise.all(imagePromises);
    };

    preloadImages();
  }, []);

  return (
    <section className="relative w-full mt-10 mx-auto px-4">
      <Fade delay={200}>
        <h2 className="text-center text-primary text-3xl md:text-5xl font-extrabold mb-10">
          Services We Offer
        </h2>
      </Fade>

      {/* Services carousel container */}
      <div className="relative overflow-hidden py-3">
        {/* Gradient overlays for smooth edges - only on desktop */}
        <div className="hidden md:block absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="hidden md:block absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Mobile: Single slide view */}
        <div className="md:hidden">
          <div className="flex transition-transform duration-300 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {services.map((service, index) => (
              <div key={service.id} className="w-full flex-shrink-0 px-2">
                <div className="rounded-xl overflow-hidden w-full">
                  <div className="relative h-80 bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-opacity duration-200 ${imagesLoaded[service.image] ? 'opacity-100' : 'opacity-0'
                        }`}
                      loading="eager"
                    />
                    {!imagesLoaded[service.image] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-white">
                      <h3 className="flex items-center gap-2 text-primary text-base font-bold leading-tight mb-1">
                        <img src={service.icon} alt="icon" className="w-5 h-5" />
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-xs mb-2  w-full">
                        {service.description}
                      </p>
                      <Link href={service.href} className="text-primary hover:text-blue-800 inline-flex items-center text-xs">
                        Learn More
                        <ChevronRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Auto-scrolling view */}
        <div className="hidden md:block">
          <div className={`scroll-track-services flex animate-scroll-services ${isPaused ? 'animation-paused' : ''}`}>
            {duplicatedServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="flex-shrink-0 mx-3"
              >
                <div className="rounded-xl overflow-hidden w-99">
                  <div className="relative h-90 bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${imagesLoaded[service.image] ? 'opacity-100' : 'opacity-0'
                        }`}
                      loading="eager"
                    />
                    {!imagesLoaded[service.image] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 p-5 bg-white w-[270px]">
                      <h3 className="flex items-center gap-2 text-primary text-xl font-bold leading-tight mb-1">
                        <img src={service.icon} alt="icon" className="w-8 h-8" />
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 w-full">
                        {service.description}
                      </p>
                      <Link href={service.href} className="text-primary hover:text-blue-800 inline-flex items-center">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Only show on mobile, positioned closer to edges */}
        <button
          onClick={prevSlide}
          className="md:hidden absolute left-1 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition z-20"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="md:hidden absolute right-1 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition z-20"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Dot Navigation - Only show on mobile */}
      <div className="md:hidden flex justify-center mt-4 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom CSS for desktop animation */}
      <style jsx>{`
        .scroll-track-services {
          width: fit-content;
        }
        @keyframes scroll-services {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-services {
          animation: scroll-services 40s linear infinite;
        }

        .animate-scroll-services:hover {
          animation-play-state: paused;
        }

        .animation-paused {
          animation-play-state: paused;
        }
      `}</style>

      <Fade delay={200}>
        <h2 className="text-center text-3xl md:text-5xl font-extrabold my-10">
          Emergency Dentistry - Same-Day Care
        </h2>
      </Fade>
      <Fade delay={500}>
        <h3 className="text-center text-md md:text-2xl font-bold mb-5">
          <span className="font-medium">Here When You Need Us Most -</span> Book an appointment with us!
        </h3>
      </Fade>
      {/* <Fade delay={600}>
        
          <Button onClick={() => setIsBookingOpen(true)} size={'lg'}>Book Appointment</Button>
        </div>
      </Fade> */}
      <div className="flex justify-center">
  <button
    className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base lg:text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-2"
    onClick={() => setIsBookingOpen(true)}
  >
    Book Appointment
    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</div>

      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </section>
  );
}
