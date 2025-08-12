"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function SportsDentistryPage() {
    const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Custom Sports Mouthguards",
    description: "Over-the-counter guards can’t match the fit and comfort of a custom device. We design professional mouthguards for children, teens, and adults to minimize dental trauma during sports.",
    points: [
      "Tailored fit for comfort and performance",
      "Better protection against impact injuries",
      "Ideal for football, hockey, basketball, and more",
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Emergency Dental Care for Sports Injuries",
    description:
      "Accidents happen-even with the best protection. If you’ve experienced a knocked-out tooth, broken crown, or lip injury during a game or practice, we offer same-day care to treat the damage quickly.",
    points: [
      "Fast treatment for dental trauma",
      "Tooth reimplantation & repair",
      "Swelling and pain management",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Serving Harrisburg & Nearby Communities",
    description:
      "If you're in Harrisburg or surrounding areas like Colonial Park, Progress, or Lawnton, we’re your local sports dentistry provider.",
    points: [
      "Convenient Harrisburg location",
      "Evening appointments and walk-ins available",
      "Trusted by local families and athletes near you",
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Sports Dentistry in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <p className="text-center">
                            Mouthguards & Injury Prevention in Harrisburg | Maple Dental | Family & Cosmetic Dentist
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
                src="/Images/Sports Dentistry.webp"
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
          <div className='desc-text-subtitle'>Sports Dentistry</div>
          <h3 className='desc-text-title'>About Sports Dentistry</h3>
          <p>
            Whether you're an athlete or have a child involved in sports, protecting your teeth is essential. At Maple Dental Harrisburg, we specialize in sports dentistry to help prevent dental injuries and provide prompt care when accidents occur. From custom mouthguards to emergency treatment, we’re here to safeguard your winning smile. 
          </p>
          <p>
            We proudly serve Harrisburg (17110, 17109, 17111, 17112) and nearby areas including Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112). Looking for a sports dentist near me? We’re close by and ready to help.
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
                      Why Choose Maple Dental for Sports Dentistry?
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Custom Athletic Mouthguards for All Ages  </li>
                        <li><CheckCircle />Emergency Care for Sports-Related Injuries</li>
                        <li><CheckCircle />Experienced Family Dentists in Harrisburg  </li>
                        <li><CheckCircle />Fast, Same-Day Appointments Available  </li>
                        <li><CheckCircle />Insurance-Friendly & Flexible Payment Plans</li>
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
                              Protecting Your Smile On and Off the Field
                            </h2>
                            <p className="features-description">
                              At Maple Dental Harrisburg, we understand the risks athletes face-especially in contact sports. Our team provides custom-fitted solutions and fast treatment options to keep your oral health in peak condition.
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
                <h4 className='faq-heading'>Sports Dentistry Q&A</h4>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        What is sports dentistry?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        Sports dentistry focuses on preventing and treating dental injuries related to athletic activity, often using mouthguards and emergency care. 
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Why is a custom mouthguard better?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        It fits your mouth precisely, offering better protection, breathability, and comfort compared to store-bought options. 
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        When should my child wear a sports mouthguard?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Any time they play contact or high-impact sports like football, soccer, or basketball.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        What should I do if a tooth gets knocked out?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          Keep the tooth moist in milk or saliva and visit our clinic immediately for the best chance of saving it.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        How often should I replace a sports mouthguard?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">At least once a year or sooner if it becomes worn, damaged, or your child grows</p>
                      </AccordionContent>
                    </AccordionItem>

                  
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Protect Your Smile with Sports Dentistry at Maple Dental
                                </h2>
                                <p className="features-description">
                                  Don’t wait for an injury to act. Book your custom mouthguard fitting or emergency appointment with Maple Dental Harrisburg today and play safe with confidence.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}