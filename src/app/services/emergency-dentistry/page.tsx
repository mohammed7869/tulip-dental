"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React, { useState } from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import { CheckCircle } from 'lucide-react';
import BookCallBtn from '../book-call-btn';

export default function EmergencyDentistryPage() {

  const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Immediate Pain Relief & Comfort",
    description: "Dental pain can’t wait—and neither should you. At Maple Dental Harrisburg, we prioritize fast treatment to address discomfort, swelling, or infection with modern solutions that put your comfort first.",
    points: [
      "Same-day emergency appointments",
      "Pain management and dental sedation options",
      "Treatment for abscesses, broken teeth, and swelling",
      "Gentle, patient-focused care for all ages",
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Smart Treatment Decisions Under Pressure",
    description:
      "When emergencies happen, smart and timely decisions can save your tooth and avoid long-term complications. Our skilled dentists guide you through every step with clear recommendations.",
    points: [
      "Thorough diagnostics with digital imaging",
      "Emergency root canals and restorations",
      "Temporary and permanent crown solutions",
      "Tooth-saving procedures whenever possible",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Serving Harrisburg & Nearby Communities",
    description:
      "We are proud to be your trusted local emergency dental provider. Whether you're in Harrisburg (17110, 17109, 17111, 17112) or nearby in Colonial Park, Paxtang, Penbrook, Lawnton, Progress, or Linglestown—we're right around the corner when you need us most.",
    points: [
      "Convenient Harrisburg location",
      "Walk-ins and urgent same-day care",
      "Insurance accepted + flexible payment options",
      "Top-rated emergency dentist near you",
    ],
  },
];

  return (
    <div className='flex min-h-screen bg-gray-50'>
      <div className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Emergency Dentistry in Harrisburg, PA</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <p className='text-center'>
                Urgent Dental Care in Harrisburg | Maple Dental | Family & Cosmetic Dentist Near You
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
                      src="/Images/Emergency Dentistry.jpg"
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
                <div className='desc-text-subtitle'>Emergency Dentistry</div>
                <h3 className='desc-text-title'>About Emergency Dentistry</h3>
                <p>
                  Dental emergencies can happen anytime—and they often require quick action to avoid further complications. That’s why <strong>Maple Dental Harrisburg</strong> provides fast, gentle, and professional emergency dental care to patients of all ages.
                </p>
                <p>
                  Whether it’s a chipped tooth, a knocked-out crown, or intense pain, our team is here to help. We proudly serve patients from <strong>Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111),</strong> and <strong>Linglestown (17112)</strong>—so if you’re searching for an emergency dentist near me, we’re nearby and ready to help.
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
                  Why Choose Maple Dental for Emergency Dental Care?
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li><CheckCircle /> Gentle, Experienced Dentists</li>
                    <li><CheckCircle /> Advanced Technology for Immediate Care</li>
                    <li><CheckCircle /> Same-Day & Walk-In Appointments Available</li>
                    <li><CheckCircle /> Central Location in Harrisburg, PA</li>
                    <li><CheckCircle /> Insurance Accepted & Affordable Payment Plans</li>
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
                Fast, Reliable Emergency Dental Care When You Need It Most
              </h2>
              <p className="features-description text-center">
                At Maple Dental Harrisburg, we understand that dental emergencies can strike at any time. Our dedicated team is here to provide swift and effective care that relieves pain and prevents complications. Whether you're dealing with a cracked tooth, lost filling, or severe toothache, we’re prepared to act fast—with expert care and a compassionate touch. Patients from Harrisburg and surrounding areas trust us for urgent dental care that makes a difference.
              </p>
              <p className="features-description">
                Here’s what sets our emergency dental services apart:
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
            <h4 className='faq-heading'>Emergency Dentistry Q&A</h4>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    What is emergency dentistry?
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    Emergency dentistry focuses on treating urgent, often painful dental conditions that require immediate attention. At Maple Dental Harrisburg, we offer fast diagnosis and treatment to relieve symptoms, stop further damage, and restore function. Whether it’s a broken crown or a severe toothache, we’re ready to help—no appointment needed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    What are common dental emergencies?
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    We provide emergency treatment for a variety of issues, including:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Cracked or broken teeth</li>
                      <li>Knocked-out permanent teeth</li>
                      <li>Severe toothaches or swelling</li>
                      <li>Bleeding gums or injuries inside the mouth</li>
                      <li>Lost fillings or crowns</li>
                      <li>Infected or abscessed teeth</li>
                      <li>Damaged braces or orthodontic appliances</li>
                      <li>Foreign objects stuck between teeth</li>
                    </ul>
                    <p className="mt-2">If you live in <strong>Harrisburg</strong>, <strong>Progress</strong>, or anywhere near <strong>Colonial Park</strong>, we’re your go-to emergency dentist near you for fast, expert care</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    What should I do before I get to the dentist?
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className='mb-2'>Here are a few quick actions to take during a dental emergency:</p>
                    <strong>Severe toothache:</strong> Rinse with warm saltwater. Apply a cold compress outside the cheek. Avoid chewing on the affected side.<br /><br />
                    <strong>Knocked-out tooth:</strong> Handle by the crown, not the root. Try reinserting it gently. If not possible, place it in milk and head to our clinic immediately<br /><br />
                    <strong>Broken crown or filling:</strong> Keep any pieces you can find. Store in a clean bag and bring them with you to your visitS.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    How can I avoid dental emergencies?
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    While some emergencies are unavoidable, many can be prevented with good habits:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Brush and floss daily</li>
                      <li>Visit your dentist every 6 months</li>
                      <li>Wear a mouthguard during sports</li>
                      <li>Avoid chewing hard objects (ice, pens, etc.)</li>
                      <li>Don’t use teeth as tools</li>
                      <li>Treat small dental issues before they worsen</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          {/* Call to Action Section */}

        </div>
        <div className="features-section">
                        <Fade direction="up" duration={1000}>
                          <h2 className="features-heading">
                            Need Emergency Dental Help in Harrisburg?
                          </h2>
                          <p className="features-description">
                            If you’re dealing with sudden dental pain or injury, don’t wait. Our expert emergency dental team is just a phone call away. <strong>Maple Dental Harrisburg</strong> is here to treat you with urgency, compassion, and care.
                          </p>
                          <BookCallBtn/>
                        </Fade>
                      </div>
          
      </div>
    </div>
  );
}