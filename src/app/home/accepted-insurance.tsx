import React from 'react';


const InsuranceSection = () => {
  const insuranceLogos = [
    {
      id: 1,
      name: "Assurant",
      logo: "/Images/Insurance companies/1771704.webp",
      alt: "Assurant Insurance"
    },
    {
      id: 2,
      name: "UnitedHealthcare",
      logo: "/Images/Insurance companies/1771818.webp",
      alt: "UnitedHealthcare Insurance"
    },
    {
      id: 3,
      name: "Aetna",
      logo: "/Images/Insurance companies/1771832.webp",
      alt: "Aetna Insurance"
    },
    {
      id: 4,
      name: "AIG",
      logo: "/Images/Insurance companies/1771872.webp",
      alt: "AIG Insurance"
    },
    {
      id: 5,
      name: "Blue Cross Blue Shield",
      logo: "/Images/Insurance companies/1771881.webp",
      alt: "Blue Cross Blue Shield Insurance"
    },
    {
      id: 6,
      name: "Cigna",
      logo: "/Images/Insurance companies/1771885.webp",
      alt: "Cigna Healthcare"
    },
    {
      id: 7,
      name: "Humana",
      logo: "/Images/Insurance companies/1772499.webp",
      alt: "Humana Insurance"
    },
    {
      id: 8,
      name: "MetLife",
      logo: "/Images/Insurance companies/1772502.webp",
      alt: "MetLife Insurance"
    },
    {
      id: 9,
      name: "Guardian",
      logo: "/Images/Insurance companies/1773057.webp",
      alt: "Guardian Insurance"
    },
    {
      id: 10,
      name: "Delta Dental",
      logo: "/Images/Insurance companies/1773061.webp",
      alt: "Delta Dental Insurance"
    },
    {
      id: 11,
      name: "Cigna Dental",
      logo: "/Images/Insurance companies/1778123.webp",
      alt: "Cigna Dental Insurance"
    },
    {
      id: 12,
      name: "Principal",
      logo: "/Images/Insurance companies/1779364.webp",
      alt: "Principal Insurance"
    },
    {
      id: 13,
      name: "Lincoln Financial",
      logo: "/Images/Insurance companies/1785544.webp",
      alt: "Lincoln Financial Insurance"
    },
    {
      id: 14,
      name: "Ameritas",
      logo: "/Images/Insurance companies/1789355.webp",
      alt: "Ameritas Insurance"
    },
    {
      id: 15,
      name: "Sun Life",
      logo: "/Images/Insurance companies/1790631.webp",
      alt: "Sun Life Insurance"
    },
    {
      id: 16,
      name: "Principal",
      logo: "/Images/Insurance companies/1790652.webp",
      alt: "Principal Insurance"
    },
    {
      id: 17,
      name: "Lincoln Financial",
      logo: "/Images/Insurance companies/1790912.webp",
      alt: "Lincoln Financial Insurance"
    },
    {
      id: 18,
      name: "Ameritas",
      logo: "/Images/Insurance companies/1825835.webp",
      alt: "Ameritas Insurance"
    },
    {
      id: 19,
      name: "Sun Life",
      logo: "/Images/Insurance companies/1858337.webp",
      alt: "Sun Life Insurance"
    },
    {
      id: 20,
      name: "MetLife Dental",
      logo: "/Images/Insurance companies/2206449.webp",
      alt: "MetLife Dental Insurance"
    },
    {
      id: 21,
      name: "Cigna Dental",
      logo: "/Images/Insurance companies/2272134.webp",
      alt: "Cigna Dental Insurance"
    },
    {
      id: 22,
      name: "Delta Dental",
      logo: "/Images/Insurance companies/2367708.webp",
      alt: "Delta Dental Insurance"
    },
    {
      id: 23,
      name: "Guardian Dental",
      logo: "/Images/Insurance companies/2614660.webp",
      alt: "Guardian Dental Insurance"
    },
    {
      id: 24,
      name: "Humana Dental",
      logo: "/Images/Insurance companies/2761735.webp",
      alt: "Humana Dental Insurance"
    },
    {
      id: 25,
      name: "Aetna Dental",
      logo: "/Images/Insurance companies/2781630.webp",
      alt: "Aetna Dental Insurance"
    }
    
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...insuranceLogos, ...insuranceLogos];

  return (
    <section className="w-full bg-gray-50 py-16 mt-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6">
            We Accept Most Insurance Plans
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            At Maple Dental Harrisburg, we work with most major dental insurance providers. If you have any questions about your coverage, feel free to contact our office.
          </p>
        </div>

        {/* Auto-scrolling logos container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="scroll-track flex animate-scroll-horizontal">
            {duplicatedLogos.map((insurance, index) => (
              <div
                key={`${insurance.id}-${index}`}
                className="flex-shrink-0 mx-3 md:mx-8 flex items-center justify-center h-16 w-32 md:h-24 md:w-48"
              >
                <img
                  src={insurance.logo}
                  alt={insurance.alt}
                  className="max-h-16 max-w-full object-contain hover:grayscale-0 transition-all duration-300 hover:opacity-100"
                />


















              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Custom CSS for animation */}
       <style jsx>{`
         .scroll-track {
      width: fit-content;
    }
      @keyframes scroll-horizontal {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-scroll-horizontal {
      animation: scroll-horizontal 60s linear infinite;
    }

    .animate-scroll-horizontal:hover {
      animation-play-state: paused;
    }
  `}</style>
    </section>
  );
};
export default InsuranceSection;