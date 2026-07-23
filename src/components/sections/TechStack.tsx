"use client";

import { motion } from "framer-motion";
import { Cpu, Layout, Server, Database, Cloud, Wrench } from "lucide-react";
import GlowCard from "../GlowCard";

interface TechItem {
  name: string;
  level: string;
  glow: string;
}

interface TechGroup {
  category: string;
  icon: React.ReactNode;
  items: TechItem[];
}

const techGroups: TechGroup[] = [
  {
    category: "Frontend",
    icon: <Layout className="w-5 h-5 text-blue-400" />,
    items: [
      { name: "React", level: "Expert", glow: "rgba(56, 189, 248, 0.15)" },
      { name: "Next.js", level: "Expert", glow: "rgba(255, 255, 255, 0.15)" },
      { name: "TypeScript", level: "Expert", glow: "rgba(49, 120, 198, 0.15)" },
      { name: "JavaScript", level: "Expert", glow: "rgba(247, 223, 30, 0.15)" },
      { name: "TailwindCSS", level: "Expert", glow: "rgba(56, 189, 248, 0.15)" },
      { name: "HTML5 / CSS3", level: "Expert", glow: "rgba(227, 79, 38, 0.15)" },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    items: [
      { name: "Laravel (PHP)", level: "Expert", glow: "rgba(249, 50, 44, 0.15)" },
      { name: "PHP", level: "Expert", glow: "rgba(119, 123, 179, 0.15)" },
      { name: "Node.js", level: "Avancé", glow: "rgba(63, 142, 63, 0.15)" },
      { name: "Express", level: "Avancé", glow: "rgba(255, 255, 255, 0.15)" },
      { name: "REST API", level: "Expert", glow: "rgba(99, 102, 241, 0.15)" },
    ],
  },
  {
    category: "Bases de Données",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    items: [
      { name: "MySQL", level: "Expert", glow: "rgba(0, 117, 143, 0.15)" },
      { name: "PostgreSQL", level: "Expert", glow: "rgba(49, 97, 146, 0.15)" },
      { name: "MongoDB", level: "Avancé", glow: "rgba(71, 162, 72, 0.15)" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: <Cloud className="w-5 h-5 text-cyan-400" />,
    items: [
      { name: "Vercel", level: "Expert", glow: "rgba(255, 255, 255, 0.15)" },
      { name: "VPS (Linux)", level: "Expert", glow: "rgba(245, 158, 11, 0.15)" },
      { name: "Docker", level: "Avancé", glow: "rgba(36, 150, 237, 0.15)" },
    ],
  },
  {
    category: "Outils de Travail",
    icon: <Wrench className="w-5 h-5 text-pink-400" />,
    items: [
      { name: "Git & GitHub", level: "Expert", glow: "rgba(240, 80, 50, 0.15)" },
      { name: "Figma", level: "Avancé", glow: "rgba(242, 78, 29, 0.15)" },
      { name: "Postman", level: "Expert", glow: "rgba(255, 108, 54, 0.15)" },
    ],
  },
];

export default function TechStack() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const groupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 60, damping: 15 },
    },
  };

  return (
    <section id="stack" className="relative py-24 border-t border-white/5 bg-zinc-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Glow orb */}
      <div className="absolute bottom-0 right-[20%] w-[35rem] h-[35rem] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

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
            <Cpu className="w-3.5 h-3.5" />
            Stack Technique
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Technologies Maitrisées &amp; <br />
            <span className="text-gradient-primary">Outils de Prédilection</span>
          </motion.h2>
        </div>

        {/* Tech groups layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          {techGroups.map((group, groupIdx) => (
            <motion.div
              variants={groupVariants}
              key={groupIdx}
              className="p-8 rounded-2xl border border-white/5 bg-zinc-900/10 backdrop-blur-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {group.category}
                </h3>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {group.items.map((item, itemIdx) => (
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    key={itemIdx}
                    className="h-full"
                  >
                    <GlowCard
                      glowColor={item.glow}
                      className="p-4 flex flex-col justify-center items-center text-center h-full border border-white/5 hover:border-white/10 rounded-xl"
                    >
                      <span className="text-sm font-bold text-white mb-1.5 block">
                        {item.name}
                      </span>
                      <span className="text-[9px] font-semibold tracking-wider text-indigo-400 bg-indigo-500/5 px-2 py-0.5 rounded-full border border-indigo-500/10">
                        {item.level}
                      </span>
                    </GlowCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
