"use client";

import { motion } from "framer-motion";
import { Quote, MessageSquare, Star } from "lucide-react";
import GlowCard from "../GlowCard";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Marc-Antoine D.",
    role: "Directeur E-commerce",
    company: "MasterFut",
    quote: "La refonte technique de notre système de commande par Ayoub a transformé notre entreprise. L'automatisation de la livraison des clés digitales et la sécurisation des Stripe Webhooks ont mis fin aux fraudes. Un sans-faute !",
    rating: 5,
  },
  {
    name: "Fatima-Zohra L.",
    role: "CEO & Directrice Associée",
    company: "Al Moulate Immobilier",
    quote: "L'ERP interne conçu sur mesure par Ayoub est devenu le cœur de notre agence. Nos agents génèrent des contrats PDF conformes en 3 clics et la direction dispose d'une visibilité comptable en temps réel absolument parfaite.",
    rating: 5,
  },
  {
    name: "Ali B.",
    role: "Propriétaire Fondateur",
    company: "Ali Garage",
    quote: "Une console de gestion simple, rapide et tactile. Mes mécaniciens en atelier l'utilisent facilement pour saisir les diagnostics et pièces changées. La facturation instantanée et le rappel automatique par SMS plaisent beaucoup à nos clients.",
    rating: 5,
  },
  {
    name: "Sara K.",
    role: "Directrice de Clientèle",
    company: "Ka3ba Agency",
    quote: "Ayoub a relevé le défi de concilier une charte graphique ultra-premium, avec beaucoup d'animations sophistiquées, et des temps de réponse instantanés de recherche. Le taux de réservation de notre site vitrine a augmenté de 45%.",
    rating: 5,
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="testimonials" className="relative py-24 border-t border-white/5 bg-zinc-950">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-semibold mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Recommandations Clients
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Ce Qu&apos;ils Disent de <span className="text-gradient-primary">Notre Collaboration</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((test, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <GlowCard className="p-8 h-full flex flex-col justify-between relative">
                {/* Quote Icon Background */}
                <Quote className="absolute right-6 top-6 w-20 h-20 text-white/2 pointer-events-none" />
                
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: test.rating }).map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  
                  {/* Testimonial Quote */}
                  <p className="text-zinc-300 text-base italic leading-relaxed mb-8 relative z-10">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {test.name}
                    </h4>
                    <p className="text-xs text-zinc-500">
                      {test.role} &mdash; <span className="text-indigo-400 font-semibold">{test.company}</span>
                    </p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
