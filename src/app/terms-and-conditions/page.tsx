"use client";
import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";

import { Clock, Mail, MapPin, Phone } from "lucide-react";

const termsSections = [
  {
    title: "Modification of These Terms of Use",
    icon: "/Images/tulip.png",
    content: `We reserve the right to change the terms, conditions, and notices under which this Site is offered, including but not limited to the charges associated with the use of this Site.`,
  },
  {
    title: "Links to Third Party Sites",
    icon: "/Images/tulip.png",
    content: `This Site may contain links to other websites ("Linked Sites"). The Linked Sites are not under our control and we are not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. We are not responsible for webcasting or any other form of transmission received from any Linked Site. We are providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the site or any association with its operators.`,
  },
  {
    title: "No Unlawful or Prohibited Use",
    icon: "/Images/tulip.png",
    content: `As a condition of your use of this Site, you warrant to us that you will not use this Site for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use this Site in any manner which could damage, disable, overburden, or impair this Site or interfere with any other party's use and enjoyment of this Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through this Site.`,
  },
  {
    title: "Content You Submit",
    icon: "/Images/tulip.png",
    content: `When using this Site, you may have the opportunity to submit reviews or feedback regarding your experiences with us, and to participate in bulletin boards, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication features designed to enable you to communicate with the public at large or with a group (collectively, "Communication Services"). You agree to use the Communication Services only to post, send, and receive messages and material that are proper and related to the particular Communication Service.\n\nBy way of example, and not as a limitation, you agree that when using a Communication Service, you will not post content that contains:\n\n• Personal and confidential information, including phone numbers, addresses, and health information;\n• Vulgar content, including offensive, derogatory, obscene, profane, or inflammatory language or content;\n• Threats or personal attacks on others;\n• Discriminatory content or hate speech, including content that advocates against groups of people based on their race, ethnic origin, religion, disability, gender, gender identity, sexual orientation, age, or veteran status;\n• Misrepresentations, including content submitted fraudulently on behalf of others or that misrepresents the your identity or connection with us or our practice;\n• Non-applicable content, including posts that are not specific to us or our practice;\n• Advertising or solicitations;\n• Illegal content; or\n• References to or information about ongoing legal matters or proceedings.\n\nYou further agree that you will not:\n• Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents;\n• Upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another's computer;\n• Conduct or forward surveys, contests, pyramid schemes or chain letters;\n• Download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner;\n• Falsify or delete any legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded;\n• Restrict or inhibit any other user from using and enjoying the Communication Services;\n• Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service;\n• Harvest or otherwise collect information about others, including e-mail addresses, without their consent.`,
  },
  {
    title: "Liability Disclaimer",
    icon: "/Images/tulip.png",
    content: `THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THIS SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. WE AND/OR OUR SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THIS SITE AT ANY TIME. ADVICE RECEIVED VIA THIS SITE SHOULD NOT BE RELIED UPON FOR PERSONAL, MEDICAL, LEGAL OR FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO YOUR SITUATION. WE AND/OR OUR SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THIS SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. WE AND/OR OUR SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE AND/OR OUR SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THIS SITE, WITH THE DELAY OR INABILITY TO USE THIS SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THIS SITE, OR OTHERWISE ARISING OUT OF THE USE OF THIS SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF WE OR ANY OF OUR SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THIS SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THIS SITE.`,
  },
  {
    title: "Trademarks",
    icon: "/Images/tulip.png",
    content: `The names of actual companies and products mentioned herein may be the trademarks of their respective owners. The example companies, organizations, products, people and events depicted herein are fictitious. No association with any real company, organization, product, person, or event is intended or should be inferred. Any rights not expressly granted herein are reserved.`,
  },
  {
    title: "Notices",
    icon: "/Images/tulip.png",
    content: `Please contact us by phone at 973-671-5500 or by mail at 1585 Springfield Avenue, Store #1, Maplewood, NJ 07040`,
  },
];

