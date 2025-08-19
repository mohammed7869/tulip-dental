"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function OrthodonticsPage() {


    const features = [
  {
    icon: "/Images/icons/Orthodontic Options to Fit Your Lifestyle.png",
    title: "Orthodontic Options to Fit Your Lifestyle",
    description: "Orthodontic care isn’t one-size-fits-all. At Maple Dental Harrisburg, we provide a variety of treatment options designed to align with your unique needs, goals, and lifestyle—whether you want a subtle, discreet solution or traditional braces for more advanced alignment. Our team will help you choose the right path to a healthier, more confident smile",
    points: [
      "Traditional Braces: Proven results using metal brackets and wires",
      "Ceramic Braces: Less visible than metal braces, ideal for teens and adults",
      "Clear Aligners: Removable, virtually invisible trays for mild to moderate correction",
      "Early Orthodontic Evaluations: Monitor jaw development and tooth alignment in kids",
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "What to Expect from Your Orthodontic Journey",
    description:
      "We believe that your orthodontic experience should be smooth, informed, and stress-free. From day one, our friendly team will walk you through each step of the process, ensuring you feel confident and supported as you move toward your dream smile",
    points: [
      "Initial consultation and digital imaging",
      "Customized treatment plan tailored to your smile goals",
      "Regular checkups and adjustments",
      "Support throughout every stage of your treatment",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Orthodontic Care for Harrisburg & Surrounding Areas",
    description:
      "We are proud to be a trusted provider of dental surgery near you. Whether you’re located in Harrisburg (17110, 17109, 17111, 17112) or nearby areas like Colonial Park, Progress, Lawnton, Penbrook, or Linglestown, we’re here when you need expert oral care",
    points: [
      "Serving Harrisburg (17110, 17109, 17111, 17112) & surrounding areas",
      "Evening & weekend appointments available",
      "Convenient access for patients in Progress, Lawnton, Penbrook & Paxtang",
      "Your family-friendly orthodontist near you",
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
        <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Orthodontics in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Braces & Invisalign in Harrisburg | Maple Dental | Family & Cosmetic Dentist Near You
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
                        src="/Images/Orthodontics.jpg"
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
          <div className='desc-text-subtitle'>Orthodontic Treatment</div>
          <h3 className='desc-text-title'>About Orthodontic Treatment</h3>
          <p>
           A well-aligned smile enhances both appearance and function. At Maple Dental Harrisburg, we offer comprehensive orthodontic solutions to help straighten teeth, correct bite issues, and improve long-term oral health. From kids to adults, our customized treatments make achieving your best smile easier than ever.
          </p>
          <p>
           We proudly serve patients in Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112). If you're searching for orthodontics near me, Maple Dental is just around the corner.
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
                          <h2>Why Choose Maple Dental for Orthodontics?</h2>
                        </div>
                        <div className='wcu-points-section'>
                          <ul className='wcu-points'>
                            <li><CheckCircle />Experienced in Both Braces & Invisalign®</li>
                            <li><CheckCircle />Treatment Plans Customized for All Ages</li>
                            <li><CheckCircle />Advanced Digital Imaging & 3D Scanning</li>
                            <li><CheckCircle />Flexible Payment Options & Insurance Accepted </li>
                            <li><CheckCircle />Convenient Location in Harrisburg, PA</li>
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
                                  Orthodontic Solutions for Every Smile
                                </h2>
                                <p className="features-description">
                                  At Maple Dental Harrisburg, we believe orthodontic care is about more than just appearance—it’s about improving oral health, function, and self-esteem. Whether you're a teen needing braces or an adult considering Invisalign alternatives, we provide expert care with a gentle, personalized approach.
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
           <h2 className='faq-heading'>Orthodontics Q&A</h2>
           <div className="faq-acc-container">
            <Accordion type="single" className="w-full space-y-5">
        
        <AccordionItem value="q1" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What age is best to start orthodontic treatment?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Orthodontic treatment can begin as early as age 7 for children, depending on dental development. However, teens and adults can benefit at any age. At Maple Dental, we evaluate each patient to recommend the best time to start.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How long does orthodontic treatment take?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Treatment times vary based on individual needs, but most orthodontic cases take 12–24 months. Clear aligners may offer faster results in mild cases.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Do clear aligners work as well as braces?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Yes—for many cases, Invisalign can be just as effective as braces. However, some complex issues may respond better to traditional orthodontics. We’ll help you choose the right option.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Is orthodontic care covered by insurance?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Many dental insurance plans offer partial coverage for orthodontics. We’ll help verify your benefits and offer flexible financing to fit your budget.
            </p>
          </AccordionContent>
        </AccordionItem>


      </Accordion>
      </div>
    </div>
     <div className="features-section">
                <Fade direction="up" duration={1000}>
                  <h2 className="features-heading">
                    Schedule an Orthodontic Consultation in Harrisburg
                  </h2>
                  <p className="features-description">
                    Ready to start your journey toward a straighter smile? Maple Dental Harrisburg offers expert orthodontic care in a welcoming, patient-focused environment. Call us today at 717-745-2700 or book online—we’re here to help, right in your neighborhood.
                  </p>
                </Fade>
              </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}