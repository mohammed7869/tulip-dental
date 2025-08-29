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

export default function KidsAndChildrenPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "First Dental Visits & Exams",
      description:
        "We recommend bringing your child for their first dental visit by age one or when their first tooth appears. Early visits build trust and establish a healthy oral care routine.",
      points: [
        "Gentle, thorough checkups for growing smiles",
        "Introduction to dental care in a fun way",
        "Parental guidance for at-home care",
        "Focus on prevention over treatment",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Preventive Care for Kids",
      description:
        "Preventing dental problems is the best way to keep children’s smiles healthy. We provide routine cleanings, fluoride treatments, and sealants to protect teeth from cavities.",
      points: [
        "Professional cleanings to remove plaque and tartar",
        "Fluoride applications to strengthen enamel",
        "Dental sealants for cavity prevention",
        "Oral hygiene education tailored for kids",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Restorative Pediatric Dentistry",
      description:
        "If your child develops a cavity or dental injury, we offer gentle, effective treatments to restore their teeth and comfort.",
      points: [
        "Tooth-colored fillings for a natural look",
        "Baby tooth crowns for extra protection",
        "Careful, pain-minimizing techniques",
        "Supportive, reassuring environment for nervous kids",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Kids & Children’s Dentistry in Maplewood, NJ </h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Gentle Pediatric Dental Care in Maplewood | Tulip Dental |
                Family & Cosmetic Dentist
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
                    <img src="/Images/Kids Dentistry.jpg" alt="Main Banner" />
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
                  Kids & Children’s Dentistry
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  About Kids & Children’s Dentistry
                </h2>
                <p>
                  Healthy dental habits start early, and at Tulip Dental in
                  Maplewood, NJ, we make every visit fun, positive, and
                  stress-free for your child. From their very first checkup to
                  routine cleanings, preventive treatments, and guidance for
                  lifelong oral health, our friendly team specializes in caring
                  for young smiles.
                </p>
                <p>
                  We proudly serve children from Maplewood (07040), South Orange
                  (07079), Vauxhall (07088), Irvington (07111), and nearby
                  Newark (07106 and 07112). Searching for “kids’ dentist near
                  me”? You’ve just found a dental home where children feel safe,
                  cared for, and excited to visit.
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>
                    Top Reasons to Choose Tulip Dental for Kids’ Dentistry
                  </h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Gentle, Child-Friendly Care
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Experienced in Pediatric Dental Needs
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Fun & Positive Dental Experiences
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Flexible Scheduling for Busy Families
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
                Our Kids’ & Children’s Dentistry Services
              </h2>
              <p className="features-description">
                At Tulip Dental, we believe children deserve dental care that is
                both effective and enjoyable. We take the time to explain each
                step, use kid-friendly language, and offer a warm, welcoming
                environment so young patients feel relaxed and confident.
                <br />
                <br />
                Here’s how we help children maintain healthy smiles:
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
            <h2 className="faq-heading">Kids’ Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      When should my child have their first dental visit?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      The American Academy of Pediatric Dentistry recommends the
                      first visit by age one or within six months of the first
                      tooth appearing.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How often should kids go to the dentist?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most children should have a checkup every six months to
                      prevent cavities and monitor growth.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are baby teeth really that important?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - healthy baby teeth help with chewing, speaking, and
                      holding space for adult teeth.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How can I help my child avoid cavities?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Encourage twice-daily brushing, daily flossing, a balanced
                      diet, and regular dental checkups.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What if my child is nervous about the dentist?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We specialize in creating positive experiences with gentle
                      care, patience, and a friendly approach.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready to Give Your Child the Best Dental Start?
              </h2>
              <p className="features-description">
                At Tulip Dental, we make kids’ dental care gentle, effective,
                and fun. From first visits to preventive care and beyond, we’re
                here to help your child enjoy a lifetime of healthy smiles.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
