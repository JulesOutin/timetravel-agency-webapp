"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react"

const destinations = [
  {
    id: "paris-1889",
    title: "Paris 1889",
    subtitle: "Belle Époque",
    description: "Tour Eiffel naissante, Exposition Universelle, élégance française.",
    fullDescription:
      "Plongez dans le Paris de 1889, au cœur de l'Exposition Universelle. Admirez la Tour Eiffel fraîchement construite, flânez sur les Champs-Élysées en calèche, et vivez l'effervescence artistique de la Belle Époque. Rencontrez les impressionnistes, savourez un café au Moulin Rouge, et découvrez une ville en pleine métamorphose.",
    image: "/images/paris-1889.jpg",
    duration: "3-7 jours",
    period: "1889",
  },
  {
    id: "cretaceous",
    title: "Crétacé",
    subtitle: "-65 Millions d'années",
    description: "Rencontrez les dinosaures, jungle préhistorique sauvage.",
    fullDescription:
      "Une aventure au-delà de l'imagination vous attend dans le Crétacé tardif. Observez les majestueux T-Rex et Triceratops dans leur habitat naturel. Explorez des forêts primordiales luxuriantes, découvrez une faune extraordinaire, et vivez une expérience que seul TimeTravel Agency peut offrir. Safari préhistorique tout inclus avec équipement de protection avancé.",
    image: "/images/cretaceous.jpg",
    duration: "1-3 jours",
    period: "-65M années",
  },
  {
    id: "florence-1504",
    title: "Florence 1504",
    subtitle: "Renaissance Italienne",
    description: "Michel-Ange, Renaissance italienne, chefs-d'œuvre artistiques.",
    fullDescription:
      "Voyagez au cœur de la Renaissance italienne et découvrez Florence en 1504. Assistez à la création du David par Michel-Ange, rencontrez Léonard de Vinci dans son atelier, et explorez les palais des Médicis. Dégustez la cuisine toscane authentique et immergez-vous dans l'âge d'or de l'art et de la culture occidentale.",
    image: "/images/florence-1504.jpg",
    duration: "4-10 jours",
    period: "1504",
  },
]

export function DestinationsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedDestination, setSelectedDestination] = useState<
    (typeof destinations)[0] | null
  >(null)

  return (
    <section
      id="destinations"
      className="relative py-24 bg-card overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cosmic-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            Explorez les Époques
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Destinations Temporelles
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez parmi nos destinations exclusives et vivez des moments
            uniques à travers le temps.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-background border border-border transition-all duration-500 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  {/* Period badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30">
                    <span className="text-xs font-semibold text-gold">
                      {destination.period}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                    {destination.title}
                  </h3>
                  <p className="text-sm text-cosmic-blue font-medium">
                    {destination.subtitle}
                  </p>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {destination.duration}
                    </span>
                  </div>

                  <Button
                    onClick={() => setSelectedDestination(destination)}
                    className="mt-6 w-full bg-gold/10 text-gold hover:bg-gold hover:text-background border border-gold/30 transition-all duration-300 group-hover:bg-gold group-hover:text-background"
                  >
                    Découvrir
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedDestination}
        onOpenChange={() => setSelectedDestination(null)}
      >
        <DialogContent className="sm:max-w-2xl bg-card border-border">
          {selectedDestination && (
            <>
              <div className="relative h-48 sm:h-64 -mx-6 -mt-6 overflow-hidden rounded-t-lg">
                <Image
                  src={selectedDestination.image || "/placeholder.svg"}
                  alt={selectedDestination.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <DialogHeader className="mt-4">
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {selectedDestination.title}{" "}
                  <span className="text-cosmic-blue">
                    - {selectedDestination.subtitle}
                  </span>
                </DialogTitle>
                <DialogDescription className="text-muted-foreground leading-relaxed">
                  {selectedDestination.fullDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary">
                  <Calendar className="w-4 h-4 text-gold" />
                  {selectedDestination.period}
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary">
                  <Clock className="w-4 h-4 text-gold" />
                  {selectedDestination.duration}
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary">
                  <MapPin className="w-4 h-4 text-gold" />
                  Voyage guidé
                </span>
              </div>
              <div className="mt-6">
                <Button
                  asChild
                  className="w-full bg-gold text-background hover:bg-gold-light font-semibold"
                >
                  <a href="#reservation">Réserver ce voyage</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
