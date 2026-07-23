"use client";

import { motion } from "framer-motion";
import { User, ShieldCheck, Zap, HeartHandshake, Award } from "lucide-react";
import GlowCard from "../GlowCard";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 60, damping: 15 },
    },
  };

  const advantages = [
    {
      icon: <Award className="w-6 h-6 text-indigo-400" />,
      title: "Double Expertise UI/UX & Code",
      desc: "Je ne me contente pas d'intégrer des maquettes. Je conçois des interfaces engageantes, ergonomiques, puis je développe le code robuste qui les fait tourner.",
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: "Performance & SEO d'Elite",
      desc: "Vos applications chargent instantanément. J'optimise le Server Side Rendering (SSR), les images, et le balisage sémantique pour dominer Google.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Sécurité & Robustesse",
      desc: "De la conception des bases de données à la gestion des transactions, j'applique les meilleures pratiques de sécurité (OWASP, chiffrement, sanitisation).",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-400" />,
      title: "Engagement Business",
      desc: "Je comprends les besoins de votre entreprise. Mon but est de livrer un produit rentable, évolutif et qui résout vos problématiques opérationnelles réelles.",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden border-t border-white/5 bg-zinc-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-medium mb-4"
          >
            <User className="w-3.5 h-3.5" />
            Mon Histoire &amp; Ma Vision
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Transformer des Idées Complexes en <br />
            <span className="text-gradient-primary">Produits Digitaux D&apos;Exception</span>
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="lg:col-span-6 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed"
          >
            <p className="font-semibold text-white text-xl">
              Bonjour, je suis Ayoub.
            </p>
            <p>
              Depuis plus de 5 ans, j&apos;accompagne les entreprises, startups et freelances dans la création d&apos;outils performants : du site e-commerce dynamique au système ERP/CRM interne sur mesure.
            </p>
            <p>
              Ma philosophie de travail repose sur trois piliers : <strong>l&apos;indépendance, la transparence et l&apos;excellence technique</strong>. Je maîtrise toute la chaîne de production, de l&apos;idéation avec Figma au déploiement automatisé sur VPS ou cloud provider.
            </p>
            <p>
              Travailler avec moi, c&apos;est s&apos;assurer d&apos;avoir un interlocuteur unique qui comprend vos enjeux métiers et traduit vos flux opérationnels en applications ultra-rapides et sécurisées.
            </p>
          </motion.div>

          {/* Right Column: Why Work With Me Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {advantages.map((adv, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <GlowCard className="p-6 h-full flex flex-col justify-start">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    {adv.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {adv.desc}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
