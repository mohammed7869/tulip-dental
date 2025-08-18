export default function MapSection() {
  return (
    <section className="w-full bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.388699662395!2d-76.84668282549382!3d40.33372256068962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c79a41f0e96d%3A0xc67e52466ec7a803!2s2017%20Eg%20Dr%20%23200%2C%20Harrisburg%2C%20PA%2017112%2C%20USA!5e0!3m2!1sen!2sin!4v1754646104764!5m2!1sen!2sin"
            /* src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48699.53187959969!2d-76.92187807181904!3d40.28195319387061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c116b8079e97%3A0xbb6e42c8128d46d5!2sHarrisburg%2C%20PA%2C%20USA!5e0!3m2!1sen!2sin!4v1753263853796!5m2!1sen!2sin" */
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Maple Dental Location"
            className="w-full h-full"
          />

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