"use client";
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import BookingModal from '@/app/booking/bookingScreen';

export default function OffersPage() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="w-full">
            {/* Header Section */}
            <div className="details-page-header-section flex flex-col items-center justify-center">
                                 <h1>Teeth Whitening Special in Maplewood, NJ</h1>
                <h2>
                    Professional Whitening for Just $299 | Tulip Dental | Family & Cosmetic Dentist
                </h2>
            </div>

            {/* Welcome Offer Section */}
            <div className="max-w-7xl mx-auto text-center py-10 px-4">
                <h3 className="text-xl font-bold mb-2">Smile Brighter with Our Limited-Time Teeth Whitening Offer</h3>
                <p className="mb-2">Looking for a way to refresh your smile without breaking the bank? At Tulip Dental Maplewood, we're making it easy with our $299 Teeth Whitening Special—a limited-time offer for new and existing patients. Enjoy professional-grade whitening in a single visit with no hidden fees, no pressure, and all the confidence that comes with a whiter smile.</p>
                <p className="mb-2 p-4">Our dental office proudly serves Maplewood (07040) and surrounding areas. If you've been searching for "teeth whitening near me," your brighter smile starts here.</p>
                
                <button 
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-primary text-white px-6 py-2 rounded font-semibold shadow hover:bg-primary/90 transition"
                >
                    Claim Your Special Offer Now
                </button>
            </div>

            {/* Main Offer Section */}
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-8 px-4">
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image src="/Images/banners/woman-patient-dentist.jpg" alt="Teeth Whitening" width={400} height={350} className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[350px]" />
                </div>
                <div className="w-full md:w-1/2">
                        <h2 className="text-xl md:text-2xl font-bold mb-4 ">What’s Included in Your Whitening Visit?</h2>
                        <ul className="space-y-4 text-left">
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1"><CheckCircle /></span>
                            <div>
                                <h3 className="text-base font-semibold">Safe, Effective Whitening Treatment</h3>
                                <div>Our dental-grade whitening system delivers visible results quickly and safely—far superior to any store-bought strips or kits. </div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1"><CheckCircle /></span>
                            <div>
                                <h3 className="text-base font-semibold">Fast Results in One Visit</h3>
                                <div>Get your smile several shades whiter in just about an hour. Perfect for weddings, interviews, or just because.</div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1"><CheckCircle /></span>
                            <div>
                            <h3 className="text-base font-semibold">Customized Care & Expert Guidance</h3>
                            <div>We tailor the treatment to your teeth and provide personalized aftercare tips to help you maintain long-lasting brightness. </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="w-full details-page-header-section text-left text-white py-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl md:text-3xl font-bold mb-4">Why Choose Tulip Dental Maplewood?</h2>
                    <p className="mb-4">Choosing the right dentist for cosmetic treatments matters. Here’s why patients across Maplewood and nearby neighborhoods trust us:</p>
                    <ul className="space-y-2 text-base">
                        <li className="flex items-center gap-2"><CheckCircle size={18}/> Experienced, Gentle Cosmetic Dentists</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18}/> Transparent Pricing – No Upsells or Hidden Fees</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18}/> Comfortable, Modern Office Environment</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18}/> Convenient Scheduling with Evening Hours Available</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18}/> Trusted by Families in Maplewood and Beyond</li>
                    </ul>
                </div>
            </div>

            {/* What to Expect Section */}
            <div className="max-w-5xl mx-auto py-12 px-4">
                <h2 className="text-xl md:text-3xl font-semibold mb-4 text-center">What to Expect During Your Whitening Appointment</h2>
                <p className="text-center mb-8">From check-in to checkout, your visit at Tulip Dental Maplewood is all about comfort, efficiency, and results. Here's what your teeth whitening experience looks like:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl"><CheckCircle /></span>
                        <span className="font-semibold">A warm welcome from our friendly front desk</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl"><CheckCircle /></span>
                        <span className="font-semibold">A brief consultation to ensure whitening is right for you</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl"><CheckCircle /></span>
                        <span className="font-semibold">In-office whitening treatment—fast, safe, and effective</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl"><CheckCircle /></span>
                        <span className="font-semibold">Expert tips for keeping your smile white long after you leave</span>
                    </div>
                </div>
                <p className="text-center mt-8">We're here to make your visit smooth, relaxing, and worthwhile.</p>
                <div className="flex justify-center mt-8">
                    <button 
                        onClick={() => setIsBookingOpen(true)}
                        className="bg-primary text-white px-6 py-2 rounded font-semibold shadow hover:bg-primary/90 transition"
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