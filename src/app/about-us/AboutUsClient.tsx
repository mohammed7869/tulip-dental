"use client";

import React, { useState } from "react";
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Link from "next/link";
import BookingModal from "../booking/bookingScreen";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "/Images/icons/implant.png",
    price: "1199",
    title: "Dental Implant",
  },
  {
    icon: "/Images/icons/tooth-whitening.png",
    price: "299",
    title: "Teeth Whitening",
  },
  {
    icon: "/Images/icons/braces.png",
    price: "250",
    title: "Braces",
  },
];

const features = [
  {
    icon: "/Images/icons/emergency denstiry.png",
    title: "Experienced & Friendly Team",
    desc: "Our dentists bring years of clinical expertise and treat every patient with kindness and respect.",
  },
  {
    icon: "/Images/icons/orthodontics.png",
    title: "Same-Day Emergency Dental Care",
    desc: "We provide prompt, compassionate care for dental emergencies so you’re never left in pain.",
  },
  {
    icon: "/Images/icons/dental-floss.png",
    title: "Comprehensive Services in One Location",
    desc: "From cosmetic dentistry to restorative treatments and pediatric care - we offer it all under one roof.",
  },
];

const team = [
  {
    img: "/Images/Dr Urvashi Banerjee DMD.png",
    name: "Dr. Urvashi Banerjee, DMD",
    role: "Doctor of Dental Surgery",
    time: "11 am - 03 pm",
    rating: 5.0,
    slug: "providers/simranjeet-dhaliwal",
  },
];

const testimonials = [
  {
    img: "/Images/dental1.jpg",
    name: "Albert Rusho",
    service: "Root Canals",
    text: "The dental care I received was exceptional. The team maintained my healthy teeth with professional expertise, ensuring my comfort throughout the entire procedure. I couldn't be more satisfied with the results.",
  },
];

export default function AboutUsClient() {
  const { ref, inView } = useInView();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans overflow-x-hidden relative">
      <div className='details-page-header-section'>
        <Fade direction='up' duration={1000}>
          <h1>About Tulip Dental Maplewood</h1>
        </Fade>
        <Fade direction='down' duration={1000}>
          <h2 className="text-center">
            Your Caring Family & Cosmetic Dentist in Maplewood, NJ
          </h2>
        </Fade>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex-1 space-y-4 sm:space-y-6 lg:pr-8 order-2 lg:order-1 w-full">
          <Fade delay={200}>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-primary leading-tight">
              About Us
            </h2>
          </Fade>
          <Fade delay={500}>
            <p>
              Looking for a caring dentist near you in Maplewood, NJ? Tulip Dental provides modern, compassionate dental care for patients of every age. Conveniently located in Maplewood, we proudly serve families and individuals from <strong>Maplewood (07040), South Orange (07079), Irvington (07111), Vauxhall (07088) </strong>, and <strong>Newark</strong> neighborhoods including <strong>07106 </strong>  and <strong>07112</strong>. Our experienced team offers preventive care, restorative solutions, and cosmetic treatments - all in a relaxed, family-friendly environment.            </p>
          </Fade>
          <Fade delay={700}>
            <p>
              Whether you’re visiting for a routine dental check-up or seeking advanced cosmetic treatment, our friendly and experienced team at Tulip Dental Maplewood is here to help. We proudly offer a full range of services - from preventive cleanings to smile makeovers - all delivered in a modern, welcoming environment. Every treatment plan is personalized to meet your unique needs and goals, ensuring you receive the care you deserve.            </p>
          </Fade>

          <div className="flex justify-left">
            <button
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base lg:text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-2"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Appointment
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
          <Slide direction="right">
            <img
              src="/Images/banners/doctor-presenting-something-isolated-white-background.webp"
              alt="Dentists with patient"
              className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
              loading="lazy"
            />
          </Slide>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <Slide direction="right" triggerOnce>
        <section className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex-1 flex justify-center lg:justify-start mb-6 lg:mb-0 order-2 lg:order-1 w-full">
            <img
              src="/Images/banners/Banner_1.jpg"
              alt="Dental procedure"
              className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1 lg:pl-12 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-primary mt-2">Why Patients Choose Tulip Dental Maplewood</h2>
            <p>
              Our treatment rooms are equipped with modern dental technology, allowing us to detect and address issues early while using minimally invasive techniques. Your comfort is our top priority, and we focus on making each visit efficient, stress-free, and informative.
            </p>
            <p className="mb-4 sm:mb-6">
              We’re more than just a dentist near you - we’re your partners in lifelong oral health. Here’s why patients from Maplewood (07040), South Orange (07079), Irvington (07111), Vauxhall (07088), and nearby Newark (07106, 07112) trust us:
            </p>
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center md:items-start gap-3 sm:gap-4">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8 sm:w-12 sm:h-12 mt-1 flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-primary mb-1">{feature.title}</h3>
                    <p>
                      {feature.title === "Emergency Dental Care" ? (
                        <>
                          We provide advanced care for dental emergencies
                          to ensure you're never left in pain
                        </>
                      ) : (
                        feature.desc
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Slide>

      {/* Team Section */}
      <Zoom triggerOnce>
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-6 sm:mb-10 text-primary">Meet our Dedicated Dental Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 sm:gap-6 lg:gap-8 place-items-center">
            {team.map((member, index) => (
              <Link
                href={`/${member.slug}`}
                key={index}
                className="bg-card rounded-lg p-4 sm:p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover mb-3 sm:mb-4 border-4 border-primary"
                  loading="lazy"
                />
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-primary mb-1">{member.name}</h3>
                <div className="flex gap-1 font-bold items-center text-xs sm:text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-yellow-500 fill-current"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.204 3.707a1 1 0 00.95.69h3.905c.969 0 1.371 1.24.588 1.81l-3.158 2.294a1 1 0 00-.364 1.118l1.204 3.707c.3.921-.755 1.688-1.538 1.118l-3.158-2.294a1 1 0 00-1.176 0l-3.158 2.294c-.783.57-1.838-.197-1.538-1.118l1.204-3.707a1 1 0 00-.364-1.118L2.322 9.134c-.783-.57-.38-1.81.588-1.81h3.905a1 1 0 00.95-.69l1.204-3.707z" />
                    </svg>
                  ))} {' '}5.0 Rating
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Zoom>

      {/* Call to Action Section */}
      <Fade direction="left" triggerOnce>
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="tel:9736715500" className="w-full flex flex-col border border-primary text-primary rounded-lg px-4 py-3 hover:opacity-50 text-xs text-center sm:text-sm font-medium transition">
              <span className="text-sm sm:text-base">Call us for Booking</span>
              973-671-5500
            </a>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full flex flex-col bg-primary text-white rounded-lg px-2 py-3 hover:bg-secondary text-xs sm:text-sm font-medium transition"
            >
              Book Now
              <span className="text-sm sm:text-base ">Click Here for Appointment</span>
            </button>
          </div>
        </section>
      </Fade>

      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
}
