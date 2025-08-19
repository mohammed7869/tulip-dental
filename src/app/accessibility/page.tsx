import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function Accessibility() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans overflow-x-hidden relative">
      {/* Hero Section */}
      <Fade triggerOnce>
        <section className="details-page-header-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 >
              Accessibility
            </h1>
          </div>
        </section>
      </Fade>
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-left">
<h1 className="text-4xl font-bold mb-6">Accessibility Statement</h1>

      <p className="mb-4">
        This Accessibility Statement applies to:{" "}
        <a
          href="https://tulipdentalmaplewood.com/"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.tulipdentalmaplewood.com
        </a>
      </p>
      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-2">We Value Digital Inclusion</h2>
        <p className="mb-2">
          We are committed to providing a fully accessible and optimized experience for
          all website visitors, including those using assistive technologies such as screen
          readers, magnifiers, or voice input software.
        </p>
        <p>
          This website is monitored and tested by AudioEye, a third-party provider of Web
          Accessibility testing and monitoring. AudioEye provides reports, expert reviews,
          and ongoing remediation to ensure accessibility compliance.
        </p>
        <img src="/Images/AudioEye-Trusted-Horizontal.svg" className="h-48 w-48 content-cover" />
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-2">AudioEye Trusted Certification</h2>
        <p className="mb-2">
          The AudioEye Trusted badge represents our ongoing commitment to meeting WCAG 2.2 Level AA Success Criteria. AudioEye provides both automated and expert reviews, user testing, and continued improvement.

We test using modern web browsers and assistive technologies such as JAWS, NVDA, VoiceOver, magnifiers, voice dictation tools, and keyboard-only navigation.
        </p>
        <p className="font-bold">
          AudioEye certifies that www.tulipdentalmaplewood.com has engaged AudioEye to help www.tulipdentalmaplewood.com conform with WCAG 2.2 Level, AA Success Criteria.
        </p>
        <p>
            AudioEye uses the following web browsers and web-based assistive technologies in testing its solutions:
            </p>
            <p>
                The most recent and immediately prior two versions of any desktop standards-compliant web browser that represents over 5% market share.
            </p>
            <p>
                Web-Based Assistive Technologies such as screen readers (i.e., JAWS, NVDA, and VoiceOver), magnification, voice dictation, and keyboard-only navigation generally favored by the disability community.
            </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-2">Web Accessibility Guidelines</h2>
        <p>
          Please see more information about WCAG compliance.

Improving the user experience for everyone

www.tulipdentalmaplewood.com has leveraged the Web Content Accessibility Guidelines (WCAG) 2.2 as reference to help ensure the web content made available from this website is more accessible for individuals with disabilities and user-friendly for everyone. These globally recognized best practices (as recommended by the World Wide Web Consortium) consist of three levels of accessibility measurement (A, AA, and AAA). AudioEye references Level AA of these guidelines in helping provide accessibility.
        </p>
      </section>

            <section className="mb-6">
        <h2 className="text-md font-semibold mb-2">Related links</h2>
        <Link href={'https://www.w3.org/WAI/'}>
          Web Accessibility Initiative (WAI)
        </Link>
      </section>

      <section className="mb-6">
        <h2 className="text-md font-semibold mb-2">Feedback & Support</h2>
        <p className="mb-2">
          AudioEye is available to assist website visitors with any issues accessing content and the various services and functions made available across www.tulipdentalmaplewood.com. Website visitors are encouraged to engage with the Help Desk to report and troubleshoot web accessibility related issues.
        </p>
      </section>

<section className="mb-6">
        <h2 className="text-3xl font-semibold mb-2">The AudioEye Accessibility Help Desk</h2>
<p className="text-blue-700 mb-2">
    Providing Users with a Free and Customizable Assistive Utility
</p>
        <p className="mb-2">
          In addition to the above-mentioned techniques and strategies, we have provided the AudioEye Accessibility Help Desk that allows website visitors to report accessibility issues. The Help Desk also provides personalization tools that allow website visitors to customize their user experience. If the AudioEye Accessibility Help Desk is not enabled by default, users can enable it by selecting the Activate Help Desk button below. Once activated, the Accessibility icon should be visible on any page of this website. Users can then engage the Help Desk by interacting with the Accessibility icon.
        </p>
        <Button>
            Deactivate Accessibility Help Desk
        </Button>
      </section>
            <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Core features of AudioEye Accessibility Help Desk</h2>
        <p className="mb-2">
          AudioEye is available to assist website visitors with any issues accessing content and the various services and functions made available across www.mapledentalpa.com. Website visitors are encouraged to engage with the Help Desk to report and troubleshoot web accessibility related issues.
        </p>
                <h2 className="text-md font-bold mb-2">AudioEye Help Desk</h2>
        <p className="mb-2">
          Users can report accessibility and usability-related issues.
        </p>
        <h2 className="text-md font-bold mb-2">Personalization tools</h2>
        <p className="mb-2">
          The personalization tools can be used to customize the visual display of the website.
        </p>
        <h2 className="text-md font-bold mb-2">Page elements navigation</h2>
        <p className="mb-2">
          Users can navigate easily through any page by element or content hierarchy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Third-party Websites</h2>
        <p className="mb-2">
          Throughout this website, we may make use of different third-party websites such as Facebook, Google Maps, X (formerly known as Twitter), LinkedIn, Instagram, and YouTube to spread news and information about www.mapledentalpa.com's products and services. These websites, which are not controlled by www.mapledentalpa.com, may present challenges for individuals with disabilities that we are not able to control or remedy. As made publicly available, here are the Accessibility Policies provided from these third-party websites:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a
              href="https://www.facebook.com/help/accessibility"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook Accessibility Policy
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/maps/answer/6396990"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps Accessibility Policy
            </a>
          </li>
          <li>
            <a
              href="https://help.twitter.com/en/resources/accessibility"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              X (formerly Twitter) Accessibility Policy
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/accessibility"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Accessibility Policy
            </a>
          </li>
          <li>
            <a
              href="https://help.instagram.com/116024195217477"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram Accessibility Policy
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/youtube/answer/189278"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube Accessibility Policy
            </a>
          </li>
        </ul>
      </section>
</div>
    </div>
  );
} 