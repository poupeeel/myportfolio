"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code, Sparkles, Terminal, Shield, Cpu } from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-dot-pattern"
    >
      {/* Background glowing gradients */}
      <div className="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Copy and CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold w-max mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Disponible pour de nouveaux projets
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Concepteur de <br className="hidden sm:inline" />
            <span className="text-gradient-primary">Solutions Web SaaS &amp; ERP</span> <br />
            d&apos;Exception.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-400 max-w-xl mb-8 leading-relaxed"
          >
            Je suis développeur Full Stack avec plus de 5 ans d&apos;expérience. Je donne vie à des plateformes complexes, performantes, sécurisées et optimisées pour le SEO.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center gap-2 group"
            >
              Voir mes projets
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-xl text-base font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              Me contacter
            </button>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/5"
          >
            <div>
              <div className="text-3xl font-extrabold text-white flex items-baseline">
                <AnimatedCounter value={5} suffix="+" />
              </div>
              <p className="text-sm text-zinc-500 mt-1">Ans d&apos;expérience</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white flex items-baseline">
                <AnimatedCounter value={50} suffix="+" />
              </div>
              <p className="text-sm text-zinc-500 mt-1">Projets livrés</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white flex items-baseline">
                <AnimatedCounter value={10} suffix="+" />
              </div>
              <p className="text-sm text-zinc-500 mt-1">Secteurs métiers</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white flex items-baseline">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <p className="text-sm text-zinc-500 mt-1">Clients satisfaits</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Editor mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.6 }}
          className="lg:col-span-5 relative"
        >
          {/* Outer glowing frame */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-20 blur-lg" />
          
          <div className="relative glass-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Editor Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/80 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                developer.tsx
              </div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Editor content */}
            <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed text-zinc-300 overflow-x-auto">
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">ayoub</span> = &#123;
              </div>
              <div className="pl-4">
                role: <span className="text-emerald-400">&quot;Lead Full Stack Developer&quot;</span>,
              </div>
              <div className="pl-4">
                experience: <span className="text-amber-500">5</span>,
              </div>
              <div className="pl-4">
                skills: [
                <span className="text-emerald-400">&quot;React&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;Next.js&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;TS&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;Tailwind&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;Laravel&quot;</span>
                ],
              </div>
              <div className="pl-4">
                focus: <span className="text-emerald-400">&quot;SaaS, ERP, CRM&quot;</span>,
              </div>
              <div className="pl-4">
                isAvailable: <span className="text-indigo-400">true</span>,
              </div>
              <div className="pl-4">
                codePhilosophy: <span className="text-emerald-400">&quot;Clean & Secure&quot;</span>
              </div>
              <div>&#125;;</div>
              
              <div className="mt-6 text-zinc-500 text-[10px]">
                {/* System status active: */}
              </div>
              <div className="mt-2 flex items-center gap-4 text-[10px] text-zinc-400">
                <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-indigo-400" /> Fast</span>
                <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-emerald-400" /> Secure</span>
                <span className="flex items-center gap-1"><Code className="w-3 h-3 text-purple-400" /> Clean</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
