'use client';


import React, { useState, useEffect, useRef } from 'react';
import ServicesSection from './services';
import InsuranceSection from './accepted-insurance';
import SpecialOffersSection from './special-offer';
import { Button } from '@/components/ui/button';
import LocationTabs from './addresses';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import FloatingFormButton from '@/components/ui/floatingButton';
import FloatingTextForm from '@/components/ui/floatingButton';
import { InfoIcon, MessageCircle, Stethoscope, User } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import FloatingPromo from '@/components/ui/promo-popup';
import BookingModal from '../booking/bookingScreen';
import { services as allServices } from '../services/serviceList';



const banners = [
    {
        image: '/Images/Banner1.jpg',
        title: 'Welcome to Maple Dental Harrisburg',
        subtitle: 'Your Trusted Cosmetic & Family Dentist in Harrisburg and Surrounding Areas',
        image2: '/Images/Banner1.jpg',
    },
    {
        image: '/Images/Emergency Dentistry.jpg',
        title: 'Emergency Dental Visit Just $55',
        subtitle: 'Quick relief for dental pain - exam included, no insurance required.',
        image2: '/Images/Emergency Dentistry.jpg',
    },
    {
        image: '/Images/Banner3.webp',
        title: 'New Patient Welcome Offer - Only $79',
        subtitle: 'Enjoy a complete dental checkup with cleaning & X-rays, tailored for first-time visitors.',
        image2: '/Images/Banner3.webp',
    },
    {
        image: '/Images/young-surprised-woman-with-hand-her-face.webp',
        title: 'Whiten Your Smile for Only $299',
        subtitle: 'Grab our limited-time professional teeth whitening deal and shine with confidence!',
        image2: '/Images/young-surprised-woman-with-hand-her-face.webp',
    },
];

const services = [
    {
        icon: "/Images/icons/implant.png",
        price: "1199",
        title: "Dental Implant",
    },
    {
        icon: "/Images/icons/tooth-whitening.png",
        price: "299",
        title: "Teeth Whitening",
    },
    {
        icon: "/Images/icons/braces.png",
        price: "250/month",
        title: "Braces",
    },
];

