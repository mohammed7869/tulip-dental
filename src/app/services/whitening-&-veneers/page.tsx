"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function WhiteningVeneersPage() {
    const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Professional Teeth Whitening",
    description: "Our whitening treatments are far more effective and safer than over-the-counter products. Brighten your teeth by several shades with our customized options",
    points: [
      "In-office whitening with fast, dramatic results",
      "Take-home trays for convenience and control",
      "Safe for sensitive teeth with minimal irritation",
      "Erases stains from coffee, wine, smoking & more",
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Porcelain Veneers for a Flawless Look",
    description:
      "Veneers are thin, custom-made porcelain shells that cover the front surface of your teeth. They’re perfect for hiding imperfections and creating a natural, picture-perfect smile",
    points: [
      "Fix chips, gaps, and discoloration",
      "Customized shape and color to match your smile",
      "Durable and stain-resistant",
      "A long-term cosmetic solution that looks and feels real",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Serving Harrisburg & Surrounding Communities",
    description:
      "We’re proud to offer premium cosmetic dentistry to our local neighbors. Whether you're in Harrisburg or nearby areas like Colonial Park or Progress, we’re close by and ready to elevate your smile",
    points: [
      "Convenient Harrisburg location",
      "Welcoming patients from Lawnton, Penbrook, Paxtang, and Linglestown",
      "Evening appointments available",
      "Your go-to cosmetic dentist near you",
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Teeth Whitening & Veneers in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Cosmetic Smile Enhancements in Harrisburg | Maple Dental | Family & Cosmetic Dentist
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
                src="/Images/Whitening Veneers.webp"
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
          <div className='desc-text-subtitle'>Whitening & Veneers</div>
          <h3 className='desc-text-title'>About Whitening & Veneers</h3>
          <p>
            If you’re looking to transform your smile, teeth whitening and porcelain veneers are two of the most popular and effective cosmetic dental treatments. At Maple Dental Harrisburg, we provide safe, long-lasting solutions that help you achieve a brighter, more confident smile.
          </p>
          <p>
            Whether you want to erase deep stains or cover chipped, misshaped, or gapped teeth, our cosmetic services are designed to meet your needs. We welcome patients from Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Lawnton (17111), Progress (17109, 17111), and Linglestown (17112). If you're searching for cosmetic dental care near me, we're just around the corner.
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
                      <h2>Why Choose Maple Dental for Whitening & Veneers?</h2>
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Safe, In-Office & Take-Home Whitening Options  </li>
                        <li><CheckCircle />Natural-Looking Porcelain Veneers  </li>
                        <li><CheckCircle /> Personalized Smile Design Consultations  </li>
                        <li><CheckCircle /> Flexible Payment Plans & Insurance Assistance  </li>
                        <li><CheckCircle /> Trusted Cosmetic Dentist in Harrisburg</li>
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
                              Achieve a Beautiful Smile with Expert Cosmetic Care
                            </h2>
                            <p className="features-description">
                              At Maple Dental Harrisburg, we combine artistry and advanced technology to deliver smile makeovers that look natural and feel amazing. Whether you're prepping for a big event or just want to boost your confidence, we’ll help you choose the right treatment to reach your smile goals.
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
                <h2 className='faq-heading'>Whitening & Veneers Q&A</h2>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>How long does professional teeth whitening last?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        Results can last 6 months to 2 years with good oral hygiene and occasional touch-ups.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Are veneers permanent?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Veneers are a long-lasting cosmetic solution, typically lasting 10–15 years with proper care.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Is the whitening procedure safe?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          Yes, our whitening treatments are professionally supervised and safe for your enamel.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Will veneers look natural?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Absolutely. Each veneer is custom-crafted to match the shape, size, and color of your natural teeth.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Can I combine whitening with veneers?</h3>  
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Yes. Whitening is often done before veneers for a complete smile makeover.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Ready to Enhance Your Smile in Harrisburg?
                                </h2>
                                <p className="features-description">
                                  Book your cosmetic consultation at Maple Dental Harrisburg today. Whether you’re considering whitening or veneers, our expert team is here to help you shine brighter than ever.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}