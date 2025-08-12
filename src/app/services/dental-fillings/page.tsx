"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function DentalFillingPage() {


  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "What Are Dental Fillings Used For?",
      description: "Dental fillings aren’t just for cavities. They’re also used to restore cracked, chipped, or worn-down teeth and to replace old metal (amalgam) fillings. We offer composite (white) fillings for a more aesthetic and biocompatible solution.",
      points: [
        "Repair tooth decay and minor fractures",
        "Fill gaps left by cavities",
        "Strengthen weakened tooth structure",
        "Restore tooth shape and function",
        "Replace older, unsightly fillings"
      ]
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "The Dental Filling Process",
      description:
        "Getting a filling is a simple and painless procedure. Our team ensures you're comfortable throughout the visit—from diagnosis to final polish",
      points: [
        "Numbing the area for a pain-free experience",
        "Removing decay and cleaning the cavity",
        "Applying natural-looking composite materia",
        "Shaping and hardening the filling with a curing light",
        "Polishing the tooth for a smooth finish"
      ],
    },
    {
      icon: "/Images/icons/Serving Maplewood Nearby Communities.png",
      title: "Serving Maplewood & Nearby Communities",
      description:
        "If you’re in Maplewood (07040), or live nearby in South Orange, Millburn, West Orange, Livingston, Short Hills, or Montclair, our centrally located dental office is here for you. We provide quick, effective cavity care for kids, teens, and adults",
      points: [
        "Convenient Maplewood location",
        "Family-friendly, gentle dental care",
        "Walk-ins and same-day availability",
        "Top-rated dental fillings near you",
      ],
    },
  ];
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <main className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Dental Fillings in Maplewood, NJ</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <p className="text-center">
                Dental Fillings & Cavity Treatments in Maplewood | Tulip Dental | Family & Cosmetic Dentist
              </p>
            </Fade>
            {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
          </div>
          <div className='details-page-desc-section'>

            {/* Image Section */}
            <div className='image_section'>
              <div className="image_section-cover">
                <Zoom cascade damping={0.3} duration={800}>
                  <div className="main-image">
                    <img
                      src="/Images/Dental Fillings.webp"
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
            <div className='desc-text-section'>
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className='desc-text-subtitle'>Dental Fillings</div>
                <h3 className='desc-text-title'>About Dental Fillings</h3>
                <p>
                  Dental fillings are a common solution for treating cavities and restoring the strength and function of your tooth. At Tulip Dental Maplewood, we use modern, tooth-colored composite fillings that blend naturally with your smile—so you get long-lasting results without compromising appearance.
                </p>
                <p>
                  We proudly serve patients from Maplewood (07040), South Orange (07079), Millburn (07041), West Orange (07052), Livingston (07039), Short Hills (07078), and Montclair (07042). If you're searching for a “dental filling near me” or “tooth repair near you,” Tulip Dental is your trusted local provider.
                </p>
              </Fade>
            </div>
          </div>
          <div className='wcu-section'>

            <div className='wcu-text-section'>
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className='wcu-subtitle'>
                  Top Reasons
                </div>
                <div className='wcu-title'>
                  Why Choose Tulip Dental for Dental Fillings?
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li><CheckCircle />Tooth-Colored Composite Fillings</li>
                    <li><CheckCircle />Gentle, Experienced Dentists</li>
                    <li><CheckCircle />Cavity Detection with Digital Imaging</li>
                    <li><CheckCircle />Fast, Comfortable Treatment</li>
                    <li><CheckCircle />Central Maplewood Location</li>
                    <li><CheckCircle />Insurance Accepted & Flexible Payment Plans</li>
                  </ul>
                </div>
              </Fade>
            </div>
            <div className='wcu-img-section'>
              <Zoom cascade damping={0.3} duration={800}>
                <img src="/Images/banners/doctor-presenting-something-isolated-white-background.webp" alt="dental" />
              </Zoom>
            </div>

          </div>
          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Strong, Natural-Looking Cavity Fillings That Last
              </h2>
              <p className="features-description">
                At Tulip Dental Maplewood, we treat tooth decay before it can cause more serious issues. Our custom dental fillings are designed to restore strength, stop cavity progression, and keep your tooth structure intact. Using modern bonding techniques, we ensure a secure, durable seal—and a seamless finish that’s virtually invisible.
              </p>
            </Fade>

            <div className="features-grid">
              {features.map((service, idx) => (
                <div className="feature-card" key={idx}>
                  <div className="flex flex-col items-start mb-3">
                    <img src={service.icon} alt={service.title} className="w-12 h-12 mb-2" />
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
          <div className='faq-section'>
            <h4 className='faq-heading'>Dental Fillings Q&A</h4>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">

                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className='faq-qn'>What are composite fillings?</AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Composite fillings are made of a tooth-colored resin that bonds directly to your tooth. Unlike metal fillings, they blend with your natural enamel for a seamless look and feel. They’re strong, safe, and preferred by most patients.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className='faq-qn'>How do I know if I need a filling? </AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Common signs include tooth sensitivity, pain when chewing, visible dark spots, or holes in your teeth. However, many cavities don’t show symptoms early on, so regular dental exams are key for early detection.
                    </p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className='faq-qn'>How long do fillings last?</AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>With good oral hygiene and regular checkups, composite fillings can last 7–10 years or longer. Avoid chewing on hard objects and follow your dentist’s care instructions to extend their life.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className='faq-qn'>Do dental fillings hurt?</AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Not at all. We use local anesthetic to ensure a comfortable experience. Most patients feel little to no discomfort during or after the procedure.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className='faq-qn'>Are dental fillings covered by insurance?</AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Yes, most dental insurance plans cover fillings either fully or partially. Tulip Dental Maplewood also offers affordable payment options for those without insurance.
                    </p>
                  </AccordionContent>
                </AccordionItem>




              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Need a Dental Filling in Maplewood?
              </h2>
              <p className="features-description">
                Whether it’s a small cavity or a cracked filling, don’t wait to restore your smile. Tulip Dental Maplewood offers fast, effective, and natural-looking dental fillings to patients across Maplewood, South Orange, Millburn, West Orange, Livingston, Short Hills, Montclair, and surrounding areas.
              </p>
            </Fade>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}