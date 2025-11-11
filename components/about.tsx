"use client"

import { Award, Users, Target } from "lucide-react"
import Reveal from "./Reveal"

export default function About() {
  // Reveal animations handled by the Reveal component (Framer Motion)

  return (
    <section id="about" className="py-20 sm:py-32 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Train With <span className="text-accent">Anas Boughli</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Certified Personal Trainer and Moroccan Champion with years of competitive experience and proven training
            methodologies.
          </p>
        </div>

        {/* Stats Grid */}
        <Reveal stagger>
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {[
            {
              icon: Users,
              title: "500+",
              subtitle: "Clients Transformed",
            },
            {
              icon: Award,
              title: "NASM",
              subtitle: "Certified Coach",
            },
            {
              icon: Target,
              title: "100%",
              subtitle: "Dedicated Support",
            },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                data-animate
                className="p-8 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300 opacity-0 translate-y-8 text-center hover:shadow-lg hover:shadow-accent/20"
              >
                <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
                <p className="text-foreground/60">{stat.subtitle}</p>
              </div>
            )
          })}
          </div>
        </Reveal>

        {/* Gallery */}
        <Reveal stagger>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="group relative h-80 rounded-xl overflow-hidden cursor-pointer">
                <img 
                  src={`/images/img${idx}.jpeg`}
                  alt={`Competition Physique ${idx}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 brightness-100 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <span className="text-white font-semibold">Competition Physique {idx}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Certification */}
        <Reveal>
          <div className="max-w-sm mx-auto p-8 rounded-xl bg-linear-to-br from-accent/10 to-accent/5 border-2 border-accent/50 hover:border-accent transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-accent/20">
          <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center mb-4 overflow-hidden relative">
            <img 
              src="/images/img5.jpeg"
              alt="NASM Certification"
              className="w-full h-full object-cover brightness-110 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h3 className="text-xl font-bold text-center text-accent">NASM Certified</h3>
          <p className="text-center text-foreground/60 text-sm mt-2">
            Certified Personal Trainer & Nutrition Specialist
          </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
