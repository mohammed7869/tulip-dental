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
    title: "Dental Implants",
    description: "Dental implants are the gold standard for replacing missing teeth. They look, feel, and function just like natural teeth-and can last a lifetime with proper care.",
    points: [
      "Titanium posts replace missing roots",
      "Topped with custom crowns or bridges",
      "Prevent bone loss and maintain facial shape",
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Fixed Bridges",
    description:
      "A bridge is a reliable option for filling the gap left by one or more missing teeth. It anchors to nearby healthy teeth and restores your bite and appearance.",
    points: [
      "Non-removable and natural-looking",
      "Ideal for patients not ready for implants",
      "Quick, functional smile restoration",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Full & Partial Dentures",
    description:
      "For patients missing several or all of their teeth, today’s dentures offer comfort, aesthetics, and improved function. We create custom dentures that fit beautifully and feel secure.",
    points: [
      "Natural appearance and easy maintenance",
      "Available in removable and implant-supported designs",
      "Affordable and accessible solution for many",
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
        <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Permanent Teeth Replacement in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Restore Missing Teeth in Harrisburg | Maple Dental | Family & Cosmetic Dentist 
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
                src="/Images/Teeth Replacement.webp"
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
          <div className='desc-text-subtitle'>Permanent Teeth Replacement</div>
          <h3 className='desc-text-title'>About Permanent Teeth Replacement</h3>
          <p>
           Missing teeth can affect your confidence, health, and quality of life. At Maple Dental Harrisburg, we provide long-lasting solutions to replace missing teeth with natural-looking, fully functional results. Whether you’ve lost one tooth or several, we’ll help you reclaim your smile.
          </p>
          <p>
           We proudly serve Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Lawnton (17111), Progress (17109, 17111), Penbrook (17103), Paxtang (17111), and Linglestown (17112). If you’re searching for permanent tooth replacement near me, our Harrisburg team is here to help.
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
                          <h2>Why Choose Maple Dental for Tooth Replacement?</h2>
                        </div>
                        <div className='wcu-points-section'>
                          <ul className='wcu-points'>
                            <li><CheckCircle />Personalized Treatment Plans for Every Smile</li>
                            <li><CheckCircle />Modern Options: Implants, Bridges, & Dentures</li>
                            <li><CheckCircle />Advanced Imaging & Diagnostic Tools</li>
                            <li><CheckCircle />Affordable Payment Plans Available </li>
                            <li><CheckCircle />Convenient Harrisburg Location Near You</li>
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
                                  Reclaim Your Smile with Long-Lasting Tooth Replacement
                                </h2>
                                <p className="features-description">
                                  At Maple Dental Harrisburg, we believe no one should have to live with missing teeth. Our experienced team offers a variety of permanent replacement options designed to match your unique smile goals and lifestyle.
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
           <h2 className='faq-heading'>Tooth Replacement Q&A</h2>
           <div className="faq-acc-container">
            <Accordion type="single" className="w-full space-y-5">
        
        <AccordionItem value="q1" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What is the best option to replace missing teeth?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Dental implants are often the best long-term solution, but we’ll guide you based on your goals and budget</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How long do permanent tooth replacements last?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>With proper care, implants can last a lifetime. Bridges and dentures also last many years with routine checkups.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Are dental implants safe and effective?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Yes-implants have a high success rate and are considered one of the safest and most effective dental procedures.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Is the procedure painful?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Our gentle techniques and sedation options ensure a comfortable experience throughout your treatment. 
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How much do tooth replacements cost?</h3>  s</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Costs vary depending on the type of restoration. We offer affordable plans and accept most insurance.
            </p>
          
          </AccordionContent>
        </AccordionItem>


      </Accordion>
      </div>
    </div>
     <div className="features-section">
                <Fade direction="up" duration={1000}>
                  <h2 className="features-heading">
                    Ready to Replace Missing Teeth? Let’s Restore Your Smile
                  </h2>
                  <p className="features-description">
                    Don't let missing teeth hold you back. Schedule a consultation with Maple Dental Harrisburg and take the first step toward a confident, permanent smile.
                  </p>
                </Fade>
              </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}