"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Reveal, { Fade, Zoom } from "react-awesome-reveal";
import Link from "next/link";
import ServiceSidebar from "@/components/ServiceSidebar";
import BookCallBtn from "../book-call-btn";
import { CheckCircle } from "lucide-react";

export default function SameDayPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Same-Day Crowns & Restorations",
      description:
        "Our in-house technology allows us to design, create, and place dental crowns in just one visit - no temporary crowns or second appointments needed.",
      points: [
        "Digital impressions for quick, comfortable scans",
        "High-quality materials for strength and aesthetics",
        "Natural look and feel",
        "Saves you multiple trips to the dentist",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Emergency Dental Care",
      description:
        "Toothaches, broken teeth, and sudden accidents require immediate attention to prevent further damage. We make time in our schedule every day for emergencies.",
      points: [
        "Rapid pain relief and treatment",
        "On-the-spot repairs for broken teeth or restorations",
        "Infection control to protect your health",
        "Restorative options to save your natural teeth",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Immediate Cosmetic Repairs",
      description:
        "If a visible tooth is chipped, cracked, or damaged, we offer same-day bonding and cosmetic fixes so you can smile with confidence again right away.",
      points: [
        "Color-matched bonding for a seamless look",
        "Quick repairs without sacrificing quality",
        "Durable materials for long-lasting results",
        "Perfect for pre-event touch-ups or urgent needs",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Same Day Dentistry in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Fast, Reliable Dental Care When You Need It Most in Maplewood |
                Tulip Dental | Family & Cosmetic Dentist
              </h2>
            </Fade>
            {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <Zoom cascade damping={0.3} duration={800}>
                  <div className="main-image">
                    <img
                      src="/Images/Same-day Dentistry.jpeg"
                      alt="Main Banner"
                    />
                  </div>
                  {/* <img
              src="/Images/banners/s1.webp"
              className="overlay-image"
              alt="Overlay"
            /> */}
                </Zoom>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="desc-text-subtitle">Same-Day Dentistry</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  About Same Day Dentistry
                </h2>
                <p>
                  Life doesn’t always give you time to wait for a dental
                  appointment - that’s where same day dentistry comes in. At
                  Tulip Dental in Maplewood, NJ, we provide urgent and
                  on-the-spot treatments for emergencies, broken restorations,
                  toothaches, and other immediate dental needs. Whether you’ve
                  chipped a tooth, lost a crown, or are experiencing sudden
                  discomfort, our team is here to get you smiling again the very
                  same day.
                </p>
                <p>
                  We proudly serve patients from Maplewood (07040), South Orange
                  (07079), Vauxhall (07088), Irvington (07111), and nearby
                  Newark (07106 and 07112). Searching for “same day dentist near
                  me”? You’ve just found a local dental team ready to help -
                  fast.
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>
                    Top Reasons to Choose Tulip Dental for Same Day Dentistry
                  </h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Prompt
                        Care Without Long Wait Times
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Emergency
                        Appointments Available Daily
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Advanced
                        Technology for Faster Results
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Wide
                        Range of Immediate Treatment Options
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" />{" "}
                        Convenient Location in Maplewood, NJ
                      </h3>
                    </li>
                  </ul>
                </div>
              </Fade>
            </div>

            <div className="wcu-img-section">
              <Zoom cascade damping={0.3} duration={800}>
                <img
                  className="bdr-doctor-img"
                  src="/Images/banners/top-reasons.jpg"
                  alt="dental"
                />
              </Zoom>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Our Same Day Dentistry Services{" "}
              </h2>
              <p className="features-description">
                At Tulip Dental, we believe urgent dental care should be just as
                thorough and high-quality as planned treatments. That’s why we
                combine efficiency with precision - ensuring you leave our
                office both comfortable and confident in your smile.
                <br />
                <br />
                Here’s how we can help you on the same day you call:
              </p>
            </Fade>

            <div className="features-grid">
              {features.map((service, idx) => (
                <div className="feature-card" key={idx}>
                  <div className="flex flex-col items-start mb-3">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 mb-2"
                    />
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                  <ul className="feature-list">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="feature-list-item flex items-start gap-2"
                      >
                        <CheckCircle className="text-primary shrink-0 mt-[2px]" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="faq-section">
            <h2 className="faq-heading">Same Day Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What qualifies as same day dentistry?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Any dental treatment completed within a single
                      visit—including emergencies, repairs, and new
                      restorations—can be considered same day dentistry.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Do you accept walk-ins?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We recommend calling ahead so we can prepare for your
                      visit, but we do our best to accommodate walk-in patients
                      in need.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How quickly can I get a crown at Tulip Dental?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With our same-day crown technology, you can get a
                      permanent crown in just a few hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will same day treatment cost more?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Not necessarily—costs depend on the procedure, but we
                      offer flexible payment options and accept most insurance
                      plans.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can cosmetic issues be fixed the same day?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes—bonding, contouring, and even some veneer repairs can
                      be done in a single visit.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready for Fast, Expert Dental Care?
              </h2>
              <p className="features-description">
                At Tulip Dental, we make it easy to get the treatment you
                need—right when you need it. From same-day crowns to emergency
                repairs, our skilled team is here to restore your smile without
                delay.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
