"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function CrownsPage() {


    const features = [
  {
    icon: "/Images/icons/Teeth Replacement.png",
    title: "Types of Dental Restorations We Offer",
    description: "From protecting damaged teeth to replacing missing ones, our crowns and bridges are custom-designed to meet your dental goals and restore full function to your smile",
    points: [
      "Dental Crowns: Tooth-shaped caps that restore the strength and shape of a weakened or fractured tooth",
      "Fixed Bridges: Used to replace one or more missing teeth by anchoring to adjacent healthy teeth",
      "Same-Day Crown Options: For eligible patients, we offer quicker turnaround and immediate placement",
      "Custom Color Matching: For seamless, natural-looking results",
    ]
  },
    {
    icon: "/Images/icons/x-ray.png",
    title: "What to Expect During Treatment",
    description:
      "Restoring your smile with crowns or bridges is a comfortable and straightforward process. Our team ensures you feel confident and informed at every stage",
    points: [
      "Digital scans and impressions for precise fit",
      "Tooth preparation and temporary restorations (if needed)",
      "Custom lab-created crowns and bridges",
      "Final placement with expert attention to bite and comfort",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Trusted Restorative Dentist for Harrisburg & Nearby Areas",
    description:
      "Whether you're replacing a missing tooth or restoring a damaged one, we’re here to help. Maple Dental Harrisburg is a go-to destination for dental crowns and bridges near you",
    points: [
      "Convenient to Harrisburg (17110, 17109, 17111, 17112) and surrounding zip codes",
      "Serving Colonial Park, Paxtang, Penbrook, Progress, Lawnton & Linglestown",
      "Flexible appointments to fit your schedule",
      "Your neighborhood dental restoration expert near me",
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
        <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Dental Crowns & Bridges in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <p className="text-center">
                            Tooth Restoration in Harrisburg | Maple Dental | Family & Cosmetic Dentist
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
                src="/Images/Dental Crown Bridge.webp"
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
          <div className='desc-text-subtitle'>Dental Crowns & Bridges</div>
          <h3 className='desc-text-title'>About Dental Crowns & Bridges</h3>
          <p>
           When teeth are damaged, weakened, or missing, dental crowns and bridges offer long-lasting, functional solutions to restore your smile. At Maple Dental Harrisburg, we specialize in custom restorations that not only improve appearance but also protect your oral health and bite alignment.
          </p>
          <p>
           We proudly provide restorative dentistry to patients across Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112). If you’re searching for “dental crowns near me” or “bridge dentist near you,” you’re in the right place.
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
                          Why Choose Maple Dental for Crowns & Bridges?
                        </div>
                        <div className='wcu-points-section'>
                          <ul className='wcu-points'>
                            <li><CheckCircle />Advanced restorative techniques & materials</li>
                            <li><CheckCircle />Custom-matched crowns for a natural look</li>
                            <li><CheckCircle />Tooth-saving solutions to restore function</li>
                            <li><CheckCircle />Convenient Harrisburg location with flexible scheduling </li>
                            <li><CheckCircle />Insurance accepted + affordable payment plans</li>
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
                                  Restore Strength, Beauty & Function with Dental Crowns & Bridges
                                </h2>
                                <p className="features-description">
                                  At Maple Dental Harrisburg, we believe in conservative dentistry—preserving your natural smile while providing strong, beautiful restorations. Whether you’ve chipped a tooth, lost a filling, or need to replace a missing tooth, our experienced team offers personalized care with precision and compassion.
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
           <h4 className='faq-heading'>Crowns & Bridges Q&A</h4>
           <div className="faq-acc-container">
            <Accordion type="single" className="w-full space-y-5">
        
        <AccordionItem value="q1" className="faq-acc">
          <AccordionTrigger className='faq-qn'>What is a dental crown?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>A dental crown is a custom-made cap that fits over a damaged, cracked, or weakened tooth to restore its shape, strength, and appearance. It’s often used after a root canal, large filling, or to protect a fractured tooth.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="faq-acc">
          <AccordionTrigger className='faq-qn'>What is a dental bridge?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>A bridge is used to replace one or more missing teeth. It’s made up of one or more artificial teeth anchored in place using crowns on the adjacent natural teeth or dental implants.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="faq-acc">
          <AccordionTrigger className='faq-qn'>How long do crowns and bridges last?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>With proper care, dental crowns and bridges can last 10–15 years or more. Good oral hygiene, routine dental visits, and avoiding hard foods help extend their lifespan.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'>Are crowns and bridges covered by insurance?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Most dental insurance plans cover a portion of the cost of crowns and bridges, especially if they are deemed medically necessary. Our team will work with your plan to maximize your benefits.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5" className="faq-acc">
          <AccordionTrigger className='faq-qn'>Is the procedure painful?</AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                No. The procedure is done under local anesthesia, and most patients experience minimal discomfort. We also offer sedation options for those with dental anxiety.
            </p>
          
          </AccordionContent>
        </AccordionItem>


      </Accordion>
      </div>
    </div>
     <div className="features-section">
                <Fade direction="up" duration={1000}>
                  <h2 className="features-heading">
                    Looking for Crowns or Bridges Near You in Harrisburg?
                  </h2>
                  <p className="features-description">
                    Let Maple Dental Harrisburg restore your smile with durable, natural-looking dental crowns and bridges. Call 717-745-2700 to schedule your consultation and discover tooth restoration that fits your life and budget.
                  </p>
                </Fade>
              </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}