"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark

    const html = document.documentElement
    if (shouldBeDark) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [])

  if (!mounted) return <>{children}</>
  return <>{children}</>
}

export function useTheme() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark
    setIsDark(shouldBeDark)
  }, [])

  const toggleTheme = (theme: string) => {
    const dark = theme === "dark"
    setIsDark(dark)
    localStorage.setItem("theme", theme)
    const html = document.documentElement
    if (dark) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }

  return {
    theme: isDark ? "dark" : "light",
    setTheme: toggleTheme,
    mounted,
  }
}
