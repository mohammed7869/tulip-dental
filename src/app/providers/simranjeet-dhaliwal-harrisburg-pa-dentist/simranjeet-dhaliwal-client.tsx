"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import BookCallBtn from "@/app/services/book-call-btn";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={clsx(
            "w-5 h-5",
            i < rating ? "text-yellow-400" : "text-gray-300"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export default function SimranjeetDhaliwalClient() {
  const doctor = {
    name: "Dr. Simranjeet Dhaliwal, D.D.S.",
    title: "Family Dentist",
    image: "/Images/Dr-Dhariwal1.png",
    description: `Dr. Simran Dhaliwal has been working as a dentist in Pennsylvania since 2017, providing compassionate care to patients from diverse backgrounds and with wide range of dental needs. Her guiding philosophy is rooted in the belief that prevention is better than cure. This approach is reflected in her personalized treatment plans, which focus on the patient education and the establishment of realistic, achievable oral health goals.
    
    Dedicated to creating a comfortable and reassuring environment, Dr. Dhaliwal strives to make every patient's experience as painless and stress-free as possible. She takes great pride in helping her patients regain their confidence with a healthy, radiant smile.

    Dr. Dhaliwal is passionate about treating entire families – from children to grandparents – and believes that when families approach oral health as a unit, they can motivate and support one another in developing lifelong healthy habits.

    Dr. Dhaliwal earned her Doctor of Dental Surgery (DDS) degree from the University of Washington, School of Dentistry (UW). Prior to moving to the United States, she had been practicing as a licensed dentist in India since 2010. During her time at UW, she completed her externship with the Indian Health Services in Omak, Washington, and actively volunteered in various community outreach programs. One of her most meaningful experiences was volunteering at a senior assisted living center – a role that, combined with her clinical expertise, has given her a special affinity for working with geriatric patients. Her gentle approach and empathetic nature help put patients at ease, especially before beginning treatment.

    Outside of dentistry, Dr. Dhaliwal enjoys traveling and spending quality time with her family and friends. She lives in Pennsylvania with her husband and their two wonderful children.`
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="details-page-header-section">
        <h1>{doctor.name}</h1>
        <h2>Cosmetic and Family Dentist located in Harrisburg, Colonial Park, Penbrook, Paxtang, Progress, Lawnton, and Linglestown, PA</h2>
      </div>
      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Doctor Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          {/* Doctor Info */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-semibold mb-2">Meet {doctor.name}</h2>
            <div className="text-lg text-gray-700 mb-2">{doctor.title}</div>
            <StarRating rating={5} />
            <hr className="mb-6" />
            <p className="leading-relaxed whitespace-pre-line text-justify">
              {doctor.description}
            </p>
          </div>
        </div>
        <BookCallBtn />
      </div>
    </div>
  );
}
