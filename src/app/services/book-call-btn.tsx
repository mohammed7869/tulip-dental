"use client";

import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import BookingModal from '../booking/bookingScreen';

const BookCallBtn: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <Fade direction="up" triggerOnce className='w-full'>
                    <section className="py-6 px-4 md:px-16 max-w-7xl mx-auto">
                      <div className="flex gap-3">
                        <a href="tel:7177452700" className="w-full flex flex-col border border-primary text-primary text-center rounded-lg px-2 md:px-4 py-3 hover:opacity-50 text-sm font-medium transition">
                          <span className="text-[12px] md:text-base">Call Us for Booking</span>
                          717-745-2700
                        </a>
                        <button onClick={() => setIsBookingOpen(true)} className="w-full flex flex-col bg-primary text-white rounded-lg px-1 md:px-4 py-3 hover:bg-secondary text-sm font-medium transition">
                          Book Now
                          <span className="text-[10px] md:text-base">Click Here for Appointment</span>
                        </button>
                      </div>
                    </section>
                    <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen}/>
                  </Fade>
    );
};

export default BookCallBtn;