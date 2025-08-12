"use client";
import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import MapSection from './components/MapSection'
// import PartnerLogos from './components/PartnerLogos'
// import NewsletterSection from './components/NewsletterSection'


export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="details-page-header-section mb-12">
            
            <Fade delay={200}>
                          <h1>
                            Contact Tulip Dental in Maplewood, NJ
                          </h1>
                        </Fade>
            <Fade delay={500}>
                          <p>
                            We’re Here to Help—Reach Out Today
                          </p>
                        </Fade>
          </div>
      {/* Contact Us Section */}
      <Fade triggerOnce>
        <section className="max-w-7xl mx-auto px-4 py-16">
          

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Slide direction="left" triggerOnce>
              <ContactForm />
            </Slide>
            <Slide direction="right" triggerOnce>
              <ContactInfo />
            </Slide>
          </div>
        </section>
      </Fade>

      {/* Map Section */}
      <Zoom triggerOnce>
        <MapSection />
      </Zoom>

      {/* Partner Logos */}
      {/* <Slide direction="up" triggerOnce>
        <PartnerLogos />
      </Slide> */}

      {/* Newsletter Section */}
      <Fade direction="up" triggerOnce>
        {/* <NewsletterSection /> */}
      </Fade>

      {/* Floating Scroll to Top Button */}
      
    </div>
  )
} 