"use client"

import { useEffect, useRef } from "react"
import { Check } from "lucide-react"

const programs = [
  {
    title: "Transform Body",
    price: "2500",
    currency: "AED",
    description: "Complete body transformation program with customized workout plans and nutrition guidance.",
    features: ["Workout Plans", "Nutrition Guide", "Weekly Check-ins", "Progress Tracking"],
    highlight: false,
  },
  {
    title: "Elite Coaching",
    price: "2700",
    currency: "AED",
    description: "Advanced coaching with detailed macro tracking and bi-weekly video consultations.",
    features: ["Everything in Transform", "Macro Tracking", "Video Calls Bi-weekly", "Supplement Protocol"],
    highlight: true,
  },
  {
    title: "Elite Transformation",
    price: "3500",
    currency: "AED",
    description: "Premium all-inclusive program with daily coaching support and competition prep expertise.",
    features: ["24/7 Support", "Meal Prep Plans", "Competition Prep", "Personalized Everything"],
    highlight: false,
  },
]

export default function Programs() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll("[data-card]")
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("opacity-100", "translate-y-0")
              card.classList.remove("opacity-0", "translate-y-12")
            }, index * 150)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="programs" className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Elite Coaching <span className="text-accent">Programs</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Choose the perfect program for your fitness goals and experience level.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              data-card
              className={`rounded-2xl p-8 transition-all duration-500 opacity-0 translate-y-12 ${
                program.highlight
                  ? "md:scale-105 bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent ring-1 ring-accent/50 shadow-2xl shadow-accent/20"
                  : "bg-secondary border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              }`}
            >
              {program.highlight && (
                <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/50 rounded-full text-accent text-xs font-semibold mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
              <p className="text-foreground/60 text-sm mb-6">{program.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{program.price}</span>
                  <span className="text-accent font-semibold">{program.currency}</span>
                </div>
                <p className="text-foreground/50 text-xs mt-2">Per month</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {program.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95 ${
                  program.highlight
                    ? "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/50"
                    : "border border-accent text-accent hover:bg-accent/10"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
