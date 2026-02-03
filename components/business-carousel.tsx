"use client"

import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Business images - easily add more by adding to this array
const businessImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&auto=format&fit=crop",
    alt: "Fresh mango harvest",
    title: "Mango Harvesting"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800&auto=format&fit=crop",
    alt: "Mango sorting and grading",
    title: "Quality Sorting"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=800&auto=format&fit=crop",
    alt: "Bulk mango packaging",
    title: "Bulk Packaging"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1623047925909-2a867744b6e2?w=800&auto=format&fit=crop",
    alt: "Mango transportation",
    title: "Logistics & Transport"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop",
    alt: "Mango orchard",
    title: "Our Orchards"
  }
]

export function BusinessCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % businessImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + businessImages.length) % businessImages.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 animate-float">
          Our Businesses
        </h2>
        
        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Images */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {businessImages.map((image) => (
              <div 
                key={image.id}
                className="min-w-full relative aspect-[16/9]"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {businessImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-white scale-110" 
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Business Description */}
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-4">
            About Our Business Operations
          </h3>
          <p className="text-card-foreground leading-relaxed text-lg">
            At Bala Vigneshwara Mango Merchants, we take pride in our comprehensive mango business operations. From carefully maintained orchards to expert harvesting, quality sorting, hygienic packaging, and reliable transportation - we handle every step with utmost care. Our decades of experience in the mango trade ensures that you receive only the finest quality mangoes, delivered fresh to your doorstep.
          </p>
        </div>
      </div>
    </section>
  )
}
