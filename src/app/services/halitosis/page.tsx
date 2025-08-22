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

export default function Page() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Comprehensive Oral Evaluation",
      description:
        "Our dentists will perform a detailed exam to identify the root cause of your bad breath.",
      points: [
        "Review of oral hygiene habits and health history",
        "Gum health assessment for signs of periodontal disease",
        "Screening for dry mouth and other contributing factors",
        "Personalized recommendations for improvement",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Professional Cleanings & Gum Therapy",
      description:
        "Removing plaque, tartar, and bacteria from the teeth and gums is key to reducing odors.",
      points: [
        "Deep cleaning (scaling and root planing) for gum disease",
        "Targeted antibacterial rinses and treatments",
        "Gentle, thorough plaque removal",
        "Regular maintenance to keep bacteria under control",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Personalized Fresh Breath Plan",
      description:
        "We’ll help you maintain long-term oral freshness with simple, effective steps.",
      points: [
        "Recommendations for at-home care products",
        "Diet and hydration guidance to reduce odor",
        "Specialized rinses or mouth sprays for ongoing freshness",
        "Follow-up visits to ensure lasting results",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Halitosis Treatment in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Fresh Breath & Renewed Confidence with Halitosis Care in
                Maplewood | Tulip Dental | Family & Cosmetic Dentistry
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
                      src="/Images/banners/Halitosis.jpeg"
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
                <div className="desc-text-subtitle">Halitosis</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  About Halitosis
                </h2>
                <p>
                  Bad breath (halitosis) can be embarrassing, affect
                  relationships, and lower self-confidence. At Tulip Dental in
                  Maplewood, NJ, we go beyond just masking odors - we identify
                  the root cause, whether it’s gum disease, dry mouth, poor oral
                  hygiene, dietary factors, or other medical conditions. With
                  professional cleanings, gum treatments, and personalized
                  hygiene plans, we’ll help restore fresh breath and peace of
                  mind.
                </p>
                <p>
                  We proudly serve patients from Maplewood (07040), South Orange
                  (07079), Vauxhall (07088), Irvington (07111), and nearby
                  Newark (07106 and 07112). Searching for “bad breath dentist
                  near me”? You’ve found a compassionate, local team ready to
                  help.
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>
                    Top Reasons to Choose Tulip Dental for Halitosis Treatment
                  </h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Thorough Diagnosis of Underlying Causes
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Targeted Treatments for Lasting
                        Freshness
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Gentle Care in a Judgment-Free
                        Environment
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Education for Better At-Home Oral
                        Hygiene
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
              <h2 className="features-heading">
                Our Halitosis Treatment Services{" "}
              </h2>
              <p className="features-description">
                At Tulip Dental, we understand that halitosis isn’t just about
                breath - it’s about confidence and quality of life. We take a
                personalized approach to address both the symptoms and the
                underlying cause, ensuring you get real, lasting results.
              </p>
              <p className="features-description">Here’s how we can help: </p>
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
                      <li key={i} className="feature-list-item">
                        <CheckCircle /> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="faq-section">
            <h2 className="faq-heading">Halitosis FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What causes bad breath?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Common causes include poor oral hygiene, gum disease, dry
                      mouth, certain foods, smoking, and underlying medical
                      conditions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can gum disease cause bad breath?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes – bacteria from gum infections produce strong odors,
                      making gum treatment a key part of halitosis care.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will mouthwash alone fix bad breath?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No – while mouthwash can temporarily mask odors,
                      professional treatment addresses the source for lasting
                      results.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How soon will I notice improvement?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Many patients notice fresher breath immediately after
                      treatment, especially following a deep cleaning.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is halitosis a sign of a bigger health problem?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Sometimes – persistent bad breath can be linked to sinus
                      issues, digestive problems, or other conditions. We’ll
                      help identify if further medical evaluation is needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready for Fresh Breath & Renewed Confidence?
              </h2>
              <p className="features-description">
                At Tulip Dental, we make halitosis treatment comfortable,
                discreet, and effective. Whether your bad breath is occasional
                or persistent, we’ll help you get to the root of the problem and
                keep your smile fresh every day.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
