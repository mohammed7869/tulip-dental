"use client";

import Image from "next/image";
import clsx from "clsx";

const reviews = [
  {
    name: "Samantha K.",
    date: "Jul 10, 2025",
    rating: 5,
    text: "I was always nervous about going to the dentist, but Tulip Dental in Maplewood, NJ completely changed that. Dr. Banerjee and the friendly staff made me feel comfortable from the moment I arrived. The office is clean, modern, and equipped with the latest dental technology. ",
    image: "/Images/836.jpg",
  },
  {
    name: "Anthony R.",
    date: "Apr 30, 2025",
    rating: 5,
    text: "Professional, efficient, and gentle! I visited Tulip Dental for a teeth cleaning and left with my smile feeling fresh and polished. The hygienist explained every step, and Dr. Banerjee checked in to make sure I was comfortable. If you’re looking for a family dentist in Maplewood, this is the place.",
    image: "/Images/837.jpg",
  },
  {
    name: "Melissa D.",
    date: "Mar 04, 2025",
    rating: 4,
    text: "Tulip Dental is the best dental office in Maplewood! My kids actually look forward to their checkups. The pediatric dentistry team is patient, caring, and makes visits fun. We’ve found our forever family dentist.",
    image: "/Images/836.jpg",
  },
  {
    name: "David H.",
    date: "Feb 14, 2025",
    rating: 5,
    text: "I had a severe toothache and needed emergency dental care in Maplewood. Tulip Dental got me the same day. Dr. Banerjee explained my treatment options clearly, and the procedure was painless. I walked out pain-free and grateful.",
    image: "/Images/837.jpg",
  },
  {
    name: "Rachel P.",
    date: "Jan 19, 2025",
    rating: 5,
    text: "From the front desk to the dental chair, Tulip Dental provides top-notch service. Everyone is welcoming and professional. My cleaning was thorough, and my teeth have never looked better. Highly recommend for anyone in Maplewood or nearby South Orange.",
    image: "/Images/836.jpg",
  },
  {
    name: "Jonathan W.",
    date: "Dec 22, 2024",
    rating: 5,
    text: "I recently got porcelain veneers at Tulip Dental and couldn’t be happier. The process was smooth, the results are natural-looking, and I get compliments on my smile daily. If you want cosmetic dentistry done right in Maplewood, NJ - this is where you go.",
    image: "/Images/837.jpg",
  },
];

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

export default function PatientReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-12">
      {/* Header Section */}
      <div className="details-page-header-section">
        <h1>What Patients Are Saying About Tulip Dental</h1>
        <h2>
          Real Reviews from Families Across Maplewood & Nearby Communities
        </h2>
      </div>
      <div className="max-w-7xl mt-10 mx-auto px-2 sm:px-4 md:px-8">
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-8">
          Patient Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, idx) => (
            <div
              key={review.name + review.date}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center w-full transition-transform hover:-translate-y-2 hover:shadow-2xl border border-teal-100 h-72 sm:h-80 md:h-80 lg:h-80 xl:h-80 mx-auto"
              style={{ minWidth: 0 }}
            >
              <div className="flex-1 flex flex-col justify-between items-center p-4 sm:p-6 w-full">
                <div className="mb-3 flex justify-center w-full">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm sm:text-base  mb-1 leading-relaxed flex-1 flex ">
                  {review.text}
                </p>
                <div className="mt-auto text-xs sm:text-sm text-gray-500 text-center w-full">
                  <span className="font-semibold">{review.name}</span> |{" "}
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
