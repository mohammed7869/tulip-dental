"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import { blogPostsData } from "../../blog/blogData";

export default function DentalBlogDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPostsData.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Blog Post Not Found
          </h1>
          <Link href="/dental-blog">
            <Button className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              ← Back to Dental Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      {/* <div className="details-page-header-section">
        <Fade direction="up" duration={1000}>
          <h1>Blog Details</h1>
        </Fade>
        <Fade direction="down" duration={1000}>
          <p>{post.title}</p>
        </Fade>
      </div> */}

      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-4 md:py-16">
        <Fade>
          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-80 md:h-125 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Meta */}
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
            <span>{post.datetime}</span>
          </div>

          {/* Article Title */}
          <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Details Description (HTML) */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.detailsDescription }}
          />

          {/* Back to Blog Button */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center">
            <Link href="/dental-blog">
              <Button
                // variant="outline"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-2 rounded-md text-sm hover:from-blue-700 hover:to-cyan-700 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointers"
              >
                <span className="mr-2">←</span> Back to Dental Blog
              </Button>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
}
