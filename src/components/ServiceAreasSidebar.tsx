"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MenuIcon, X } from "lucide-react";

interface ServiceArea {
  name: string;
  icon: string;
  link: string;
}

interface ServiceAreasSidebarProps {
  setISSidebarOpen: (open: boolean) => void;
}

// Service areas data
const serviceAreas: ServiceArea[] = [
  {
    name: "Harrisburg, PA",
    icon: "/Images/icons/map.png",
    link: "/service-areas/harrisburg",
  },
  {
    name: "Linglestown, PA",
    icon: "/Images/icons/map.png",
    link: "/service-areas/linglestown",
  },
  {
    name: "Colonial Park, PA",
    icon: "/Images/icons/map.png",
    link: "/service-areas/colonial-park",
  },
  {
    name: "Penbrook, PA",
    icon: "/Images/icons/map.png",
    link: "/service-areas/penbrook",
  },
  {
    name: "Paxtang, PA",
    icon: "/Images/icons/map.png",
    link: "/service-areas/paxtang",
  },
  {
    name: "Progress, PA",
    icon: "/Images/icons/map.png",
    link: "/service-areas/progress",
  },
  {
    name: "Lawnton, PA",
    icon: "/Images/icons/map.png",
    link: "/service-areas/lawnton",
  },
];

export default function ServiceAreasSidebar({
  setISSidebarOpen,
}: ServiceAreasSidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setISSidebarOpen(!isMobileMenuOpen); // Sync with parent state
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setISSidebarOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu Toggle Button - Only visible on mobile */}
      {!isScrolled && !isMobileMenuOpen ? (
        <div className="fixed bottom-2 md:bottom-8 left-4 z-50">
          <button
            onClick={toggleMobileMenu}
            className="w-full flex flex-col bg-secondary hover:bg-primary text-white rounded-lg px-2 py-3  text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Toggle service areas menu"
          >
            <span>
              {isScrolled ? <MenuIcon /> : <span>Service Areas</span>}
            </span>
          </button>
        </div>
      ) : null}

      {/* Mobile Backdrop - Only visible when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 top-16"
          onClick={closeMobileMenu}
        />
      )}

      {/* Main Sidebar */}
      <aside
        className={`
          sidebar-scrollbar bg-white shadow-lg flex flex-col overflow-y-auto
          
          /* Desktop styles (unchanged) */
          lg:top-20 lg:z-20 lg:h-[calc(100vh-80px)]
          
          /* Mobile styles (slide-out) */
          fixed top-16 left-0 z-40 h-[calc(100vh-80px)] w-80 max-w-[85vw]
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ minWidth: 260, maxWidth: 260 }}
      >
        {/* Header */}
        <div className="p-6 border-b bg-[var(--primary)] sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-center font-bold text-white flex-1 lg:text-center">
              Service Areas
            </h2>
            {/* Mobile close button - only visible on mobile */}
            <button
              onClick={closeMobileMenu}
              className="text-white hover:text-gray-200 transition-colors ml-2"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-2">
          <ul className="space-y-1">
            {serviceAreas.map((serviceArea: ServiceArea) => (
              <li key={serviceArea.name}>
                <Link
                  href={serviceArea.link}
                  onClick={closeMobileMenu} // Close mobile menu when service area is selected
                  className="flex items-center gap-2 rounded-xl py-2 px-4 border border-gray-200 shadow-sm bg-white transition-all duration-200 group hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] focus:bg-[var(--primary)] focus:text-white focus:border-[var(--primary)] w-full overflow-hidden"
                  style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.05)" }}
                >
                  <img
                    src={serviceArea.icon}
                    alt={serviceArea.name}
                    className="w-4 h-4 ml-2 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                  />
                  <span className="font-medium text-base truncate group-hover:text-white transition-colors duration-200">
                    {serviceArea.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
