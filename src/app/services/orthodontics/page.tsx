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

export default function OrthodonticsPage() {
  const features = [
    {
      icon: "/Images/icons/Orthodontic Options to Fit Your Lifestyle.png",
      title: "Step 1: Consultation & Smile Assessment",
      description:
        "We start with a complete evaluation to determine which orthodontic option is best for your needs and goals.",
      points: [
        "Digital X-rays, scans & photographs",
        "Bite and alignment analysis",
        "Customized treatment plan for braces or clear aligners",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Step 2: Appliance Placement & Progress Tracking",
      description:
        "Once you’re ready, we place your braces or provide your first set of aligners and guide you through wear and care.",
      points: [
        "Traditional or ceramic braces",
        "Invisalign® or other clear aligners",
        "Regular check-ins for adjustments or aligner changes",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Step 3: Retainers & Smile Maintenance",
      description:
        "After treatment, we fit you with a custom retainer to maintain your new smile for years to come.",
      points: [
        "Removable or fixed retainers",
        "Post-treatment evaluations",
        "Tips to protect your results long-term",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Orthodontics in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Braces & Clear Aligners in Maplewood | Tulip Dental | Family &
                Cosmetic Dentist{" "}
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
                    <img src="/Images/Orthodontics.jpg" alt="Main Banner" />
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
                <div className="desc-text-subtitle">Orthodontic Treatment</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  About Orthodontics
                </h2>
                <p>
                  Crooked teeth, gaps, or bite issues? Orthodontic treatment
                  improves not just the appearance of your smile-but also how
                  your teeth function and fit together.At Tulip Dental, we offer
                  braces and clear aligners for children, teens, and adults in a
                  friendly, no-pressure environment. Whether you’re considering
                  Invisalign® or traditional braces, we personalize your care
                  plan to match your goals and lifestyle.{" "}
                </p>
                <p>
                  Patients from Maplewood (07040), South Orange (07079),
                  Vauxhall (07088), Irvington (07111), and Newark (07106, 07112)
                  trust us for expert orthodontic care. If you’ve been searching
                  for “braces near me” or “Invisalign near Maplewood,” your
                  smile is in the right hands.{" "}
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>Top Reasons to Choose Tulip Dental for Orthodontics</h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Braces & Aligners for All Ages
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Invisalign® Certified Provider
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Personalized Treatment Plans
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Early Orthodontic Screenings for
                        Children
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Flexible Financing & Insurance
                        Assistance
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
                The Orthodontic Treatment Process
              </h2>
              <p className="features-description">
                Orthodontic care works by gently shifting teeth into ideal
                positions over time-improving bite alignment, aesthetics, and
                oral health. Whether you’re a teen or adult, we walk you through
                every step with clarity and care.
                <br />
                <br />
                Here’s What Makes Our Root Canal Process Different
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
            <h2 className="faq-heading">Orthodontics FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What is the best age to get braces?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      The ideal time is between ages 10–14, but orthodontic care
                      is effective at any age— including adults.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What’s the difference between braces and clear aligners?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Braces use wires and brackets, while aligners are clear
                      trays. Both straighten teeth, but aligners are more
                      discreet and removable.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long does orthodontic treatment take?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most patients complete treatment in 12 to 24 months,
                      though minor adjustments may take less time.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Are braces painful?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Mild discomfort is normal during adjustments, but it fades
                      quickly. Aligners typically cause less irritation than
                      braces.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is orthodontic treatment covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Many dental insurance plans cover orthodontics. We’ll
                      check your benefits and offer payment plans to fit your
                      budget.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready to Transform Your Smile with Braces or Invisalign in
                Maplewood, NJ?
              </h2>
              <p className="features-description">
                At Tulip Dental, our orthodontic solutions are comfortable,
                effective, and designed to fit your lifestyle—no matter your
                age. Let us help you achieve the confident, healthy smile you
                deserve.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
