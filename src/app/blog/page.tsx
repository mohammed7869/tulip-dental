"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import { Fade, Slide } from "react-awesome-reveal";

// Blog post data based on the second screenshot
const blogPosts = [
  {
    id: 1,
    title: "How to Handle Dental Emergencies in Maplewood | Tulip Dental Tips",
    date: "Jul 16, 2025",
    description:
      "Picture this: you're enjoying a quiet evening in Maplewood when suddenly, excruciating tooth pain strikes like lightning. Dental emergencies don't wait for convenient times, and knowing how to handle them can mean the difference between saving and losing a tooth",
    image: "/Images/banners/dental emergencies Harrisburg.webp",
    slug: "dental-emergencies-Maplewood",
  },
  {
    id: 2,
    title: "Maplewood Trusted Dentists at Tulip Dental - Oral Health Care Tips",
    date: "May 18, 2025",
    description:
      "Oral health is about more than just having a pretty smile—it's a window into your overall health. Yet, finding a trustworthy dentist can feel like searching for a needle in a haystack. If you're in Maplewood, NJ, consider your search over. Tulip Dental has built a reputation as one of the most reliable dental practices in the area. Whether you're looking for a general check-up or need an emergency dentist in Maplewood, Tulip Dental is here to help.",
    image: "/Images/banners/Trusted Dentists in Harrisburg.jpg",
    slug: "trusted-dentists-in-maplewood",
  },
  {
    id: 3,
    title:
      "5 Signs You Might Need a Root Canal in Maplewood | Why Trust Tulip Dental",
    date: "May 12, 2025",
    description:
      "Discover the 5 critical signs that suggest you need a root canal treatment. Trust Tulip Dental in Maplewood for expert endodontic care and pain relief.",
    image: "/Images/banners/5 Signs You Might Need a Root Canal.jpg",
    slug: "5-signs-you-might-need-a-root-canal",
  },
  // {
  //   id: 4,
  //   title: "Should You Call Your Dentist for a Cracked Tooth?",
  //   date: "Mar 25, 2025",
  //   description: "A cracked tooth can be a serious dental emergency. Find out when you should immediately contact your dentist and what treatment options are available for different types of tooth fractures.",
  //   image: "/Images/banners/senior-woman-having-dental-treatment-dentist-s-office-woman-is-being-treated-teeth.jpg",
  //   slug: "cracked-tooth-dental-emergency"
  // },
  // {
  //   id: 5,
  //   title: "Trust a Local Dentist in Newark & East Orange, NJ | Maple Dental",
  //   date: "Mar 21, 2025",
  //   description: "Choosing a local dentist you can trust is crucial for your oral health. Discover why Maple Dental is the preferred choice for families in Newark and East Orange, offering comprehensive care close to home.",
  //   image: "/Images/banners/portrait-smiling-teenage-girl-with-braces-sitting-chair-while-dentist-standing-clinic.jpg",
  //   slug: "local-dentist-newark-east-orange"
  // },
  // {
  //   id: 6,
  //   title: "Is My Dental Practice Available When I Need Them the Most?",
  //   date: "Mar 18, 2025",
  //   description: "Dental emergencies can happen at any time. Learn about Maple Dental's emergency services and how we ensure you have access to quality dental care when you need it most.",
  //   image: "/Images/banners/close-up-man-carrying-young-woman-his-back.jpg",
  //   slug: "dental-practice-availability-emergency"
  // },
  // {
  //   id: 7,
  //   title: "Emergency Dentist: Same-Day Appointments in Newark & East Orange | Maple Dental",
  //   date: "Jan 31, 2025",
  //   description: "Don't wait for dental emergencies to get worse. Maple Dental offers same-day emergency appointments to provide immediate relief and treatment when you're experiencing severe dental pain.",
  //   image: "/Images/banners/top-reasons.jpg",
  //   slug: "emergency-dentist-same-day-appointments"
  // },
  // {
  //   id: 8,
  //   title: "Get Instant Tooth Pain Relief at Maple Dental in Newark & East Orange, NJ",
  //   date: "Jan 17, 2025",
  //   description: "Tooth pain can be debilitating and affect your daily life. Learn about the various causes of tooth pain and how Maple Dental provides effective, immediate relief through advanced treatment options.",
  //   image: "/Images/banners/dentist-examining-patient-s-teeth.jpg",
  //   slug: "instant-tooth-pain-relief-nova-dental"
  // },
  // {
  //   id: 9,
  //   title: "Your Trusted Emergency Dentist in Newark & East Orange, NJ | Maple Dental",
  //   date: "Jan 06, 2025",
  //   description: "When dental emergencies strike, you need a trusted provider you can rely on. Discover why Maple Dental is the go-to emergency dentist for families throughout Newark and East Orange.",
  //   image: "/Images/banners/AdobeStock_537857878.webp",
  //   slug: "trusted-emergency-dentist-newark-east-orange"
  // },
  // {
  //   id: 10,
  //   title: "Caring for Your Dental Health During COVID-19",
  //   date: "Jun 17, 2020",
  //   description: "Maple Dental is a warm, inviting dentist facility in Newark,NJ. Dr. Bhavneet Singh, DDS, is a trusted dentist who practices adults and kids' dentistry, and is dedicated to providing the best dental care in Newark, NJ.",
  //   image: "/Images/banners/AdobeStock_537857878.webp",
  //   slug: "caring-for-your-dental-health-during-covid-19"
  // }
];

// Mock API function - replace with your actual API call
const fetchBlogPosts = async (page: number, itemsPerPage: number) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPosts = blogPosts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    totalItems: blogPosts.length,
    currentPage: page,
    totalPages: Math.ceil(blogPosts.length / itemsPerPage),
    itemsPerPage,
  };
};

export default function BlogGridPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const data = await fetchBlogPosts(currentPage, itemsPerPage);
        setPosts(data.posts);
        setTotalItems(data.totalItems);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="details-page-header-section">
        <div className="max-w-7xl mx-auto text-center">
          <Fade direction="down" triggerOnce>
            <h1>
              Oral Health Tips, News & Updates from Tulip Dental in Maplewood,
              NJ
            </h1>
            <h2>
              {" "}
              Expert Advice on Family, Cosmetic & Preventive Dentistry Near You
            </h2>
          </Fade>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Slide
                  key={post.id}
                  direction="up"
                  delay={index * 100}
                  triggerOnce
                >
                  <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Blog Post Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Blog Post Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      {/* Date */}
                      <p className="text-sm text-gray-500 mb-4">{post.date}</p>

                      {/* Description */}
                      <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed">
                        {post.description}
                      </p>

                      {/* Continue Reading Button */}
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                          Continue Reading
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Button>
                      </Link>
                    </div>
                  </article>
                </Slide>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16">
                <Fade direction="up" triggerOnce>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                    onItemsPerPageChange={handleItemsPerPageChange}
                    itemsPerPageOptions={[3, 6, 9, 12]}
                  />
                </Fade>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
