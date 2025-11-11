"use client"

import { useState } from "react"
import { Instagram, Mail, Phone } from "lucide-react"

export default function SocialSidebar() {
  const [isHovered, setIsHovered] = useState(false)

  const contacts = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/Anasshealthcoach",
      bg: "hover:bg-pink-500",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      href: "https://wa.me/971589752239",
      bg: "hover:bg-green-500",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:Anassabouali91@gmail.com",
      bg: "hover:bg-red-500",
    },
  ]

  return (
    <>
        {/* Desktop / large screens: vertical sticky sidebar */}
        <div
          className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-hidden={false}
        >
          {/* Inverted backgrounds: light mode uses dark bg, dark mode uses white bg */}
          <div className="backdrop-blur-md bg-gray-800 dark:bg-white border border-gray-700 dark:border-gray-200 rounded-full p-3 shadow-lg transition-all duration-300">
            <div className="flex flex-col gap-3">
              {contacts.map((c) => {
                const Icon = c.icon
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    aria-label={c.label}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    title={c.label}
                    className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-gray-100 dark:text-gray-900 ${c.bg}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Small tooltip label when hovered for accessibility */}
          {isHovered && (
            <div className="text-xs font-medium text-gray-100 dark:text-gray-900 text-center opacity-0 animate-fade-in-up">Contact</div>
          )}
        </div>

        {/* Mobile: compact bottom pill bar */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex lg:hidden items-center">
          <div className="backdrop-blur-md bg-gray-900/90 dark:bg-white/95 border border-gray-800 dark:border-gray-200 rounded-full p-2 shadow-lg flex items-center gap-2 px-3">
            {contacts.map((c) => {
              const Icon = c.icon
              return (
                <a
                  key={c.label}
                  href={c.href}
                  aria-label={c.label}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  title={c.label}
                  className={`p-2 rounded-full transition-all duration-200 transform hover:scale-110 text-gray-100 dark:text-gray-900 ${c.bg}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </>
    )
  }
