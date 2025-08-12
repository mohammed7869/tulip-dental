import Image from 'next/image'

const partners = [
  {
    name: 'PERELEX',
    icon: '/Images/dental-care.png',
  },
  {
    name: 'DENTONIX',
    icon: '/Images/teeth-whitening.png',
  },
  {
    name: 'SENOFEX',
    icon: '/Images/implant.png',
  },
  {
    name: 'MEDILEX',
    icon: '/Images/braces.png.png',
  },
  {
    name: 'ZELOMEX',
    icon: '/Images/tooth-insurance.png.png',
  }
]

export default function PartnerLogos() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 mb-4 relative bg-gray-100 rounded-full flex items-center justify-center p-4">
                <Image
                  src={partner.icon}
                  alt={partner.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-foreground text-sm">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 