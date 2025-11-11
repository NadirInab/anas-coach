"use client"

import { useEffect, useRef } from "react"

export default function Motivation() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
          entry.target.classList.remove("opacity-0", "translate-y-8")
        }
      },
      { threshold: 0.3 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 sm:py-32 px-4 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <div ref={textRef} className="text-center space-y-6 opacity-0 translate-y-8 transition-all duration-1000">
          <div className="text-5xl mb-4">✨</div>
          <p className="text-xl sm:text-2xl leading-relaxed text-foreground/90 italic">
            Success isn't given, it's <span className="text-accent font-semibold">earned</span>. Every rep, every meal,
            every moment of discipline brings you closer to the champion you're meant to become. The pain you feel today
            will be the strength you feel tomorrow.
          </p>
          <p className="text-lg text-foreground/70">
            Your body can stand almost anything—it's your <span className="text-accent font-semibold">mind</span> you
            need to convince. Let's build not just a better physique, but a stronger mindset and an unbreakable will.
          </p>
        </div>
      </div>
    </section>
  )
}
