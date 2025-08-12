"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function Page() {
    const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Comprehensive Evaluation & Diagnosis",
    description: "A thorough exam is the first step to solving bad breath. Our team pinpoints the exact cause-whether it's oral bacteria, gum issues, or other health concerns.",
    points: [
      "Complete oral health check-up",
      "Digital x-rays and imaging as needed",
      "Gum health and tongue analysis",
      "Saliva production and dry mouth testing",
      "Medical and lifestyle history review"
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Effective, Targeted Treatment Plans",
    description:
      "We treat halitosis at the source. Based on your evaluation, we create a custom treatment plan that addresses both symptoms and root causes.",
    points: [
      "Deep cleaning to remove odor-causing plaque",
      "Gum therapy or periodontal care if needed",
      "Antibacterial mouth rinses and gels",
      "Tongue cleaning tools and techniques",
      "Dry mouth solutions or referrals when appropriate"
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Ongoing Support for Lasting Results",
    description:
      "Fresh breath requires ongoing care-and we’re with you every step of the way. Our follow-up care ensures results are long-lasting and easy to maintain.",
    points: [
      "Home care tips and oral hygiene routines",
      "Regular check-ins and professional cleanings",
      "Lifestyle and diet guidance",
      "Support with managing related health conditions",
      "Referrals for medical evaluation if needed"
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Halitosis Treatment in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <p className="text-center">
                            Eliminate Bad Breath in Harrisburg | Maple Dental | Family & Cosmetic Dentist
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
                src="/Images/banners/Halitosis.webp"
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
          <div className='desc-text-subtitle'>Halitosis</div>
          <h3 className='desc-text-title'>About Halitosis</h3>
          <p>
            Halitosis-commonly known as chronic bad breath-is more than just a social concern. It can be a sign of underlying dental or medical issues. At Maple Dental Harrisburg, we help identify the root cause of bad breath and provide effective, lasting treatment to restore freshness and confidence to your smile.
          </p>
          <p>
            We proudly serve patients from Harrisburg (17110, 17109, 17111, 17112), Colonial Park, Lawnton, Progress, and surrounding areas with compassionate care and advanced diagnostics.
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
                      Why Choose Maple Dental for Halitosis Treatment?
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Personalized Diagnosis & Care Plans  </li>
                        <li><CheckCircle />Advanced Tools for Accurate Detection</li>
                        <li><CheckCircle />Treatment That Targets the Source</li>
                        <li><CheckCircle />Discreet, Judgment-Free Environment</li>
                        <li><CheckCircle />Convenient Care for Busy Lives</li>
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
                              Get Back to Fresh Breath and Confidence
                            </h2>
                            <p className="features-description">
                              At Maple Dental Harrisburg, we believe no one should live with the anxiety of persistent bad breath. Whether it’s been bothering you for months or years, we’ll help you breathe easy again-with solutions that work and support that lasts.
                            </p>
                            <p className="features-description">
                                Here’s what sets our halitosis care apart:
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
                <h4 className='faq-heading'>Halitosis Q&A</h4>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        What causes chronic bad breath?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        Halitosis is often caused by gum disease, dry mouth, plaque buildup, or infections. It can also be linked to sinus issues, digestive problems, or certain medications.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        How do dentists treat halitosis?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        We begin with a full oral exam and create a treatment plan that may include cleanings, antibacterial rinses, dry mouth therapy, and lifestyle adjustments.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Can bad breath be permanently fixed?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          Yes-most cases of halitosis can be fully resolved with professional care and good oral hygiene habits.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Is bad breath always caused by poor brushing?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Not always. Even patients with good hygiene can experience halitosis due to hidden infections, tongue bacteria, or dry mouth.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Is halitosis a sign of something serious?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">It can be. If left untreated, it may point to gum disease or underlying health issues. That’s why early evaluation is key.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Need Help with Halitosis in Harrisburg?
                                </h2>
                                <p className="features-description">
                                  If bad breath is interfering with your confidence, health, or relationships-let us help. At Maple Dental Harrisburg, we offer respectful, effective treatment that gets to the root of the problem. Call today to schedule your consultation and take the first step toward fresher breath and a healthier smile.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}