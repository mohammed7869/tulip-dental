"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import BookCallBtn from '@/app/services/book-call-btn';
import { Bounce, Fade, Zoom } from 'react-awesome-reveal';

export default function ServiceAreaPage() {

  const locations = [
    // {
    //   id: "bloomfield",
    //   name: "Bloomfield Avenue Newark",
    //   address: "539 Bloomfield Avenue, Suite 3\nNewark, NJ 07107",
    //   phone: "973-604-1600",
    //   hours: [
    //     "Monday: 9:00 AM - 7:00 PM",
    //     "Tuesday: 9:00 AM - 7:00 PM",
    //     "Wednesday: 9:00 AM - 7:00 PM",
    //     "Thursday: 9:00 AM - 7:00 PM",
    //     "Friday: 9:00 AM - 7:00 PM",
    //     "Saturday: 9:00 AM - 3:00 PM",
    //     "Sunday: Closed",
    //   ],
    //   mapUrl:
    //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.4354875674995!2d-74.1906044!3d40.7594038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c253e013fd8125%3A0x7497a1117e95a6d5!2s539%20Bloomfield%20Ave%2C%20Newark%2C%20NJ%2007107%2C%20USA!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    // },
    {
      id: "maplewood",
      name: "Maplewood, NJ",
      address: "1585 Springfield Avenue, Store #1, Maplewood, NJ 07040",
      phone: "973-671-5500",
      hours: [
        "Monday: 9:00 AM - 6:00 PM",
        "Tuesday: 9:00 AM - 6:00 PM",
        "Wednesday: 9:00 AM - 6:00 PM",
        "Thursday: 9:00 AM - 6:00 PM",
        "Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 3:30 PM",
        "Sunday: Closed",
      ],
      mapUrl:
        // "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48699.53187959969!2d-76.92187807181904!3d40.28195319387061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c116b8079e97%3A0xbb6e42c8128d46d5!2sHarrisburg%2C%20PA%2C%20USA!5e0!3m2!1sen!2sin!4v1753263853796!5m2!1sen!2sin",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.27123456789012!3d40.73123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a8b123456789%3A0x1234567890abcdef!2sMaplewood%2C%20NJ!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
      },
  ];
  const [selected, setSelected] = useState(locations[0]);
  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>
          Trusted Dentist in Maplewood, NJ (07040)
        </h1>
      </div>


      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-16">
        {/* Top Section: Image + Intro */}
        <div className='details-page-desc-section'>

          {/* Image Section */}
          <div className='image_section'>
            <div className="image_section-cover">
              <Zoom cascade damping={0.3} duration={800}>
                <div className="main-image">
                  <img
                    src="/Images/Servicearea3 (1).webp"
                    alt="Main Banner" className="rounded-xl"
                  />
                </div>

              </Zoom>
            </div>
          </div>

          {/* Text Section with Fade-in after delay */}
          <div className='desc-text-section'>
            <Fade cascade direction="up" delay={1000} duration={600}>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>Cosmetic & Family Dentistry Near You in Maplewood</h2>
              <p>
                Welcome to Tulip Dental Maplewood — your home for exceptional dental care in Maplewood, NJ (07040). Our experienced team is committed to offering personalized, comprehensive dentistry to families across Maplewood and surrounding areas.
              </p>
              <p>
                Whether you're looking for routine dental check-ups or advanced cosmetic procedures, our modern office is here to meet your needs with care, compassion, and convenience.
              </p>
            </Fade>
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Comprehensive Dental Services in Maplewood, NJ</h2>
          <p>
            Our conveniently located dental office in Maplewood is equipped with the latest technology to ensure your visits are comfortable, efficient, and stress-free. We proudly serve individuals and families in the 07040 area with services like:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
            <li>
              <span className="font-semibold">Emergency Dentistry</span><br />
              <span>Same-day appointments available for urgent dental needs like pain, infections, or injuries.</span>
            </li>
            <li>
              <span className="font-semibold">Preventive Dentistry</span><br />
              <span>Routine exams, cleanings, fluoride treatments, and oral hygiene education to keep your smile healthy.</span>
            </li>
            <li>
              <span className="font-semibold">Cosmetic Dentistry</span><br />
              <span>Invisalign®, teeth whitening, and porcelain veneers to help you achieve your dream smile.</span>
            </li>
            <li>
              <span className="font-semibold">Restorative Dentistry</span><br />
              <span>Crowns, bridges, and dental implants to restore function, strength, and aesthetics.</span>
            </li>
            <li>
              <span className="font-semibold">Pediatric Dentistry</span><br />
              <span>Friendly, gentle dental care for infants, children, and teens in a welcoming environment.</span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className='wcu-section'>

          <div className='wcu-text-section'>
            <Fade cascade direction="up" delay={1000} duration={600}>
              <div className='wcu-title'>
                <h2>Why Colonial Park Residents Choose Maple Dental?</h2>
              </div>
              <div className="wcu-desc">
                Families in Colonial Park and the 17109 area count on Maple Dental for personalized care and advanced treatment options. Here’s why we’re a top choice for dental care in Harrisburg:
              </div>
              <div className='wcu-points-section'>
                <ul className='wcu-points'>
                  <li><CheckCircle />Experienced team focused on your comfort and health</li>
                  <li><CheckCircle />Same-day appointments available for urgent needs</li>
                  <li><CheckCircle />Advanced technology and modern treatment methods</li>
                  <li><CheckCircle />Insurance-friendly and flexible financing options</li>
                  <li><CheckCircle />Convenient Colonial Park location near major roads and neighborhoods</li>
                </ul>
              </div>
            </Fade>
          </div>
          <div className='wcu-img-section'>
            <Zoom cascade damping={0.3} duration={800}>
              <img src="/Images/colonial park service area.webp" alt="dental" className="rounded-xl" />
            </Zoom>
          </div>

        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          <Fade direction="up" duration={1000}>
            <h2 className="features-heading">
              Book Your Appointment in Colonial Park Today
            </h2>
            <p className="features-description">
              Whether you live in Colonial Park or the surrounding 17109 area, Maple Dental is here to serve your dental needs with excellence and compassion. Don’t wait—give your smile the care it deserves.
            </p>
            <p className="features-description">
                <strong>Call today or schedule your visit online</strong> to discover the difference of dental care that puts you first.
            </p>
            <BookCallBtn />
          </Fade>
        </div>

        {/* Map Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">

          {/* Info Block */}
          <div className="flex-1 h-[400px] text-center relative bg-primary rounded-lg p-8 text-white shadow-lg overflow-hidden space-y-4">
            <Bounce>
              <h2 className="text-2xl font-bold">{selected.name}</h2>
            </Bounce>
            <p className="whitespace-pre-line text-center text-white">{selected.address}</p>

            <h3 className="text-md font-medium mt-4">Hours of Operation:</h3>
            <Fade delay={400}>
              <ul className="text-sm text-gray-700">
                {selected.hours.map((hour, i) => {
                  const isToday = new Date().getDay() === (i + 1) % 7;
                  return (
                    <li key={i} className={`text-white ${isToday ? 'bg-white/10 rounded-md border-2 border-secondary' : ''
                      }`}>{hour}</li>
                  )
                })}
              </ul>
            </Fade>

          </div>

          {/* Single Map */}
          <div className="flex-1 w-full h-[400px] rounded-xl overflow-hidden shadow">
            <iframe
              src={selected.mapUrl}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 