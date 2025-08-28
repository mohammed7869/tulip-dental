import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about-tulip-dental-maplewood-nj",
        permanent: true,
      },
      // Service redirects
      {
        source: "/services/emergency-dentistry",
        destination: "/services/emergency-dentistry-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/root-canal",
        destination: "/services/root-canal-treatment-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/oral-surgery",
        destination: "/services/oral-surgery-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/cosmetic-dentistry",
        destination: "/services/cosmetic-dentistry-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/dental-fillings",
        destination: "/services/dental-fillings-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/dental-implants",
        destination: "/services/dental-implants-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/orthodontics",
        destination: "/services/orthodontics-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/crowns-and-bridges",
        destination: "/services/crowns-and-bridges-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/dental-emergencies",
        destination: "/services/dental-emergencies-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/tooth-extraction",
        destination: "/services/tooth-extraction-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/whitening-&-veneers",
        destination: "/services/teeth-whitening-and-veneers-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/invisalign",
        destination: "/services/invisalign-clear-aligners-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/kids-&-children-dentistry",
        destination: "/services/kids-and-children-dentistry-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/permanent-teeth-replacement",
        destination: "/services/permanent-teeth-replacement-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/wisdom-teeth",
        destination: "/services/wisdom-teeth-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/endodontics",
        destination: "/services/endodontics-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/same-day-dentistry",
        destination: "/services/same-day-dentistry-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/painless-treatment",
        destination: "/services/painless-treatment-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/perio-protect",
        destination: "/services/perio-protect-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/halitosis",
        destination: "/services/halitosis-maplewood-nj",
        permanent: true,
      },
      {
        source: "/services/sports-dentistry",
        destination: "/services/sports-dentistry-maplewood-nj",
        permanent: true,
      },
      // Service area redirects
      {
        source: "/service-areas/maplewood",
        destination: "/service-areas/maplewood-nj-dentist-near-you",
        permanent: true,
      },
      {
        source: "/service-areas/linglestown",
        destination: "/service-areas/linglestown-pa-dentist-near-you",
        permanent: true,
      },
      {
        source: "/service-areas/colonial-park",
        destination: "/service-areas/colonial-park-pa-dentist-near-you",
        permanent: true,
      },
      {
        source: "/service-areas/penbrook",
        destination: "/service-areas/penbrook-pa-dentist-near-you",
        permanent: true,
      },
      {
        source: "/service-areas/paxtang",
        destination: "/service-areas/paxtang-pa-dentist-near-you",
        permanent: true,
      },
      {
        source: "/service-areas/progress",
        destination: "/service-areas/progress-pa-dentist-near-you",
        permanent: true,
      },
      {
        source: "/service-areas/lawnton",
        destination: "/service-areas/lawnton-pa-dentist-near-you",
        permanent: true,
      },
      // Other page redirects
      {
        source: "/offers",
        destination: "/teeth-whitening-offer-maplewood-nj",
        permanent: true,
      },
      {
        source: "/providers/simranjeet-dhaliwal",
        destination: "/providers/simranjeet-dhaliwal-maplewood-nj-dentist",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/patient-reviews-maplewood-nj",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/dental-blog",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact-tulip-dental-maplewood-nj",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
