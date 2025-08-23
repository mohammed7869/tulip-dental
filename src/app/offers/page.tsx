"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function OffersPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="details-page-header-section flex flex-col items-center justify-center">
        <h1>$299 Professional Teeth Whitening in Maplewood, NJ</h1>
        <h2>
          Affordable, High-Quality Whitening | Tulip Dental | Cosmetic & Family
          Dentist
        </h2>
      </div>

      {/* Welcome Offer Section */}
      <div className="max-w-7xl mx-auto text-center py-10 px-4">
        <h3 className="text-xl font-bold mb-2">
          Reveal a Brighter Smile with Our Exclusive Whitening Deal{" "}
        </h3>
        <p className="mb-2">
          Ready to elevate your smile without overspending? Tulip Dental in
          Maplewood is offering an exclusive $299 in-office whitening
          treatment-perfect for both new and returning patients. Our advanced
          whitening system delivers dramatic, same-day results in a single
          visit, with zero hidden charges and complete comfort throughout your
          appointment.
        </p>
        <p className="mb-2 p-4">
          We’re proud to serve patients from Maplewood (07040), South Orange
          (07079), Irvington (07111), Vauxhall (07088), and nearby Newark (07106
          and 07112). If you’ve been searching online for “teeth whitening near
          me” in Essex or Union County, your journey to a whiter smile starts
          here.
        </p>

        <button
          onClick={() => setIsBookingOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
        >
          Claim Your Special Offer Now
        </button>
      </div>

      {/* Main Offer Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-8 px-4">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/Images/banners/woman-patient-dentist.jpg"
            alt="Teeth Whitening"
            width={400}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[350px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold mb-4 ">
            What’s Included in Your $299 Whitening Visit?{" "}
          </h2>
          <ul className="space-y-4 text-left">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">
                <CheckCircle />
              </span>
              <div>
                <h3 className="text-base font-semibold">
                  Safe, Professional Whitening{" "}
                </h3>
                <p>
                  Our dental-grade whitening system is designed to deliver fast,
                  safe, and long-lasting results. We use enamel-safe formulas to
                  minimize sensitivity while maximizing brightness, giving you a
                  noticeably whiter smile in complete comfort.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">
                <CheckCircle />
              </span>
              <div>
                <h3 className="text-base font-semibold">
                  Quick, Noticeable Results{" "}
                </h3>
                <p>
                  In just about an hour, you can achieve a smile that’s several
                  shades brighter. It’s the perfect choice before a wedding, job
                  interview, special event, or simply to treat yourself to a
                  confidence boost.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">
                <CheckCircle />
              </span>
              <div>
                <h3 className="text-base font-semibold">
                  Customized Treatment & Guidance{" "}
                </h3>
                <p>
                  Your whitening session is tailored to your smile goals. We’ll
                  also provide personalized aftercare tips to help you maintain
                  your new radiant look for as long as possible.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full details-page-header-section text-left text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-center">
            Why Patients Choose Tulip Dental for Whitening
          </h2>
          <p className="mb-4 text-base">
            Choosing the right dental office for your cosmetic care makes all
            the difference. Here’s why patients across Maplewood, South Orange,
            Irvington, Vauxhall, and Newark trust Tulip Dental for professional
            whitening:
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1 text-cyan-400" />
              Skilled cosmetic dentists with years of experience
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1 text-cyan-400" />
              Honest, upfront pricing with zero hidden fees
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1 text-cyan-400" />
              Relaxing, modern office environment
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1 text-cyan-400" />
              Convenient appointment times, including same-day options
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1 text-cyan-400" />
              Trusted by families across Maplewood, South Orange, Irvington,
              Vauxhall & Newark
            </li>
          </ul>
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-xl md:text-3xl font-semibold mb-4 text-center">
          What to Expect During Your Whitening Appointment
        </h2>
        <p className="text-center mb-8">
          From the moment you walk in to the moment you leave, our goal is to
          make your whitening visit smooth, relaxing, and results-driven. This
          is what you can expect:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
            <span className="text-primary text-2xl mt-1">
              <CheckCircle />
            </span>
            <span className="font-semibold">
              Warm welcome and quick check-in with our front desk team
            </span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
            <span className="text-primary text-2xl mt-1">
              <CheckCircle />
            </span>
            <span className="font-semibold">
              Brief consultation to confirm whitening is the right choice for
              you
            </span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
            <span className="text-primary text-2xl mt-1">
              <CheckCircle />
            </span>
            <span className="font-semibold">
              Professional in-office whitening session for fast, dramatic
              results
            </span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
            <span className="text-primary text-2xl mt-1">
              <CheckCircle />
            </span>
            <span className="font-semibold">
              Expert tips to keep your teeth whiter for longer
            </span>
          </div>
        </div>
        <p className="text-center mt-8">
          At Tulip Dental, we make every visit stress-free, comfortable, and
          worth your time — so you leave smiling brighter.
        </p>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            Claim Your Free Exam Today!
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
}
