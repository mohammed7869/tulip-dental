"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import BookCallBtn from '@/app/services/book-call-btn';
import { Bounce, Fade, Zoom } from 'react-awesome-reveal';

export default function ServiceAreasPage() {

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
      id: "harrisburg",
      name: "Harrisburg, PA",
      address: "2017 Eg Drive, Suite 200, Harrisburg, PA 17110",
      phone: "717-745-2700",
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
        // "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.388699662395!2d-76.84668282549382!3d40.33372256068962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c79a41f0e96d%3A0xc67e52466ec7a803!2s2017%20Eg%20Dr%20%23200%2C%20Harrisburg%2C%20PA%2017112%2C%20USA!5e0!3m2!1sen!2sin!4v1754646104764!5m2!1sen!2sin",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.388699662395!2d-76.84668282549382!3d40.33372256068962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c79a41f0e96d%3A0xc67e52466ec7a803!2s2017%20Eg%20Dr%20%23200%2C%20Harrisburg%2C%20PA%2017112%2C%20USA!5e0!3m2!1sen!2sin!4v1754646104764!5m2!1sen!2sin"
    },
    // {
    //   id: "downtown",
    //   name: "Downtown Newark",
    //   address: "240 Mulberry Street, 2nd floor\nNewark, NJ 07102",
    //   phone: "973-755-3500",
    //   hours: [
    //     "Monday: 9:00 AM - 7:00 PM",
    //     "Tuesday: 9:00 AM - 5:00 PM",
    //     "Wednesday: 9:00 AM - 6:30 PM",
    //     "Thursday: 9:00 AM - 6:30 PM",
    //     "Friday: 9:00 AM - 6:30 PM",
    //     "Saturday: 9:00 AM - 3:00 PM",
    //     "Sunday: Closed",
    //   ],
    //   mapUrl:
    //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.281485707488!2d-74.1719829!3d40.7339645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c253788878b48d%3A0x249918dd544f7426!2s240%20Mulberry%20St%2C%20Newark%2C%20NJ%2007102%2C%20USA!5e0!3m2!1sen!2sin!4v1710000000001!5m2!1sen!2sin",
    // },
    // {
    //   id: "east-orange",
    //   name: "Park Avenue East Orange",
    //   address: "90 Washington Street, Suite 309\nEast Orange, NJ 07017",
    //   phone: "973-604-1900",
    //   hours: [
    //     "Monday: 9:00 AM - 7:00 PM",
    //     "Tuesday: 9:00 AM - 7:00 PM",
    //     "Wednesday: 9:00 AM - 7:00 PM",
    //     "Thursday: 9:00 AM - 7:00 PM",
    //     "Friday: 8:30 AM - 5:00 PM",
    //     "Saturday: 9:00 AM - 3:00 PM",
    //     "Sunday: Closed",
    //   ],
    //   mapUrl:
    //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.0295803954474!2d-74.2159333!3d40.7681949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2548ad47a57d9%3A0xc4f0a99d6a6ba33c!2s90%20Washington%20St%2C%20East%20Orange%2C%20NJ%2007017%2C%20USA!5e0!3m2!1sen!2sin!4v1710000000002!5m2!1sen!2sin",
    // },
  ];
  const [selected, setSelected] = useState(locations[0]);
  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>
          Cosmetic & Family Dentistry in Harrisburg, PA
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
                    src="/Images/Servciearea5 (1).webp"
                    alt="Main Banner" className="rounded-xl"
                  />
                </div>

              </Zoom>
            </div>
          </div>

          {/* Text Section with Fade-in after delay */}
          <div className='desc-text-section'>
            <Fade cascade direction="up" delay={1000} duration={600}>
              <h3 className='desc-text-title'>Comprehensive Dental Services in Harrisburg | Maple Dental | Family & Cosmetic Dentist</h3>
              <p>
                At Maple Dental Harrisburg, we’re proud to deliver high-quality, family-friendly dental care to residents of Harrisburg, PA, including the areas of 17110, 17109, 17111, and 17112. Whether you’re new to the area or just searching for a reliable “dentist near me,” we’re right here in your neighborhood with state-of-the-art services for every smile.
              </p>
              <p>
                Our compassionate team provides everything from preventive cleanings to advanced cosmetic and restorative treatments. We treat patients of all ages and welcome you to join our dental family.
              </p>
            </Fade>
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Trusted Dental Care for Every Stage of Life</h3>
          <p>
            Our centrally located Harrisburg office is fully equipped with the latest dental technology and amenities to make your visit comfortable, efficient, and stress-free. We offer a wide range of services, including:
          </p>
          <p>
            Our Harrisburg dental office is conveniently located to serve patients in 17110, 17109, 17111, and 17112. We provide comprehensive dental services under one roof to make quality care accessible for your entire family.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
            <li>
              <span className="font-semibold">Emergency Dentistry</span><br />
              <span>Same-day care for dental pain, injuries, or urgent needs.</span>
            </li>
            <li>
              <span className="font-semibold">Preventive Dentistry</span><br />
              <span>Routine cleanings, exams, and oral health education to maintain long-term wellness.</span>
            </li>
            <li>
              <span className="font-semibold">Cosmetic Dentistry</span><br />
              <span>Invisalign®, teeth whitening, and veneers to enhance your smile.</span>
            </li>
            <li>
              <span className="font-semibold">Restorative Dentistry</span><br />
              <span>Crowns, bridges, and implants to restore strength and function.</span>
            </li>
            <li>
              <span className="font-semibold">Pediatric Dentistry</span><br />
              <span>Gentle, friendly dental care for infants, kids, and teens.</span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className='wcu-section'>

          <div className='wcu-text-section'>
            <Fade cascade direction="up" delay={1000} duration={600}>
              <div className='wcu-title'>
                Why Harrisburg Families Choose Maple Dental?
              </div>
              <div className="wcu-desc">
                Families throughout Harrisburg, including zip codes 17110, 17109, 17111, and 17112, trust us for a reason. Our commitment to patient care goes beyond the basics:
              </div>
              <div className='wcu-points-section'>
                <ul className='wcu-points'>
                  <li><CheckCircle />Patient-centered approach with honest communication</li>
                  <li><CheckCircle />Advanced tools for accurate and comfortable treatment</li>
                  <li><CheckCircle />Flexible scheduling, including same-day visits</li>
                  <li><CheckCircle />Insurance-friendly with payment plans available </li>
                  <li><CheckCircle />Conveniently located dental office near you</li>
                </ul>
              </div>
            </Fade>
          </div>
          <div className='wcu-img-section'>
            <Zoom cascade damping={0.3} duration={800}>
              <img
                src="/Images/harrisburg service area.webp"
                alt="dental"
                className="rounded-xl" // or use "rounded-xl", "rounded-full", etc.
              />
            </Zoom>
          </div>


        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          <Fade direction="up" duration={1000}>
            <h2 className="features-heading">
              Schedule Your Appointment in Harrisburg Today
            </h2>
            <p className="features-description">
              Whether you’re in uptown (17110), midtown (17109), east Harrisburg (17111), or Linglestown-area (17112), Maple Dental Harrisburg is just around the corner. If you’ve been searching for a “dentist near me” that combines compassion with clinical excellence—you’ve found your home.
            </p>
            <p className="features-description">
              <strong>Call us today or schedule your appointment online</strong> to experience family dentistry done differently.
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