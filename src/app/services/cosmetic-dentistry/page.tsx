import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("cosmetic-dentistry", "/Images/Cosmetic Dentistry.webp");

export default function CosmeticDentistryPage() {


  const features = [
    {
      icon: "/Images/icons/tooth-whitening.png",
      title: "Teeth Whitening in Harrisburg",
      description: "Tired of stains or yellow teeth? Our professional teeth whitening treatments are faster and more effective than over-the-counter options. We offer both in-office and take-home whitening kits to fit your lifestyle.",
      points: [
        "Brighten your smile by several shades",
        "Safe for enamel and gum health",
        "Quick in-office results in just one visit",
        "Customized trays for at-home use",
      ]
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Porcelain Veneers & Bonding",
      description:
        "Veneers and cosmetic bonding can instantly correct issues like chips, gaps, stains, or misaligned teeth—without braces or lengthy procedures",
      points: [
        "Custom veneers for a flawless smile",
        "Composite bonding for quick aesthetic fixes",
        "Natural-looking results that last",
        "Minimally invasive with little to no downtime",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Smile Makeovers Near You",
      description:
        "Looking for a complete transformation? Our smile makeovers combine multiple cosmetic treatments to give you the smile you've always dreamed of. From reshaping gums to realigning teeth, we tailor every plan to your goals",
      points: [
        "Full evaluations and digital mock-ups",
        "Combination of whitening, veneers, bonding, and more",
        "Designed to match your facial features",
        "Affordable treatment plans available",
      ],
    },
  ];
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <main className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Cosmetic Dentistry in Harrisburg, PA</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <h2 className="text-center">
                Enhance Your Smile in Harrisburg | Maple Dental | Family & Cosmetic Dentist
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
                      src="/Images/Cosmetic Dentistry.webp"
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
                <div className='desc-text-subtitle'>Cosmetic Dentistry</div>
                <h3 className='desc-text-title'>About Cosmetic Dentistry</h3>
                <p>
                  Your smile is one of the first things people notice—and with cosmetic dentistry at Maple Dental Harrisburg, you can feel confident every time you show it. Whether you're looking to brighten, reshape, or completely transform your smile, we offer customized solutions using the latest techniques and materials.
                </p>
                <p>
                  We proudly serve patients from Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111), and Linglestown (17112). So if you’re searching for a “cosmetic dentist near me” or want a smile makeover near you, Maple Dental Harrisburg is your trusted local provider.
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
                  <h2>Why Choose Maple Dental for Cosmetic Dentistry?</h2>
                </div>
                <div className='wcu-points-section'>
                  <ul className='wcu-points'>
                    <li><CheckCircle />Personalized Smile Design & Planning</li>
                    <li><CheckCircle />Advanced Techniques for Natural-Looking Results</li>
                    <li><CheckCircle />High-Quality Materials & Digital Imaging</li>
                    <li><CheckCircle />Flexible Financing & Insurance Assistance </li>
                    <li><CheckCircle />Convenient Location in Harrisburg, PA</li>
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
                Achieve the Smile You’ve Always Wanted
              </h2>
              <p className="features-description">
                Cosmetic dentistry is more than just appearance—it’s about boosting your confidence and enhancing your quality of life. At Maple Dental Harrisburg, we take a comprehensive, patient-first approach to every smile transformation, big or small. Whether you’re preparing for a special event or simply want to feel better about your teeth, we’re here to help you love your smile again.
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
            <h2 className='faq-heading'>Cosmetic Dentistry Q&A</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">

                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>What is cosmetic dentistry?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and overall smile. Treatments can include whitening, veneers, bonding, reshaping, and full smile makeovers—all aimed at giving you a smile you’ll love.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Is cosmetic dentistry painful?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>Most cosmetic procedures are minimally invasive and pain-free. For procedures like veneers or bonding, we use gentle techniques and local anesthesia if needed to ensure your comfort throughout.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>How long do cosmetic results last?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>With proper care, cosmetic dental treatments can last for many years. Veneers can last 10–15 years, bonding can last 5–7 years, and professional whitening results can last several months to a few years depending on diet and habits.</p>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Can I combine treatments?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Yes! Many patients choose to combine treatments like whitening, bonding, and veneers for a complete smile makeover. We’ll build a personalized plan that matches your goals, timeline, and budget.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Does dental insurance cover cosmetic dentistry?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      Most cosmetic treatments are not covered by standard insurance plans, but Maple Dental Harrisburg offers flexible financing options to make care affordable. Our team will help you explore all your options during your consultation.
                    </p>

                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q6" className="faq-acc">
                  <AccordionTrigger className='faq-qn'><h3 className='text-lg'>Ready for a Smile Makeover in Harrisburg?</h3></AccordionTrigger>
                  <AccordionContent className='faq-ans'>
                    <p>
                      You deserve a smile you’re proud of. Whether it’s whitening, veneers, or a full smile makeover, Maple Dental Harrisburg is your go-to cosmetic dentist in Harrisburg and surrounding communities like Colonial Park, Penbrook, Lawnton, and Linglestown.            </p>

                  </AccordionContent>
                </AccordionItem>


              </Accordion>
            </div>
          </div>
          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Ready for a Smile Makeover in Harrisburg?
              </h2>
              <p className="features-description">
                You deserve a smile you’re proud of. Whether it’s whitening, veneers, or a full smile makeover, Maple Dental Harrisburg is your go-to cosmetic dentist in Harrisburg and surrounding communities like Colonial Park, Penbrook, Lawnton, and Linglestown.
              </p>
            </Fade>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}