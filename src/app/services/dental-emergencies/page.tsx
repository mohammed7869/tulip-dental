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

export default function DentalEmergencyPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Severe Tooth Pain & Active Infections",
      description:
        "Severe, ongoing pain or visible swelling usually means infection or deep decay and requires immediate assessment to control pain and stop the spread.",
      points: [
        "Emergency pain control and diagnostic imaging to find the source",
        "Antibiotic therapy and swelling management when infection is present",
        "Emergency root canal therapy to remove infected pulp and save the tooth",
        "Incision & drainage for abscesses when clinically necessary",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Trauma, Fractures & Knocked-Out Teeth",
      description:
        "Traumatic injuries need fast, appropriate action - correct first-aid plus urgent dental care gives the best chance of saving the tooth.",
      points: [
        "Reattachment or composite bonding for fractured/chipped teeth",
        "Reimplantation of knocked-out permanent teeth (when handled correctly and quickly)",
        "Splinting and stabilization for loosened or displaced teeth",
        "Care for soft-tissue injuries (lacerations, suturing, wound management)",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Lost or Damaged Restorations & Orthodontic Emergencies",
      description:
        "Broken crowns, lost fillings, or damaged braces can expose teeth and cause pain - we stabilize the situation immediately and plan definitive repair.",
      points: [
        "Temporary repairs (bonding, provisional crowns) to protect exposed tooth structure",
        "Replacement or permanent restoration planning and expedited scheduling",
        "Emergency orthodontic fixes (trim wires, reattach brackets) to stop irritation",
        "Same-day stabilization to prevent further damage and reduce infection risk",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Dental Emergencies in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Same-Day Urgent Dental Care in Maplewood | Tulip Dental | Family
                & Cosmetic Dentist
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
                      src="/Images/Dental Emergencies.jpg"
                      alt="Main Banner"
                    />
                  </div>
                </Zoom>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="desc-text-subtitle">Dental Emergencies</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  {" "}
                  About Dental Emergencies
                </h2>
                <p>
                  When a dental emergency strikes, quick action can mean the
                  difference between saving and losing a tooth. At Tulip Dental,
                  we prioritize same-day appointments for urgent cases, helping
                  to relieve pain and protect your oral health right away. From
                  severe toothaches to knocked-out teeth, our experienced team
                  is here to provide fast, compassionate care.{" "}
                </p>
                <p>
                  Patients from Maplewood (07040), South Orange (07079),
                  Vauxhall (07088), Irvington (07111), and Newark (07106, 07112)
                  trust us when they search “emergency dentist near me.”{" "}
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>Top Reasons to Choose Tulip Dental for Emergency Care</h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Fast,
                        Same-Day Appointments
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" />{" "}
                        Comprehensive Emergency Services
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Gentle,
                        Pain-Relieving Treatments
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" />{" "}
                        Experienced & Compassionate Team
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Flexible
                        Payment & Insurance Options
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
                Common Dental Emergencies We Treat
              </h2>
              <p className="features-description">
                Dental emergencies come in many forms - from sudden, severe pain
                to traumatic injuries - and quick, expert care often makes the
                difference between saving and losing a tooth
                <br />
                <br />
                Tulip Dental provides prompt, tooth-preserving treatment and
                clear next steps so you get relief fast and proper follow-up
                care.
                <br />
                <br />
                Here are Few Dental Emergencies We Treat at Tulip Dental:
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
            <h2 className="faq-heading">Dental Emergency FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What should I do if I knock out a tooth?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Handle it by the crown (not the root), gently rinse it,
                      and place it back in the socket or in milk. Seek immediate
                      dental care.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can I go to the ER for a dental emergency?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Hospitals can manage severe pain and infection, but they
                      may not provide full dental treatment. We recommend
                      calling us first for most cases.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I know if it’s a true dental emergency?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      If you’re in severe pain, bleeding, or risk losing a
                      tooth, it’s an emergency—call us right away.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are dental emergencies covered by insurance?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Many insurance plans cover emergency visits. We’ll verify
                      your benefits and help you understand costs upfront.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Need Emergency Dental Care in Maplewood, NJ?
              </h2>
              <p className="features-description">
                At Tulip Dental, we’re here to protect your smile when it
                matters most. Don’t wait—call us now for same-day emergency
                care.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
