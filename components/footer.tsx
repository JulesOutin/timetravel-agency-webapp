"use client"

import Link from "next/link"
import { Clock, Instagram, Twitter, Linkedin } from "lucide-react"

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#destinations", label: "Destinations" },
  { href: "#reservation", label: "Réservation" },
  { href: "#agent", label: "Agent IA" },
]

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer id="contact" className="relative bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="relative">
              <Clock className="h-8 w-8 text-gold" />
            </div>
            <span className="text-xl font-bold text-foreground">
              TimeTravel <span className="text-gold">Agency</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TimeTravel Agency. Tous droits réservés.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Les voyages temporels sont soumis aux lois de la physique quantique et aux
            régulations intergalactiques.
          </p>
        </div>
      </div>
    </footer>
  )
}
