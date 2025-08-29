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
      title: "Comprehensive Evaluation & Digital Imaging",
      description:
        "Before recommending extraction, we perform a thorough examination using advanced 3D imaging to assess your wisdom teeth position, root development, and potential complications.",
      points: [
        "3D panoramic X-rays for complete visualization",
        "Detailed assessment of tooth position and impaction",
        "Evaluation of nerve proximity and potential risks",
        "Personalized treatment planning for optimal outcomes",
        "Clear explanation of findings and treatment options",
      ],
    },
    {
      icon: "/Images/icons/tooth-extraction.png",
      title: "Safe & Comfortable Extraction Procedures",
      description:
        "Whether you need a simple extraction or complex surgical removal, we prioritize your safety and comfort above all else.",
      points: [
        "Multiple sedation options (local, nitrous oxide, IV sedation)",
        "Minimally invasive surgical techniques",
        "Advanced pain management protocols",
        "Real-time monitoring for patient safety",
        "Efficient procedures to minimize treatment time",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Complete Recovery Support & Follow-Up Care",
      description:
        "We provide comprehensive post-operative instructions, 24/7 emergency support, and scheduled follow-up appointments to ensure proper healing and address any concerns.",
      points: [
        "Detailed post-op instructions and care kit",
        "24/7 emergency contact for urgent concerns",
        "Prescription medications for pain and swelling management",
        "Scheduled follow-up appointments to monitor healing",
        "Nutritional guidance for optimal recovery",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Wisdom Teeth Removal & Extraction in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Expert Wisdom Teeth Removal in Maplewood | Tulip Dental | Family
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
                    <img src="/Images/Wisdom Teeth.jpg" alt="Main Banner" />
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
                <div className="desc-text-subtitle">Wisdom Teeth Removal</div>
                <h3 className="desc-text-title">About Wisdom Teeth </h3>
                <p>
                  Wisdom teeth, also known as third molars, typically emerge
                  between ages 17-25 when there's often insufficient space in
                  the mouth. At Tulip Dental in Maplewood, NJ, we specialize in
                  safe, comfortable wisdom teeth removal using advanced
                  techniques and sedation options to ensure a smooth experience.
                  Our experienced oral surgeons carefully evaluate each case to
                  determine if extraction is necessary and provide comprehensive
                  care from consultation through complete healing.
                </p>
                <p>
                  We proudly serve patients from Maplewood (07040), South Orange
                  (07079), Vauxhall (07088), Irvington (07111), and nearby
                  Newark (07106 and 07112). Searching for "wisdom teeth removal
                  near me" or experiencing wisdom tooth pain? You've found local
                  experts who prioritize your comfort and safety throughout the
                  entire process.
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>Top Reasons to Choose Tulip Dental for Wisdom Teeth</h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Advanced Imaging Technology for Precise
                        Planning
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Multiple Sedation Options for Maximum
                        Comfort
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Experienced Oral Surgeons with Proven
                        Results
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Comprehensive Post-Op Care and Support
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
              <h2 className="features-heading">Our Wisdom Teeth Process </h2>
              <p className="features-description">
                At Tulip Dental, we understand that wisdom teeth removal can
                feel overwhelming, which is why we've developed a comprehensive
                approach that prioritizes your comfort, safety, and peace of
                mind. From your initial consultation through complete recovery,
                our experienced team guides you through every step with clear
                communication and gentle care.
                <br />
                <br />
                Here's how we handle wisdom teeth care at Tulip Dental:
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
            <h2 className="faq-heading">Wisdom Teeth FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      When should wisdom teeth be removed?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Wisdom teeth should be removed if they're impacted,
                      causing crowding, difficult to clean, or causing pain and
                      inflammation. Early removal (late teens/early twenties)
                      typically leads to easier healing.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long is the recovery period?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most patients return to normal activities within 3-5 days,
                      with complete healing occurring over 1-2 weeks. Following
                      post-op instructions significantly improves recovery time.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will I be awake during the procedure?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We offer multiple sedation options including IV sedation
                      where you'll be completely relaxed and comfortable. Local
                      anesthesia ensures you won't feel any pain during the
                      procedure.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What can I eat after wisdom teeth removal?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Stick to soft foods like smoothies, soup, yogurt, and
                      mashed potatoes for the first few days. Avoid hard,
                      crunchy, or spicy foods that could irritate the extraction
                      sites.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are there risks with wisdom teeth removal?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      While complications are rare, potential risks include dry
                      socket, infection, or temporary numbness. Our experienced
                      surgeons minimize these risks through careful planning and
                      technique.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready for Expert Wisdom Teeth Care?
              </h2>
              <p className="features-description">
                At Tulip Dental, we make wisdom teeth removal as comfortable and
                stress-free as possible. From advanced planning to complete
                recovery support, we're here to guide you through every step of
                the process.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
