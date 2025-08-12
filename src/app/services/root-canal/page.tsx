"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function RootCanalPage() {
    const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "When Do You Need a Root Canal?",
    description: "Root canal treatment becomes necessary when the pulp inside your tooth becomes infected, inflamed, or damaged—often due to deep decay, repeated dental procedures, or trauma to the tooth. Common signs that indicate the need for a root canal include",
    points: [
      "Persistent toothache or sharp pain",
      "Sensitivity to hot or cold",
      "Swollen or tender gums near the tooth",
      "Darkening of the tooth",
      "Pimple-like bumps on the gums"
    ]
  },
    {
    icon: "/Images/icons/Dental Implant Process at Maple Dental.png",
    title: "What Happens During a Root Canal?",
    description:
      "A root canal involves removing the infected or inflamed pulp inside the tooth, disinfecting the area, and sealing it to prevent further damage. At Maple Dental Harrisburg, your comfort is our priority:",
    points: [
      "Numbing the area for a pain-free experience",
      "Cleaning and reshaping the root canal",
      "Filling and sealing the tooth",
      "Placing a custom crown (if needed) for strength and protection",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Root Canal Care for Patients in Harrisburg & Surrounding Communities",
    description:
      "Whether you’re located in Harrisburg (17110, 17109, 17111, 17112) or nearby in Penbrook, Progress, Colonial Park, or Lawnton, our centrally located dental office is easily accessible",
    points: [
      "Flexible scheduling & same-day appointments available",
      "Insurance-friendly practice & payment plans",
      "Trusted by families across the Harrisburg area",
      "Top-rated “root canal dentist near me”",
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Root Canal Therapy in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <p className="text-center">
                            Gentle Root Canal Treatment in Harrisburg | Maple Dental | Family & Cosmetic Dentist
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
                src="/Images/Root Canal.webp"
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
          <div className='desc-text-subtitle'>Root Canal</div>
          <h3 className='desc-text-title'>About Root Canal Therapy</h3>
          <p>
            When a tooth becomes infected or severely decayed, a root canal may be the only way to save it and eliminate pain. At Maple Dental Harrisburg, we specialize in comfortable, efficient root canal treatments that restore your smile and protect your long-term oral health. 
          </p>
          <p>
            Our experienced dental team serves patients from Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112). So if you’re searching for a “root canal near me” or “dentist near you,” Maple Dental is right around the corner.
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
                      Why Choose Maple Dental for Root Canal Treatment?
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Experienced & Compassionate Dentists  </li>
                        <li><CheckCircle />Advanced Technology & Digital Imaging  </li>
                        <li><CheckCircle /> Painless, Comfortable Procedures  </li>
                        <li><CheckCircle /> Affordable Payment Options & Insurance Accepted  </li>
                        <li><CheckCircle /> Convenient Location in Harrisburg, PA</li>
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
                              Save Your Natural Tooth with Expert Root Canal Care
                            </h2>
                            <p className="features-description">
                              Root canal therapy is a common, safe, and effective way to treat deep tooth infections while preserving your natural tooth. At Maple Dental Harrisburg, our gentle approach ensures that you feel calm and confident throughout the procedure. We prioritize patient comfort, using the latest tools and techniques to make your treatment smooth and stress-free.
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
                <h4 className='faq-heading'>Root Canal Q&A</h4>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Does a root canal hurt?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        Modern root canal treatments are virtually pain-free. With local anesthesia and gentle techniques, most patients say it feels similar to getting a filling.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        How long does a root canal take?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Most root canal treatments take about 60–90 minutes. Complex cases or back molars may require a follow-up visit.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Can I avoid a root canal?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">The best way to avoid needing a root canal is through early intervention. Regular dental checkups, cleanings, and addressing small cavities before they grow can help prevent serious infections.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Will I need a crown after a root canal?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          In most cases, especially with back teeth, a crown is recommended after a root canal to protect the tooth from fractures and restore full function.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Is a root canal better than tooth extraction?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Yes—when possible, saving your natural tooth is always preferable. Root canal therapy eliminates infection while preserving your natural bite and smile.</p>
                      </AccordionContent>
                    </AccordionItem>

                  
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Need Root Canal Treatment in Harrisburg?
                                </h2>
                                <p className="features-description">
                                  Don’t let tooth pain disrupt your life. If you're in need of a root canal near Harrisburg, PA, the expert team at Maple Dental is here to help. We serve families in Harrisburg, Colonial Park, Progress, Penbrook, Paxtang, Lawnton, and surrounding areas.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}