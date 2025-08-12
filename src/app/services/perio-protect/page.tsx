"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function PerioProtectPage() {
    const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "What to Expect with Treatment",
    description: "Perio Protect is designed to fit easily into your daily routine. Treatment is personalized to your specific needs and adjusted as your gum health improves.",
    points: [
      "Digital impressions to create custom-fit trays",
      "Daily wear time as short as 10–15 minutes",
      "Medication targets bacteria where brushing can't",
      "No injections, drills, or surgery needed",
      "Periodic checkups to monitor gum health"
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Is It Right for You?",
    description:
      "Perio Protect is ideal for patients with early to moderate periodontal disease who want to avoid surgery. It’s also effective for maintenance after deep cleanings or to reduce pocket depth and inflammation in ongoing care.",
    points: [
      "Ideal for patients with gum inflammation or infection",
      "Helpful for those who struggle with flossing",
      "A gentle option for patients with sensitive gums",
      "Safe for long-term use",
      "Encourages healthier gums and fresher breath"
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Why Harrisburg Patients Choose Maple Dental",
    description:
      "Patients across Harrisburg and surrounding communities trust us to offer effective, modern solutions like Perio Protect. We combine personalized care with advanced technology to help you preserve your smile and avoid complications from gum disease.",
    points: [
      "Experienced in periodontal care and preventive dentistry",
      "Comfortable and judgment-free environment",
      "Trusted by families in Colonial Park, Lawnton & Progress",
      "Flexible appointment scheduling & convenient location",
      "Focused on helping you maintain a healthy, confident smile"
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
                <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Perio Protect Gum Treatment in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <p className="text-center">
                            Non-Surgical Periodontal Therapy in Harrisburg | Maple Dental | Family & Cosmetic Dentist
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
                src="/Images/Perio Protect Image.webp"
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
          <div className='desc-text-subtitle'>Perio Protect</div>
          <h3 className='desc-text-title'>About Perio Protect</h3>
          <p>
            Perio Protect is a comfortable, non-invasive treatment option for patients with mild to moderate gum disease (periodontitis). This FDA-cleared system uses custom trays to deliver medication deep below the gumline-where brushing and flossing can’t reach. It helps reduce bacteria, inflammation, and bleeding gums without surgery or discomfort.
          </p>
          <p>
            At Maple Dental Harrisburg, we recommend Perio Protect for patients in Harrisburg (17110, 17109, 17111, 17112), Colonial Park, Lawnton, Penbrook, and nearby areas looking for a gentle yet effective way to protect their gums and overall health.
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
                      Benefits of Perio Protect at Maple Dental
                    </div>
                    <div className='wcu-points-section'>
                      <ul className='wcu-points'>
                        <li><CheckCircle />Non-surgical treatment for gum disease  </li>
                        <li><CheckCircle />Easy at-home application with comfortable custom trays</li>
                        <li><CheckCircle />Helps reduce bleeding, swelling, and bad breath</li>
                        <li><CheckCircle />Complements regular cleanings and deep cleanings</li>
                        <li><CheckCircle />Improves gum health and supports long-term oral health</li>
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
                              How Perio Protect Works?
                            </h2>
                            <p className="features-description">
                              Perio Protect works by delivering a powerful hydrogen peroxide-based medication directly under the gums using a snug-fitting tray. This eliminates harmful bacteria and promotes healing without the need for painful scaling or surgical procedures. You wear the tray for just minutes each day at home, as instructed by your dentist.
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
                <h4 className='faq-heading'>Perio Protect Q&A</h4>
                <div className="faq-acc-container">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    <AccordionItem value="q1" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Is Perio Protect a replacement for dental cleanings?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans ">
                        No, it's a supplemental therapy that enhances your results between professional cleanings or deep cleanings.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Does it hurt to use Perio Protect trays?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">
                        Not at all. The trays are custom-made for comfort and the medication is gentle on your gums.
                        
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        How long do I need to wear the trays?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p>
                          Usually 10–15 minutes daily, but this can vary based on your dentist’s recommendation.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q5" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Can I use Perio Protect if I already had gum surgery?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Yes, it can help maintain your results and reduce the need for additional procedures.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q6" className="faq-acc">
                      <AccordionTrigger className="faq-qn rounded-md">
                        Is Perio Protect covered by insurance?
                      </AccordionTrigger>
                      <AccordionContent className="faq-ans">
                        <p className="mt-2">Coverage varies. We’ll check with your provider and offer flexible payment options if needed.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="features-section">
                              <Fade direction="up" duration={1000}>
                                <h2 className="features-heading">
                                  Protect Your Gums the Comfortable Way
                                </h2>
                                <p className="features-description">
                                  Don’t let gum disease progress. With Perio Protect at Maple Dental Harrisburg, you can treat and manage gum disease without surgery, pain, or stress. Contact us today to schedule your consultation and learn how Perio Protect can restore your gum health naturally.
                                </p>
                              </Fade>
                            </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}