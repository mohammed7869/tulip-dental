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

export default function CrownsPage() {
  const features = [
    {
      icon: "/Images/icons/Teeth Replacement.png",
      title: "Our Most Trusted Crown & Bridge Solutions",
      description:
        "We provide a range of restoration types so we can match the right material and design to your needs and budget.",
      points: [
        "All-ceramic / porcelain crowns for the most natural appearance",
        "Zirconia crowns for high strength and longevity",
        "Porcelain-fused-to-metal (PFM) crowns for a balance of strength & esthetics",
        "Implant-supported crowns & bridges to replace missing teeth permanently",
        "Temporary crowns & provisional bridges for protection during treatment",
      ],
    },
    {
      icon: "/Images/icons/x-ray.png",
      title: "Benefits You Can Expect",
      description:
        "Choosing crowns or bridges at Tulip Dental delivers both immediate improvements and long-term oral health benefits.",
      points: [
        "Restore chewing and speaking function quickly",
        "Protect and preserve weakened or root-canal treated teeth",
        "Maintain facial shape and prevent neighboring teeth from shifting",
        "Improve color, shape, and overall smile aesthetics",
        "Durable restorations designed for lasting performance",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Customized Care & Aftercare That Extends Lifespan",
      description:
        "We tailor every restoration and provide clear aftercare so your crown or bridge lasts as long as possible.",
      points: [
        "Precise shade selection and contouring for a seamless match",
        "Bite (occlusion) adjustment to prevent wear and discomfort",
        "Same-day repairs or adjustments when clinically feasible",
        "Personalized oral hygiene and maintenance instructions",
        "Scheduled follow-ups to monitor function and fit",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Crowns & Bridges in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Durable Crowns & Natural-Looking Bridges in Maplewood | Tulip
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
                      src="/Images/Dental Crown Bridge.jpg"
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
                <div className="desc-text-subtitle">
                  Dental Crowns & Bridges
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold desc-text-title">
                  About Crowns & Bridges
                </h2>
                <p>
                  Crowns and bridges are trusted restorative treatments used to
                  repair heavily damaged teeth and replace one or more missing
                  teeth for long-term function and aesthetics. At Tulip Dental,
                  we create custom crowns and bridges designed to blend
                  seamlessly with your smile while restoring chewing ability and
                  protecting surrounding teeth. We use precise digital
                  impressions, top-grade materials, and expert laboratory
                  partners to deliver restorations that look natural and stand
                  the test of time.{" "}
                </p>
                <p>
                  We proudly serve patients from Maplewood (07040), South Orange
                  (07079), Vauxhall (07088), Irvington (07111), and nearby
                  Newark (07106, 07112) - if you’re searching for “crowns near
                  me” or “bridge dentist near me,” Tulip Dental is close by and
                  ready to help.
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>
                    Top Reasons to Choose Tulip Dental for Crowns & Bridges
                  </h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Custom, Natural-Looking Restorations
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Durable, High-Quality Materials
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Precision Digital Impressions & Trusted
                        Lab Partners
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Same-Day Crown Options When Eligible
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Insurance Accepted & Flexible Payment
                        Plans
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
                Crowns & Bridges That Restore Form & Function
              </h2>
              <p className="features-description">
                Crowns and bridges do much more than fill gaps - they rebuild
                strength, protect vulnerable teeth, and restore a natural,
                confident smile. At Tulip Dental we blend advanced digital
                techniques with artistic shade-matching to create restorations
                that look great and perform reliably for years.
                <br />
                <br />
                Here’s what we offer at Tulip Dental:
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
            <h2 className="faq-heading">Crowns & Bridges FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">When is a crown necessary?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      A crown is recommended when a tooth is weakened by decay,
                      fracture, or after root canal therapy to protect structure
                      and restore function.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long do crowns and bridges last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With good oral hygiene and regular dental visits, crowns
                      and bridges commonly last 10–15 years or longer; lifespan
                      depends on material, bite forces, and care.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Are same-day crowns available?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes — when clinically appropriate we offer CAD/CAM
                      same-day crowns that allow you to receive a final
                      restoration in a single visit.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will it hurt to get a crown or bridge?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No — we use local anesthesia and gentle techniques to keep
                      you comfortable; most patients experience only mild,
                      short-lived sensitivity after placement.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How should I care for my crown or bridge?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Brush twice daily, floss carefully (use floss threaders
                      under bridges), avoid very hard foods, and keep regular
                      dental checkups to maintain longevity.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready to Restore Your Smile with Crowns & Bridges in Maplewood,
                NJ?
              </h2>
              <p className="features-description">
                At Tulip Dental, our custom crowns and bridges are crafted for
                strength, comfort, and a natural look — helping you chew, speak,
                and smile with confidence again. Let us rebuild your smile with
                precision and care.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
