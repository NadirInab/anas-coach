"use client"

import Reveal from "./Reveal"
import { Check } from "lucide-react"

export default function Services() {
  const certifications = [
    {
      icon: "🏅",
      title: "ASM-CPT",
      subtitle: "National Academy of Sport Medicine (USA)",
    },
    {
      icon: "📚",
      title: "Nutrition Certified",
      subtitle: "Royal Moroccan Federation of Bodybuilding",
    },
    {
      icon: "🥇",
      title: "Bodybuilding Champion",
      subtitle: "Moroccan Champion — bodybuilding category",
    },
    {
      icon: "🇲🇦",
      title: "National Athlete",
      subtitle: "Moroccan Bodybuilding Team",
    },
  ]

  const plans = [
    {
      id: "",
      number: "",
      title: "",
      subtitle: "Foundation Program",
      description: "Perfect for those just starting their fitness journey",
      price: "",
      features: [
        "Specialized meal plan",
        "Personalized workout plan",
        "Cardio program",
        "Supplements guidance",
        "Bi-weekly check-ins",
        "Q&A support",
      ],
    },
    {
      id: "",
      number: "02",
      title: "",
      subtitle: "Performance Program",
      description: "For serious athletes seeking advanced tracking",
      price: "",
      features: [
        "Specialized meal plan",
        "Advanced workout plan",
        "Cardio & conditioning",
        "Supplements plan",
        "Weekly check-ins",
        "Hormonal cycle support",
        "Sports analysis",
        "Unlimited questions",
      ],
    },
    {
      id: "",
      number: "03",
      title: "",
      subtitle: "Championship Program",
      description: "Complete performance optimization for champions",
      price: "",
      features: [
        "Specialized meal plan",
        "Elite workout programming",
        "Cardio & conditioning",
        "Advanced supplements plan",
        "Weekly check-ins",
        "Hormonal cycle support",
        "Advanced sports analysis",
        "24/7 support access",
      ],
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-24 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-semibold text-accent">My Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Coaching Programs & Credentials
            </h2>
            <p className="text-lg text-foreground/70">
              Professional certifications paired with three comprehensive coaching tiers. Choose the program that aligns with your goals and commitment level.
            </p>
          </div>
        </Reveal>

        {/* Certifications Grid */}
        <Reveal stagger delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="group relative p-5 rounded-xl bg-card/40 dark:bg-card/20 border border-border/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="text-3xl mb-2">{cert.icon}</div>
                <h3 className="font-bold text-sm mb-1">{cert.title}</h3>
                <p className="text-xs text-foreground/60">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Plans Grid */}
        <Reveal stagger delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, idx) => (
              <div
                key={plan.id}
                className={`relative group rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  idx === 1
                    ? "md:scale-105 md:shadow-2xl md:shadow-accent/20 border-2 border-accent/50"
                    : "border border-border/30"
                } bg-card/60 dark:bg-card/30 p-8 hover:shadow-xl`}
              >
                {/* Number badge */}
                <div className="absolute top-4 right-4 text-4xl font-black opacity-10 group-hover:opacity-20 transition-opacity">
                  {plan.number}
                </div>

                {/* Price tier badge */}
                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 group-hover:bg-accent/25 transition-colors">
                  <span className="text-xs font-semibold text-accent">{plan.price}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-sm text-accent font-semibold mb-2">{plan.subtitle}</p>
                <p className="text-sm text-foreground/60 mb-6">{plan.description}</p>

                {/* Divider */}
                <div className="w-8 h-1 bg-linear-to-r from-accent to-accent/40 rounded-full mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </span>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/971589752239?text=I%20am%20interested%20in%20the%20${plan.title}%20program`}
                  className="block w-full py-3 px-4 rounded-lg bg-linear-to-r from-accent to-accent/80 text-white font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 active:scale-95"
                >
                  Get Started
                </a>

                {/* Featured indicator */}
                {idx === 1 && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-accent via-accent to-accent/40" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA Section */}
        <Reveal delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-foreground/70 mb-4">Have questions about which program is right for you?</p>
            <a
              href="mailto:Anassabouali91@gmail.com?subject=Program%20Consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/5 transition-all duration-300"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
