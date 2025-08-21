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
      title: "Our Most Common Oral Surgery Procedures",
      description:
        "At Tulip Dental, we perform a wide range of oral surgery services designed to restore your oral health, relieve pain, and support long-term dental wellness.",
      points: [
        "Simple & Surgical Tooth Extractions",
        "Impacted Wisdom Tooth Removal",
        "Bone Grafts for Dental Implants",
        "Treatment of Dental Infections & Abscesses",
        "Oral Lesion Removal & Biopsies",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Sedation & Pain Management Options Available",
      description:
        "Your comfort matters to us. We offer several sedation options and thoughtful care protocols to ensure a calm, pain-free surgical experience.",
      points: [
        "Local Anesthesia for Targeted Numbness",
        "Nitrous Oxide (Laughing Gas) for Relaxation",
        "Calming Environment & Compassionate Care",
        "Post-Operative Guidance & Recovery Support",
        "Follow-Up Appointments to Monitor Healing",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Serving Maplewood & Nearby Communities",
      description:
        "We’re proud to provide expert oral surgery care to patients across Maplewood and the surrounding areas. Whether you're nearby or just a short drive away, we're here to help.",
      points: [
        "Maplewood – 07040",
        "South Orange – 07079",
        "Vauxhall – 07088",
        "Irvington – 07111",
        "Newark – 07106 & 07112",
      ],
    },
  ];
  
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <main className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Oral Surgery in Maplewood, NJ</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <h2 className="text-center">
              Expert Oral Surgery Care at Tulip Dental in Maplewood | Tulip Dental | Family & Cosmetic Dentist              </h2>
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
                      src="/Images/Oral Surgery.jpg"
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
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>About Oral Surgery</h2>
                <p>
                Oral surgery may sound intimidating, but at Tulip Dental in Maplewood, we make the process safe, gentle, and stress-free. Whether you need a simple tooth extraction, wisdom tooth removal, or more complex surgical care, our experienced team is here to help.We provide in-house surgical procedures using advanced tools and sedation options for maximum comfort.                 </p>
                <p>
                Patients from Maplewood (07040), South Orange (07079), Vauxhall (07088), Irvington (07111), and nearby areas of Newark (07106, 07112) trust us for convenient, compassionate surgical care-right in their neighborhood. If you're searching for an "oral surgeon near me," Tulip Dental is nearby and ready to support your dental health with precision and care.                </p>
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
  <h2>Top Reasons To Choose Tulip Dental for Oral Surgery?</h2>
</div>
<div className='wcu-points-section'>
  <ul className="wcu-points">
    <li>
      <h3 className="text-lg flex items-center gap-2">
        <CheckCircle /> Experienced Surgical Team
      </h3>
    </li>
    <li>
      <h3 className="text-lg flex items-center gap-2">
        <CheckCircle /> State-of-the-Art Equipment
      </h3>
    </li>
    <li>
      <h3 className="text-lg flex items-center gap-2">
        <CheckCircle /> Comfortable, Stress-Free Environment
      </h3>
    </li>
    <li>
      <h3 className="text-lg flex items-center gap-2">
        <CheckCircle /> Same-Day Consultations Available
      </h3>
    </li>
    <li>
      <h3 className="text-lg flex items-center gap-2">
        <CheckCircle /> Serving Maplewood & Surrounding Communities
      </h3>
    </li>
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
              Comfortable, Safe & Expert Dental Surgery Near You               </h2>
              <p className="features-description">
              Oral surgery doesn’t have to be stressful. At Tulip Dental, our goal is to make every surgical procedure-from extractions to minor jaw surgeries-as smooth and pain-free as possible. We use advanced diagnostics, modern techniques, and gentle care every step of the way.
              <br /><br />Here’s What Makes Our Service Different              </p>
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
  <h2 className='faq-heading'>Oral Surgery FAQs</h2>
  <div className="faq-acc-container">
    <Accordion type="single" className="w-full space-y-5">

      <AccordionItem value="q1" className="faq-acc">
        <AccordionTrigger className='faq-qn'>
          <h3 className='text-lg'>When is oral surgery necessary?</h3>
        </AccordionTrigger>
        <AccordionContent className='faq-ans'>
          <p>
            Oral surgery is needed when a dental condition can’t be treated with non-surgical methods. Common reasons include impacted teeth, severe decay, dental infections, or preparation for dental implants.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="q2" className="faq-acc">
        <AccordionTrigger className='faq-qn'>
          <h3 className='text-lg'>Does oral surgery hurt?</h3>
        </AccordionTrigger>
        <AccordionContent className='faq-ans'>
          <p>
            Not with us! We use local anesthesia and offer sedation options to ensure a pain-free experience. Most patients report little to no discomfort during the procedure.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="q3" className="faq-acc">
        <AccordionTrigger className='faq-qn'>
          <h3 className='text-lg'>What should I expect after oral surgery?</h3>
        </AccordionTrigger>
        <AccordionContent className='faq-ans'>
          <p>
            Mild swelling and discomfort are normal, and we provide detailed aftercare instructions to support healing. Most patients recover within a few days.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="q4" className="faq-acc">
        <AccordionTrigger className='faq-qn'>
          <h3 className='text-lg'>How do I prepare for a dental surgery appointment?</h3>
        </AccordionTrigger>
        <AccordionContent className='faq-ans'>
          <p>
            Avoid eating or drinking if sedation is planned, follow any instructions we provide, and arrange for someone to drive you home if needed.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="q5" className="faq-acc">
        <AccordionTrigger className='faq-qn'>
          <h3 className='text-lg'>Is oral surgery covered by insurance?</h3>
        </AccordionTrigger>
        <AccordionContent className='faq-ans'>
          <p>
            Many oral surgery procedures are covered by dental insurance. Our team will help you verify your benefits and explain all your financial options.
          </p>
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  </div>
</div>

<div className="features-section">
  <Fade direction="up" duration={1000}>
    <h2 className="features-heading">
      Need Oral Surgery in Maplewood, NJ?
    </h2>
    <p className="features-description">
      From extractions to wisdom teeth removal, Tulip Dental is here with the surgical expertise and gentle care you deserve. Let us help you protect your smile and your overall health with expert oral surgery — close to home.
    </p>
  </Fade>
</div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}