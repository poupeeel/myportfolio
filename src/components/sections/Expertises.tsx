"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  GitBranch,
  Link,
  Cloud,
  Palette,
  Zap,
  Shield,
  Search,
  CheckCircle,
} from "lucide-react";
import GlowCard from "../GlowCard";

const expertises = [
  {
    icon: <Monitor className="w-6 h-6 text-blue-400" />,
    title: "Frontend Development",
    desc: "Création d'interfaces utilisateur fluides, interactives et responsives. Maîtrise avancée des frameworks modernes pour des expériences riches.",
    bullets: ["Next.js & React", "TypeScript & ES6+", "Tailwind CSS", "Framer Motion"],
    glow: "rgba(59, 130, 246, 0.12)",
  },
  {
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    title: "Backend Development",
    desc: "Conception de serveurs robustes et sécurisés capables de gérer de larges volumes de données et des transactions complexes.",
    bullets: ["Laravel (PHP)", "Node.js & Express", "Autentication JWT/Session", "Background Jobs"],
    glow: "rgba(16, 185, 129, 0.12)",
  },
  {
    icon: <GitBranch className="w-6 h-6 text-purple-400" />,
    title: "Architecture logicielle",
    desc: "Modélisation de structures de données évolutives, de design patterns adaptés et de flux de données optimisés pour éviter la dette technique.",
    bullets: ["Clean Architecture", "Schémas SQL/NoSQL", "Design Patterns", "Modularité"],
    glow: "rgba(168, 85, 247, 0.12)",
  },
  {
    icon: <Link className="w-6 h-6 text-indigo-400" />,
    title: "Conception d'API & Intégrations",
    desc: "Développement d'API RESTful documentées et rapides. Intégration de passerelles de paiement, CRM et services tiers complexes.",
    bullets: ["REST APIs", "Stripe & PayPal", "Webhooks", "Postman & Swagger"],
    glow: "rgba(99, 102, 241, 0.12)",
  },
  {
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    title: "Cloud & Déploiement",
    desc: "Configuration d'environnements de production robustes, conteneurisation des services et automatisation des déploiements.",
    bullets: ["VPS & Linux", "Docker", "Vercel & Netlify", "CI/CD GitHub Actions"],
    glow: "rgba(6, 182, 212, 0.12)",
  },
  {
    icon: <Palette className="w-6 h-6 text-pink-400" />,
    title: "UI/UX Design",
    desc: "Sensibilité produit poussée. Prototypage interactif centré sur la conversion utilisateur, le respect des grilles et de la cohérence visuelle.",
    bullets: ["Figma & Design Systems", "Wireframing", "Micro-interactions", "Accessibilité (WCAG)"],
    glow: "rgba(236, 72, 153, 0.12)",
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Optimisation Performance",
    desc: "Réduction drastique des temps de chargement. Stratégies de cache avancées, optimisation des requêtes de base de données.",
    bullets: ["SSR, SSG, ISR", "Lighthouse Score >95", "Lazy Loading & Cache", "Query Optimization"],
    glow: "rgba(234, 179, 8, 0.12)",
  },
  {
    icon: <Shield className="w-6 h-6 text-red-400" />,
    title: "Sécurité Applicative",
    desc: "Protection des applications contre les vulnérabilités courantes. Sanitisation des entrées utilisateur et chiffrement des données sensibles.",
    bullets: ["OWASP Top 10", "Chiffrement AES/bcrypt", "Protection XSS/CSRF", "Gestion des rôles"],
    glow: "rgba(239, 68, 68, 0.12)",
  },
  {
    icon: <Search className="w-6 h-6 text-teal-400" />,
    title: "Optimisation SEO",
    desc: "Indexation maximale par les moteurs de recherche grâce à une structure de page sémantique, des balises meta dynamiques et un sitemap rigoureux.",
    bullets: ["Sémantique HTML5", "Balises JSON-LD", "OpenGraph & Twitter Cards", "Core Web Vitals"],
    glow: "rgba(20, 184, 166, 0.12)",
  },
];

export default function Expertises() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="expertises" className="relative py-24 border-t border-white/5 bg-zinc-900/20">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-semibold mb-4"
          >
            <Zap className="w-3.5 h-3.5" />
            Mes Domaines d&apos;Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Une Maîtrise Complète de la <br />
            <span className="text-gradient-primary">Chaîne de Valeur Technique</span>
          </motion.h2>
        </div>

        {/* Expertises Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertises.map((exp, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <GlowCard glowColor={exp.glow} className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-950/80 border border-white/5 flex items-center justify-center mb-6">
                    {exp.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {exp.desc}
                  </p>
                </div>
                
                <ul className="space-y-2 border-t border-white/5 pt-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
