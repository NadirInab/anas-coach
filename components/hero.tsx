"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, Zap, Target, Flame } from "lucide-react"
import Reveal from "./Reveal"

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)

  // reveal handled by Framer Motion Reveal component

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return
      const rect = imageRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      
      imageRef.current.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * 5}deg) rotateY(${(x - 0.5) * 5}deg)`
    }

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const scrollToSection = () => {
    const element = document.getElementById("about")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden bg-background">
      {/* Enhanced animated background with multiple layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-60" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse opacity-40 delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse opacity-50 delay-500" />
        
        {/* Floating particles effect */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-float opacity-40" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent/60 rounded-full animate-float animation-delay-2000 opacity-30" />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-accent/50 rounded-full animate-float animation-delay-4000 opacity-25" />
      </div>

  <Reveal className="text-center space-y-8 max-w-5xl relative z-10" stagger>
        {/* Floating stats badges */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-sm hover:border-accent/60 transition-all duration-300 animate-fade-in-up">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">500+ Clients</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-sm hover:border-accent/60 transition-all duration-300 animate-fade-in-up animation-delay-200">
            <Target className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">NASM Certified</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full backdrop-blur-sm hover:border-accent/60 transition-all duration-300 animate-fade-in-up animation-delay-400">
            <Flame className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Champion Coach</span>
          </div>
        </div>

        {/* Enhanced Profile Image with 3D effect */}
        <div className="flex justify-center mb-8 animate-fade-in-up animation-delay-300">
          <div className="relative group">
            {/* Premium glow layers */}
            <div className="absolute -inset-8 bg-linear-to-r from-accent via-accent/60 to-accent/30 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
            <div className="absolute -inset-4 bg-linear-to-r from-accent/40 via-accent/20 to-transparent rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-all duration-700 animate-pulse animation-delay-500" />
            <div className="absolute -inset-6 bg-radial-gradient from-accent/30 to-transparent rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-700" />
            
            {/* Main image container with premium styling */}
            <div 
              ref={imageRef}
              className="relative w-56 h-56 sm:w-96 sm:h-96 rounded-full border-4 border-accent/80 overflow-hidden shadow-2xl shadow-accent/60 transition-all duration-300 ease-out group-hover:shadow-accent/80 group-hover:border-accent"
            >
              {/* Gradient overlay with enhanced contrast */}
              <div className="absolute inset-0 bg-linear-to-br from-accent/15 via-transparent to-accent/20 z-20 group-hover:opacity-50 transition-opacity" />
              
              {/* Main image with enhanced brightness and contrast */}
              <img 
                src="/images/img3.jpeg"
                alt="Anas Boughli Profile"
                className="w-full h-full object-cover brightness-120 contrast-110 group-hover:brightness-130 transition-all duration-500"
              />
              
              {/* Premium shine effect overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />
              
              {/* Subtle vignette effect */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/20 z-10" />
            </div>
            
            {/* Decorative corner accents */}
            <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-accent/60 rounded-tr-lg transition-all duration-500 group-hover:border-accent group-hover:scale-125" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-2 border-accent/60 rounded-bl-lg transition-all duration-500 group-hover:border-accent group-hover:scale-125" />
          </div>
        </div>

        {/* Main Text with staggered animation */}
        <div className="space-y-4 animate-fade-in-up animation-delay-500">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-foreground animate-text-shimmer">Unleash Your</span>
            <span className="block bg-linear-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent animate-text-shimmer animation-delay-200">
              Potential
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Transform your body, transform your life. Elite coaching from a certified Moroccan champion dedicated to your success. Get ready to crush your fitness goals.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up animation-delay-700">
          <a
            href="https://wa.me/"
            className="group relative px-8 py-4 bg-linear-to-r from-accent to-accent/80 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50 active:scale-95 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Start Your Journey
            </span>
          </a>
          <button
            onClick={scrollToSection}
            className="group px-8 py-4 border-2 border-accent/50 text-accent rounded-xl font-semibold hover:border-accent hover:bg-accent/5 transition-all duration-300 active:scale-95 transform hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Learn More</span>
          </button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-xs text-accent/60 font-semibold">Scroll to explore</span>
          <div className="relative">
            <ArrowDown className="w-6 h-6 text-accent/60 animate-pulse" />
            <ArrowDown className="absolute w-6 h-6 text-accent/40 animate-bounce animation-delay-200" />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
