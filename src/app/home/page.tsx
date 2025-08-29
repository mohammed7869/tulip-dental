"use client";

import React, { useState, useEffect, useRef } from "react";
import ServicesSection from "./services";
import InsuranceSection from "./accepted-insurance";
import SpecialOffersSection from "./special-offer";
import { Button } from "@/components/ui/button";
import LocationTabs from "./addresses";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import FloatingFormButton from "@/components/ui/floatingButton";
import FloatingTextForm from "@/components/ui/floatingButton";
import {
  InfoIcon,
  MessageCircle,
  Stethoscope,
  User,
  Star,
  Award,
  Shield,
  Heart,
  ArrowRight,
  Play,
} from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import FloatingPromo from "@/components/ui/promo-popup";
import BookingModal from "../booking/bookingScreen";
import { services as allServices } from "../services/serviceList";

const banners = [
  {
    image: "/Images/Banner-1.jpg",
    title: "Welcome to Tulip Dental Maplewood",
    subtitle:
      "Your Trusted Family & Cosmetic Dentist in Maplewood and Surrounding Areas",
    highlight: "New Patient Special",
    price: "$79",
    description: "Exams, Cleaning & X-Rays",
    badge: "Limited Time",
    image2: "/Images/Banner-1.jpg",
  },
  {
    image: "/Images/Banner-2.jpg",
    title: "Emergency Dental Visit Just $55",
    subtitle:
      "Fast relief for toothaches or dental pain - includes exam & X-ray, no insurance needed.",
    highlight: "Emergency Visit",
    price: "$55",
    description: "For new patients without insurance",
    badge: "One time offer",
    image2: "/Images/Banner-2.jpg",
  },
  {
    image: "/Images/Banner-3.jpeg",
    title: "New Patient Special - Only $79",
    subtitle:
      "Get a full dental exam, professional cleaning, and digital X-rays - perfect for first-time visitors.",
    highlight: "Complete oral examination",
    price: "$79",
    description: "For new patients without insurance",
    badge: "Special Offer",
    image2: "/Images/Banner-3.jpeg",
  },
  {
    image: "/Images/Banner-4.jpg",
    title: "Professional Teeth Whitening - Only $299",
    subtitle:
      "Brighten your smile with our limited-time in-office whitening treatment.",
    highlight: "Family Care",
    price: "Only $299",
    description: "Complete family dental plans",
    badge: "All Ages Welcome",
    image2: "/Images/Banner-4.jpg",
  },
];

