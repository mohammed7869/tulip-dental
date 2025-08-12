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
        // "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48699.53187959969!2d-76.92187807181904!3d40.28195319387061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c116b8079e97%3A0xbb6e42c8128d46d5!2sHarrisburg%2C%20PA%2C%20USA!5e0!3m2!1sen!2sin!4v1753263853796!5m2!1sen!2sin",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.388699662395!2d-76.84668282549382!3d40.33372256068962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c79a41f0e96d%3A0xc67e52466ec7a803!2s2017%20Eg%20Dr%20%23200%2C%20Harrisburg%2C%20PA%2017112%2C%20USA!5e0!3m2!1sen!2sin!4v1754646104764!5m2!1sen!2sin"
    },
  ];
  const [selected, setSelected] = useState(locations[0]);
  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl ">
          Family & Cosmetic Dentistry in Lawnton, Harrisburg, PA (17111)
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
              <h3 className='desc-text-title'>Complete Dental Care in Lawnton | Maple Dental | Family & Cosmetic Dentist</h3>
              <p>
                At Maple Dental, we proudly provide top-quality dental care to residents of Lawnton in Harrisburg, PA (zip code 17111). Whether you're new to the area or looking for a dependable “dentist near me,” our friendly team is here to meet your needs with personalized care and advanced treatment options.
              </p>
              <p>
                Our practice is committed to serving individuals and families throughout Lawnton with services that support healthy, confident smiles—from routine cleanings to full smile transformations.
              </p>
            </Fade>
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Dental Services Available for Lawnton Patients</h3>

          <p>
            Located just minutes from Lawnton, our modern dental office is fully equipped to offer comprehensive dental services in a relaxing, welcoming environment. We proudly care for patients of all ages in the 17111 area with services such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
            <li>
              <span className="font-semibold">Emergency Dentistry</span><br />
              <span>Prompt, same-day care for dental pain, broken teeth, or unexpected issues.</span>
            </li>
            <li>
              <span className="font-semibold">Preventive Dentistry</span><br />
              <span>Routine exams, cleanings, fluoride, and preventive treatments to keep your smile healthy.</span>
            </li>
            <li>
              <span className="font-semibold">Cosmetic Dentistry</span><br />
              <span>Enhance your smile with Invisalign®, professional teeth whitening, and custom veneers.</span>
            </li>
            <li>
              <span className="font-semibold">Restorative Dentistry</span><br />
              <span>Crowns, bridges, implants, and more to restore strength, comfort, and function.</span>
            </li>
            <li>
              <span className="font-semibold">Pediatric Dentistry</span><br />
              <span>Gentle dental care for children, from infants to teens, in a fun and supportive environment.</span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className='wcu-section'>

          <div className='wcu-text-section'>
            <Fade cascade direction="up" delay={1000} duration={600}>
              <div className='wcu-title'>
                Why Lawnton Residents Choose Maple Dental?
              </div>
              <div className="wcu-desc">
                Maple Dental is a trusted choice for families in Lawnton and the surrounding 17111 area because we offer:
              </div>
              <div className='wcu-points-section'>
                <ul className='wcu-points'>
                  <li><CheckCircle />A patient-first philosophy with open, honest communication</li>
                  <li><CheckCircle />Advanced technology and modern techniques for better outcomes</li>
                  <li><CheckCircle />Same-day appointments for urgent dental needs</li>
                  <li><CheckCircle />Insurance-friendly practice with flexible financing options</li>
                  <li><CheckCircle />Convenient location near Lawnton with ample parking</li>
                </ul>
              </div>
            </Fade>
          </div>
          <div className='wcu-img-section'>
            <Zoom cascade damping={0.3} duration={800}>
              <img src="/Images/lawntown service area.webp" alt="dental" className="rounded-xl" />
            </Zoom>
          </div>

        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          <Fade direction="up" duration={1000}>
            <h2 className="features-heading">
              Schedule Your Appointment in Lawnton Today
            </h2>
            <p className="features-description">
              Whether you live right in Lawnton or elsewhere in the 17111 zip code, Maple Dental is your nearby partner in lifelong oral health. Experience the care, comfort, and convenience that local families trust.
            </p>
            <p className="features-description">
              <strong>Call us today or schedule your appointment online</strong> to join the Maple Dental family and keep your smile looking its best.
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