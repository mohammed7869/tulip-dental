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
      icon: "/Images/icons/Root-Canal.png",
      title: "Root Canal Therapy",
      description:
        "Root canal treatment removes infected or damaged pulp inside the tooth, cleans and disinfects the area, and seals it to prevent reinfection. Our modern techniques make the process as comfortable and efficient as possible.",
      points: [
        "Local anesthesia for pain-free treatment",
        "Gentle approach to protect surrounding tissues",
        "Advanced rotary instruments for precision",
        "Restorations (like crowns) for strength and protection",
      ],
    },
    {
      icon: "/Images/icons/Endodontic-Retreatment.png",
      title: "Endodontic Retreatment",
      description:
        "If a tooth that has already had a root canal becomes reinfected or painful, we can perform endodontic retreatment to restore health and function.",
      points: [
        "Careful removal of old materials",
        "Thorough cleaning and disinfection",
        "Replacement sealing for long-term success",
        "Preservation of your existing tooth structure",
      ],
    },
    {
      icon: "/Images/icons/Emergency-Endodontic.png",
      title: "Emergency Endodontic Care",
      description:
        "Tooth pain can’t wait - that’s why we offer prompt, same-day appointments for urgent endodontic needs.",
      points: [
        "Fast pain relief and diagnosis",
        "Treatment to prevent spread of infection",
        "Flexible scheduling for emergencies",
        "Follow-up care to ensure lasting results",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Endodontics & Root Canal Treatment in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Gentle, Pain-Free Endodontics Treatment in Maplewood | Tulip
                Dental | Family & Cosmetic Dentist
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
                    <img src="/Images/Endodontics.jpeg" alt="Main Banner" />
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
                <div className="desc-text-subtitle">Endodontics </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  About Endodontics
                </h2>
                <p>
                  Endodontics is the branch of dentistry focused on diagnosing
                  and treating problems inside the tooth - specifically the pulp
                  and surrounding tissues. At Tulip Dental in Maplewood, NJ, we
                  use advanced technology and compassionate care to make root
                  canal therapy comfortable, precise, and stress-free. If you’re
                  experiencing tooth pain, sensitivity to hot or cold, or
                  swelling, you may have an infection that requires prompt
                  treatment. Our goal is to save your natural tooth and relieve
                  discomfort while preserving your oral health for years to
                  come.
                </p>
                <p>
                  We proudly serve patients from Maplewood (07040), South Orange
                  (07079), Vauxhall (07088), Irvington (07111), and nearby
                  Newark (07106 and 07112). Searching for “root canal near me”?
                  You’ve just found a dental team that truly cares about your
                  comfort and your smile.
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>
                    Top Reasons to Choose Tulip Dental for Endodontic Care
                  </h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Gentle, Pain-Free Treatment
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Advanced Digital Imaging for Precision
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Same-Day Emergency Appointments
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Focus on Saving Your Natural Teeth
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
              <h2 className="features-heading">Our Endodontic Services </h2>
              <p className="features-description">
                At Tulip Dental, endodontic care is about more than just
                relieving pain - it’s about restoring your oral health,
                preserving your natural teeth, and preventing future
                complications. We combine advanced tools, proven techniques, and
                a compassionate touch to ensure every patient receives the best
                possible outcome.
                <br />
                <br />
                Here’s how we care for your smile at Tulip Dental:
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
            <h2 className="faq-heading">Endodontics FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is root canal treatment painful?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With modern anesthesia and techniques, root canals are
                      typically no more uncomfortable than getting a filling.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long does a root canal take?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most treatments are completed in one visit, usually
                      lasting 60–90 minutes.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I know if I need a root canal?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Common signs include persistent tooth pain, sensitivity to
                      hot/cold, swelling, or darkening of the tooth.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will my tooth look different after a root canal?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We typically restore treated teeth with a crown, giving
                      them a natural look and strength.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long does a root canal last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With proper care, a root canal-treated tooth can last a
                      lifetime.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready to Relieve Tooth Pain &amp; Save Your Smile?
              </h2>
              <p className="features-description">
                At Tulip Dental, we make root canal therapy comfortable,
                efficient, and effective—so you can get back to smiling without
                pain. Whether you need urgent care or are looking for a trusted
                dentist for preventive endodontics, we’re here to help.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