const services = [
  {
    icon: "/Images/icons/tooth-implant.png",
    price: "1199",
    title: "Dental Implant",
  },
  {
    icon: "/Images/icons/teeth-whitening.png",
    price: "299",
    title: "Teeth Whitening",
  },
  {
    icon: "/Images/icons/braces1.png",
    price: "250/month",
    title: "Braces",
  },
];

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView();

  // Touch/swipe functionality for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNavigation = (newIndex: number) => {
    setCurrent(newIndex);
  };

  const handlePrevious = () => {
    setCurrent(current === 0 ? banners.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent((current + 1) % banners.length);
  };

  // Touch event handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  return (
    <div>
      {/* Modern Hero Banner */}
      <section
        ref={bannerRef}
        // className="relative w-full min-h-[820px] py-8 md:py-12 overflow-hidden bg-primary"
        className="relative w-full min-h-[820px] py-8 md:py-12 overflow-hidden bg-[#0087CE]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 h-12 md:w-24 md:h-24 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 md:w-40 md:h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
        </div>

        {/* Banner Content */}
        {banners.map((banner, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="container mx-auto px-4 md:px-6 min-h-screen flex items-center justify-center py-8 md:py-6">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                {/* Left Content - Text */}
                <div className="text-white z-20 space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1 pt-4 md:pt-8 pb-16 md:pb-20">
                  <Fade cascade direction="up" delay={300} duration={800}>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-secondary text-white px-3 py-2 md:px-4 md:py-3 rounded-full text-xs md:text-sm font-medium shadow-lg">
                      <Star className="w-3 h-3 md:w-4 md:h-4" />
                      {banner.badge}
                    </div>

                    {/* Main Title */}
                    <h1 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight text-white overflow-hidden shine-text">
                      {banner.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-lg mb-4 md:mb-6 text-left">
                      {banner.subtitle}
                    </p>

                    {/* Price Card */}
                    <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/20 shadow-2xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white text-xs md:text-sm font-medium">
                            {banner.highlight}
                          </p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white shine-text">
                              {banner.price}
                            </span>
                            <span className="text-white text-xs md:text-sm">
                              {banner.description}
                            </span>
                          </div>
                        </div>
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <button
                        className="group bg-white text-cyan-600 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base lg:text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2"
                        onClick={() => setIsBookingOpen(true)}
                      >
                        Book Your Appointment
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      {/* <button className="group bg-white/10 backdrop-blur-md text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center gap-2">
                                                <Play className="w-4 h-4 md:w-5 md:h-5" />
                                                Watch Video
                                            </button> */}
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-row items-center gap-3 md:gap-6 pt-2 md:pt-4 mb-8 md:mb-12">
                      <div className="flex items-center gap-2">
                        <Shield className=" w-4 h-4 md:w-5 md:h-5 text-secondary" />
                        <span className="text-xs md:text-sm text-white">
                          Most Insurances Accepted
                        </span>
                      </div>
                    </div>
                  </Fade>
                </div>

                {/* Right Content - Image */}
                <div className="relative z-20 order-1 lg:order-2 mb-8 md:mb-0">
                  <Fade direction="left" delay={600} duration={1000}>
                    <div className="relative">
                      {/* Main Image Container */}
                      <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-2xl border border-white/20">
                        <img
                          src={banner.image}
                          alt={banner.title}
                          className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover rounded-xl md:rounded-2xl"
                        />

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-2 -left-2 md:-bottom-6 md:-left-6 bg-white rounded-xl md:rounded-2xl p-2 md:p-4 shadow-xl">
                          <div className="text-center">
                            <div className="text-lg md:text-2xl font-bold text-primary">
                              500+
                            </div>
                            <div className="text-xs md:text-sm text-gray-600">
                              Happy Patients
                            </div>
                          </div>
                        </div>

                        {/* Floating Review Card */}
                        <div className="absolute -top-2 -right-2 md:-top-6 md:-right-6 bg-white rounded-xl md:rounded-2xl p-2 md:p-4 shadow-xl">
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                            <div className="text-xs md:text-sm">
                              <div className="font-semibold">5.0</div>
                              <div className="text-gray-500">Rating</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-2 right-4 md:-bottom-4 md:right-8 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse delay-1000"></div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Modern Navigation Dots */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex gap-2 md:gap-3">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleNavigation(idx)}
                className={`transition-all duration-500 rounded-full ${
                  idx === current
                    ? "w-8 md:w-12 h-2 md:h-3 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg"
                    : "w-2 md:w-3 h-2 md:h-3 bg-white/40 hover:bg-white/60 hover:scale-110"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="hidden lg:block absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/20 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="hidden lg:block absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/20 hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-30">
          <div className="w-4 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-0.5 md:w-1 h-2 md:h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Modern Services Strip */}
      <section className="w-full bg-gradient-to-r from-slate-50 to-blue-50 py-8 md:py-12 border-b border-slate-200">
        <div className="w-full mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden">
            {/* Auto-scrolling services carousel */}
            <div className="scroll-track-services flex animate-scroll-services">
              {[...allServices, ...allServices].map((service, index) => (
                <Link
                  key={`${service.name}-${index}`}
                  href={service.link}
                  className="flex-shrink-0 mx-4 group hover:scale-105 transition-all duration-300"
                >
                  <span className="text-sm md:text-base font-medium text-slate-700 group-hover:text-blue-600 group-hover:bg-white group-hover:shadow-lg transition-all duration-300 whitespace-nowrap px-4 py-3 rounded-xl hover:border hover:border-blue-200">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Custom CSS for carousel animation */}
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
            animation: scroll-services 60s linear infinite;
          }
          .animate-scroll-services:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      <div className="w-full bg-gradient-to-r from-slate-50 to-blue-50 flex items-center justify-center overflow-hidden py-8 md:py-12 border-b border-slate-200">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
          <img
            src="/Images/tulip-large-Blue-white-trnsprnt.png"
            alt="Tulip Dental Logo"
            className="w-auto h-16 md:h-32 object-contain"
          />
        </div>
      </div>
      <HomepageSections />

      <section className="w-full bg-gradient-to-br from-white to-sky-50 relative overflow-hidden py-10 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 px-6 md:px-8">
          {/* Left Side - Image */}
          <Slide direction="right" className="w-full md:w-1/2 h-64 md:h-120">
            <img
              src="/Images/About-Tulip-Dental.jpeg"
              alt="dental-banner"
              className="rounded-md md:rounded-xl mt-8 object-cover shadow-md"
            />
          </Slide>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <Fade delay={200}>
              <h2 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
                About Tulip Dental
              </h2>
            </Fade>

            <Fade delay={500}>
              <h2 className="text-lg ">
                Trusted Family & Cosmetic Dentistry Across Maplewood and
                Surrounding Areas{" "}
              </h2>
            </Fade>

            <Fade delay={700}>
              <p className="text-base leading-relaxed">
                Looking for a caring dentist near you in Maplewood, NJ? Tulip
                Dental provides modern, compassionate dental care for patients
                of every age. Conveniently located in Maplewood, we proudly
                serve families and individuals from{" "}
                <strong>
                  Maplewood (07040), South Orange (07079), Irvington (07111),
                  Vauxhall (07088){" "}
                </strong>
                , and Newark neighborhoods including <strong>07106 </strong> and{" "}
                <strong>07112</strong>. Our experienced team offers preventive
                care, restorative solutions, and cosmetic treatments - all in a
                relaxed, family-friendly environment.{" "}
              </p>
            </Fade>

            <Fade delay={800}>
              <Link
                href="/about-us"
                className="border border-primary text-primary rounded-lg px-4 py-3 hover:bg-blue-50 text-sm font-medium transition"
              >
                Learn More
              </Link>
            </Fade>
          </div>
        </div>
      </section>

      <Slide direction="up" triggerOnce>
        <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              // const { ref, inView } = useInView({
              //   threshold: 0.1,
              // });

              return (
                <div
                  key={index}
                  ref={ref}
                  className="bg-card rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 mb-4"
                  />

                  <div className="text-3xl font-bold text-primary mb-2">
                    $
                    {inView ? (
                      service.price.includes("/") ? (
                        <CountUp
                          end={parseInt(service.price.split("/")[0])}
                          duration={1.5}
                          separator=","
                          suffix="/month"
                        />
                      ) : (
                        <CountUp
                          end={parseInt(service.price)}
                          duration={1.5}
                          separator=","
                        />
                      )
                    ) : service.price.includes("/") ? (
                      "0/month"
                    ) : (
                      "0"
                    )}
                  </div>

                  <div className="text-lg font-semibold">{service.title}</div>
                </div>
              );
            })}
          </div>
        </section>
      </Slide>

      <ServicesSection />

      <InsuranceSection />

      <SpecialOffersSection />

      <section className="w-full bg-gradient-to-br from-white to-sky-50 relative overflow-hidden py-10 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 px-6 md:px-8">
          {/* Left Side - Image */}
          <Slide direction="right" className="w-full md:w-1/2 h-64 md:h-80">
            <img
              src="/Images/Insurance.jpg"
              alt="dental-banner"
              className="rounded-md md:rounded-xl w-full h-full object-cover shadow-md"
            />
          </Slide>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <Fade delay={200}>
              <h2 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
                Affordable Care for Everyone
              </h2>
            </Fade>

            <Fade delay={500}>
              <p className="text-lg ">
                <strong>No insurance? No problem</strong>. We believe quality
                dental care should be accessible to all. That’s why we offer:
              </p>
            </Fade>

            <Fade delay={700}>
              <p className="text-base text-left leading-relaxed">
                <ul className="list-disc gap-3 mt-2 px-6">
                  <li className="list-disc">
                    <div className="flex gap-2 ">
                      <Fade delay={800}>
                        <span>
                          <strong>$55 Emergency Dental Visit</strong> (Includes
                          Exam & X-ray)
                        </span>
                      </Fade>
                    </div>
                  </li>
                  <li className="list-disc">
                    <div className="flex gap-2">
                      <Fade delay={1000}>
                        <span>
                          <strong>$79 New Patient Special</strong> (Exam ,
                          Cleaning + X-rays)
                        </span>
                      </Fade>
                    </div>
                  </li>
                  <li className="list-disc">
                    <div className="flex gap-2">
                      <Fade delay={1200}>
                        <span>
                          <strong>Interest-Free Financing Available</strong> (Up
                          to 12 Months)
                        </span>
                      </Fade>
                    </div>
                  </li>
                  <li className="list-disc">
                    <div className="flex gap-2">
                      <Fade delay={1200}>
                        <span>
                          {" "}
                          <strong>Senior Discounts</strong> During Special Hours
                        </span>
                      </Fade>
                    </div>
                  </li>
                </ul>
              </p>
            </Fade>

            <Fade delay={800}>
              <a href="tel:973-671-5500">
                <Button className="bg-primary text-white px-3 py-2 rounded-md text-sm hover:bg-primary font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                  CALL TODAY!
                </Button>
              </a>
            </Fade>
          </div>
        </div>
      </section>
      <LocationTabs />
      <FloatingTextForm />
      <FloatingPromo />
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
}

function HomepageSections() {
  const sections = [
    {
      label: "About Us",
      icon: <InfoIcon />,
      bg: "bg-[#0087CE]",
      href: "/about-us",
    },
    {
      label: "Our Providers",
      icon: <User />,
      bg: "bg-[#0087CE]/70",
      href: "/providers",
    },
    {
      label: "Our Services",
      icon: <Stethoscope />,
      bg: "bg-[#ff5722]",
      href: "/services",
    },
    {
      label: "Contact Us",
      icon: <MessageCircle />,
      bg: "bg-[#ff5722]/70",
      href: "/contact-us",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {sections.map((section, idx) => (
        <Link
          href={section.href}
          key={idx}
          className={`rounded-sm shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer text-white ${section.bg} flex flex-col items-center justify-center p-3 md:p-6 text-center`}
        >
          <div className="text-4xl mb-2">{section.icon}</div>
          <div className="text-md md:text-xl font-semibold">
            {section.label}
          </div>
        </Link>
      ))}
    </div>
  );
}
