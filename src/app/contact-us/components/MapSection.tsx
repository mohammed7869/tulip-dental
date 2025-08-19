export default function MapSection() {
  return (
    <section className="w-full bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7997524427874!2d-74.25858312546795!3d40.72242453697971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3acfa57f6c787%3A0x1b55d762a76534d7!2s1585%20Springfield%20Ave%2C%20Maplewood%2C%20NJ%2007040%2C%20USA!5e0!3m2!1sen!2sin!4v1755590103689!5m2!1sen!2sin"
            /* src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48699.53187959969!2d-76.92187807181904!3d40.28195319387061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c116b8079e97%3A0xbb6e42c8128d46d5!2sHarrisburg%2C%20PA%2C%20USA!5e0!3m2!1sen!2sin!4v1753263853796!5m2!1sen!2sin" */
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tulip Dental Location"
            className="w-full h-full"
          />
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7997524427874!2d-74.25858312546795!3d40.72242453697971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3acfa57f6c787%3A0x1b55d762a76534d7!2s1585%20Springfield%20Ave%2C%20Maplewood%2C%20NJ%2007040%2C%20USA!5e0!3m2!1sen!2sin!4v1755590103689!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          {/* Overlay with location info */}
          {/* <div className="absolute top-4 left-4 bg-white rounded-lg p-4 shadow-lg max-w-sm">
              <h3 className="font-semibold text-foreground mb-2">
                Bloomfield Avenue Newark
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                539 Bloomfield Avenue, Suite 3<br />
                Newark, NJ 07107
              </p>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <span className="text-yellow-500 mr-1">★★★★★</span>
              <span>4.8 (156 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className="text-primary text-sm hover:underline">View larger map</a>
              <a href="tel:973-604-1600" className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                Call: 973-604-1600
              </a>
            </div>
          </div> */}
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Use ctrl + scroll to zoom the map
          </p>
        </div>
      </div>
    </section>
  )
} 