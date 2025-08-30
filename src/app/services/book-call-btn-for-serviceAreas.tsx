"use client";

import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import BookingModal from "../booking/bookingScreen";

const BookCallBtnForServiceAreas: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Fade direction="up" triggerOnce className="w-full">
      <section className="py-6 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex gap-6">
          <a
            href="tel:9736715500"
            className="w-full flex flex-col bg-secondary hover:bg-primary text-white text-center rounded-lg px-2 md:px-4 py-3 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="text-[12px] md:text-base">
              Call Us for Booking
            </span>
            973-671-5500
          </a>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="w-full flex flex-col bg-secondary hover:bg-primary text-white rounded-lg px-1 md:px-4 py-3 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Online
            <span className="text-[10px] md:text-base">
              Click Here for Appointment
            </span>
          </button>
        </div>
      </section>
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </Fade>
  );
};

export default BookCallBtnForServiceAreas;
