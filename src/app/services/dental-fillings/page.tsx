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

export default function DentalFillingPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Our Most Common Dental Filling Options",
      description:
        "We carefully choose the right material for function and aesthetics.",
      points: [
        "Tooth-Colored Composite Resin",
        "Replacement of Old Amalgam Fillings",
        "Cosmetic Recontouring with Bonding",
        "Preventive Fillings for Early Decay",
        "Minimally Invasive Cavity Treatment",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "How Fillings Restore Your Smile",
      description:
        "Dental fillings do more than just patch a cavity – they help preserve your overall oral health.",
      points: [
        "Stop cavity progression and tooth pain",
        "Restore natural tooth shape and strength",
        "Protect against future decay",
        "Improve chewing and speech",
        "Blend seamlessly with your smile",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Dental Fillings Near You – Areas We Serve",
      description:
        "If you’re in or around Maplewood and need a cavity treated, we’re just a short drive away:",
      points: [
        "Maplewood – 07040",
        "South Orange – 07079",
        "Vauxhall – 07088",
        "Irvington – 07111",
        "Newark – 07106 & 07112",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Dental Fillings in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Repair Cavities with Safe, Natural-Looking Fillings in Maplewood
                | Tulip Dental | Family & Cosmetic Dentist{" "}
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
                    <img src="/Images/dental-fillings.png" alt="Main Banner" />
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
                <div className="desc-text-subtitle">Dental Fillings</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  About Dental Fillings
                </h2>
                <p>
                  Dental fillings are one of the most common and effective ways
                  to treat cavities and prevent further tooth damage. At Tulip
                  Dental in Maplewood, NJ, we use tooth-colored, mercury-free
                  materials to restore strength and appearance-without the
                  metallic look of traditional fillings. Whether it’s your first
                  filling or a replacement for an old one, our skilled team
                  ensures your treatment is comfortable and long-lasting.{" "}
                </p>
                <p>
                  We proudly serve Maplewood (07040), South Orange (07079),
                  Vauxhall (07088), Irvington (07111), and nearby Newark (07106,
                  07112). Searching for “dental fillings near me”? We’ve got you
                  covered.{" "}
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>Why Choose Tulip Dental for Fillings?</h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Natural-Looking Results
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Safe, Mercury-Free Materials
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Gentle, Painless Cavity Repair
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Quick Treatment, Long-Lasting Results
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Convenient & Friendly Local Care
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
              <h2 className="features-heading">Types of Fillings We Offer</h2>
              <p className="features-description">
                Every smile is different, and so are the solutions we provide.
                That’s why we offer a range of dental filling options tailored
                to the location of your cavity, the extent of the damage, and
                your aesthetic preferences.
                <br />
                <br />
                Here’s What Makes Our Root Canal Services Different:{" "}
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
            <h2 className="faq-heading">Dental Fillings FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What is a dental filling?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      A dental filling is a restorative treatment used to repair
                      a tooth damaged by decay or minor fractures. It restores
                      the shape, function, and integrity of the tooth.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are tooth-colored fillings as strong as metal ones?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes! Modern composite fillings are highly durable,
                      especially for small to mid-sized cavities, and bond
                      securely to the tooth structure.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Will getting a filling hurt?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Not at all. We use effective local anesthesia and gentle
                      techniques to ensure you feel no discomfort during
                      treatment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How long does a filling last?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Composite fillings typically last 5–10 years or longer
                      with proper oral hygiene and regular dental checkups.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can you replace my old silver filling?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely. We safely remove old amalgam fillings and
                      replace them with tooth-colored alternatives that look and
                      feel better.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Let’s Treat That Cavity—Before It Gets Worse
              </h2>
              <p className="features-description">
                Don’t wait for the pain to get worse. Our friendly team at Tulip
                Dental is ready to restore your smile with safe, natural-looking
                dental fillings.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