export default function HomePage() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const { ref, inView } = useInView();

    // Touch/swipe functionality for mobile
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const bannerRef = useRef<HTMLDivElement>(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [current]);

    const handleNavigation = (newIndex: number) => {
        setCurrent(newIndex);
    };

    const handlePrevious = () => {
        setCurrent(current === 0 ? banners.length - 1 : current - 1);
    };

    const handleNext = () => {
        setCurrent((current + 1) % banners.length);
    };

    // Touch event handlers for mobile swipe
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            // Swipe left - go to next banner
            handleNext();
        } else if (isRightSwipe) {
            // Swipe right - go to previous banner
            handlePrevious();
        }
    };

    return (
        <div>
            <section
                ref={bannerRef}
                className="relative w-full h-140 md:h-[92vh] min-h-[600px] max-h-[900px] overflow-hidden bg-gradient-to-br from-primary via-primary-500 to-secondary"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >

                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Curved Shape */}
                    <div className="absolute top-0 right-0 w-2/3 h-full">
                        <svg
                            viewBox="0 0 800 600"
                            className="absolute inset-0 w-full h-full"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M300,0 Q400,100 450,200 Q500,300 480,400 Q460,500 400,600 L800,600 L800,0 Z"
                                fill="rgba(255,255,255,0.05)"
                            />
                            <path
                                d="M350,0 Q450,120 500,220 Q550,320 530,420 Q510,520 450,600 L800,600 L800,0 Z"
                                fill="rgba(255,255,255,0.03)"
                            />
                        </svg>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-16 left-12">
                        <div className="grid grid-cols-4 gap-2">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-white/30 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Medical Cross */}
                    <div className="absolute top-24 left-32 text-white/25 text-4xl font-light">+</div>

                    {/* Tooth Icon */}
                    <div className="absolute top-32 left-16 text-white/20">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1 4.5 2 6.5 1 2 2 4.5 2 6.5v1h4v-1c0-2-1-4.5-2-6.5-1-2-2-4-2-6.5 0-3.5 2.5-6 6-6s6 2.5 6 6c0 2.5-1 4.5-2 6.5-1 2-2 4.5-2 6.5v1h4v-1c0-2 1-4.5 2-6.5 1-2 2-4 2-6.5 0-3.5-2.5-6-6-6z" />
                        </svg>
                    </div>

                    {/* Additional decorative dots */}
                    <div className="absolute bottom-32 left-20 w-1.5 h-1.5 md:w-3 md:h-3 bg-white/20 rounded-full"></div>
                    <div className="absolute top-40 left-8 w-2 h-2 md:w-4 md:h-4 bg-white/15 rounded-full"></div>
                    <div className="absolute bottom-48 left-40 w-1 h-1 md:w-2 md:h-2 bg-white/25 rounded-full"></div>
                </div>

                {/* Banner Content */}
                {banners.map((banner, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <div className="container mx-auto px-3 md:px-6 h-full flex items-start pt-12 md:pt-0 md:items-center">
                            <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">

                                {/* Left Content */}
                                <div className="flex-1 text-white z-20 order-2 md:order-1">
                                    <Fade cascade direction='up' delay={1000} duration={600}>
                                        <div className="max-w-lg">
                                            <h1 className="text-3xl md:text-3xl text-center md:text-left lg:text-5xl font-semibold mb-6 leading-tight">
                                                {banner.title}
                                            </h1>
                                            <p className="text-md md:text-xl lg:text-2xl text-center md:text-left font-light leading-relaxed opacity-95">
                                                {banner.subtitle}
                                            </p>


                                            {/* Call to Action */}
                                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                                <button className="bg-white text-cyan-600 px-8 py-2 md:py-3 rounded-full font-semibold text-md hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" onClick={()=>setIsBookingOpen(true)}>
                                                    Book Appointment
                                                </button>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>

                                {/* Right Content - Image */}
                                <div className="flex-1 relative z-20 w-full max-w-lg md:order-2 lg:max-w-none">
                                    <div className="relative max-w-full mx-auto">
                                        {/* Image Container with curved background */}
                                        <Zoom cascade damping={0.3} duration={800}>
                                            <div className="relative">
                                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-0 shadow-2xl border border-white/20">
                                                    <img
                                                        src={banner.image}
                                                        alt={banner.title}
                                                        className="w-full h-64 md:h-110 lg:h-140 object-cover rounded-sm md:rounded-xl shadow-lg"
                                                    />
                                                </div>
                                                {/* Decorative elements around image */}
                                                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/20 rounded-full"></div>
                                                <div className="absolute -top-2 left-8 w-4 h-4 bg-white/25 rounded-full"></div>

                                            </div>
                                        </Zoom>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Dots */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="flex gap-3">
                        {banners.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleNavigation(idx)}
                                className={`transition-all duration-300 rounded-full ${idx === current
                                    ? 'w-1.5 h-1.5 md:w-3 md:h-3 bg-white shadow-lg'
                                    : ' w-1.5 h-1.5  bg-white/40 hover:bg-white/60'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
                <button
                    onClick={handlePrevious}
                    className="hidden md:block absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20"
                    aria-label="Previous slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={handleNext}
                    className="hidden md:block absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20"
                    aria-label="Next slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </section>

            {/* Services Strip */}
            <section className="w-full bg-gray-100 py-6 md:py-8 border-b border-gray-100">
                <div className="w-full mx-auto px-4 md:px-6">
                    <div className="relative overflow-hidden">
                        {/* Gradient overlays for smooth edges */}
                        {/* <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div> */}

                        {/* Auto-scrolling services carousel */}
                        <div className="scroll-track-services flex animate-scroll-services">
                            {[...allServices, ...allServices].map((service, index) => (
                                <Link
                                    key={`${service.name}-${index}`}
                                    href={service.link}
                                    className="flex-shrink-0 mx-4 group hover:scale-105 transition-all duration-300"
                                >
                                    <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-primary group-hover:underline transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-lg hover:bg-gray-50">
                                        {service.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Custom CSS for carousel animation */}
                <style jsx>{`
                    .scroll-track-services {
                        width: fit-content;
                    }
                    @keyframes scroll-services {
                        0% {
                            transform: translateX(0%);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    .animate-scroll-services {
                        animation: scroll-services 60s linear infinite;
                    }
                    .animate-scroll-services:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>

            <div className='w-full bg-[#ffffff84] flex items-center justify-center overflow-hidden py-4 md:py-8'>
                <img src="/Images/Maple MHA Logo.png" alt="dental-banner" className='w-auto h-16 md:h-32 object-cover' />

            </div>
            <HomepageSections />

            <section className="w-full bg-gradient-to-br from-white to-sky-50 relative overflow-hidden py-10 md:py-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 px-6 md:px-8">

                    {/* Left Side - Image */}
                    <Slide direction="right" className="w-full md:w-1/2 h-64 md:h-120">
                        <img
                            src="/Images/About-Maple-Dental.jpg"
                            alt="dental-banner"
                            className="rounded-md md:rounded-xl w-full h-full object-cover shadow-md"
                        />
                    </Slide>

                    {/* Right Side - Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                        <Fade delay={200}>
                            <h2 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
                                About Maple Dental
                            </h2>
                        </Fade>

                        <Fade delay={500}>
                            <p className="text-lg ">
                                Your Trusted Cosmetic & Family Dentist in Harrisburg and Surrounding Areas
                            </p>
                        </Fade>

                        <Fade delay={700}>
                            <p className="text-base leading-relaxed">
                                Looking for a reliable dentist near you in Harrisburg, PA? At <strong>Maple Dental Harrisburg</strong>, we’re committed to delivering high-quality, affordable dental care in a comfortable and welcoming environment. Located at 2017 Eg Drive, Suite 200, our practice proudly serves patients from <strong>Harrisburg (17110, 17109, 17111, 17112), Colonial Park (17109), Penbrook (17103), Paxtang (17111), Progress (17109, 17111), Lawnton (17111),</strong> and <strong>Linglestown (17112) </strong>– helping families and individuals maintain healthy, confident smiles.
                            </p>
                        </Fade>

                        <Fade delay={800}>
                            <Link
                                href="/about-us"
                                className="border border-primary text-primary rounded-lg px-4 py-3 hover:bg-blue-50 text-sm font-medium transition"
                            >
                                Learn More
                            </Link>
                        </Fade>
                    </div>
                </div>

            </section>

            <Slide direction="up" triggerOnce>
                <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            // const { ref, inView } = useInView({
                            //   threshold: 0.1,
                            // });

                            return (
                                <div
                                    key={index}
                                    ref={ref}
                                    className="bg-card rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />

                                    <div className="text-3xl font-bold text-primary mb-2">
                                        ${inView ? (
                                            service.price.includes('/') ? (
                                                <CountUp 
                                                    end={parseInt(service.price.split('/')[0])} 
                                                    duration={1.5} 
                                                    separator="," 
                                                    suffix="/month"
                                                />
                                            ) : (
                                                <CountUp end={parseInt(service.price)} duration={1.5} separator="," />
                                            )
                                        ) : (
                                            service.price.includes('/') ? '0/month' : '0'
                                        )}
                                    </div>

                                    <div className="text-lg font-semibold">
                                        {service.title}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </Slide>

            <ServicesSection />

            <InsuranceSection />

            <SpecialOffersSection />


            <section className="w-full bg-gradient-to-br from-white to-sky-50 relative overflow-hidden py-10 md:py-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 px-6 md:px-8">

                    {/* Left Side - Image */}
                    <Slide direction="right" className="w-full md:w-1/2 h-64 md:h-80">
                        <img
                            src="/Images/Insurance.webp"
                            alt="dental-banner"
                            className="rounded-md md:rounded-xl w-full h-full object-cover shadow-md"
                        />
                    </Slide>

                    {/* Right Side - Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                        <Fade delay={200}>
                            <h2 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
                                Affordable Care for Everyone
                            </h2>
                        </Fade>

                        <Fade delay={500}>
                            <p className="text-lg ">
                                <strong>No insurance? No problem</strong>. We believe quality dental care should be accessible to all. That’s why we offer:
                            </p>
                        </Fade>

                        <Fade delay={700}>
                            <p className="text-base text-left leading-relaxed">
                                <ul className='list-disc gap-3 mt-2 px-6'>
                                    <li className="list-disc">
                                        <div className="flex gap-2 ">
                                            <Fade delay={800}>
                                                <span><strong>$55 Emergency Dental Visit</strong>{' '}
                                                    (Includes Exam & X-ray)</span>
                                            </Fade>
                                        </div>
                                    </li>
                                    <li className="list-disc">
                                        <div className="flex gap-2">
                                            <Fade delay={1000}>
                                                <span><strong>$79 New Patient Special</strong>{' '}
                                                    (Exam , Cleaning + X-rays)</span>
                                            </Fade>
                                        </div>
                                    </li>
                                    <li className="list-disc">
                                        <div className="flex gap-2">
                                            <Fade delay={1200}>
                                                <span><strong>Interest-Free Financing Available</strong>{' '}
                                                    (Up to 12 Months)</span>
                                            </Fade>
                                        </div>
                                    </li>
                                    <li className="list-disc">
                                        <div className="flex gap-2">
                                            <Fade delay={1200}>
                                                <strong>Senior Discounts During Special Hours</strong>
                                            </Fade>
                                        </div>
                                    </li>

                                </ul>
                            </p>
                        </Fade>

                        <Fade delay={800}>
                            <a href="tel:717-745-2700">
                                <Button>CALL TODAY!</Button>
                            </a>
                        </Fade>

                    </div>
                </div>

            </section>
            <LocationTabs />
            <FloatingTextForm />
            <FloatingPromo />
            <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
        </div>
    );
}


function HomepageSections() {
    const sections = [
        { label: 'About Us', icon: <InfoIcon />, bg: 'bg-primary', href: '/about-us' },
        { label: 'Our Providers', icon: <User />, bg: 'bg-primary/70', href: '/providers' },
        { label: 'Our Services', icon: <Stethoscope />, bg: 'bg-secondary', href: '/services' },
        { label: 'Contact Us', icon: <MessageCircle />, bg: 'bg-secondary/70', href: '/contact-us' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {sections.map((section, idx) => (
                <Link href={section.href} key={idx}
                    className={`rounded-sm shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer text-white ${section.bg} flex flex-col items-center justify-center p-3 md:p-6 text-center`}
                >
                    <div className="text-4xl mb-2">{section.icon}</div>
                    <div className="text-md md:text-xl font-semibold">{section.label}</div>
                </Link>
            ))}
        </div>
    );
}
