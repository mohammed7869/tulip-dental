"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function DentalEmergencyPage() {


  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Prompt Relief & Compassionate Support",
      description: "When pain strikes, you need a dental team that acts fast. From infections to broken restorations, we provide quick diagnosis and same-day treatment to get you back to feeling your best",
      points: [
        "Emergency pain relief & dental sedation",
        "Treatment for swelling, abscesses, or oral injuries",
        "Broken fillings, fractured teeth, or crown issues",
        "Care for kids, adults, and seniors",
      ]
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Timely Solutions That Protect Your Smile",
      description:
        "Our experienced dentists understand that the right response in a dental emergency can mean saving your tooth and avoiding costly treatments down the road. We provide honest recommendations and fast solutions",
      points: [
        "Emergency root canals & extractions",
        "Repairs for broken crowns or veneers",
        "Temporary & permanent restoration options",
        "Immediate post-trauma care",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Emergency Dental Care Across Harrisburg & Nearby Areas",
      description:
        "From cracked teeth to dental infections, Maple Dental Harrisburg is your go-to provider for emergency dental services near you. No matter where you are in the area, help is never far away",
      points: [
        "Convenient to Harrisburg (17110, 17109, 17111, 17112)",
        "Also serving Colonial Park, Lawnton, Penbrook, Progress, Paxtang & Linglestown",
        "Walk-in availability and same-day service",
        "Top-rated dental emergency team near me",
      ],
    },
  ];
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <main className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Dental Emergencies in Harrisburg, PA</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <h2 className="text-center">
                Emergency Dental Services in Harrisburg | Maple Dental | Family & Cosmetic Dentist Near You
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
                      src="/Images/Dental Emergencies.webp"
                      alt="Main Banner"
                    />
                  </div>
                </Zoom>
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className='desc-text-section'>
              <Fade cascade direction="up" delay={1000} duration={600}>
                <div className='desc-text-subtitle'>Dental Emergencies</div>
                <h3 className='desc-text-title'>About Dental Emergencies</h3>
                <p>
                  Dental emergencies can be unexpected, painful, and stressful. Whether you're dealing with a broken tooth, intense toothache, or dental trauma, quick treatment is essential to avoid complications and restore your comfort. At Maple Dental Harrisburg, we offer same-day emergency dental care with a focus on gentle, expert service.
                </p>
                <p>
                  We proudly serve Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112). Searching online for a “dental emergency near me”? Our team is nearby, experienced, and ready to help.
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
                  <h2>Why Choose Maple Dental for Emergency Dental Services?</h2>
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li><CheckCircle />Same-Day & Walk-In Appointments Available</li>
                    <li><CheckCircle />Digital Imaging & Accurate Diagnoses</li>
                    <li><CheckCircle />Gentle, Compassionate Care for All Ages</li>
                    <li><CheckCircle />Convenient Harrisburg Location </li>
                    <li><CheckCircle />Insurance Accepted & Payment Options Available</li>
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
                Fast, Effective Emergency Dentistry When You Need It Most
              </h2>
              <p className="features-description">
                Dental emergencies require immediate care—and you shouldn’t have to wait. At Maple Dental Harrisburg, we’re equipped to handle a full range of urgent dental issues quickly and compassionately. Whether it’s late in the day or first thing in the morning, we’ll work to get you the relief you need without delay.
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
            <h2 className='faq-heading'>Dental Emergency Q&A</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">

                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What qualifies as a dental emergency?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Any issue causing severe pain, bleeding, or risking permanent tooth damage requires urgent care.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What are common dental emergencies you treat?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>We treat broken teeth, knocked-out teeth, infections, abscesses, lost fillings, and trauma to gums or soft tissues.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What should I do before reaching the dentist?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Rinse gently, use a cold compress, and save any broken tooth or crown fragments to bring with you.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How can I avoid dental emergencies?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Maintain routine checkups, wear mouthguards during sports, and avoid biting hard objects.
                    </p>
                  </AccordionContent>
                </AccordionItem>



              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Experiencing a Dental Emergency in Harrisburg?
              </h2>
              <p className="features-description">
                Call Maple Dental Harrisburg at <a href="tel:7177452700" className="text-primary hover:underline">717-745-2700</a> for urgent dental care near you. We offer same-day appointments, walk-in availability, and trusted support when you need it most.
              </p>
            </Fade>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}