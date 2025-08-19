"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function KidsAndChildrenPage() {


    const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "First Visits & Preventive Care",
    description: "We recommend scheduling your child’s first dental visit by age one. These early checkups are key to preventing future issues and helping kids feel confident and calm at the dentist. Our gentle team focuses on making every visit a positive experience.",
    points: [
      "Gentle cleanings and protective fluoride treatments",
      "Oral development assessments and bite evaluations",
      "Guidance on thumb-sucking and pacifier use",
      "Fun, educational visits to build good habits early",
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Restorative Treatments for Children",
    description:
      "When treatment is needed, we make it comfortable and stress-free. Our kid-friendly team explains everything in simple terms, and we use gentle techniques to restore your child’s smile while keeping them at ease.",
    points: [
      "Tooth-colored fillings for small cavities",
      "Stainless steel crowns for added durability",
      "Pulp therapy (baby root canals) for deep decay",
      "Emergency dental care for injuries or pain",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Healthy Smiles Start at Home",
    description:
      "Your child’s dental health begins with daily habits. We partner with parents to provide simple, practical guidance for strong, cavity-free teeth. From teething to brushing tips, we’re here to support your family at every stage.",
    points: [
      "Personalized brushing and flossing instructions",
      "Teething and thumb-sucking guidance",
      "Nutrition tips to reduce sugar-related decay",
      "Support through every phase of oral development",
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
        <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Children’s Dentistry in Harrisburg, PA</h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Gentle Pediatric Dental Care in Harrisburg | Maple Dental | Family & Cosmetic Dentist
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
                src="/Images/Kids Dentistry.jpg"
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
          <div className='desc-text-subtitle'>Kids & Children’s Dentistry</div>
          <h3 className='desc-text-title'>About Kids & Children’s Dentistry</h3>
          <p>
           Children need special care when it comes to their teeth-and at Maple Dental Harrisburg, we make going to the dentist a positive and fun experience. Our team provides gentle, compassionate pediatric dental care that helps kids build healthy habits for life.
          </p>
          <p>
           We serve young patients from Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Paxtang (17111), Penbrook (17103), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112). If you’re looking for a kids’ dentist near me, we’re close by and committed to your child’s smile.
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
                          <h2>Why Parents Trust Maple Dental for Pediatric Dentistry?</h2>
                        </div>
                        <div className='wcu-points-section'>
                          <ul className='wcu-points'>
                            <li><CheckCircle />Kid-Friendly, Calm Environment</li>
                            <li><CheckCircle />Gentle Cleanings & Preventive Exams</li>
                            <li><CheckCircle />Dental Sealants & Fluoride Treatments</li>
                            <li><CheckCircle />Education & Oral Hygiene Coaching for Children</li>
                            <li><CheckCircle />Convenient Harrisburg Location & Flexible Scheduling</li>
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
                                  Gentle, Personalized Dental Care for Children of All Ages
                                </h2>
                                <p className="features-description">
                                  Whether it’s your child’s first dental visit or their annual check-up, our team is here to make it enjoyable, stress-free, and educational. We understand kids-and we know how to earn their smiles
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
           <h2 className='faq-heading'>Kids & Children’s Dentistry Q&A</h2>
           <div className="faq-acc-container">
            <Accordion type="single" className="w-full space-y-5">
        
        <AccordionItem value="q1" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>At what age should my child see the dentist?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>We recommend the first visit by age one or when the first tooth appears. </p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Are baby teeth really that important?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Yes-healthy baby teeth are crucial for chewing, speech, and guiding adult teeth. </p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What if my child is scared of the dentist?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Our team is trained to help children feel relaxed and safe. We use gentle techniques and positive reinforcement.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Do kids need fluoride?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Yes, fluoride strengthens enamel and helps prevent tooth decay.
            </p>
          </AccordionContent>
        </AccordionItem>

       <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Can my child get dental sealants?</h3> </AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Absolutely. Sealants are a safe, effective way to protect molars from cavities.
            </p>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
      </div>
    </div>
     <div className="features-section">
                <Fade direction="up" duration={1000}>
                  <h2 className="features-heading">
                    Book Your Child’s Dental Appointment Today
                  </h2>
                  <p className="features-description">
                    Give your child the gift of a healthy, confident smile. Schedule a visit with our friendly pediatric dental team at Maple Dental Harrisburg.
                  </p>
                </Fade>
              </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}