"use client";
import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";

const privacySections = [
  {
    title: "PRIVACY STATEMENT",
    content: `Tulip Dental is committed to protecting your privacy and developing technology that gives you the most powerful and safe online experience. This Statement of Privacy applies to our Practice's Web site and governs data collection and usage. By using this website, you consent to the data practices described in this statement.`,
  },
  {
    title: "Collection of your Personal Information",
    content: `This Practice collects personally identifiable information, such as your e-mail address, name, home or work address or telephone number. This Practice also collects anonymous demographic information, which is not unique to you, such as your ZIP code, age, gender, preferences, interests and favorites.\n\nThere is also information about your computer hardware and software that is automatically collected by this website. This information can include: your IP address, browser type, domain names, access times and referring Web site addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of this Web site.\n\nPlease keep in mind that if you directly disclose personally identifiable information or personally sensitive data through public message boards, this information may be collected and used by others.\n\nThis Practice encourages you to review the privacy statements of Web sites you choose to link to from the website so that you can understand how those Web sites collect, use and share your information. This Practice is not responsible for the privacy statements or other content on any other Web sites.`,
  },
  {
    title: "Use of your Personal Information",
    content: `This Practice collects and uses your personal information to operate the Web site and deliver the services you have requested. This Practice also uses your personally identifiable information to inform you of other products or services available from this Practice and its affiliates. This Practice may also contact you via surveys to conduct research about your opinion of current services or of potential new services that may be offered.\n\nThis Practice does not sell, rent or lease its customer lists to third parties. This Practice may share data with trusted partners to help us perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services and they are required to maintain the confidentiality of your information.\n\nThis Practice does not use or disclose sensitive personal information, such as race, religion, or political affiliations, without your explicit consent.\n\nThis Practice will disclose your personal information, without notice, only if required to do so by law.`,
  },
  {
    title: "Use of Cookies",
    content: `The Web site uses "cookies" to help this Practice personalize your online experience. A cookie is a text file that is placed on your hard disk by a Web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.`,
  },
  {
    title: "Security of your Personal Information",
    content: `This Practice secures your personal information from unauthorized access, use or disclosure. This Practice secures the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or disclosure. When personal information (such as a credit card number) is transmitted to other Web sites, it is protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol.`,
  },
  {
    title: "Changes to this Statement",
    content: `This Practice will occasionally update this Statement of Privacy to reflect company and customer feedback. We encourage you to periodically review this Statement to be informed of how this Practice is protecting your information.`,
  },
  {
    title: "Contact Information",
    content: `Please contact us by phone at 973-671-5500 or by mail at 1585 Springfield Avenue, Store #1, Maplewood, NJ 07040`,
  },
];

const sectionIcons = [
  "/Images/tulip.png",
  "/Images/tulip.png",
  "/Images/tulip.png",
  "/Images/tulip.png",
  "/Images/tulip.png",
  "/Images/tulip.png",
  "/Images/tulip.png",
];

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans overflow-x-hidden relative">
      {/* Hero Section */}
      <Fade triggerOnce>
        <section className="details-page-header-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1>Privacy Policy</h1>
          </div>
        </section>
      </Fade>

      {/* Last Updated Section */}
      <Slide direction="up" triggerOnce>
        <section className="py-4 sm:py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs sm:text-sm ">
              <strong>Last Updated:</strong>{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </section>
      </Slide>

      {/* Privacy Sections */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8">
            {privacySections.map((section, index) => (
              <Fade key={index} triggerOnce delay={index * 100}>
                <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 shadow-lg border border-border">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <img
                        src={sectionIcons[index % sectionIcons.length]}
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

      {/* Disclaimer */}
      <Fade direction="up" triggerOnce>
        <section className="py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 shadow-lg border border-border">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-3 sm:mb-4">
                Legal Disclaimer
              </h3>
              <p className="text-sm sm:text-base  leading-relaxed mb-4 sm:mb-6">
                This privacy policy is subject to change without notice. We
                reserve the right to modify this policy at any time. Continued
                use of our services after changes constitutes acceptance of the
                new policy. For the most current version, please check this page
                regularly.
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
