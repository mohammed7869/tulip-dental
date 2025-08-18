"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation"; // For client-side navigation

export default function FloatingPromo() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(true);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the main click redirect
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleCardClick = () => {
    router.push("/offers"); // Redirect to the offers page
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 z-50 pb-[env(safe-area-inset-bottom)] transition-all duration-300 ease-in-out transform ${
        isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      } left-2 md:left-6`}
    >
      <div
        onClick={handleCardClick}
        className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden max-w-[280px] md:max-w-[320px] cursor-pointer transition-transform duration-300 hover:-translate-y-1 group"
      >
        {/* Content */}
        <div className="p-1.5 md:p-2">
          <div className="flex items-start gap-2">
            {/* Icon */}
            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <img src="/Images/tulip.png" alt="Whitening Icon" className="w-auto h-auto" />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <div className="text-gray-800 font-semibold text-xs md:text-sm lg:text-base">
                $299 Teeth Whitening Special
              </div>
              <div className="text-gray-600 text-[8px] md:text-[10px] lg:text-sm">Someone just claimed this offer</div>
              <div className="text-gray-400 text-[6px] md:text-xs">10 min ago</div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-red-500 transition-colors p-0.5 md:p-1"
            >
              <X size={12} className="md:w-4 md:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
