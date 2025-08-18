"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { metadataConfig } from '@/lib/metadata';

export default function DynamicMetadata() {
  const pathname = usePathname();

  useEffect(() => {
    const updateMetadata = () => {
      const segments = pathname.split('/').filter(Boolean);
      
      let metadata = metadataConfig.default;
      
      // Check if it's a service page
      if (segments[0] === 'services' && segments[1]) {
        const serviceKey = segments[1];
        if (metadataConfig.services[serviceKey as keyof typeof metadataConfig.services]) {
          metadata = metadataConfig.services[serviceKey as keyof typeof metadataConfig.services];
        }
      }
      // Check if it's a service area page
      else if (segments[0] === 'service-areas' && segments[1]) {
        const areaKey = segments[1];
        if (metadataConfig.serviceAreas[areaKey as keyof typeof metadataConfig.serviceAreas]) {
          metadata = metadataConfig.serviceAreas[areaKey as keyof typeof metadataConfig.serviceAreas];
        }
      }
      // Check if it's a specific page (including SEO-optimized routes)
      else if (segments.length > 0) {
        // Try the full path first (for SEO-optimized routes like "patient-reviews-harrisburg-pa")
        const fullPath = segments.join('-');
        if (metadataConfig.pages[fullPath as keyof typeof metadataConfig.pages]) {
          metadata = metadataConfig.pages[fullPath as keyof typeof metadataConfig.pages];
        }
        // Fallback to first segment (for simple routes like "blog")
        else if (segments[0] && metadataConfig.pages[segments[0] as keyof typeof metadataConfig.pages]) {
          metadata = metadataConfig.pages[segments[0] as keyof typeof metadataConfig.pages];
        }
      }
      
      // Update document title
      document.title = metadata.title;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', metadata.description);
      
      // Update keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', metadata.keywords || "dentist harrisburg pa, cosmetic dentist harrisburg, family dentist harrisburg");
      
      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', metadata.title);
      } else {
        const newOgTitle = document.createElement('meta');
        newOgTitle.setAttribute('property', 'og:title');
        newOgTitle.setAttribute('content', metadata.title);
        document.head.appendChild(newOgTitle);
      }
      
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', metadata.description);
      } else {
        const newOgDescription = document.createElement('meta');
        newOgDescription.setAttribute('property', 'og:description');
        newOgDescription.setAttribute('content', metadata.description);
        document.head.appendChild(newOgDescription);
      }
      
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', `https://mapledentalharrisburg.com${pathname}`);
      } else {
        const newOgUrl = document.createElement('meta');
        newOgUrl.setAttribute('property', 'og:url');
        newOgUrl.setAttribute('content', `https://mapledentalharrisburg.com${pathname}`);
        document.head.appendChild(newOgUrl);
      }
      
      // Update Twitter Card tags
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', metadata.title);
      } else {
        const newTwitterTitle = document.createElement('meta');
        newTwitterTitle.setAttribute('name', 'twitter:title');
        newTwitterTitle.setAttribute('content', metadata.title);
        document.head.appendChild(newTwitterTitle);
      }
      
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', metadata.description);
      } else {
        const newTwitterDescription = document.createElement('meta');
        newTwitterDescription.setAttribute('name', 'twitter:description');
        newTwitterDescription.setAttribute('content', metadata.description);
        document.head.appendChild(newTwitterDescription);
      }
      
      // Update canonical URL
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', `https://mapledentalharrisburg.com${pathname}`);
      
      // Add structured data for local business
      let structuredData = document.querySelector('script[type="application/ld+json"]');
      if (!structuredData) {
        structuredData = document.createElement('script');
        structuredData.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredData);
      }
      
      const localBusinessData = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Maple Dental Harrisburg",
        "description": metadata.description,
        "url": `https://mapledentalharrisburg.com${pathname}`,
        "telephone": "+1-717-745-2700",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2017 Eg Drive, Suite 200",
          "addressLocality": "Harrisburg",
          "addressRegion": "PA",
          "postalCode": "17110",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.3337,
          "longitude": -76.8467
        },
        "openingHours": [
          "Mo-Fr 09:00-18:00",
          "Sa 09:00-15:30"
        ],
        "sameAs": [
          "https://www.facebook.com/mapledentalharrisburg",
          "https://www.instagram.com/mapledentalharrisburg"
        ]
      };
      
      structuredData.textContent = JSON.stringify(localBusinessData);
    };

    updateMetadata();
  }, [pathname]);

  return null; // This component doesn't render anything
}
