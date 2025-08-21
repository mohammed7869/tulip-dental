"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import Reveal, { Fade, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import BookCallBtn from '../book-call-btn';
import { CheckCircle } from 'lucide-react';

export default function RootCanalClient() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Comfortable, Efficient Treatment Process",
      description: "We’re committed to turning an intimidating procedure into a stress-free experience. ",
      points: [
        "Local anesthesia for a pain-free procedure",
        "Digital X-rays for precise diagnostics",
        "Thorough cleaning and sealing of the root canals",
        "Option to restore the tooth with a crown for durability",
      ]
    },
    {
      icon: "/Images/icons/Dental Implant Process at Maple Dental.png",
      title: "Focused on Long-Term Tooth Preservation",
      description:
        "Our goal is to save your natural teeth and help you avoid extraction whenever possible:",
      points: [
        "Expert evaluation of tooth health",
        "Restoration with high-quality materials",
        "Post-treatment monitoring to ensure healing",
        "Clear aftercare instructions for lasting results",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Root Canal Services for Maplewood & Nearby Areas",
      description:
        "Our office proudly provides root canal therapy to patients in:",
      points: [
        "Maplewood (07040)",
        "South Orange (07079)",
        "Irvington (07111)",
        "Vauxhall (07088)",
        "Newark (07106, 07112)",
      ],
    },

  ];
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <main className='details-page-container'>
        <div className='details-page'>
          <div className='details-page-header-section'>
            <Fade direction='up' duration={1000}>
              <h1>Root Canal Treatment in Maplewood, NJ</h1>
            </Fade>
            <Fade direction='down' duration={1000}>
              <h2 className="text-center">
                Pain-Free Root Canals in Maplewood | Tulip Dental | Family & Cosmetic Dentist                         </h2>
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
                      src="/Images/Root Canal.jpg"
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
                <div className='desc-text-subtitle'>Root Canal</div>
                <h3 className='desc-text-title'>About Root Canal Treatment</h3>
                <p>
                  When tooth pain won’t go away, a root canal may be the solution to save your natural tooth and stop the infection at its source. At Tulip Dental in Maplewood, NJ, we offer gentle, effective root canal therapy in a relaxing and modern setting. Root canals aren’t what they used to be-today’s treatment is fast, comfortable, and highly successful. Whether you're dealing with deep decay, infection, or damage from trauma, our team is here to help you feel better and preserve your natural smile.          </p>
                <p>
                  We proudly serve patients from Maplewood (07040), South Orange (07079), Vauxhall (07088), Irvington (07111), and Newark neighborhoods including 07106 and 07112. Searching for a “root canal dentist near me”? We’re right nearby and ready when you are.                </p>
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
                  <h2>Why Choose Tulip Dental for Root Canal Therapy</h2>
                </div>
                <div className='wcu-points-section'>
                  <ul className="wcu-points">
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Experienced Team Focused on Comfort
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Advanced Technology for Better Results
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Same-Day Appointments Available
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Convenient Location in Maplewood, NJ
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-lg flex items-center gap-2">
                        <CheckCircle /> Flexible Financing & Insurance Accepted
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
                Saving Your Tooth Has Never Been Easier
              </h2>
              <p className="features-description">
                Root canal treatment removes infection from inside your tooth while preserving the natural structure. It's the preferred alternative to extraction and helps you avoid more invasive procedures in the future. Our goal is to make the process smooth and pain-free, so you leave our office feeling relieved and confident.
                <br /> <br />Here’s What Makes Our Root Canal Services Different
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
          <p>Looking for a trusted “root canal specialist near you”? Tulip Dental is your go-to destination for expert care and real results.</p>
          <div className='faq-section'>
            <h2 className='faq-heading'>Root Canal Treatment FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className='text-lg'> What is a root canal and why is it needed? </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    A root canal is a procedure that removes infected or damaged pulp from inside your tooth, cleans the area, and seals it to prevent further problems. It’s often necessary when decay or trauma affects the inner nerve of the tooth.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className='text-lg'> How do I know if I need a root canal? </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mt-2">
                      Common signs include:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Persistent toothache or throbbing pain</li>
                      <li>Sensitivity to hot or cold</li>
                      <li>Swollen gums or a pimple on the gum</li>
                      <li>Pain when biting or chewing</li>
                      <li>Darkening of the tooth</li>
                    </ul>
                    <p className="mt-2">If you're experiencing any of these symptoms, it’s time to schedule an evaluation.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className='text-lg'> Is a root canal painful? </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Not at all! With modern techniques and local anesthesia, root canals are typically no more uncomfortable than getting a filling. Most patients report immediate relief from pain after the procedure.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className='text-lg'> What happens after the root canal? </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Once the root canal is complete, your tooth will likely need a crown to restore full function and protect it from future damage. We’ll handle everything right here in our Maplewood office.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className='text-lg'> Can a root canal prevent tooth extraction? </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Yes! A root canal is designed to save your natural tooth. It helps you avoid extraction, bridges, or implants, keeping your smile intact and functional.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            
          </div>

          <div className="features-section">
            <Fade direction="up" duration={1000}>
              <h2 className="features-heading">
                Need Root Canal Treatment in Harrisburg?
              </h2>
              <p className="features-description">
              If you're dealing with tooth pain, infection, or signs of deep decay, don’t wait. The sooner you get treatment, the better your chances of saving the tooth. At Tulip Dental, we’re here to help—compassionately and quickly.
              </p>
            </Fade>
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
