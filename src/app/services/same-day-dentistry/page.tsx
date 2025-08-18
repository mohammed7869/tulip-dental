"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function SameDayPage() {
    const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Common Same-Day Dental Treatments",
    description: "Life moves fast, and so should your dental care. At Maple Dental Harrisburg, we offer a variety of treatments that can often be completed in just one visit-saving you time without compromising quality.",
    points: [
      "One-visit dental crowns (CEREC)",
      "Tooth-colored fillings for cavities",
      "Emergency tooth extractions",
      "Root canal therapy to relieve infection",
      "Dental bonding to fix chips, cracks, or gaps"
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Technology That Makes It Possible",
    description:
      "Modern dental technology allows us to deliver faster, more accurate treatment with less discomfort and fewer appointments. Our advanced systems streamline diagnostics and restorations-so you can get back to your life with a fully restored smile, often within hours.",
    points: [
      "CEREC same-day crown system for durable restorations",
      "In-house digital imaging for real-time diagnostics",
      "3D digital scans for precision-fitted treatments",
      "On-site milling unit eliminates the need for temporary crowns",
      "Minimally invasive tools reduce chair time and recovery"
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Trusted by Families Across Harrisburg",
    description:
      "Our same-day dental care is trusted by busy individuals and families alike. Whether you're coming from downtown Harrisburg, Colonial Park, or Lawnton, we offer high-quality care that fits your schedule. With compassionate staff and efficient systems, we make dental visits stress-free and fast.",
    points: [
      "Convenient appointment slots, including evenings",
      "Emergency dental visits accepted the same day",
      "Prompt service with little to no wait time",
      "High-quality, lasting restorations on your first visit",
      "Local dentist near you serving Harrisburg and nearby communities"
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Same-Day Dental Care Services in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Fast & Convenient Dental Services in Harrisburg | Maple Dental | Family & Cosmetic Dentist
                        </h2>
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
                src="/Images/Same-day Dentistry.webp"
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
          <div className='desc-text-subtitle'>Same-Day Dentistry</div>
          <h3 className='desc-text-title'>About Same-Day Dentistry</h3>
          <p>
            Life gets busy-but your dental care doesn’t have to wait. At Maple Dental Harrisburg, we offer same-day dentistry solutions designed for your schedule. Whether it’s a dental emergency, a broken crown, or an unexpected cavity, we provide fast and effective treatment-all in one visit.
          </p>
          <p>
            We proudly serve the communities of Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Lawnton (17111), Progress (17109, 17111), and Linglestown (17112). If you’re looking for a “same-day dentist near me,” we’re right around the corner.
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
                      <h2>Why Choose Maple Dental for Same-Day Dentistry?</h2>
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />One-Visit Crowns, Fillings & Repairs  </li>
                        <li><CheckCircle />Emergency Walk-In Dental Appointments  </li>
                        <li><CheckCircle /> Modern Technology for Faster Treatment  </li>
                        <li><CheckCircle /> Convenient Harrisburg Location  </li>
                        <li><CheckCircle /> Insurance-Friendly + Flexible Payments</li>
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
                              Fast, Effective Dental Care-All in One Visit
                            </h2>
                            <p className="features-description">
                              Same-day dentistry is about more than speed-it’s about quality care that fits into your life. We use advanced tools and in-house technology to provide fast solutions without compromising results.
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
                <h2 className='faq-heading'>Same-Day Dentistry Q&A</h2>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>What is same-day dentistry?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        It’s a service model that allows you to receive certain dental treatments, like crowns or fillings, in a single appointment.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Are same-day crowns as durable as traditional ones?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Yes. Our in-house crowns are crafted with high-quality materials and designed to last.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Can I walk in for same-day dental care?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          Absolutely-emergency and walk-in appointments are available during clinic hours.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>How do I know if my treatment can be done in one visit?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Our team will assess your needs and recommend the best plan based on urgency and procedure type.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Does same-day treatment cost more?</h3>   
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">No-our pricing is competitive, and we accept most insurance plans.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Book Your Same-Day Dental Visit at Maple Dental Harrisburg
                                </h2>
                                <p className="features-description">
                                  Need fast dental care? Call Maple Dental Harrisburg today to schedule a same-day appointment. We’re here to get you smiling again-without the wait.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}