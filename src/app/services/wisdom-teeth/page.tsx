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
    description: "We start with digital X-rays and a full exam to assess whether extraction is needed and if your wisdom teeth are impacted or misaligned.",
    points: [
      "High-resolution imaging",
      "Clear treatment planning",
      "Tailored recommendations for teens and adults",
    ]
  },
    {
    icon: "/Images/icons/Wisdom Tooth Removal in Harrisburg.png",
    title: "Gentle Removal with Focus on Comfort",
    description:
      "Our team ensures your procedure is smooth and stress-free. We offer local anesthesia and sedation options as needed to help you relax.",
    points: [
      "Simple and surgical extractions",
      "Pain-free techniques",
      "Post-procedure care instructions for smooth healing",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Serving Harrisburg & Surrounding Communities",
    description:
      "Whether you're in Harrisburg or nearby in Progress, Colonial Park, or Lawnton, our office is close and ready to help with professional wisdom teeth removal.",
    points: [
      "Flexible scheduling & same-day consultations",
      "Insurance-friendly practice",
      "Trusted wisdom teeth dentist near you",
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Wisdom Teeth Removal in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <p className="text-center">
                            Safe & Comfortable Extractions in Harrisburg | Maple Dental | Family & Cosmetic Dentist
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
                src="/Images/Wisdom Teeth.webp"
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
          <div className='desc-text-subtitle'>Wisdom Teeth Removal</div>
          <h3 className='desc-text-title'>About Wisdom Teeth Removal</h3>
          <p>
            Wisdom teeth, or third molars, typically emerge in late teens or early adulthood. For many, they can cause pain, crowding, or infections-making removal necessary. At Maple Dental Harrisburg, we provide gentle and effective wisdom teeth extractions tailored to your comfort and needs.
          </p>
          <p>
            We serve patients from Harrisburg (17110, 17109, 17111, 17112), and neighboring areas like Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112). If you’re searching for wisdom teeth removal near me, Maple Dental is your trusted local provider.
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
                      Why Choose Maple Dental for Wisdom Tooth Extractions?
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Skilled, Experienced Dental Team  </li>
                        <li><CheckCircle />Gentle Extractions with Local Anesthesia</li>
                        <li><CheckCircle />Sedation Options for Anxiety-Free Treatment</li>
                        <li><CheckCircle />Advanced Imaging for Precise Evaluation</li>
                        <li><CheckCircle />Convenient Harrisburg Location & Payment Plans</li>
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
                              Comfortable, Expert Wisdom Teeth Removal
                            </h2>
                            <p className="features-description">
                              At Maple Dental Harrisburg, we prioritize safety, precision, and comfort throughout the extraction process. Whether your wisdom teeth are impacted, infected, or causing discomfort, we’re here to help you feel better fast.
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
                <h4 className='faq-heading'>Wisdom Teeth Q&A</h4>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        When should I get my wisdom teeth removed?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        Most people have them removed in their late teens or early 20s before they cause problems.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        What are signs I need my wisdom teeth out?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Pain, swelling, gum inflammation, or difficulty opening your mouth are common signs. 
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Are wisdom teeth always removed?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Not always. If they’re healthy and positioned properly, they may not need extraction.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Is wisdom tooth removal painful?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          No. We use local anesthesia and offer sedation for a painless experience.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        How long is recovery?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Most patients recover within 3–5 days, though full healing may take a couple of weeks.</p>
                      </AccordionContent>
                    </AccordionItem>

                  
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Book Your Wisdom Teeth Consultation at Maple Dental Harrisburg
                                </h2>
                                <p className="features-description">
                                  Don't wait until discomfort becomes a serious issue. Schedule a consultation with Maple Dental Harrisburg today and take the first step toward a healthier, pain-free smile.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}