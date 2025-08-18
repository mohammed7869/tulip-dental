"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function PainlessTreatmentPage() {
    const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Technology That Minimizes Pain",
    description: "Thanks to our investment in modern dental technology, we’re able to reduce discomfort significantly. Our tools work faster and more precisely-so you spend less time in the chair and experience far less sensitivity.",
    points: [
      "Laser dentistry for minimally invasive treatments",
      "Digital X-rays and imaging reduce poking and prodding",
      "Computer-assisted anesthesia delivery",
      "Quiet, low-vibration handpieces",
      "Shorter, more efficient procedures"
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Comfort-Focused Techniques",
    description:
      "We’ve designed our care protocols with comfort in mind-from the way we speak with patients to the methods we use in treatment. Everything is done to reduce fear, pain, and anxiety at every stage of your visit.",
    points: [
      "Topical numbing gels before any injection",
      "Gentle, slow-pressure injection techniques",
      "Soothing chair-side manner from all staff",
      "Blankets, music, and headphones available",
      "Breaks during longer procedures if needed"
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Why Locals Trust Maple Dental for Gentle Care",
    description:
      "We’re more than just a dental office-we’re part of the community. Our patients across Harrisburg, Colonial Park, Lawnton, Penbrook, and Linglestown know they can count on us for compassionate, pain-free dentistry with results that last",
    points: [
      "Family-friendly practice near you",
      "Trusted by anxious patients and children alike",
      "Customized comfort plans for each individual",
      "Consistent 5-star reviews and community trust",
      "Convenient, local care that doesn’t compromise on comfort"
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Gentle & Painless Dentistry in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Comfortable Dental Care in Harrisburg | Maple Dental | Family & Cosmetic Dentist
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
                src="/Images/Painless Treatment.webp"
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
          <div className='desc-text-subtitle'>Painless Dentistry</div>
          <h3 className='desc-text-title'>About Painless Dentistry</h3>
          <p>
            Dental anxiety is real-but your treatment doesn’t have to be stressful or painful. At Maple Dental Harrisburg, we specialize in delivering high-quality care that prioritizes your comfort every step of the way. Using modern tools and gentle techniques, we help patients of all ages feel relaxed and at ease during every visit.
          </p>
          <p>
            Serving Harrisburg (17110, 17109, 17111, 17112) and nearby areas like Colonial Park, Lawnton, Penbrook, and Progress, we’re proud to be the trusted "gentle dentist near me" for families and individuals seeking pain-free treatment.
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
                      <h2>Why Choose Maple Dental for Painless Dentistry?</h2>
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Advanced numbing & sedation options  </li>
                        <li><CheckCircle />Skilled team trained in gentle techniques</li>
                        <li><CheckCircle />Noise-reducing equipment & soft-touch tools</li>
                        <li><CheckCircle />Calming office environment</li>
                        <li><CheckCircle />Ideal for children, seniors & anxious patients</li>
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
                              Making Every Visit Comfortable
                            </h2>
                            <p className="features-description">
                              Our approach to painless dentistry is both scientific and compassionate. From your first interaction to the final rinse, we ensure you're heard, informed, and fully comfortable throughout your care.
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
                <h2 className='faq-heading'>Painless Dentistry Q&A</h2>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Is painless dentistry really pain-free?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        Yes, we use modern tools and techniques to eliminate or greatly reduce pain during treatments-even for more involved procedures like root canals or extractions.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Is sedation used during every procedure?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Not always. Many treatments are gentle enough with local anesthesia alone, but we offer nitrous oxide and oral sedation when needed.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>What if I’m afraid of the dentist?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          You’re not alone. We specialize in helping anxious patients feel safe and respected, with care designed to ease fears at every stage.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Is painless dentistry safe for kids?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Absolutely. We tailor all treatments to each child’s comfort level using non-threatening approaches and gentle techniques.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>How do I book a painless dental visit?</h3> 
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Simply call or book online. Let us know about any anxiety or concerns ahead of time, and we’ll plan your visit with extra care.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Looking for Gentle Dental Care in Harrisburg?
                                </h2>
                                <p className="features-description">
                                  You deserve dental care that’s compassionate, comfortable, and pain-free. At Maple Dental Harrisburg, we’re committed to helping you smile without stress. Call us today to schedule your visit-we’re here to treat you gently.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}