"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const services = [
  {
    title: "Emergency Dentistry",
    image: "/Images/Emergency Dentistry.jpeg",
    link: "/services/emergency-dentistry",
  },
  {
    title: "Root Canal",
      image: "/Images/Root Canal.jpg",
    link: "/services/root-canal",
  },
  {
    title: "Oral Surgery",
      image: "/Images/Oral Surgery.jpg",
    link: "/services/oral-surgery",
  },
  {
    title: "Cosmetic Dentistry",
    image: "/Images/Cosmetic Dentistry.jpg",
    link: "/services/cosmetic-dentistry",
  },
  {
    title: "Dental Fillings",
    image: "/Images/dental-fillings.png",
    link: "/services/dental-fillings",
  },
  {
    title: "Dental Implants",
      image: "/Images/Dental Implants.jpg",
    link: "/services/dental-implants",
  },
  {
    title: "Orthodontics",
      image: "/Images/Orthodontics.jpg",
      link: "/services/orthodontics",
  },
  {
    title: "Crowns and Bridges",
    image: "/Images/Dental Crown Bridge.webp",
    link: "/services/crowns-and-bridges",
  },
  {
    title: "Dental Emergencies",
    image: "/Images/Dental Emergencies.webp",
    link: "/services/dental-emergencies",
  },
  {
    title: "Tooth Extraction",
    image: "/Images/Tooth Extraction.jpeg",
    link: "/services/tooth-extraction",
  },
  {
    title: "Whitening & Veneers",
    image: "/Images/Whitening Veneers.png",
    link: "/services/whitening-&-veneers",
  },
  {
    title: "Invisalign",
    image: "/Images/Invisalign.jpeg",
    link: "/services/invisalign",
  },
  {
    title: "Kids & Children Dentistry",
    image: "/Images/Kids Dentistry.jpg",
    link: "/services/kids-&-children-dentistry",
  },
  {
    title: "Permanent Teeth Replacement",
    image: "/Images/Teeth Replacement.webp",
    link: "/services/permanent-teeth-replacement",
  },
  {
    title: "Sports Dentistry",
    image: "/Images/Sports Dentistry.jpeg",
    link: "/services/sports-dentistry",
  },
  {
    title: "Wisdom Teeth",
    image: "/Images/Wisdom Teeth.jpg",
    link: "/services/wisdom-teeth",
  },
  {
    title: "Endodontics",
    image: "/Images/Endodontics.jpeg",
    link: "/services/endodontics",
  },
  {
    title: "Same-day Dentistry",
    image: "/Images/Same-day Dentistry.jpeg",
    link: "/services/same-day-dentistry",
  },
  {
    title: "Painless Treatment",
    image: "/Images/Painless Treatment.jpeg",
    link: "/services/painless-treatment",
  },
  {
    title: "Perio Protect",
    image: "/Images/Perio Protect Image.jpeg",
    link: "/services/perio-protect",
  },
  {
    title: "Halitosis",
    image: "/Images/banners/Halitosis.jpeg",
    link: "/services/halitosis",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-8 sm:pb-12">
      {/* Header Section with blue background */}
      <div className="w-full details-page-header-section py-8 sm:py-12 px-4 md:px-0 mb-8 sm:mb-12">
        <div className="text-center">
          <h1 >
            Comprehensive Dental Services in Harrisburg, PA
          </h1>
          <h2 className="text-center">
            Family, Cosmetic & Restorative Dentistry Tailored to Your Needs
          </h2>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-full transition-transform hover:-translate-y-2 hover:shadow-xl border border-blue-100 h-64 sm:h-72 lg:h-80"
            >
              <div className="w-full h-2/3 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center rounded-t-xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                  priority={services.indexOf(service) < 5}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
              </div>
              <div className="flex-1 flex flex-col justify-end items-center p-3 sm:p-4 w-full">
                <h2 className="text-sm sm:text-base lg:text-lg font-bold text-primary mb-2 text-center leading-tight">
                  {service.title}
                </h2>
                <Link
                  href={service.link}
                  className="bg-primary text-white rounded-lg px-3 py-2 hover:bg-secondary text-xs sm:text-sm font-medium mb-2 transition-colors duration-200  text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 