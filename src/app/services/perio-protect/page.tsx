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

export default function PerioProtectPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Comprehensive Gum Evaluation",
      description:
        "We start by assessing your gum health and determining if Perio Protect is the right treatment for you.",
      points: [
        "Thorough periodontal examination",
        "Measurement of pocket depths to track infection",
        "Personalized treatment recommendations",
        "Education on gum disease prevention",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Custom Perio Protect Trays",
      description:
        "We create precise, comfortable trays that deliver antimicrobial medication deep under your gums.",
      points: [
        "Made from accurate impressions of your teeth",
        "Designed for comfort and secure fit",
        "Medication reaches bacteria hiding beneath the gumline",
        "Simple daily use at home",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Ongoing Maintenance & Monitoring",
      description:
        "We monitor your progress to ensure the treatment is working effectively and adjust as needed.",
      points: [
        "Regular check-ups to track gum health",
        "Additional cleanings if necessary",
        "Tips for optimal at-home use",
        "Long-term prevention strategies to keep gums healthy",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Perio Protect Gum Disease Treatment in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Gentle, Non-Surgical Gum Care with Perio Protect | Tulip Dental
                | Family & Preventive Dentist
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
                      src="/Images/Perio Protect Image.jpeg"
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
                <div className="desc-text-subtitle">Perio Protect</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  About Perio Protect
                </h2>
                <p>
                  Gum disease is one of the most common oral health issues, and
                  when left untreated, it can lead to tooth loss and other
                  serious health concerns. At Tulip Dental in Maplewood, NJ, we
                  offer Perio Protect, an innovative, non-surgical treatment
                  that uses custom-fit trays to deliver medication directly
                  below the gumline - where brushing and flossing can’t reach.
                  This approach helps reduce harmful bacteria, improve gum
                  health, and freshen breath, all from the comfort of your home.
                </p>
                <p>
                  We proudly serve patients from Maplewood (07040), South Orange
                  (07079), Vauxhall (07088), Irvington (07111), and nearby
                  Newark (07106 and 07112). Searching for “gum disease treatment
                  near me”? You’ve found a caring, advanced dental team ready to
                  help restore your oral health.
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>Top Reasons to Choose Tulip Dental for Perio Protect</h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Non-Surgical, Comfortable Gum Treatment
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Custom-Fit Trays for Maximum
                        Effectiveness
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Treats Gum Disease at Home Between
                        Visits
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Freshens Breath and Improves Overall
                        Oral Health
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Convenient Location in Maplewood, NJ
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
              <h2 className="features-heading">Our Perio Protect Services</h2>
              <p className="features-description">
                At Tulip Dental, we believe gum care should be gentle,
                effective, and convenient. Perio Protect allows you to take
                control of your gum health with an easy-to-use system tailored
                to your needs.
                <br />
                <br />
                Here’s how we help keep your gums healthy:
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
                        <CheckCircle className="text-[#66aef2] shrink-0 mt-[2px]" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="faq-section">
            <h2 className="faq-heading">Perio Protect FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What is Perio Protect used for?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      It’s used to treat and manage gum disease by delivering
                      medication directly into infected gum pockets.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Does Perio Protect replace cleanings?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No - it works best alongside professional cleanings and
                      regular dental visits.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How often do I use the trays?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most patients wear the trays for 10–15 minutes once or
                      twice a day, as directed.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Is Perio Protect painful?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No - the trays are comfortable, and the treatment is
                      completely non-invasive.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How soon will I see results?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Many patients notice fresher breath and healthier gums
                      within a few weeks of consistent use.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready to Improve Your Gum Health?
              </h2>
              <p className="features-description">
                At Tulip Dental, we make gum disease treatment simple,
                comfortable, and effective with Perio Protect. Protect your
                smile and your overall health with this innovative at-home
                therapy.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
