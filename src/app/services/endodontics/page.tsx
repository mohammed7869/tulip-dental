"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function Page() {


    const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "When Do You Need Endodontic Treatment?",
    description: "Endodontics is typically needed when the tooth’s pulp becomes infected due to deep decay, cracks, or trauma. Symptoms often include severe pain, sensitivity, or swelling.",
    points: [
      "Tooth pain while chewing",
      "Lingering sensitivity to hot/cold",
      "Swelling near the gums",
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Comfortable & Efficient Root Canal Therapy",
    description:
      "Our team uses advanced tools and gentle techniques to clean the infected root canals, fill the space, and seal the tooth. The process is usually completed in one or two visits",
    points: [
      "Local anesthesia for a pain-free experience",
      "Sedation options for anxious patients",
      "Custom crown placement for full restoration",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Serving Harrisburg & Surrounding Areas",
    description:
      "If you're in Harrisburg or neighboring areas like Colonial Park, Lawnton, or Progress, Maple Dental is your trusted provider for endodontic treatment and tooth-saving solutions",
    points: [
      "Convenient Harrisburg location",
      "Same-day emergency care available",
      "Top-rated endodontic services near you",
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
        <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Endodontics in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Advanced Root Canal Therapy in Harrisburg | Maple Dental | Family & Cosmetic Dentist
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
                src="/Images/Endodontics.jpeg"
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
          <div className='desc-text-subtitle'>Endodontics </div>
          <h3 className='desc-text-title'>About Endodontics</h3>
          <p>
           Endodontics focuses on treating problems inside the tooth-specifically the pulp and nerves. When decay or infection reaches the inner tooth, root canal therapy is often necessary to save it. At Maple Dental Harrisburg, our skilled team offers precise, comfortable endodontic care to relieve pain and restore your tooth’s health.
          </p>
          <p>
           We proudly serve patients from Harrisburg (17110, 17109, 17111, 17112), as well as nearby communities like Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112). If you’re searching for an endodontist near me, we’re right here for you.
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
                          <h2>Why Choose Maple Dental for Endodontic Care?</h2>
                        </div>
                        <div className='wcu-points-section'>
                          <ul className='wcu-points'>
                            <li><CheckCircle />Gentle, Effective Root Canal Therapy</li>
                            <li><CheckCircle />Digital Imaging & Precision Diagnostics</li>
                            <li><CheckCircle />Same-Day Emergency Appointments Available</li>
                            <li><CheckCircle />Modern Techniques for Maximum Comfort</li>
                            <li><CheckCircle />Insurance Accepted + Flexible Payment Plans</li>
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
                                  Root Canal Treatments That Save Your Smile
                                </h2>
                                <p className="features-description">
                                  A root canal may sound intimidating, but at Maple Dental, it’s a safe and comfortable procedure that can stop pain, prevent extraction, and restore full function to your tooth.
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
           <h2 className='faq-heading'>Endodontics Q&A</h2>
           <div className="faq-acc-container">
            <Accordion type="single" className="w-full space-y-5">
        
        <AccordionItem value="q1" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What is endodontics?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Endodontics is a dental specialty focused on treating infections and issues in the tooth’s root and pulp. </p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Does a root canal hurt?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>No. With modern techniques and anesthesia, most patients experience little to no discomfort. </p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How long does a root canal take?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Typically, the procedure takes 60–90 minutes and may require 1–2 visits</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Can a tooth be saved after infection?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Yes. A root canal removes the infection and saves the natural tooth.
            </p>
          </AccordionContent>
        </AccordionItem>

       <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Is a crown always needed after a root canal?</h3>  </AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                In most cases, yes-a crown protects the tooth from future damage.
            </p>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
      </div>
    </div>
     <div className="features-section">
                <Fade direction="up" duration={1000}>
                  <h2 className="features-heading">
                    Book Your Endodontic Consultation at Maple Dental Harrisburg
                  </h2>
                  <p className="features-description">
                    If you're experiencing tooth pain or think you may need a root canal, don’t delay. Our team at Maple Dental Harrisburg is here to help with expert care, compassion, and precision.
                  </p>
                </Fade>
              </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}