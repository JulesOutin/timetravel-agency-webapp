"use client"

import React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, Send, CheckCircle } from "lucide-react"

export function ReservationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section
      id="reservation"
      className="relative py-24 bg-card overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cosmic-blue/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            Réservation
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Planifiez Votre Voyage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Remplissez le formulaire ci-dessous et notre équipe vous contactera
            dans les plus brefs délais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-background border border-border rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Nom complet
                </Label>
                <Input
                  id="name"
                  placeholder="Votre nom"
                  className="bg-secondary border-border focus:border-gold"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  className="bg-secondary border-border focus:border-gold"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination" className="text-foreground">
                  Destination
                </Label>
                <Select required>
                  <SelectTrigger className="bg-secondary border-border focus:border-gold">
                    <SelectValue placeholder="Choisir une destination" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="paris-1889">
                      Paris 1889 - Belle Époque
                    </SelectItem>
                    <SelectItem value="cretaceous">
                      Crétacé - 65M années
                    </SelectItem>
                    <SelectItem value="florence-1504">
                      Florence 1504 - Renaissance
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-foreground">
                  Date souhaitée
                </Label>
                <div className="relative">
                  <Input
                    id="date"
                    type="date"
                    className="bg-secondary border-border focus:border-gold"
                    required
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-gold text-background hover:bg-gold-light font-semibold py-6 text-lg shadow-lg shadow-gold/30 transition-all duration-300 disabled:opacity-100"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Demande envoyée !
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer ma demande
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
