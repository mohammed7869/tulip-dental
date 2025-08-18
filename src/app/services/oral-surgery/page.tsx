"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function OralSurgeryPage() {


  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Tooth Extractions with a Gentle Touch",
      description: "Sometimes a tooth must be removed due to severe decay, damage, or infection that cannot be saved with restorative care. When this happens, our team provides a safe and gentle extraction process using local anesthesia and modern techniques",
      points: [
        "Simple and surgical extractions",
        "Bone-preserving techniques when needed",
        "Post-extraction care and replacement options (implants, bridges, etc.)",
        "Patient-first comfort and pain control",
      ]
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Wisdom Tooth Removal in Harrisburg",
      description:
        "Wisdom teeth often cause problems when they erupt late, crowd existing teeth, or become impacted beneath the gums. At Maple Dental, we offer expert evaluation and removal of wisdom teeth for teens and adults",
      points: [
        "Diagnostic imaging to plan safe removal",
        "Sedation options to keep you relaxed",
        "Skilled removal of impacted or infected wisdom teeth",
        "Post-op care instructions and support",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Serving Harrisburg & Surrounding Neighborhoods",
      description:
        "We are proud to be a trusted provider of dental surgery near you. Whether you’re located in Harrisburg (17110, 17109, 17111, 17112) or nearby areas like Colonial Park, Progress, Lawnton, Penbrook, or Linglestown, we’re here when you need expert oral care",
      points: [
        "Conveniently located in Harrisburg",
        "Flexible appointments & efficient procedures",
        "Insurance-friendly & payment plans available",
        "Top-rated oral surgery near me in Central PA",
      ],
    },
  ];
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <main className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Oral Surgery in Harrisburg, PA</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <h2 className="text-center">
                Expert Oral Surgery in Harrisburg | Maple Dental | Family & Cosmetic Dentist
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
                      src="/Images/Oral Surgery.webp"
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
                <div className='desc-text-subtitle'>Oral Surgery</div>
                <h3 className='desc-text-title'>About Oral Surgery</h3>
                <p>
                  Oral surgery may sound intimidating, but at Maple Dental Harrisburg, it’s performed with precision, care, and a focus on your comfort. Whether you need a simple tooth extraction or a more complex procedure like wisdom tooth removal, we ensure a safe, smooth experience backed by advanced dental technology and experienced hands.
                </p>
                <p>
                  We proudly serve patients from Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112). If you’re searching for an oral surgeon near me or dental surgery near you, Maple Dental is your trusted neighborhood choice.
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
                  Why Choose Maple Dental for Oral Surgery?
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li><CheckCircle />Skilled Dentists with Gentle Approach</li>
                    <li><CheckCircle />Modern Technology & Comfortable Techniques</li>
                    <li><CheckCircle />Sedation Dentistry Available</li>
                    <li><CheckCircle />Central Harrisburg Location </li>
                    <li><CheckCircle />Affordable Payment Plans</li>
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
                Comfortable & Precise Oral Surgery, Close to Home
              </h2>
              <p className="features-description">
                At Maple Dental Harrisburg, oral surgery is never a one-size-fits-all approach. We take time to evaluate your needs, explain your options, and tailor treatment to ensure the best outcomes. From routine extractions to surgical removal of impacted teeth, we’re here to help you heal quickly—with minimal discomfort and maximum support.
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
            <h2 className='faq-heading'>Oral Surgery Q&A</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">

                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What is considered oral surgery?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Oral surgery includes procedures that treat conditions affecting the mouth, teeth, and jaw. Common types include tooth extractions, wisdom teeth removal, surgical treatment of infections or abscesses, and preparation for dental implants.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Do tooth extractions hurt?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>No—our team ensures your comfort with local anesthesia and, if needed, dental sedation. Most patients report little to no discomfort during the procedure and mild soreness afterward that resolves within a few days.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How do I know if my wisdom teeth need to be removed?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>You may need your wisdom teeth removed if you experience pain, swelling, infection, or overcrowding. X-rays often reveal impaction or potential issues even before symptoms appear. Our team will evaluate and recommend the best course of action.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What should I do after an extraction or surgery?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      After surgery, we’ll provide detailed aftercare instructions. Typically, patients should rest, avoid hard foods, use cold compresses to reduce swelling, and follow prescribed medications to manage pain or prevent infection.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Is oral surgery covered by insurance?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Many oral surgery procedures are covered fully or partially by dental insurance. Our team is happy to help verify your benefits and offer flexible payment options to make care affordable.
                    </p>

                  </AccordionContent>
                </AccordionItem>


              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Need Oral Surgery in Harrisburg?
              </h2>
              <p className="features-description">
                Whether you need a simple extraction or complex oral surgery, Maple Dental Harrisburg is here to provide expert care with compassion. We proudly serve Harrisburg and nearby communities like Colonial Park, Progress, Penbrook, Paxtang, Lawnton, and Linglestown.
              </p>
            </Fade>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}