"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { theme, setTheme, mounted } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Creative Minimalist Logo */}
        <button 
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 group cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          {/* Geometric icon */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Outer circle */}
            <div className="absolute inset-0 border-2 border-accent rounded-full" />
            {/* Inner ascending bars */}
            <div className="flex items-end justify-center gap-1 h-4 w-4">
              <div className="w-1 h-2 bg-accent rounded-sm group-hover:h-2.5 transition-all" />
              <div className="w-1 h-3 bg-accent rounded-sm group-hover:h-4 transition-all" />
              <div className="w-1 h-4 bg-accent rounded-sm group-hover:h-5 transition-all" />
            </div>
          </div>
          {/* Brand text */}
          <span className="text-xl font-bold bg-linear-to-r from-accent to-accent/70 bg-clip-text text-transparent">ANAS</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </button>
          <button
            onClick={() => scrollToSection("programs")}
            className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200 relative group"
          >
            Programs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground/70 hover:text-accent py-2 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="block w-full text-left text-foreground/70 hover:text-accent py-2 transition-colors duration-200"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground/70 hover:text-accent py-2 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
