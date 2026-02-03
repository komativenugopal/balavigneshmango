"use client"

import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Business 1: Nuzvid Mangos - Images for carousel
const mangoSellingImages = [
  {
    id: 1,
    src: "g",
    alt: "Fresh mangoes in bulk"
  },
  {
    id: 2,
    src: "h=800&auto=format&fit=crop",
    alt: "Mango sorting"
  },
  {
    id: 3,
    src: "https:/ed?w=800&auto=format&fit=crop",
    alt: "Quality mangoes"
  },
  {
    id: 4,
    src: "https://imato-1623047925909-2a867744b6e2?w=800&auto=format&fit=crop",
    alt: "Mango varieties"
  },
  {
    id: 5,
    src: "https://images.u771894821-ce9b6c11b08e?w=800&auto=format&fit=crop",
    alt: "Mango orchard"
  }
]

// Business 2: Pickle Shop - Images for carousel
const pickleShopImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo--74f6c829db5c?w=800&auto=format&fit=crop",
    alt: "Mango cutting"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo--5382a3d23a15?w=800&auto=format&fit=crop",
    alt: "Pickle preparation"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo--63994c53433b?w=800&auto=format&fit=crop",
    alt: "Mango pickle jars"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo--9f60a05a013d?w=800&auto=format&fit=crop",
    alt: "Hygienic food preparation"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo--0877df9cc836?w=800&auto=format&fit=crop",
    alt: "Quality food products"
  }
]

function ImageCarousel({ images, title }: { images: typeof mangoSellingImages; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="min-w-full relative aspect-video">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-primary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-lg transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-primary" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-110" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function OurBusinesses() {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Our Businesses
        </h2>

        {/* Business 1: Nuzvid Mangos */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">
            Nuzvid Mangos - Selling in Bulk
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ImageCarousel images={mangoSellingImages} title="Nuzvid Mangos" />
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <p className="text-card-foreground leading-relaxed text-lg">
                We buy and also sell the mangoes lower than that of market prices. We have all
                types of mangoes available. We sell quality mangoes. We do matter quality over
                profit.
              </p>
            </div>
          </div>
        </div>

        {/* Business 2: Mango Cutting & Pickle Shop */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">
            Mango Cutting & Pickle Shop
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-card rounded-xl p-6 shadow-lg order-2 md:order-1">
              <p className="text-card-foreground leading-relaxed text-lg">
                We have a mango cutting shop where the mangoes are cut into pieces and pickled in
                large quantity with hygiene as our first priority. We export them on demand.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <ImageCarousel images={pickleShopImages} title="Pickle Shop" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
