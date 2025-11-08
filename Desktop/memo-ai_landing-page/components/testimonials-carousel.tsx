"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "MemoAI has completely transformed how I work. I've saved over 15 hours per week! The automation features are intuitive and the support team is incredibly responsive.",
    rating: 5,
    image: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "TechStart",
    content: "The best investment we've made. Our team productivity has increased by 40%. The ROI was evident within the first month.",
    rating: 5,
    image: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Freelance Designer",
    company: "Independent",
    content: "Simple to use, powerful features. This is exactly what I needed for my workflow. The offline capability is a game-changer.",
    rating: 5,
    image: "ER"
  },
  {
    name: "David Kim",
    role: "Operations Director",
    company: "Global Solutions Inc",
    content: "MemoAI streamlined our entire operations. What used to take days now takes hours. The team collaboration features are outstanding.",
    rating: 5,
    image: "DK"
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Lead",
    company: "Creative Agency",
    content: "The AI-powered suggestions have been incredibly helpful. It's like having an assistant that knows exactly what you need.",
    rating: 5,
    image: "LA"
  },
  {
    name: "James Wilson",
    role: "CTO",
    company: "StartupXYZ",
    content: "We've tried many automation tools, but MemoAI stands out. The security features give us peace of mind, and the performance is unmatched.",
    rating: 5,
    image: "JW"
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const itemsPerView = 3 // ✅ show 3 at once

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / itemsPerView))
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / itemsPerView)) % Math.ceil(testimonials.length / itemsPerView))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / itemsPerView))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="bg-muted/50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Loved by people worldwide</h2>
          <p className="text-lg text-muted-foreground">
            See what our customers are saying
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto"> {/* wider container */}
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <Card className="h-full border-2 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">
                          {testimonial.image}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-lg">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        "{testimonial.content}"
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-background shadow-lg hover:bg-accent z-10 hidden sm:flex"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-background shadow-lg hover:bg-accent z-10 hidden sm:flex"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
