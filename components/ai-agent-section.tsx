"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Bonjour ! Je suis votre Guide Temporel IA. Comment puis-je vous aider à planifier votre voyage dans le temps ?",
    sender: "bot",
  },
]

const botResponses = [
  "Excellente question ! Paris 1889 offre une expérience unique avec l'Exposition Universelle et la Tour Eiffel fraîchement construite. Je vous recommande un séjour de 5 jours minimum.",
  "Le Crétacé est notre destination la plus aventureuse ! Nous fournissons tout l'équipement de protection nécessaire. Les T-Rex sont fascinants à observer de loin !",
  "Florence 1504 est parfaite pour les amateurs d'art. Vous pourriez même croiser Michel-Ange travaillant sur le David !",
  "Nos voyages temporels sont entièrement sécurisés grâce à notre technologie brevetée. Nous avons réalisé plus de 100 voyages sans incident.",
  "Je vous recommande de réserver tôt car nos places sont limitées par destination et période. Souhaitez-vous que je vous guide vers le formulaire de réservation ?",
]

export function AIAgentSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: "bot",
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <>
      <section
        id="agent"
        className="relative py-24 bg-background overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cosmic-blue/20 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cosmic-blue/10 rounded-full blur-3xl" />
        </div>

        <div ref={ref} className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cosmic-blue/10 border border-cosmic-blue/30 mb-6">
              <Bot className="w-10 h-10 text-cosmic-blue" />
            </div>

            <span className="block text-cosmic-blue text-sm font-semibold tracking-wider uppercase mb-4">
              Assistant Intelligent
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Votre Guide Temporel
            </h2>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Notre chatbot IA est disponible 24/7 pour répondre à toutes vos
              questions sur les voyages temporels, vous conseiller sur les
              destinations et vous aider dans votre réservation.
            </p>

            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="mt-8 bg-cosmic-blue text-foreground hover:bg-cosmic-blue/80 font-semibold px-8 shadow-lg shadow-cosmic-blue/30 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Démarrer une conversation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Floating Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 z-50 w-full max-w-sm sm:max-w-md"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl shadow-cosmic-blue/20 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-cosmic-blue/10 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cosmic-blue/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-cosmic-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      Guide Temporel
                    </h4>
                    <p className="text-xs text-muted-foreground">En ligne</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-secondary rounded-full transition-colors"
                  aria-label="Fermer le chat"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2 ${
                      message.sender === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === "user"
                          ? "bg-gold/20"
                          : "bg-cosmic-blue/20"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-4 h-4 text-gold" />
                      ) : (
                        <Bot className="w-4 h-4 text-cosmic-blue" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                        message.sender === "user"
                          ? "bg-gold/20 text-foreground rounded-br-none"
                          : "bg-secondary text-foreground rounded-bl-none"
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="p-3 border-t border-border">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSend()
                  }}
                  className="flex gap-2"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Posez vos questions..."
                    className="flex-1 bg-secondary border-border focus:border-cosmic-blue"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="bg-cosmic-blue hover:bg-cosmic-blue/80"
                  >
                    <Send className="w-4 h-4" />
                    <span className="sr-only">Envoyer</span>
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button (when closed) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-cosmic-blue text-foreground shadow-lg shadow-cosmic-blue/30 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Ouvrir le chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
