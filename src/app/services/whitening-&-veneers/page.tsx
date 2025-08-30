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

export default function WhiteningVeneersPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Professional Teeth Whitening",
      description:
        "Our professional whitening treatments are designed to safely and effectively lift years of stains caused by coffee, tea, wine, smoking, and everyday life. With both in-office and take-home options, you can choose the method that best fits your schedule and preferences.",
      points: [
        "In-Office Whitening – See a noticeably brighter smile in under an hour",
        "Take-Home Whitening Kits – Professional strength with the comfort of home",
        "Safe, enamel-protecting formulas",
        "Long-lasting results with easy maintenance",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Porcelain Veneers",
      description:
        "Veneers are a popular choice for patients who want a dramatic yet natural-looking smile upgrade. Crafted from ultra-thin porcelain, veneers cover imperfections and instantly improve the color, shape, and alignment of your teeth.",
      points: [
        "Custom-designed to match your smile’s shape and shade",
        "Ideal for correcting discoloration, chips, gaps, or uneven teeth",
        "Durable, stain-resistant, and natural-looking finish",
        "Minimal tooth preparation for maximum preservation",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Smile Makeover Consultations",
      description:
        "If you’re considering multiple cosmetic treatments, our smile makeover consultations allow us to create a personalized plan for your dream smile.",
      points: [
        "Comprehensive evaluation of your goals and dental health",
        "Digital smile previews so you can see results before treatment",
        "Step-by-step planning to fit your budget and schedule",
        "Tailored treatment combinations for the best results",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Teeth Whitening & Veneers in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Brighten Your Smile with Teeth Whitening in Maplewood | Tulip
                Dental | Family & Cosmetic Dentist{" "}
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
                      src="/Images/Whitening Veneers.png"
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
                <div className="desc-text-subtitle">Whitening & Veneers</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  About Teeth Whitening
                </h2>
                <p>
                  A bright, white smile can instantly boost your confidence and
                  leave a lasting impression. At Tulip Dental in Maplewood, NJ,
                  we offer professional teeth whitening treatments designed to
                  safely and effectively remove stains caused by coffee, tea,
                  wine, smoking, and everyday wear. Whether you want a quick
                  in-office whitening before a big event or a take-home kit for
                  gradual results, our expert team will customize a plan to fit
                  your goals and lifestyle.{" "}
                </p>
                <p>
                  We proudly serve patients from Maplewood (07040), South Orange
                  (07079), Vauxhall (07088), Irvington (07111), and nearby
                  Newark (07106 and 07112). Searching for “teeth whitening near
                  me”? You’ve just found a local dentist who truly cares about
                  your smile.{" "}
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>
                    Top Reasons to Choose Tulip Dental for Whitening & Veneers
                  </h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" />{" "}
                        Noticeable Results in Just One Visit
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" />{" "}
                        Customized Veneers for a Perfect Fit
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" />{" "}
                        Long-Lasting Whitening Solutions
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Flexible
                        Payment & Financing Options
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
                Our Whitening & Veneer Services
              </h2>
              <p className="features-description">
                At Tulip Dental, we believe cosmetic dental care is about more
                than just appearance-it’s about creating a smile that makes you
                feel confident, comfortable, and proud every single day. Whether
                you’re looking for a quick enhancement or a complete smile
                transformation, we use advanced techniques and high-quality
                materials to deliver natural, lasting results. Every treatment
                is customized to your needs, lifestyle, and goals, ensuring you
                get a smile you’ll truly love.
                <br /> <br />
                Here’s how we can enhance your smile at Tulip Dental:
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
            <h2 className="faq-heading">Whitening & Veneers FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long does teeth whitening last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With proper care and avoiding stain-causing foods/drinks,
                      whitening results can last 1–3 years.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Are veneers permanent?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Veneers are a long-term solution, typically lasting 10–15
                      years with proper maintenance.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Does whitening damage enamel?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Not when done professionally. Our treatments are safe,
                      gentle, and enamel-friendly.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Can veneers fix crooked teeth?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes—veneers can mask mild misalignment for a
                      straighter-looking smile without braces.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What’s the process for getting veneers?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We begin with a consultation, take precise impressions,
                      and place your custom veneers in just 2 visits.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready to Brighten & Perfect Your Smile?
              </h2>
              <p className="features-description">
                At Tulip Dental, we make getting your dream smile simple,
                comfortable, and affordable. From same-day whitening to custom
                veneer transformations, we’ll help you love your smile again.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
