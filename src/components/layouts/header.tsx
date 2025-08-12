"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingModal from "@/app/booking/bookingScreen";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isServicesAreasOpen, setIsServicesAreasOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false); // Close services submenu when toggling main menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleServicesAreas = () => {
    setIsServicesAreasOpen(!isServicesAreasOpen);
  };

  // Services submenu items
  const servicesItems = [
    { name: "General Dentistry", href: "/services/general" },
    { name: "Cosmetic Dentistry", href: "/services/cosmetic" },
    { name: "Orthodontics", href: "/services/orthodontics" },
    { name: "Oral Surgery", href: "/services/oral-surgery" },
    { name: "Teeth Whitening", href: "/services/whitening" },
    { name: "Dental Implants", href: "/services/implants" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white shadow transition-all duration-300 ${
        isScrolled ? "py-2 lg:py-4" : "py-3 lg:py-6"
      }`}
    >
      <div className=" mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Images/Maple MHA website header.png"
            alt="Maple Dental Logo"
            width={isScrolled ? 180 : 220}
            height={isScrolled ? 90 : 110}
            className="hidden lg:block transition-all duration-300"
          />
          <Image
            src="/Images/Maple.png"
            alt="Maple Dental Logo"
            width={isScrolled ? 32 : 42}
            height={isScrolled ? 18 : 24}
            className="block lg:hidden transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-primary transition">
            About
          </Link>
          <Link href="/providers" className="hover:text-primary transition">
            Providers
          </Link>
          
          {/* Services with Desktop Dropdown */}
          <div className="relative group">
            <Link href="/services" className="hover:text-primary transition flex items-center gap-1">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            {/* Desktop Dropdown */}
            <div className="absolute -left-38 mt-2 w-[100vh] max-w-5xl bg-white border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40 rounded-lg">
  <div className="grid grid-cols-4 gap-6 p-6 text-sm">
    {[
      "Emergency Dentistry", "Root Canal", "Oral Surgery", "Cosmetic Dentistry",
      "Dental Fillings", "Dental Implants", "Orthodontics", "Crowns and Bridges",
      "Dental Emergencies", "Tooth Extraction", "Whitening & Veneers", "Invisalign",
      "Kids & Children Dentistry", "Permanent Teeth Replacement", "Sports Dentistry", "Wisdom Teeth",
      "Endodontics", "Same-Day Dentistry", "Painless Treatment", "Perio Protect",
      "Halitosis"
    ].map((service, index) => (
      <Link
        key={index}
        href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
        className="text-gray-700 hover:text-primary hover:underline transition"
      >
        {service}
      </Link>
    ))}
  </div>
</div>
          </div>
          
          <Link href="/reviews" className="hover:text-primary transition">
            Reviews
          </Link>
          <Link href="/blog" className="hover:text-primary transition">
            Blogs
          </Link>
          <Link href="/contact-us" className="hover:text-primary transition">
            Contact
          </Link>
          <div className="relative group">
            <span className="hover:text-primary transition flex items-center gap-1 cursor-pointer">
              Services Areas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            
            {/* Desktop Dropdown */}
            <div className="absolute -left-5 mt-2 w-80 max-w-5xl bg-white border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40 rounded-lg">
  <div className="grid grid-cols-1 gap-6 p-6 text-sm">
    {[
  "Harrisburg, PA",
  "Linglestown, PA",
  "Colonial Park, PA",
  "Penbrook, PA",
  "Paxtang, PA",
  "Progress, PA",
  "Lawnton, PA"
].map((service, index) => {
  let slug = "";
  if (service === "Harrisburg, PA") {
    slug = "harrisburg";
  } else if (service === "Linglestown, PA") {
    slug = "linglestown";
  }
  if(service === "Colonial Park, PA"){
    slug = 'colonial-park';
  }
   if(service === "Penbrook, PA"){
    slug = 'penbrook';
  }if(service === "Paxtang, PA"){
    slug = 'paxtang';
  }
    if(service === "Progress, PA"){
    slug = 'progress';
  }
  if(service === "Lawnton, PA"){
    slug = 'lawnton';
  }

  return slug ? (
    <Link
      key={index}
      href={`/service-areas/${slug}`}
      className="text-gray-700 hover:text-primary hover:underline transition"
    >
      {service}
    </Link>
  ) : (
    <span key={index} className="text-gray-500">
      {service}
    </span>
  );
})}
  </div>
</div>
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          <a href="tel:7177452700" className="border border-primary text-primary rounded-lg px-4 py-3 hover:opacity-50 text-sm font-medium transition">
            717-745-2700
          </a>
          <button onClick={()=>setIsBookingOpen(true)}  className="bg-primary text-white rounded-lg px-4 py-3 hover:bg-secondary text-sm font-medium transition">
            Book Online
          </button>
        </div>

        {/* Mobile Buttons and Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Action Buttons */}
          <a href="tel:7177452700" className="border border-primary text-primary rounded-lg px-4 py-3 hover:bg-blue-50 text-xs font-medium transition">
            717-745-2700
          </a>
          <button onClick={()=>setIsBookingOpen(true)} className="bg-primary text-white rounded-lg px-4 py-3 hover:bg-blue-700 text-xs font-medium transition">
            Book Online
          </button>
          
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="ml-2 p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Image
              src="/Images/Maple MHA website header.png"
              alt="Maple Dental Logo"
              width={138}
              height={40}
            />
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 overflow-y-auto">
            <div className="py-2">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                href="/providers"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Providers
              </Link>

              {/* Services with Mobile Submenu */}
              <div className="border-b">
                <button
                  onClick={toggleServices}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Services Submenu */}
                {isServicesOpen && (
  <div className="bg-gray-50 px-4 py-2">
    

    <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
      {[
        "Emergency Dentistry", "Root Canal", "Oral Surgery", "Cosmetic Dentistry",
        "Fillings", "Dental Implants", "Orthodontics", "Crowns and Bridges",
        "Dental Emergencies", "Tooth Extraction", "Whitening & Veneers", "Invisalign",
        "Kids & Children Dentistry", "Permanent Teeth Replacement", "Sports Dentistry", "Wisdom Teeth",
        "Endodontics", "Same-Day Dentistry", "Painless Treatment", "Perio Protect",
        "Halitosis"
      ].map((service, index) => (
        <Link
          key={index}
          href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
          onClick={closeMobileMenu}
          className="text-gray-600 hover:text-primary hover:underline transition"
        >
          {service}
        </Link>
      ))}
    </div>
  </div>
)}
              </div>

              <Link
                href="/reviews"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Reviews
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Blogs
              </Link>
              <Link
                href="/contact-us"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <div className="border-b">
                <button
                  onClick={toggleServicesAreas}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition"
                >
                  Service Areas
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      isServicesAreasOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Services Submenu */}
                {isServicesAreasOpen && (
  <div className="bg-gray-50 px-4 py-2">
    

    <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
      {[
  "Harrisburg, PA",
  "Linglestown, Harrisburg, PA",
  "Colonial Park, PA",
  "Penbrook",
  "Paxtang",
  "Progress",
  "Lawnton"
].map((service, index) => {
  let slug = "";
  if (service === "Harrisburg, PA") {
    slug = "harrisburg";
  } else if (service === "Linglestown, Harrisburg, PA") {
    slug = "linglestown";
  }
  if(service === "Colonial Park, PA"){
    slug = 'colonial-park';
  }
   if(service === "Penbrook"){
    slug = 'penbrook';
  }if(service === "Paxtang"){
    slug = 'paxtang';
  }
  if(service === "Progress"){
    slug = 'progress';
  }
  if(service === "Lawnton"){
    slug = 'lawnton';
  }return slug ? (
        <Link
          key={index}
          href={`/service-areas/${slug}`}
          onClick={closeMobileMenu}
          className="text-gray-600 hover:text-primary hover:underline transition"
        >
          {service}
        </Link>
  )
      : (
    <span key={index} className="text-gray-500">
      {service}
    </span>
  );
})}
    </div>
  </div>
  
)}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen}/>
    </header>
  );
}