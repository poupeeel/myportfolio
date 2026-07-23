"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Palette,
  Code2,
  CheckSquare,
  Rocket,
  ShieldAlert,
  GitCommit,
} from "lucide-react";
import GlowCard from "../GlowCard";

interface ProcessStep {
  step: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  glow: string;
}

const steps: ProcessStep[] = [
  {
    step: "01",
    icon: <Compass className="w-5 h-5 text-indigo-400" />,
    title: "Découverte",
    desc: "Analyse approfondie de votre métier, cartographie des flux de travail, rédaction des user stories et cadrage précis des spécifications techniques.",
    glow: "rgba(99, 102, 241, 0.12)",
  },
  {
    step: "02",
    icon: <Palette className="w-5 h-5 text-pink-400" />,
    title: "Design & UX/UI",
    desc: "Création d'un design system cohérent, maquettage haute fidélité sur Figma et modélisation de parcours utilisateur fluides axés conversion.",
    glow: "rgba(236, 72, 153, 0.12)",
  },
  {
    step: "03",
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
    title: "Développement",
    desc: "Écriture d'un code TypeScript propre et typé, séparation stricte frontend/backend, et architecture de base de données normalisée.",
    glow: "rgba(59, 130, 246, 0.12)",
  },
  {
    step: "04",
    icon: <CheckSquare className="w-5 h-5 text-yellow-400" />,
    title: "Tests & Qualité",
    desc: "Audit de sécurité complet, tests fonctionnels, validation de l'accessibilité responsive, et optimisation du temps de chargement global.",
    glow: "rgba(234, 179, 8, 0.12)",
  },
  {
    step: "05",
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    title: "Déploiement",
    desc: "Configuration serveur VPS sécurisé ou cloud provider, conteneurisation Docker, certificats SSL et déploiement continu automatisé.",
    glow: "rgba(16, 185, 129, 0.12)",
  },
  {
    step: "06",
    icon: <ShieldAlert className="w-5 h-5 text-red-400" />,
    title: "Suivi & Maintenance",
    desc: "Supervision des logs, correctifs de sécurité des paquets de dépendances, et ajustements ergonomiques réguliers basés sur les retours d'usage.",
    glow: "rgba(239, 68, 68, 0.12)",
  },
];

export default function Process() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 60, damping: 15 },
    },
  };

  return (
    <section id="process" className="relative py-24 border-t border-white/5 bg-zinc-900/10">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      
      {/* Background glow lines */}
      <div className="absolute top-[30%] left-[20%] w-[30rem] h-[30rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

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
            <GitCommit className="w-3.5 h-3.5" />
            Méthodologie de Travail
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Un Processus Structuré pour un <br />
            <span className="text-gradient-primary">Résultat Professionnel</span>
          </motion.h2>
        </div>

        {/* Process Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <GlowCard glowColor={step.glow} className="p-8 h-full flex flex-col justify-between">
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-zinc-950/80 border border-white/5 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="text-4xl font-extrabold text-white/10 font-mono tracking-tighter">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
