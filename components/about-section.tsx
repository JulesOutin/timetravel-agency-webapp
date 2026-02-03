"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Rocket, Star, Users } from "lucide-react"

const stats = [
  {
    icon: Rocket,
    value: "100+",
    label: "Voyages Réalisés",
  },
  {
    icon: Star,
    value: "5",
    label: "Étoiles",
  },
  {
    icon: Users,
    value: "Expert",
    label: "Équipe Temporelle",
  },
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              Notre Mission
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              L&apos;Ultime Expérience Temporelle
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Depuis notre fondation, TimeTravel Agency redéfinit le concept de voyage.
              Nous vous offrons l&apos;opportunité unique d&apos;explorer les moments les plus
              fascinants de l&apos;histoire, avec le confort et l&apos;élégance que vous méritez.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Notre technologie de pointe et notre équipe d&apos;experts temporels garantissent
              une expérience sécurisée, immersive et inoubliable à travers les âges.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative group"
              >
                <div className="bg-card border border-border rounded-xl p-6 text-center transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-gold">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
