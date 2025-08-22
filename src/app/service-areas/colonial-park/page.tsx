"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import BookCallBtn from "@/app/services/book-call-btn";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import BookCallBtnForServiceAreas from "@/app/services/book-call-btn-for-serviceAreas";

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
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6047.5999171140365!2d-74.256008!3d40.72242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3acfa56220c03%3A0x4ed24acaf264373a!2s1585%20Springfield%20Ave%2C%20Maplewood%2C%20NJ%2007040%2C%20USA!5e0!3m2!1sen!2sin!4v1755873013308!5m2!1sen!2sin",
    },
  ];
  const [selected, setSelected] = useState(locations[0]);
  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>Family & Cosmetic Dentist in Irvington, NJ 07111</h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-16">
        {/* Top Section: Image + Intro */}
        <div className="details-page-desc-section">
          {/* Image Section */}
          <div className="image_section">
            <div className="image_section-cover">
              <Zoom cascade damping={0.3} duration={800}>
                <div className="main-image">
                  <img
                    src="/Images/Irvington.jpg"
                    alt="Main Banner"
                    className="rounded-xl"
                  />
                </div>
              </Zoom>
            </div>
          </div>

          {/* Text Section with Fade-in after delay */}
          <div className="desc-text-section">
            <Fade cascade direction="up" delay={1000} duration={600}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                Comprehensive Dental Services in Irvington | Tulip Dental |
                Trusted Dentist Near You{" "}
              </h2>
              <p>
                At Tulip Dental, we’re proud to bring exceptional, personalized
                dental care to residents of Irvington, NJ 07111, and nearby
                communities. Whether you’re new to the area or looking for a
                dependable “dentist near me,” we offer state-of-the-art
                treatments designed for patients of all ages, from children to
                seniors.
              </p>
              <p>
                Our friendly, highly skilled team provides everything from
                routine checkups to advanced smile makeovers-all in a
                comfortable and modern dental setting.
              </p>
            </Fade>
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Complete Dental Care for Every Smile
          </h2>
          <Fade cascade direction="up" delay={1000} duration={600}>
            <p>
              Our conveniently located office near Irvington is equipped with
              the latest technology and amenities to make your visit
              comfortable, efficient, and stress-free. We provide a full range
              of dental services under one roof, including:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
              <li>
                <h3 className="text-lg font-semibold">Emergency Dentistry</h3>
                <p>
                  Same-day treatment for urgent pain, dental injuries, or
                  emergencies.
                </p>
              </li>

              <li>
                <h3 className="text-lg font-semibold">Preventive Dentistry</h3>
                <p>
                  Comprehensive exams, cleanings, and long-term oral health
                  planning.
                </p>
              </li>

              <li>
                <h3 className="text-lg font-semibold">Cosmetic Dentistry</h3>
                <p>
                  Professional teeth whitening, veneers, and smile enhancements.
                </p>
              </li>

              <li>
                <h3 className="text-lg font-semibold">Restorative Dentistry</h3>
                <p>
                  Crowns, bridges, and dental implants to restore function and
                  aesthetics.
                </p>
              </li>

              <li>
                <h3 className="text-lg font-semibold">Pediatric Dentistry</h3>
                <p>
                  Gentle, compassionate dental care for infants, children, and
                  teens.
                </p>
              </li>
            </ul>
          </Fade>
        </div>

        {/* Why Choose Us Section */}
        <div className="wcu-section">
          <div className="wcu-text-section">
            <Fade cascade direction="up" delay={1000} duration={600}>
              <div className="wcu-title">
                <h2>Why Irvington Families Choose Tulip Dental</h2>
              </div>
              <div className="wcu-desc">
                Families in Irvington (07111) and nearby Maplewood (07040),
                South Orange (07079), Vauxhall (07088), and Newark (07106,
                07112) choose us because:
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <CheckCircle /> We focus on personalized care for every
                    patient
                  </li>
                  <li>
                    <CheckCircle /> Advanced technology ensures precision and
                    comfort
                  </li>
                  <li>
                    <CheckCircle /> Same-day emergency appointments available
                  </li>
                  <li>
                    <CheckCircle /> Insurance-friendly with flexible payment
                    options
                  </li>
                  <li>
                    <CheckCircle /> Convenient location close to Irvington and
                    surrounding areas
                  </li>
                </ul>
              </div>
            </Fade>
          </div>
          <div className="wcu-img-section">
            <Zoom cascade damping={0.3} duration={800}>
              <img
                src="/Images/Irvington-1.jpeg"
                alt="Tulip Dental in Irvington"
                className="rounded-xl"
              />
            </Zoom>
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          <Fade direction="up" duration={1000}>
            <h2 className="features-heading">
              Schedule Your Appointment in Irvington Today{" "}
            </h2>
            <p className="features-description">
              Whether you’re in the heart of Irvington or nearby neighborhoods,
              Tulip Dental is your trusted local dentist. If you’ve been
              searching for a “dentist near me” who combines compassion with
              clinical excellence, you’ve found your home.
            </p>
            <BookCallBtnForServiceAreas />
          </Fade>
        </div>

        {/* Map Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Info Block */}
          <div className="flex-1 h-[400px] text-center relative bg-primary rounded-lg p-8 text-white shadow-lg overflow-hidden space-y-4">
            <Bounce>
              <h2 className="text-2xl font-bold">{selected.name}</h2>
            </Bounce>
            <p className="whitespace-pre-line text-center text-white">
              {selected.address}
            </p>

            <h3 className="text-md font-medium mt-4">Hours of Operation:</h3>
            <Fade delay={400}>
              <ul className="text-sm text-gray-700">
                {selected.hours.map((hour, i) => {
                  const isToday = new Date().getDay() === (i + 1) % 7;
                  return (
                    <li
                      key={i}
                      className={`text-white ${
                        isToday
                          ? "bg-white/10 rounded-md border-2 border-secondary"
                          : ""
                      }`}
                    >
                      {hour}
                    </li>
                  );
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
