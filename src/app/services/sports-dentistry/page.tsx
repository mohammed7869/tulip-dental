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

export default function SportsDentistryPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Custom Athletic Mouthguards",
      description:
        "Made from high-quality materials, they're built to withstand impact while maintaining comfort during extended wear.",
      points: [
        "Custom-molded for perfect fit and maximum retention",
        "Superior shock absorption to prevent dental injuries",
        "Comfortable design that doesn't interfere with breathing or communication",
        "Available in team colors and personalized designs",
        "Durable construction that withstands repeated impact",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Sports Injury Treatment & Emergency Care",
      description:
        "We provide immediate treatment for chipped, cracked, or knocked-out teeth, helping minimize damage and preserve your natural smile.",
      points: [
        "Same-day emergency appointments for sports injuries",
        "Advanced techniques for tooth reattachment and repair",
        "Pain management and infection prevention",
        "Comprehensive follow-up care for full recovery",
        "Coordination with sports medicine professionals",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Performance-Optimized Dental Care",
      description:
        "Poor dental health can affect nutrition, sleep, and overall well-being, which can impact your game. Our performance-focused approach ensures your mouth supports your athletic goals.",
      points: [
        "Comprehensive oral health evaluations for athletes",
        "Treatment of conditions that may affect performance",
        "Nutritional guidance for optimal oral and athletic health",
        "Sleep disorder screening and treatment options",
        "Preventive care scheduling around training and competition",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Sports Dentistry & Athletic Mouthguards in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Protect Your Smile with Sports Dentistry in Maplewood | Tulip
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
                    <img
                      src="/Images/Sports Dentistry.jpeg"
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
                <div className="desc-text-subtitle">Sports Dentistry</div>
                <h3 className="desc-text-title">About Sports Dentistry</h3>
                <p>
                  Whether you're a weekend warrior or a competitive athlete,
                  protecting your smile should be just as important as
                  protecting the rest of your body. At Tulip Dental in
                  Maplewood, NJ, we specialize in sports dentistry, offering
                  custom-fitted mouthguards and comprehensive dental care
                  designed specifically for active individuals. Our expert team
                  understands the unique dental challenges athletes face and
                  provides solutions to prevent injuries, treat sports-related
                  dental trauma, and keep you performing at your best.
                </p>
                <p>
                  We proudly serve athletes from Maplewood (07040), South Orange
                  (07079), Vauxhall (07088), Irvington (07111), and nearby
                  Newark (07106 and 07112). Searching for "sports dentistry near
                  me" or "custom mouthguards"? You've found a local dentist who
                  understands the importance of protecting your smile during
                  athletic activities.
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>
                    Top Reasons to Choose Tulip Dental for Sports Dentistry
                  </h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Custom-Fitted Protection for Maximum
                        Comfort
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Expert Treatment of Sports-Related
                        Dental Injuries
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Advanced Materials for Superior
                        Durability
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Flexible Scheduling for Busy Athletes
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
              <h2 className="features-heading">The Sports Dentistry Process</h2>
              <p className="features-description">
                Sports dentistry focuses on preventing and treating
                sports-related dental injuries. From custom-fitted mouthguards
                to prompt care for trauma, we ensure athletes maintain optimal
                oral health and performance.
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

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Our Sports Dentistry Benefits{" "}
              </h2>
              <p className="features-description">
                At Tulip Dental, we believe that proper dental protection is
                essential for every athlete, from youth sports participants to
                professional competitors. Our comprehensive sports dentistry
                services are designed to prevent injuries before they happen and
                provide expert care when accidents occur. Every mouthguard and
                treatment is customized to your specific sport, playing style,
                and individual needs, ensuring maximum protection without
                compromising performance.
                <br />
                <br />
                Here's how we protect and care for athletes at Tulip Dental:
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
            <h2 className="faq-heading">Sports Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What sports require mouthguards?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      While football and hockey mandate mouthguards, we
                      recommend them for any sport with risk of facial contact,
                      including basketball, soccer, baseball, martial arts, and
                      cycling.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long do custom mouthguards last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With proper care, custom mouthguards typically last 1-2
                      seasons for adults and may need annual replacement for
                      growing children and teens.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can I get a mouthguard if I have braces?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely! We create specialized mouthguards designed
                      specifically for patients with orthodontic appliances,
                      providing protection for both teeth and braces.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What should I do if my tooth gets knocked out during
                      sports?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Keep the tooth moist (in milk or saliva), handle it by the
                      crown only, and get to our office immediately. Quick
                      action greatly improves the chance of successful
                      reattachment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do mouthguards affect breathing or talking?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Our custom-fitted mouthguards are designed to allow normal
                      breathing and clear communication, unlike bulky
                      store-bought alternatives.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready to Protect Your Athletic Smile?
              </h2>
              <p className="features-description">
                At Tulip Dental, we make sports dentistry convenient,
                comfortable, and effective. From custom mouthguards to emergency
                injury care, we'll help keep you in the game with a healthy,
                protected smile.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
