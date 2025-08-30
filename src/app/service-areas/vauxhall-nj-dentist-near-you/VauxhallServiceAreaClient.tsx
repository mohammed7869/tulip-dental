"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import BookCallBtn from "@/app/services/book-call-btn";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import BookCallBtnForServiceAreas from "@/app/services/book-call-btn-for-serviceAreas";

export default function VauxhallServiceAreaClient() {
  const locations = [
    {
      id: "vauxhall",
      name: "Vauxhall, NJ",
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
        <h1>Family & Cosmetic Dentist in Vauxhall, NJ 07088 </h1>
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
                    src="/Images/vauxhall.jpeg"
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
                Comprehensive Dental Services in Vauxhall | Tulip Dental |
                Trusted Dentist Near You
              </h2>
              <p>
                At Tulip Dental, we proudly serve the residents of Vauxhall, NJ
                07088, with compassionate, high-quality dental care. Whether
                you’re searching for a reliable “dentist near me” or are new to
                the area, our skilled team provides complete care for patients
                of all ages in a modern, welcoming environment.
              </p>
              <p>
                From preventive cleanings to advanced cosmetic treatments, our
                goal is to help you achieve a healthy, beautiful smile that
                lasts a lifetime.
              </p>
            </Fade>
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Complete Dental Care for Every Stage of Life
          </h2>
          <Fade cascade direction="up" delay={1000} duration={600}>
            <p>
              Our conveniently located office near Vauxhall offers the latest
              dental technology and amenities for your comfort. We provide a
              full spectrum of dental services, including:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
              <li>
                <h3 className="text-lg font-semibold">Emergency Dentistry</h3>
                <p>
                  Same-day appointments for urgent pain, dental injuries, or
                  emergencies.
                </p>
              </li>

              <li>
                <h3 className="text-lg font-semibold">Preventive Dentistry</h3>
                <p>
                  Routine exams, professional cleanings, and proactive oral
                  health guidance.
                </p>
              </li>

              <li>
                <h3 className="text-lg font-semibold">Cosmetic Dentistry</h3>
                <p>
                  Professional whitening, veneers, and smile makeover
                  treatments.
                </p>
              </li>

              <li>
                <h3 className="text-lg font-semibold">Restorative Dentistry</h3>
                <p>
                  Crowns, bridges, dentures, and dental implants to restore
                  function and appearance.
                </p>
              </li>

              <li>
                <h3 className="text-lg font-semibold">Pediatric Dentistry</h3>
                <p>
                  Gentle, kid-friendly care for infants, children, and teens.
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
                <h2>Why Vauxhall Families Choose Tulip Dental</h2>
              </div>
              <div className="wcu-desc">
                Patients from Vauxhall (07088) and nearby Maplewood (07040),
                South Orange (07079), Irvington (07111), and Newark (07106,
                07112) trust Tulip Dental because:
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="service-point-icon mt-1 shrink-0" />
                    <span>Personalized, patient-first dental care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="service-point-icon mt-1 shrink-0" />
                    <span>Advanced technology for precision and comfort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="service-point-icon mt-1 shrink-0" />
                    <span>Same-day emergency visits available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="service-point-icon mt-1 shrink-0" />
                    <span>Insurance-friendly with payment plans offered</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="service-point-icon mt-1 shrink-0" />
                    <span>
                      Convenient location serving the entire Union &amp; Essex
                      County area
                    </span>
                  </li>
                </ul>
              </div>
            </Fade>
          </div>
          <div className="wcu-img-section">
            <Zoom cascade damping={0.3} duration={800}>
              <img
                src="/Images/maplewood-1.jpeg"
                alt="Tulip Dental in Vauxhall"
                className="rounded-xl"
              />
            </Zoom>
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          <Fade direction="up" duration={1000}>
            <h2 className="features-heading">
              Schedule Your Appointment in Vauxhall Today{" "}
            </h2>
            <p className="features-description">
              Whether you’re right in Vauxhall or just minutes away in a
              neighboring town, Tulip Dental is here to provide exceptional care
              for your smile. If you’ve been looking for a “dentist near me” who
              combines expertise with compassion, your search ends here.
            </p>

            <BookCallBtnForServiceAreas />
          </Fade>
        </div>

        {/* Map Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Info Block */}
          <div className="flex-1 h-[400px] text-center relative bg-[#0087ce] rounded-lg p-8 text-white shadow-lg overflow-hidden space-y-4">
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
