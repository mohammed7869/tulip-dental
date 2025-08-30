import type { Metadata } from "next";
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
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceMetadata(
  "dental-implants",
  "/Images/Dental Implants.jpg"
);

export default function DentalImplantsPage() {
  const features = [
    {
      icon: "/Images/icons/tooth-implant.png",
      title: "Step 1: Comprehensive Evaluation & Planning",
      description:
        "We begin with a detailed evaluation using advanced diagnostics to assess your bone health and develop a fully personalized implant treatment plan.",
      points: [
        "Digital X-rays and 3D imaging",
        "Assessment of bone structure and oral health",
        "Customized treatment plan tailored to your needs",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",

      title: "Step 2: Implant Placement",
      description:
        "The implant placement is performed under local anesthesia or sedation, where a titanium post is securely positioned in your jawbone to serve as the foundation for your new tooth.",
      points: [
        "Performed under local anesthesia or sedation",
        "Titanium post inserted into jawbone to act as a root",
        "Healing period for the implant to integrate with bone (osseointegration)",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",

      title: "Step 3: Crown Placement & Final Restoration",
      description:
        "After the healing phase, we place a custom-designed crown over the implant for a final restoration that looks, feels, and functions just like a natural tooth.",
      points: [
        "Abutment placed on healed implant",
        "Custom crown designed to match your natural teeth",
        "Final fitting ensures proper bite and natural look",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Dental Implants in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Long-Lasting Tooth Replacement in Maplewood | Tulip Dental |
                Cosmetic & Family Dentist{" "}
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
                    <img src="/Images/Dental Implants.jpg" alt="Main Banner" />
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
                <div className="desc-text-subtitle">Dental Implants</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  About Dental Implants
                </h2>
                <p>
                  Missing a tooth? Dental implants offer a permanent,
                  natural-looking solution to restore both your smile and your
                  bite. At Tulip Dental, we specialize in providing high-quality
                  implants in a relaxing, judgment-free environment. Whether
                  you’re replacing a single tooth or several, we tailor your
                  care to ensure function, comfort, and aesthetics-all in one
                  complete treatment.{" "}
                </p>
                <p>
                  We proudly serve Maplewood (07040), South Orange (07079),
                  Vauxhall (07088), Irvington (07111), and Newark (07106,
                  07112). Searching for “dental implants near me”? You’ve found
                  your trusted local provider.{" "}
                </p>
              </Fade>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>
                    Top Reasons to Choose Tulip Dental for Dental Implants
                  </h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Highly
                        Experienced in Implant Dentistry
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Advanced
                        Technology & 3D Imaging
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" />{" "}
                        Customized Treatment Plans
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" />{" "}
                        Comfortable Environment & Sedation Options
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Flexible
                        Payment Plans & Insurance Accepted
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
              <h2 className="features-heading">The Dental Implant Process</h2>
              <p className="features-description">
                Getting a dental implant is a multi-step process that delivers
                long-term results. From consultation to crown placement, we
                guide you every step of the way with expert care and precision.
                <br />
                <br />
                Here’s What Makes Our Dental Implant Process Different:
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
            <h2 className="faq-heading">Dental Implant FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What are dental implants?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Dental implants are artificial tooth roots made from
                      titanium that are surgically placed into the jawbone to
                      support a crown, bridge, or denture.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long do dental implants last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With proper care, dental implants can last 15+ years or
                      even a lifetime. They’re one of the most durable and
                      long-term solutions in restorative dentistry.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Am I a candidate for dental implants?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most healthy adults with sufficient jawbone density are
                      good candidates. We’ll perform a full evaluation to ensure
                      you're eligible and discuss any preparation needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are implants better than dentures?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Implants are more stable and function like natural teeth.
                      Unlike dentures, they don’t slip or require adhesives and
                      help prevent bone loss in the jaw.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is the dental implant procedure painful?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      The procedure is done under anesthesia, so you’ll be
                      comfortable throughout. Most patients report minimal
                      discomfort afterward and are surprised by how easy the
                      process feels.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready to Restore Your Smile with Dental Implants in Maplewood,
                NJ?
              </h2>
              <p className="features-description">
                Let Tulip Dental help you smile confidently again with
                high-quality, long-lasting dental implants. We’re here to guide
                you from consultation to complete restoration—compassionately
                and expertly.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
