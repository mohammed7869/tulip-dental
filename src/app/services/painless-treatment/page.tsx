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

export default function PainlessTreatmentPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Pain-Free Fillings & Restorations",
      description:
        "Our fillings and restorative procedures are done using advanced numbing techniques so you feel nothing during treatment.",
      points: [
        "Precise local anesthesia for targeted comfort",
        "Gentle hand movements to avoid unnecessary pressure",
        "Tooth-colored fillings for a natural look",
        "Quick, efficient procedures to minimize time in the chair",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Sedation Dentistry",
      description:
        "For patients with dental anxiety or more complex procedures, we offer safe sedation options to help you relax.",
      points: [
        "Nitrous oxide (laughing gas) for mild relaxation",
        "Oral sedation for deeper calm",
        "Monitored safety at every step",
        "Perfect for both adults and children with dental fears",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Minimally Invasive Techniques",
      description:
        "We use the latest tools and methods to treat dental issues with as little disruption to healthy tissue as possible.",
      points: [
        "Smaller incisions and precise treatments",
        "Faster healing times",
        "Reduced post-treatment sensitivity",
        "Better long-term preservation of your natural teeth",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Painless Dentistry in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Gentle Dental Care for a Stress-Free Visit | Tulip Dental |
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
                    <img
                      src="/Images/Painless Treatment.jpeg"
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
                <div className="desc-text-subtitle">Painless Dentistry</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  About Painless Dentistry
                </h2>
                <p>
                  At Tulip Dental in Maplewood, NJ, we believe dental visits
                  should never be something you dread. That’s why we specialize
                  in painless dentistry - combining advanced technology, gentle
                  techniques, and a caring approach to make every procedure as
                  comfortable as possible. Whether you’re getting a filling,
                  crown, root canal, or cleaning, our goal is to ensure you feel
                  relaxed, safe, and pain-free throughout your treatment.
                </p>
                <p>
                  We proudly serve patients from Maplewood (07040), South Orange
                  (07079), Vauxhall (07088), Irvington (07111), and nearby
                  Newark (07106 and 07112). Searching for “gentle dentist near
                  me”? You’ve found a local dental team committed to your
                  comfort and care.
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>
                    Top Reasons to Choose Tulip Dental for Painless Treatment
                  </h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Gentle, Compassionate Approach
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Advanced Technology for Maximum Comfort
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Local Anesthesia & Sedation Options
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Ideal for Patients with Dental Anxiety
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
                Our Painless Dentistry Services{" "}
              </h2>
              <p className="features-description">
                At Tulip Dental, we know that comfort is just as important as
                quality when it comes to dental care. We take the time to listen
                to your concerns, explain each step of your treatment, and use
                techniques that minimize or eliminate discomfort.
                <br />
                <br />
                Here’s how we make dentistry gentle and stress-free:
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
            <h2 className="faq-heading">Painless Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is dental treatment really painless?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With today’s technology and numbing methods, most
                      treatments can be completed with little to no discomfort.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What if I’m scared of the dentist?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We specialize in treating anxious patients, offering a
                      gentle approach and sedation options to keep you
                      comfortable.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will I feel the needle for anesthesia?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We use numbing gel before injections to make them
                      virtually unnoticeable.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Is sedation safe?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes — our sedation methods are safe, effective, and
                      carefully monitored throughout your visit.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can painless dentistry be done for kids?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely. We use gentle techniques to keep children
                      comfortable and at ease during treatment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready for Comfortable, Stress-Free Dental Care?
              </h2>
              <p className="features-description">
                At Tulip Dental, we make sure your visits are as pleasant as
                they are effective. From fillings to root canals, we focus on
                your comfort every step of the way.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
