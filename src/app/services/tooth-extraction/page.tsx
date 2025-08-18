"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function ToothExtractionPage() {


  const features = [
    {
      icon: "/Images/icons/tooth-extraction.png",
      title: "Simple & Surgical Tooth Extractions",
      description: "We offer both routine and surgical extractions depending on your needs, ensuring proper aftercare and minimal healing time",
      points: [
        "Non-impacted tooth removal",
        "Wisdom teeth extraction",
        "Infected or broken tooth removal",
        "Surgical extractions for impacted teeth",
      ]
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Pain-Free Experience, Every Time",
      description:
        "Your comfort is our top priority. We use local anesthesia, gentle techniques, and sedation options to reduce stress and discomfort during the procedure",
      points: [
        "Numbing agents and conscious sedation",
        "Clear communication and aftercare instructions",
        "Fast healing with minimal swelling",
        "Patient-focused care from start to finish",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Serving Harrisburg & Surrounding Neighborhoods",
      description:
        "Whether you're in Harrisburg or a nearby area, Maple Dental is your trusted provider for safe and professional extractions",
      points: [
        "Conveniently located in Harrisburg (17110–17112)Serving Harrisburg (17110, 17109, 17111, 17112) & surrounding areas",
        "Welcoming patients from Colonial Park, Lawnton, Penbrook, Progress, Paxtang & Linglestown",
        "Same-day appointments available",
        "Your trusted dentist for extractions near you",
      ],
    },
  ];
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <main className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Tooth Extractions in Harrisburg, PA</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <h2 className="text-center">
                Safe & Gentle Tooth Removal in Harrisburg | Maple Dental | Family & Cosmetic Dentist Near You
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
                      src="/Images/Tooth Extraction.webp"
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
                <div className='desc-text-subtitle'>Tooth Extractions</div>
                <h3 className='desc-text-title'>About Tooth Extractions</h3>
                <p>
                  Tooth extraction may be necessary to protect your oral health when a tooth is damaged beyond repair, severely decayed, or causing crowding or infection. At Maple Dental Harrisburg, we provide comfortable, stress-free extractions using advanced techniques and a compassionate approach.
                </p>
                <p>
                  We serve patients from Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Lawnton (17111), Progress (17109, 17111), and Linglestown (17112). If you're searching for a tooth extraction near me, we’re close by and ready to help.
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
                  <h2>Why Choose Maple Dental for Tooth Extractions?</h2>
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li><CheckCircle />Gentle Extractions with Minimal Discomfort</li>
                    <li><CheckCircle />Wisdom Tooth & Surgical Extractions Available</li>
                    <li><CheckCircle />Sedation Dentistry for Anxiety-Free Visits</li>
                    <li><CheckCircle />Convenient Harrisburg Location </li>
                    <li><CheckCircle />Insurance Plans Accepted & Flexible Payments</li>
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
                Comfortable, Professional Tooth Removal for a Healthier Smile
              </h2>
              <p className="features-description">
                Our team makes every effort to save your natural teeth-but when extraction is necessary, we ensure it's done safely and comfortably. Whether it’s a routine removal or a more complex case, you can count on us for compassionate care every step of the way.                                </p>
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
            <h2 className='faq-heading'>Tooth Extraction Q&A</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">

                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>When is a tooth extraction necessary?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Extraction is needed when a tooth is severely decayed, broken, infected, or causing crowding.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Is tooth extraction painful?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>No, we numb the area thoroughly and offer sedation to ensure you feel no pain during the procedure.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How long is the recovery period?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Most patients recover in 2–3 days, with complete healing in 1–2 weeks depending on the case.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What should I eat after a tooth extraction?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Stick to soft foods like yogurt, mashed potatoes, and smoothies for the first few days.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Need a Tooth Removed in Harrisburg?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Trust Maple Dental Harrisburg for gentle and professional extractions near you. Call <a href="tel:7177452700" className="text-primary hover:underline">717-745-2700</a> today to book a same-day consultation.                    </p>
                  </AccordionContent>
                </AccordionItem>


              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Do I need a replacement after extraction?
              </h2>
              <p className="features-description">
                Ready to start your journey toward a straighter smile? Maple Dental Harrisburg offers expert orthodontic care in a welcoming, patient-focused environment. Call us today at <a href="tel:7177452700" className="text-primary hover:underline">717-745-2700</a> or book online—we’re here to help, right in your neighborhood.
              </p>
            </Fade>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}