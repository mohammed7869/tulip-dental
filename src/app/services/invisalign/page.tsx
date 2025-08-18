"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function InvisilinePage() {


    const features = [
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "How Invisalign Works",
    description: "Invisalign uses a series of clear, BPA-free plastic aligners that gently move your teeth into their ideal position. You’ll wear each set of aligners for about two weeks, gradually achieving a straighter, healthier smile",
    points: [
      "No brackets, wires, or food restrictions",
      "Digital scan-no messy impressions",
      "Removable for eating, brushing, and special occasions",
      "Aligner check-ins every 6–8 weeks",
    ]
  },
    {
    icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
    title: "Benefits of Invisalign vs. Traditional Braces",
    description:
      "Invisalign offers all the effectiveness of braces-without the metal. It’s a modern approach to orthodontics that fits your life",
    points: [
      "Nearly invisible in daily life",
      "More comfortable than metal braces",
      "Easier to clean and maintain oral hygiene",
      "Fewer office visits and shorter treatment times in many cases",
    ],
  },
  {
    icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
    title: "Serving Harrisburg & Nearby Communities",
    description:
      "Maple Dental is proud to be your go-to Invisalign dentist near you. Whether you’re in Harrisburg or surrounding communities like Colonial Park or Penbrook, we’re nearby and ready to help you achieve your best smile",
    points: [
      "Central Harrisburg location",
      "Evening appointments for working professionals and students",
      "Welcoming patients from Progress, Lawnton, Linglestown, and beyond",
      "Friendly, experienced team with a passion for smile transformations",
    ],
  },
];
    return (
        <div className='flex min-h-screen bg-gray-50'>
            <main className='details-page-container'>
        <div className='details-page'>
                    <div className='details-page-header-section'>
                        <Fade direction='up' duration={1000}>
                        <h1>Invisalign Treatment in Harrisburg, PA </h1>
                        </Fade>
                        <Fade direction='down' duration={1000}>
                        <h2 className="text-center">
                            Clear Aligners & Orthodontics in Harrisburg | Maple Dental | Family & Cosmetic Dentist Near You
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
                        src="/Images/Invisalign.webp"
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
          <div className='desc-text-subtitle'>Invisalign</div>
          <h3 className='desc-text-title'>About Invisalign</h3>
          <p>
           Invisalign is a clear, removable alternative to traditional metal braces-designed for adults and teens looking for a discreet way to straighten their teeth. At Maple Dental Harrisburg, we offer personalized Invisalign treatment plans to improve your smile with comfort, convenience, and confidence.
          </p>
          <p>
           Whether you’re looking to fix crowding, spacing, or bite issues, our team is here to help. We serve patients from Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112). If you’re searching for Invisalign near me, Maple Dental is your trusted local provider.
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
                          <h2>Why Choose Maple Dental for Invisalign?</h2>
                        </div>
                        <div className='wcu-points-section'>
                          <ul className='wcu-points'>
                            <li><CheckCircle />Certified Invisalign Provider</li>
                            <li><CheckCircle />Customized Treatment Plans with 3D Scanning</li>
                            <li><CheckCircle />Comfortable, Removable, Virtually Invisible Aligners</li>
                            <li><CheckCircle />Flexible Payment Plans & Insurance Options </li>
                            <li><CheckCircle />Convenient Location in Harrisburg</li>
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
                                  Discreet, Comfortable Teeth Straightening for All Ages
                                </h2>
                                <p className="features-description">
                                  At Maple Dental Harrisburg, we make orthodontic care easier and more enjoyable with Invisalign. The clear aligners are nearly invisible and removable-perfect for busy lifestyles and social confidence.
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
           <h2 className='faq-heading'>Invisalign Q&A</h2>
           <div className="faq-acc-container">
            <Accordion type="single" className="w-full space-y-5">
        
        <AccordionItem value="q1" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How long does Invisalign treatment take?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Most Invisalign cases take 6–18 months, depending on your specific alignment needs.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Is Invisalign painful?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>You may feel mild pressure at first, but most patients find Invisalign very comfortable.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How often do I need to wear the aligners?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>Wear them 20–22 hours per day, removing them only to eat, drink (except water), and brush.</p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Is Invisalign good for teens?</h3></AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Yes, Invisalign is a great option for teens, especially with Invisalign Teen which includes wear indicators.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5" className="faq-acc">
          <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Will insurance cover Invisalign?</h3>  </AccordionTrigger>
          <AccordionContent className='faq-ans'>
            <p>
                Many dental insurance plans offer partial coverage for Invisalign. We also provide flexible payment options
            </p>
          </AccordionContent>
        </AccordionItem>


      </Accordion>
      </div>
    </div>
     <div className="features-section">
                <Fade direction="up" duration={1000}>
                  <h2 className="features-heading">
                    Start Your Invisalign Journey in Harrisburg Today
                  </h2>
                  <p className="features-description">
                    Book your Invisalign consultation at Maple Dental Harrisburg and take the first step toward a confident, straighter smile-without metal braces.
                  </p>
                </Fade>
              </div>
              <BookCallBtn/>
        </div>
            </main>
        </div>
    );
}