const importantPoints = [
  "All dental procedures carry inherent risks and benefits",
  "Emergency dental care is available",
  "We maintain strict confidentiality of patient records",
  "Insurance coverage varies by plan and procedure",
  "We follow all HIPAA guidelines for patient privacy",
  "Treatment plans are customized for each patient",
];

const contactInfo = {
  phone: "973-671-5500",
  email: "maplewood@tulipdentalnj.com",
  address: "1585 Springfield Avenue, Store #1, Maplewood, NJ 07040",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM, Saturday: 9:00 AM - 3:30 PM",
};

export default function TermsAndConditions() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans overflow-x-hidden relative">
      {/* Hero Section */}
      <Fade triggerOnce>
        <section className="details-page-header-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2 block">
              Legal Information
            </span>
            <h1>Terms & Conditions</h1>
            <p>
              Please read these terms and conditions carefully before using our
              services. Your continued use of our website and services
              constitutes acceptance of these terms.
            </p>
          </div>
        </section>
      </Fade>

      {/* Last Updated Section */}
      <Slide direction="up" triggerOnce>
        <section className="py-4 sm:py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
        </section>
      </Slide>

      {/* Terms Sections */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8">
            {termsSections.map((section, index) => (
              <Fade key={index} triggerOnce delay={index * 100}>
                <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 shadow-lg border border-border">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <img
                        src={section.icon}
                        alt={section.title}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-2 sm:mb-4">
                        {section.title}
                      </h3>
                      <p className="whitespace-pre-line">{section.content}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Important Points */}
      <Zoom triggerOnce>
        <section className="py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-3 sm:mb-4">
                Important Points
              </h2>
              <p className="text-base sm:text-lg  max-w-2xl mx-auto px-4">
                Key information you should know about our services and policies
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {importantPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-4 sm:p-6 shadow-lg border border-border"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base ">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Zoom>

      {/* Contact Information */}
      <Slide direction="up" triggerOnce>
        <section className="py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 shadow-lg border border-border">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-3 sm:mb-4">
                  Questions About Our Terms?
                </h2>
                <p className="text-sm sm:text-base text-center">
                  If you have any questions about these terms and conditions,
                  please contact us
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Phone size={16} className="text-white" />{" "}
                  </div>
                  <h3 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">
                    Phone
                  </h3>
                  <p className="text-center text-xs sm:text-sm">
                    {contactInfo.phone}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Mail size={16} className="text-white" />{" "}
                  </div>
                  <h3 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">
                    Email
                  </h3>
                  <p className=" text-xs sm:text-sm text-center">
                    {contactInfo.email}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MapPin size={20} className="mt-0.5 text-white" />{" "}
                  </div>
                  <h3 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">
                    Address
                  </h3>
                  <p className=" text-xs sm:text-sm text-center">
                    {contactInfo.address}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Clock size={16} className="mt-0.5 text-white" />{" "}
                  </div>
                  <h3 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">
                    Hours
                  </h3>
                  <p className=" text-xs sm:text-sm text-center">
                    {contactInfo.hours}
                  </p>
                </div>
              </div>

              <div className="text-center mt-6 sm:mt-8">
                <Button
                  asChild
                  className="bg-[#0087CE] hover:bg-primary/90 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                >
                  <a href="/contact-us">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Slide>

      {/* Disclaimer */}
      <Fade direction="up" triggerOnce>
        <section className="py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 shadow-lg border border-border">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-3 sm:mb-4">
                Legal Disclaimer
              </h3>
              <p className="text-sm sm:text-base  leading-relaxed mb-4 sm:mb-6">
                These terms and conditions are subject to change without notice.
                We reserve the right to modify these terms at any time.
                Continued use of our services after changes constitutes
                acceptance of the new terms. For the most current version,
                please check this page regularly.
              </p>
              <p className="text-xs sm:text-sm ">
                <strong>Note:</strong> This document is for informational
                purposes only and does not constitute legal advice. Please
                consult with a legal professional for specific legal guidance.
              </p>
            </div>
          </div>
        </section>
      </Fade>

      {/* Floating Scroll to Top Button */}
    </div>
  );
}
