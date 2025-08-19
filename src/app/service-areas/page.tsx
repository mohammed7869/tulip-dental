import React from 'react';
import Image from 'next/image';

export default function ServiceAreasPage() {
  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl ">
            Services Areas / Maplewood, NJ
          </h1>
      </div>


      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-16">
        {/* Top Section: Image + Intro */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center">
            <Image
              src="/Images/banners/close-up-man-carrying-young-woman-his-back.jpg"
              alt="Family Smiling"
              width={400}
              height={300}
              className="rounded-md w-full max-w-md object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Cosmetic and Family Dentistry in Maplewood, NJ</h2>
            <p className="text-lg text-gray-600">
              At Tulip Dental, we are proud to offer exceptional cosmetic and family dentistry services near Maplewood, NJ. Led by Dr. Gurpreet Kaur, DDS, our experienced team is dedicated to providing comprehensive oral healthcare to patients of all ages. Whether you’re seeking preventive care, restorative solutions, or cosmetic enhancements, we are here to help you achieve a healthy, beautiful smile.
            </p>
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Comprehensive Dental Care for Maplewood Residents</h3>
          <p className="text-lg">
            Our state-of-the-art dental office is conveniently located near Maplewood, NJ, making it easy for you and your family to access top-quality dental care. We offer a wide range of services, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Emergency Dentistry</span><br />
              <span className="text-gray-600">Same-day appointments for urgent dental issues like toothaches, broken teeth, and more.</span>
            </li>
            <li>
              <span className="font-semibold">Preventive Dentistry</span><br />
              <span className="text-gray-600">Regular check-ups, cleanings, and oral health education to keep your teeth and gums healthy.</span>
            </li>
            <li>
              <span className="font-semibold">Cosmetic Dentistry</span><br />
              <span className="text-gray-600">Transform your smile with veneers, teeth whitening, and Invisalign®.</span>
            </li>
            <li>
              <span className="font-semibold">Restorative Dentistry</span><br />
              <span className="text-gray-600">Crowns, bridges, and dental implants to restore the function and beauty of your teeth.</span>
            </li>
            <li>
              <span className="font-semibold">Pediatric Dentistry</span><br />
              <span className="text-gray-600">Gentle, child-friendly care to help your little ones develop good oral hygiene habits.</span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Why Choose Tulip Dental Near Maplewood?</h3>
            <p className="text-lg">We know that finding the right dentist is crucial. Here’s why families in Maplewood trust Tulip Dental:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Personalized Care</span><br />
                <span className="text-gray-600">We believe in building lasting relationships with our patients through unhurried consultations and clear communication.</span>
              </li>
              <li>
                <span className="font-semibold">Advanced Technology</span><br />
                <span className="text-gray-600">From digital X-rays to modern treatment techniques, we ensure accurate diagnoses and effective care.</span>
              </li>
              <li>
                <span className="font-semibold">Comfortable Environment</span><br />
                <span className="text-gray-600">Our office is designed to help you feel relaxed, making every visit a positive experience.</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/Images/banners/portrait-smiling-child-with-braces-dentist-s-office.jpg"
              alt="Happy Patient"
              width={400}
              height={300}
              className="rounded-md w-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="flex flex-col items-center gap-4 text-center py-8">
          <h2 className="text-3xl font-bold">Schedule Your Appointment Today!</h2>
          <p className="text-lg max-w-2xl">
            Tulip Dental is proud to serve the communities of Maplewood, NJ with high-quality, personalized dental care.<br />
            Ready to experience exceptional dentistry? Contact us today to schedule your appointment!
          </p>
          <a href="/booking" className="bg-primary text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-secondary transition">BOOK ONLINE</a>
        </div>

        {/* Map Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.27123456789012!3d40.73123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a8b123456789%3A0x1234567890abcdef!2sMaplewood%2C%20NJ!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full rounded-md shadow-md"
            />
          </div>
          <div className="flex-1 text-center space-y-2">
            <h3 className="text-xl font-bold">Maplewood</h3>
            <p>1585 Springfield Avenue, Store #1<br />Maplewood, NJ 07040</p>
            <div className="text-left inline-block mx-auto">
              <h4 className="font-semibold mt-4">Hours of Operation:</h4>
              <ul className="text-sm">
                <li>Monday: 9:00 AM - 6:00 PM</li>
                <li>Tuesday: 9:00 AM - 6:00 PM</li>
                <li>Wednesday: 9:00 AM - 6:00 PM</li>
                <li>Thursday: 9:00 AM - 6:00 PM</li>
                <li>Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 3:30 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-center mt-4">
              <a href="tel:9736715500" className="bg-blue-100 text-primary border border-primary px-5 py-2 rounded-md text-sm hover:opacity-50 transition">973-671-5500</a>
              <a href="/booking" className="bg-primary text-white px-5 py-2 rounded-md text-sm hover:bg-secondary transition">BOOK ONLINE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 