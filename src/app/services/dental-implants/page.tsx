"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function DentalImplantsPage() {
    const features = [
  {
    icon: "/Images/icons/implant.png",
    title: "What Are Dental Implants?",
    description: "Dental implants are titanium posts that replace missing tooth roots and provide a foundation for crowns, bridges, or dentures. Unlike removable options, implants are permanently anchored into your jawbone for unmatched stability and longevity",
    points: [
      "Long-lasting solution with proper care",
      "Prevents bone loss and facial sagging",
      "Restores chewing power and speech clarity",
      "No slipping or adhesive needed",
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Dental Implant Process at Tulip Dental",
    description:
      "At Tulip Dental Maplewood, we believe in making your dental implant journey as smooth and stress-free as possible. Our comprehensive approach ensures each step is performed with precision, comfort, and your long-term oral health in mind. From your initial consultation to your final restoration, we’re with you every step of the way",
    points: [
      "Digital 3D imaging for precise planning",
      "Gentle surgical placement of the implant post",
      "Healing period to allow the implant to fuse with the bone",
      "Custom-made crown or bridge to complete your smile",
      "Follow-up care to ensure long-term success"
    ],
  },
  {
    icon: "/Images/icons/Serving Maplewood Nearby Communities.png",
    title: "Serving Maplewood & Surrounding Communities",
    description:
      "Whether you're from Maplewood (07040) or nearby areas like South Orange, Millburn, West Orange, Livingston, Short Hills, or Montclair—Tulip Dental is your go-to provider for dental implants near you",
    points: [
      "Conveniently located in Maplewood, NJ",
      "Trusted by families across Maplewood area",
      "Personalized care in a modern, friendly environment",
      "Comprehensive implant solutions under one roof",
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Dental Implants in Maplewood, NJ</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <p className="text-center">
                            Permanent Tooth Replacement in Maplewood | Tulip Dental | Family & Cosmetic Dentist
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
                src="/Images/Dental Implants.webp"
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
          <div className='desc-text-subtitle'>Dental Implants</div>
          <h3 className='desc-text-title'>About Dental Implants</h3>
          <p>
            Missing teeth can impact more than just your smile—they can affect your ability to chew, speak, and maintain jawbone health. At Tulip Dental Maplewood, we offer state-of-the-art dental implant solutions to help you restore both the function and appearance of your teeth with natural-looking, long-lasting results.
          </p>
          <p>
            Whether you’ve lost a single tooth or need multiple teeth replaced, dental implants offer a stable, permanent solution. We proudly serve patients in Maplewood (07040), South Orange (07079), Millburn (07041), West Orange (07052), Livingston (07039), Short Hills (07078), and Montclair (07042)—so if you’re looking for dental implants near me, you’ve found your trusted local provider.
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
                      Why Choose Tulip Dental for Dental Implants?
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Experienced Implant Dentists with Gentle Approach  </li>
                        <li><CheckCircle />Advanced Digital Imaging & Precision Planning  </li>
                        <li><CheckCircle /> Custom Implant Crowns for Natural Aesthetics  </li>
                        <li><CheckCircle /> Convenient Location in Maplewood, NJ  </li>
                        <li><CheckCircle /> Flexible Payment Plans & Insurance Options</li>
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
                              Reliable Tooth Replacement That Looks & Feels Natural
                            </h2>
                            <p className="features-description">
                              At Tulip Dental Maplewood, we combine clinical expertise with advanced dental technology to deliver implant care that’s safe, predictable, and tailored to your needs. Whether you’re replacing one tooth or restoring your entire smile, our implants are designed to look, feel, and function like your natural teeth.
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
                <h4 className='faq-heading'>Dental Implants Q&A</h4>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Am I a candidate for dental implants?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        Most adults in good health with sufficient jawbone are candidates for dental implants. During your consultation, we’ll assess your oral and overall health to determine the best treatment for you.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        How long do dental implants last?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Dental implants can last 20+ years or even a lifetime with proper oral hygiene and regular dental check-ups. They’re one of the most durable tooth replacement options available.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Are dental implants painful?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          Implant placement is done under local anesthesia or sedation to ensure your comfort. Most patients report minimal discomfort, similar to having a filling or tooth extraction.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        What if I’m missing multiple teeth?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">We offer implant-supported bridges and full-arch implant dentures for patients missing several or all of their teeth. These options provide greater stability and a more natural feel than traditional dentures.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        How much do dental implants cost?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Costs can vary depending on the number of implants and complexity of treatment. We offer transparent pricing, accept most dental insurance, and have financing options to fit your budget.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Restore Your Smile with Dental Implants in Maplewood
                                </h2>
                                <p className="features-description">
                                  Don’t let missing teeth hold you back. Dental implants at Tulip Dental Maplewood offer a long-term solution for a confident, fully functional smile. Call us today at 973-671-5500 to schedule your consultation—we’re here to help patients across Maplewood, South Orange, Millburn, West Orange, Livingston, Short Hills, Montclair, and surrounding communities smile with confidence again.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}