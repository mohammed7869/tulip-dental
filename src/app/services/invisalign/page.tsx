"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function InvisilinePage() {


  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Invisalign for Adults",
      description:
        "Many adults want a straighter smile but don’t want traditional braces. Invisalign is discreet, effective, and fits easily into your daily routine.",
      points: [
        "Nearly invisible aligners for a professional, confident look",
        "Removable for eating, drinking, and oral care",
        "Customized for a comfortable fit",
        "Predictable results with advanced treatment planning",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Invisalign for Teens",
      description:
        "Perfect for active lifestyles and self-conscious teens, Invisalign Teen provides all the benefits of Invisalign with added features like wear indicators to track usage.",
      points: [
        "Flexible design for sports and activities",
        "Eat your favorite foods without restrictions",
        "Monitored progress with compliance indicators",
        "Gentle, gradual tooth movement for comfort",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Complex Case Invisalign",
      description:
        "Even if you’ve been told you’re not a candidate for clear aligners, modern Invisalign technology may surprise you. We can treat many moderate to complex orthodontic cases.",
      points: [
        "Addresses crowding, gaps, overbites, and underbites",
        "Precision-mapped movement for each tooth",
        "Fewer in-office visits compared to braces",
        "Designed to minimize discomfort throughout treatment",
      ],
    },
  ];

  return (
    <div className='flex min-h-screen bg-gray-50'>
      <main className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Invisalign in Maplewood, NJ </h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <h2 className="text-center">
                Straighten Your Smile with Invisalign in Maplewood | Tulip Dental | Family & Cosmetic Dentist                        </h2>
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
                      src="/Images/Invisalign.jpeg"
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
                <div className='desc-text-subtitle'>Invisalign</div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>About Invisalign</h2>
                <p>
                  A straighter smile can improve your confidence, oral health, and overall appearance - and Invisalign makes the process easier than ever. At Tulip Dental in Maplewood, NJ, we offer Invisalign clear aligners that gently shift your teeth into place without the hassle of metal brackets or wires. These virtually invisible aligners are comfortable, removable, and custom-made for your smile.                 </p>
                <p>
                  We proudly serve patients from Maplewood (07040), South Orange (07079), Vauxhall (07088), Irvington (07111), and nearby Newark (07106 and 07112). Searching for “Invisalign near me”? You’ve just found a caring, local dentist ready to help you achieve the smile you’ve always wanted.
                </p>
              </Fade>
            </div>
          </div>
          <div className='wcu-section'>

            <div className='wcu-text-section'>
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className='wcu-title'>
                  <h2>Top Reasons to Choose Tulip Dental for Invisalign</h2>
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Discreet Orthodontic Treatment
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Customized Aligners for Your Unique Smile
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Comfortable, Metal-Free Design
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Flexible Financing & Payment Options
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


            <div className='wcu-img-section'>
              <Zoom cascade damping={0.3} duration={800}>
                <img src="/Images/banners/top-reasons.jpeg" alt="dental" />
              </Zoom>
            </div>

          </div>
          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Our Invisalign Services
              </h2>
              <p className="features-description">
                At Tulip Dental, we believe orthodontic care should be effective, comfortable, and fit seamlessly into your lifestyle. Invisalign gives you the freedom to straighten your teeth without changing how you eat, brush, or smile for photos. Every treatment is planned using advanced 3D imaging to ensure precise, predictable results.
                <br /><br />
                Here’s how we help you achieve your best smile with Invisalign:
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
            <h2 className='faq-heading'>Invisalign FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">

                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className='faq-qn'>
                    <h3 className='text-lg'>How long does Invisalign treatment take?</h3>
                  </AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Most cases take 6–18 months, depending on your specific needs and goals.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className='faq-qn'>
                    <h3 className='text-lg'>Is Invisalign painful?</h3>
                  </AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      You may feel mild pressure when switching to a new aligner, but most patients find it far more comfortable than traditional braces.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className='faq-qn'>
                    <h3 className='text-lg'>Can I eat with Invisalign aligners in?</h3>
                  </AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      No — remove them before eating or drinking anything besides water to avoid staining or damage.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className='faq-qn'>
                    <h3 className='text-lg'>How often should I wear my aligners?</h3>
                  </AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      For best results, wear them 20–22 hours per day, removing only for eating, brushing, and flossing.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className='faq-qn'>
                    <h3 className='text-lg'>Will Invisalign work for severe orthodontic issues?</h3>
                  </AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Yes — with today’s technology, Invisalign can treat many complex cases once only possible with braces.
                    </p>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready to Start Your Invisalign Journey?
              </h2>
              <p className="features-description">
                At Tulip Dental, we make straightening your smile simple, discreet, and convenient.
                From your first consultation to your final aligner, we’ll guide you every step of the way
                toward a smile you’ll love for life.
              </p>
            </Fade>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}