"use client"

import { MapPin, ExternalLink } from "lucide-react"

const locations = [
  {
    id: 1,
    name: "Nuzvid Mango Store",
    address: "Leelanagar, Tiruvur-Nuzvid road, Krishna District, Andhra Pradesh",
    description: "Our main mango trading center for bulk orders",
    mapUrl: "https://maps.app.goo.gl/tbQ1k8n8p7PfBkd39",
    mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Nuzvid,Andhra+Pradesh,India&zoom=14&size=400x200&maptype=roadmap&markers=color:green%7CNuzvid,Andhra+Pradesh,India&key=YOUR_API_KEY"
  },
  {
    id: 2,
    name: "Mango Cutting & Pickle Shop",
    address: "Thurpu digavalli, Mukkelupadu road, Krishna District, Andhra Pradesh",
    description: "Our pickle manufacturing and cutting unit",
    mapUrl: "https://maps.app.goo.gl/X3RhtRfzEahSZhTR6",
    mapImage: "https://drive.google.com/file/d/1YUx-HqbX6lRjGiVA2bndrWqdgIy0eSnN/view?usp=sharing"
  }
]

export function Locations() {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Our Locations
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Visit us at our locations in Nuzvid, Krishna District, Andhra Pradesh
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <a
              key={location.id}
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Map Preview Image */}
              <div className="relative h-48 bg-secondary/30 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-2" />
                    <span className="text-primary font-semibold">Click to Open in Google Maps</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>

              {/* Location Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {location.name}
                </h3>
                <p className="text-muted-foreground mb-3 flex items-start gap-2">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  {location.address}
                </p>
                <p className="text-card-foreground">{location.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
