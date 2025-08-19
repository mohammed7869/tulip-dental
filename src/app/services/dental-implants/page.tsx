import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("dental-implants", "/Images/Dental Implants.jpg");

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
    title: "Dental Implant Process at Maple Dental",
    description:
      "At Maple Dental Harrisburg, we believe in making your dental implant journey as smooth and stress-free as possible. Our comprehensive approach ensures each step is performed with precision, comfort, and your long-term oral health in mind. From your initial consultation to your final restoration, we’re with you every step of the way",
    points: [
      "Digital 3D imaging for precise planning",
      "Gentle surgical placement of the implant post",
      "Healing period to allow the implant to fuse with the bone",
      "Custom-made crown or bridge to complete your smile",
      "Follow-up care to ensure long-term success"
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Serving Harrisburg & Surrounding Communities",
    description:
      "Whether you're from Harrisburg (17110, 17109, 17111, 17112) or nearby areas like Colonial Park, Penbrook, Paxtang, Lawnton, Progress, or Linglestown—Maple Dental is your go-to provider for dental implants near you",
    points: [
      "Conveniently located in Harrisburg, PA",
      "Trusted by families across Central PA",
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
                        <h1>Dental Implants in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Permanent Tooth Replacement in Harrisburg | Maple Dental | Family & Cosmetic Dentist
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
                src="/Images/Dental Implants.jpg"
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
            Missing teeth can impact more than just your smile—they can affect your ability to chew, speak, and maintain jawbone health. At Maple Dental Harrisburg, we offer state-of-the-art dental implant solutions to help you restore both the function and appearance of your teeth with natural-looking, long-lasting results.
          </p>
          <p>
            Whether you’ve lost a single tooth or need multiple teeth replaced, dental implants offer a stable, permanent solution. We proudly serve patients in Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112)—so if you’re looking for dental implants near me, you’ve found your trusted local provider.
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
                      <h2>Why Choose Maple Dental for Dental Implants?</h2>
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Experienced Implant Dentists with Gentle Approach  </li>
                        <li><CheckCircle />Advanced Digital Imaging & Precision Planning  </li>
                        <li><CheckCircle /> Custom Implant Crowns for Natural Aesthetics  </li>
                        <li><CheckCircle /> Convenient Location in Harrisburg, PA  </li>
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
                              At Maple Dental Harrisburg, we combine clinical expertise with advanced dental technology to deliver implant care that’s safe, predictable, and tailored to your needs. Whether you’re replacing one tooth or restoring your entire smile, our implants are designed to look, feel, and function like your natural teeth.
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
                <h2 className='faq-heading'>Dental Implants Q&A</h2>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Am I a candidate for dental implants?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        Most adults in good health with sufficient jawbone are candidates for dental implants. During your consultation, we’ll assess your oral and overall health to determine the best treatment for you.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>How long do dental implants last?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Dental implants can last 20+ years or even a lifetime with proper oral hygiene and regular dental check-ups. They’re one of the most durable tooth replacement options available.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>Are dental implants painful?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          Implant placement is done under local anesthesia or sedation to ensure your comfort. Most patients report minimal discomfort, similar to having a filling or tooth extraction.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>What if I’m missing multiple teeth?</h3>
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">We offer implant-supported bridges and full-arch implant dentures for patients missing several or all of their teeth. These options provide greater stability and a more natural feel than traditional dentures.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        <h3 className='text-lg'>How much do dental implants cost?</h3>
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
                                  Restore Your Smile with Dental Implants in Harrisburg
                                </h2>
                                <p className="features-description">
                                  Don’t let missing teeth hold you back. Dental implants at Maple Dental Harrisburg offer a long-term solution for a confident, fully functional smile. Call us today at 717-745-2700 to schedule your consultation—we’re here to help patients across Harrisburg, Colonial Park, Penbrook, and surrounding communities smile with confidence again.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}