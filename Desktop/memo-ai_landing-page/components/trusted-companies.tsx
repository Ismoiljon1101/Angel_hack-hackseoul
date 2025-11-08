"use client"

import { useEffect, useState } from "react"

const companies = [
  { id: 1, name: "TechCorp", color: "bg-blue-500" },
  { id: 2, name: "InnovateLab", color: "bg-purple-500" },
  { id: 3, name: "DataFlow", color: "bg-green-500" },
  { id: 4, name: "CloudSync", color: "bg-orange-500" },
  { id: 5, name: "NextGen", color: "bg-pink-500" },
  { id: 6, name: "SmartSys", color: "bg-indigo-500" },
  { id: 7, name: "FutureTech", color: "bg-teal-500" },
  { id: 8, name: "DigitalPro", color: "bg-red-500" },
]

export function TrustedCompanies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 4

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, companies.length - itemsPerView)
        if (prev >= maxIndex) {
          return 0
        }
        return prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="border-y py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground text-center mb-8 font-medium">
          Trusted by employees at
        </p>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {companies.map((company, index) => (
                <div
                  key={company.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="flex items-center justify-center h-20">
                    <div className={`${company.color} rounded-xl w-full h-14 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer`}>
                      <span className="text-white font-bold text-sm md:text-base">{company.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.max(1, companies.length - itemsPerView + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

