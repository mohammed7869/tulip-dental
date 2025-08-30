"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Reveal, { Fade, Zoom } from "react-awesome-reveal";
import ServiceSidebar from "@/components/ServiceSidebar";
import BookCallBtn from "../book-call-btn";
import { CheckCircle } from "lucide-react";

export default function Page() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Dental Implants",
      description:
        "Dental implants are the gold standard for replacing missing teeth, providing unmatched stability and durability.",
      points: [
        "Titanium posts integrate with your jawbone for a secure foundation",
        "Custom crowns that look and feel like natural teeth",
        "Helps preserve bone health and facial structure",
        "Long-lasting results with proper care",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Dental Bridges",
      description:
        "A bridge replaces one or more missing teeth by anchoring to the surrounding teeth or implants.",
      points: [
        "Fixed, non-removable tooth replacement",
        "Natural-looking design to blend with your smile",
        "Restores chewing function and appearance",
        "Durable materials for long-term wear",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Implant-Supported Dentures",
      description:
        "For patients missing most or all teeth, implant-supported dentures combine the security of implants with the coverage of dentures.",
      points: [
        "Stable fit - no slipping or adhesives needed",
        "Allows for confident eating and speaking",
        "Designed for comfort and natural appearance",
        "Supports jawbone health and facial shape",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Permanent Teeth Replacement in Maplewood, NJ </h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Restore Your Smile with Dental Implants & Restorations in
                Maplewood | Tulip Dental | Family & Cosmetic Dentist
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
                      src="/Images/Teeth Replacement.jpeg"
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
                <div className="desc-text-subtitle">
                  Permanent Teeth Replacement
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  About Permanent Teeth Replacement
                </h2>
                <p>
                  Losing a tooth doesn’t mean losing your smile. At Tulip Dental
                  in Maplewood, NJ, we offer permanent teeth replacement
                  solutions designed to restore function, aesthetics, and
                  confidence. Whether you’ve lost one tooth, several, or a full
                  arch, our treatments - including dental implants, bridges, and
                  implant-supported dentures - are built to last and look
                  completely natural.
                </p>
                <p>
                  We proudly serve patients from Maplewood (07040), South Orange
                  (07079), Vauxhall (07088), Irvington (07111), and nearby
                  Newark (07106 and 07112). Searching for “permanent teeth
                  replacement near me”? You’ve just found a trusted local dental
                  team ready to give you back your smile.
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>
                    Top Reasons to Choose Tulip Dental for Permanent Teeth
                    Replacement
                  </h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="text-lg  flex items-center gap-2">
                        <CheckCircle className="service-point-icon" />{" "}
                        Long-Lasting, Natural-Looking Results
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Advanced
                        Implant Technology
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" />{" "}
                        Personalized Treatment Plans
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" />{" "}
                        Comfortable, Stress-Free Procedures
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
                Our Permanent Teeth Replacement Services{" "}
              </h2>
              <p className="features-description">
                At Tulip Dental, we believe replacing missing teeth is about
                more than just restoring your smile - it’s about improving your
                overall oral health, speech, and ability to enjoy the foods you
                love. Every solution is custom-designed to match your natural
                teeth in color, shape, and fit, ensuring both comfort and
                beauty.
                <br />
                <br />
                Here’s how we restore smiles at Tulip Dental:
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
            <h2 className="faq-heading">Permanent Teeth Replacement FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long do dental implants last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With proper care, implants can last 20 years or more,
                      often for a lifetime.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are implants better than bridges?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Implants don’t require altering adjacent teeth and help
                      maintain jawbone health, making them a preferred option
                      for many patients.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Does the procedure hurt?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We use advanced techniques and anesthesia for a
                      comfortable, low-pain experience.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How soon after losing a tooth can I get an implant?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      In some cases, an implant can be placed immediately; in
                      others, healing time is needed before placement.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are implants covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Coverage varies; we’ll help you navigate insurance and
                      offer flexible payment options.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready to Restore Your Smile Permanently?
              </h2>
              <p className="features-description">
                At Tulip Dental, we make permanent teeth replacement
                comfortable, reliable, and tailored to your needs. From single
                implants to full-mouth restoration, our team is here to help you
                smile with confidence again.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
