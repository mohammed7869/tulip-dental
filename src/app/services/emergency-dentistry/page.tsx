import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Reveal, { Fade, Zoom } from "react-awesome-reveal";
import ServiceSidebar from "@/components/ServiceSidebar";
import { CheckCircle } from "lucide-react";
import BookCallBtn from "../book-call-btn";
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceMetadata(
  "emergency-dentistry",
  "/Images/Emergency Dentistry.jpeg"
);

export default function EmergencyDentistryPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Rapid Relief for Pain and Infections",
      description:
        "We respond immediately to issues like abscesses, dental trauma, and broken teeth.",
      points: [
        "Same-day emergency visits",
        "Swelling and infection management",
        "Sedation available for nervous patients",
        "Gentle treatment for all age groups",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Smart, Tooth-Saving Solutions",
      description:
        "When every minute counts, we help you make the best decisions for your dental future.",
      points: [
        "Quick diagnostics with digital X-rays",
        "Emergency root canals, fillings, and crowns",
        "Temporary and permanent repairs",
        "Focus on preserving natural teeth whenever possible",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Your Local Emergency Dental Team in Maplewood",
      description: "We’re proud to serve families across:",
      points: [
        "Maplewood (07040)",
        "South Orange (07079)",
        "Vauxhall (07088)",
        "Irvington (07111)",
        "Newark (07106, 07112)",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Emergency Dentistry in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Emergency Dentist in Maplewood | Tulip Dental | Family &
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
                    <img
                      src="/Images/Emergency Dentistry.jpeg"
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
                <div className="desc-text-subtitle">Emergency Dentistry</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  About Emergency Dentistry
                </h2>
                <p>
                  Dental problems can catch you off guard-whether it's a sudden
                  toothache, a fractured crown, or a dental injury. At Tulip
                  Dental, we understand how urgent these situations are. That’s
                  why we offer compassionate, expert emergency dental care on
                  the same day you call.From kids with sports injuries to adults
                  facing unexpected pain, our team is ready to help.{" "}
                </p>
                <p>
                  We proudly serve Maplewood (07040), South Orange (07079),
                  Irvington (07111), Vauxhall (07088), and Newark areas
                  including 07106 and 07112. If you’re searching for a trusted
                  "emergency dentist near me," Tulip Dental is right around the
                  corner.{" "}
                </p>
              </Fade>
            </div>
          </div>

          <div className="wcu-section">
            <div className="wcu-text-section">
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className="wcu-title">
                  <h2>
                    Top Reasons to Choose Tulip Dental for Emergency Dental Care
                  </h2>
                </div>
                <div className="wcu-points-section">
                  <ul className="wcu-points">
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" />
                        Skilled Dentists with a Gentle Approach
                      </h3>
                    </li>

                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Modern
                        Technology for Fast, Accurate Care
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Same-Day
                        Appointments & Walk-In Availability
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" />{" "}
                        Convenient Maplewood Location
                      </h3>
                    </li>
                    <li>
                      <h3 className="service-point-title">
                        <CheckCircle className="service-point-icon" /> Flexible
                        Payment Options & Insurance Friendly
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
                Immediate Relief, Compassionate Treatment When You Need It Most{" "}
              </h2>
              <p className="features-description text-center">
                A dental emergency can be more than just uncomfortable – it can
                affect your ability to eat, speak, or sleep. At Tulip Dental, we
                provide fast, focused solutions to stop the pain and restore
                your oral health as soon as possible.
                <br />
                <br />
                From the moment you walk in, we prioritize your comfort and work
                to stabilize your condition with care that’s both effective and
                reassuring.
              </p>
              <p className="features-description">
                Here’s What Sets Our Emergency Dentistry Apart:
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
            <h2 className="faq-heading">Emergency Dentistry FAQs </h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      {" "}
                      What qualifies as a dental emergency?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    Dental emergencies include any condition that causes severe
                    pain, swelling, bleeding, or damage to your teeth or gums.
                    These situations require prompt care to prevent
                    complications.{" "}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      {" "}
                      What are common dental emergencies?{" "}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    We treat a variety of urgent concerns, including:{" "}
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Broken or cracked teeth</li>
                      <li>Knocked-out permanent teeth</li>
                      <li>Throbbing toothaches or infections</li>
                      <li>Bleeding after an injury or extraction</li>
                      <li>Lost fillings or crowns</li>
                      <li>Damaged braces or wires</li>
                      <li>Objects stuck between teeth </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      {" "}
                      What should I do before getting to the dentist?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mb-2">
                      Here are some quick tips while you're on your way:
                    </p>
                    <strong>Toothache:</strong> Rinse with warm saltwater and
                    apply a cold compress.
                    <br />
                    <br />
                    <strong>Knocked-out tooth:</strong> Handle only by the crown
                    and try reinserting gently. If not, place it in milk.
                    <br />
                    <br />
                    <strong>Broken crown or filling:</strong>Save any pieces in
                    a clean container and bring them with you.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      {" "}
                      Can dental emergencies be prevented?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Yes! While some emergencies are accidental, others are
                    preventable with good habits:{" "}
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Brush and floss daily</li>
                      <li>Schedule regular dental checkups</li>
                      <li>Wear a mouthguard when playing sports</li>
                      <li>Avoid hard foods like ice or candy</li>
                      <li>Never use your teeth as tools</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          {/* Call to Action Section */}
        </div>
        <div className="features-section">
          <Fade direction="up" duration={1000}>
            <h2 className="features-heading">
              Need Emergency Dental Care in Maplewood?
            </h2>
            <p className="features-description">
              If you're in pain or dealing with a dental injury, don’t delay.
              Tulip Dental is here with fast, reliable, same-day emergency care
              that puts your comfort and safety first. We welcome walk-ins and
              can often treat you on the spot.{" "}
            </p>
            <BookCallBtn />
          </Fade>
        </div>
      </div>
    </div>
  );
}
