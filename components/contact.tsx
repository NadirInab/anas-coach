"use client"

import { useEffect, useRef } from "react"
import { MessageCircle, Mail, Instagram } from "lucide-react"

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100")
          entry.target.classList.remove("opacity-0")
        }
      },
      { threshold: 0.2 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 bg-gradient-to-r from-accent/90 to-accent/70">
      <div ref={containerRef} className="max-w-3xl mx-auto text-center opacity-0 transition-opacity duration-1000">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Ready to Transform?</h2>
        <p className="text-lg text-white/90 mb-12 max-w-xl mx-auto">
          Take the first step towards your dream physique. Let's discuss your goals and create a personalized plan.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-accent rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 hover:shadow-xl active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="mailto:anas@example.com"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/20 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 active:scale-95"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
          <a
            href="https://instagram.com/"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/20 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 active:scale-95"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
