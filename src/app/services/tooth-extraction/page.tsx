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

export default function ToothExtractionPage() {
  const features = [
    {
      icon: "/Images/icons/tooth-extraction.png",
      title: "Severe Decay or Irreversible Damage",
      description:
        "When a tooth is beyond repair due to deep decay or fractures, removing it prevents infection from spreading to surrounding teeth and gums.",
      points: [
        "Comprehensive exam and X-rays to assess the extent of damage.",
        "Gentle extraction technique to preserve bone and gum tissue.",
        "Immediate infection control and cleaning of the extraction site.",
        "Planning for future restoration options like implants or bridges.",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Advanced Gum Disease (Periodontal Damage)",
      description:
        "Periodontal disease can weaken the bone and tissue supporting a tooth, making extraction necessary to protect nearby healthy teeth.",
      points: [
        "Assessment of bone loss through periodontal charting and imaging.",
        "Removal of loose or severely compromised teeth.",
        "Thorough cleaning of the area to reduce bacteria and inflammation.",
        "Referral for periodontal therapy or restorative planning as needed.",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Impacted or Problematic Wisdom Teeth",
      description:
        "Wisdom teeth that grow in at the wrong angle or fail to emerge fully can cause pain, infection, and crowding of other teeth.",
      points: [
        "Panoramic X-rays to check position and root formation.",
        "Surgical or simple extraction depending on tooth location.",
        "Pain management with local anesthesia or sedation options.",
        "Post-op instructions for smooth healing and swelling control.",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Tooth Extractions in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Gentle & Precise Tooth Removal in Maplewood | Tulip Dental |
                Family & Cosmetic Dentist{" "}
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
                      src="/Images/Tooth Extraction.jpeg"
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
                <div className="desc-text-subtitle">Tooth Extractions</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  {" "}
                  About Tooth Extractions
                </h2>
                <p>
                  Sometimes, the best way to protect your oral health is to
                  remove a tooth that’s too damaged, decayed, or impacted to
                  save. At Tulip Dental, we perform extractions with precision,
                  care, and a focus on keeping you comfortable throughout the
                  process.Whether it’s a badly infected tooth, a wisdom tooth
                  causing pain, or preparation for orthodontic treatment, we
                  ensure your procedure is as stress-free as possible.{" "}
                </p>
                <p>
                  We serve Maplewood (07040), South Orange (07079), Vauxhall
                  (07088), Irvington (07111), and Newark (07106, 07112).{" "}
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>
                    Top Reasons to Choose Tulip Dental for Tooth Extractions
                  </h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Gentle
                        Techniques &amp; Pain Management
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Advanced
                        Digital Imaging for Accuracy
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Same-Day
                        Emergency Extractions Available
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Sedation
                        Options for Nervous Patients
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Flexible
                        Payment &amp; Insurance-Friendly Care
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
                When Tooth Extraction Becomes the Best Option{" "}
              </h2>
              <p className="features-description">
                Sometimes a tooth is too damaged, decayed, or compromised to be
                saved, and in these cases, extraction is the healthiest choice
                for your smile and overall oral health. At Tulip Dental, we
                perform extractions with precision, care, and a focus on
                minimizing discomfort while planning the next steps to restore
                your function and aesthetics.
                <br />
                <br />
                Here are the Most Common Situations Where We Recommend Tooth
                Extraction at Tulip Dental:{" "}
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
            <h2 className="faq-heading">Tooth Extraction FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Is tooth extraction painful?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No—our gentle techniques and anesthesia options make the
                      process virtually painless, with only mild soreness
                      afterward.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      When is a tooth extraction necessary?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We recommend extractions for severe decay, advanced gum
                      disease, broken teeth beyond repair, impacted wisdom
                      teeth, or overcrowding before orthodontics.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long is recovery after an extraction?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most patients feel better within a few days, with complete
                      healing in 1–2 weeks depending on the complexity of the
                      case.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can I replace my tooth after extraction?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes—dental implants, bridges, or partial dentures can
                      restore your smile and prevent shifting of nearby teeth.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Need a Tooth Extraction in Maplewood, NJ?
              </h2>
              <p className="features-description">
                If you’re in pain or think you may need a tooth removed, Tulip
                Dental offers safe, gentle extractions to protect your oral
                health. We welcome both scheduled and same-day appointments.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
