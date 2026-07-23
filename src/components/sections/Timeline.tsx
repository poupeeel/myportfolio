"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Star, Milestone } from "lucide-react";

interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: "2023 - Présent",
    role: "Lead Développeur Full Stack (Freelance)",
    company: "Projets Internationaux",
    description: "Conception, développement et déploiement d'architectures web sur mesure pour des clients PME, startups et agences.",
    achievements: [
      "Développement complet du système ERP/CRM interne d'Al Moulate Immobilier",
      "Automatisation complète de la plateforme e-commerce MasterFut (gestion de clés, Stripe API)",
      "Déploiement et conteneurisation Docker d'applications métiers sur VPS sécurisés",
    ],
  },
  {
    year: "2021 - 2023",
    role: "Développeur Full Stack Senior",
    company: "Agence Digitale Premium",
    description: "Pilotage d'équipes de développement sur des projets e-commerce et ERP complexes.",
    achievements: [
      "Optimisation des temps de chargement (Lighthouse +30 points) de plateformes e-commerce critiques",
      "Conception d'APIs REST modulaires et de systèmes de cache Redis/Varnish",
      "Écriture de guides de style TypeScript et mise en place d'outils de CI/CD automatisés",
    ],
  },
  {
    year: "2019 - 2021",
    role: "Développeur Full Stack",
    company: "SaaS Startup Engine",
    description: "Développement applicatif sur un logiciel SaaS de comptabilité et de CRM interne.",
    achievements: [
      "Création de tableaux de bord financiers interactifs en React et graphiques animés",
      "Mise en place de tests unitaires et d'intégration robustes sur PHP/Laravel",
      "Intégration et maintenance d'APIs tierces complexes (passerelles bancaires, ERP clients)",
    ],
  },
  {
    year: "2018 - 2019",
    role: "Développeur Web & Intégrateur",
    company: "Web Studio",
    description: "Intégration d'interfaces responsives, sémantiques et pixel-perfect à partir de maquettes de designers.",
    achievements: [
      "Création de sites vitrines haut de gamme avec animations CSS et micro-interactions",
      "Optimisation SEO technique et balisage sémantique structuré",
      "Découpe de maquettes complexes Figma et intégration adaptative (Mobile-First)",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 border-t border-white/5 bg-zinc-900/10">
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-semibold mb-4"
          >
            <Milestone className="w-3.5 h-3.5" />
            Mon Parcours Professionnel
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Expériences &amp; <span className="text-gradient-primary">Réalisations Clés</span>
          </motion.h2>
        </div>

        {/* Timeline body */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-8 space-y-12 ml-4">
          {timelineData.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, type: "spring", stiffness: 60, delay: idx * 0.15 }}
              key={idx}
              className="relative"
            >
              {/* Bullet node on vertical line */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-indigo-500 flex items-center justify-center shadow-lg">
                <Briefcase className="w-3 h-3 text-indigo-400" />
              </div>

              {/* Box content */}
              <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/30 backdrop-blur-sm hover:border-white/10 transition-colors duration-300">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                      {item.role}
                    </h3>
                    <p className="text-sm text-indigo-400 font-medium">
                      {item.company}
                    </p>
                  </div>
                  
                  {/* Badge Year */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-300 w-max">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {item.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Achievements list */}
                <ul className="space-y-2 border-t border-white/5 pt-4">
                  {item.achievements.map((ach, achIdx) => (
                    <li key={achIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Star className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
