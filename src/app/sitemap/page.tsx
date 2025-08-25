import Link from "next/link";

export default function SitemapPage() {
  // Define all the pages organized by categories
  const pages = {
    "Main Pages": [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about-us" },
      { name: "Contact Us", link: "/contact-us" },
      { name: "Blog", link: "/dental-blog" },
      { name: "Reviews", link: "/reviews" },
      { name: "Providers", link: "/providers" },
      { name: "Services", link: "/services" },
      { name: "Offers", link: "/offers" },
      //   { name: "Booking", link: "/booking" },
    ],
    Services: [
      { name: "Emergency Dentistry", link: "/services/emergency-dentistry" },
      { name: "Root Canal", link: "/services/root-canal" },
      { name: "Oral Surgery", link: "/services/oral-surgery" },
      { name: "Cosmetic Dentistry", link: "/services/cosmetic-dentistry" },
      { name: "Dental Fillings", link: "/services/dental-fillings" },
      { name: "Dental Implants", link: "/services/dental-implants" },
      { name: "Orthodontics", link: "/services/orthodontics" },
      { name: "Crowns and Bridges", link: "/services/crowns-and-bridges" },
      { name: "Dental Emergencies", link: "/services/dental-emergencies" },
      { name: "Tooth Extraction", link: "/services/tooth-extraction" },
      { name: "Wisdom Teeth", link: "/services/wisdom-teeth" },
      { name: "Invisalign", link: "/services/invisalign" },
      {
        name: "Kids & Children Dentistry",
        link: "/services/kids-&-children-dentistry",
      },
      {
        name: "Permanent Teeth Replacement",
        link: "/services/permanent-teeth-replacement",
      },
      { name: "Sports Dentistry", link: "/services/sports-dentistry" },
      { name: "Whitening & Veneers", link: "/services/whitening-&-veneers" },
      { name: "Same Day Dentistry", link: "/services/same-day-dentistry" },
      { name: "Perio Protect", link: "/services/perio-protect" },
      { name: "Painless Treatment", link: "/services/painless-treatment" },
      { name: "Halitosis", link: "/services/halitosis" },
      { name: "Endodontics", link: "/services/endodontics" },
    ],
    "Service Areas": [
      {
        name: "Maplewood, NJ",
        link: "service-areas/harrisburg-pa-dentist-near-you",
      },
      {
        name: "South Orange, NJ",
        link: "/service-areas/linglestown-pa-dentist-near-you",
      },
      {
        name: "Irvington, NJ",
        link: "/service-areas/colonial-park-pa-dentist-near-you",
      },
      {
        name: "Vauxhall, NJ",
        link: "/service-areas/penbrook-pa-dentist-near-you",
      },
      {
        name: "Newark, NJ",
        link: "/service-areas/paxtang-pa-dentist-near-you",
      },
    ],
    "Legal & Information": [
      { name: "Terms and Conditions", link: "/terms-and-conditions" },
      { name: "Privacy Policy", link: "/privacy-policy" },
      { name: "Accessibility", link: "/accessibility" },
    ],
  };

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div className="details-page-header-section">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-3 py-4 sm:py-3">
          <div className="text-center">
            <h1>Sitemap</h1>
            <p>
              Navigate through all the pages and services available on our
              website
            </p>
          </div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
        <div className="space-y-6 sm:space-y-8">
          {Object.entries(pages).map(([category, pageList]) => (
            <div
              key={category}
              className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
            >
              <h2 className=" text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-primary mt-2">
                {category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 sm:gap-3">
                {pageList.map((page) => (
                  <Link
                    key={page.link}
                    href={page.link}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-2 rounded-md text-sm hover:from-blue-700 hover:to-cyan-700 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm text-white font-medium leading-tight">
                      {page.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
