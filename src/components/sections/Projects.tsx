"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Shield,
  TrendingUp,
  Cpu,
  ShoppingBag,
  Home,
  Wrench,
  Compass,
} from "lucide-react";
import GlowCard from "../GlowCard";

interface ProjectType {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon: React.ReactNode;
  url: string;
  adminUrl?: string;
  techs: string[];
  description: string;
  challenge: string;
  solution: string;
  result: string;
  visualBg: string; // CSS gradient class
  visualElement: React.ReactNode; // Interactive UI mock
}

export default function Projects() {
  const [activeProjectTab, setActiveProjectTab] = useState<Record<string, "about" | "challenge" | "solution">>({});

  const projects: ProjectType[] = [
    {
      id: "masterfut",
      title: "MasterFut",
      subtitle: "E-Commerce de Produits Digitaux",
      category: "E-Commerce & Automation",
      icon: <ShoppingBag className="w-5 h-5 text-indigo-400" />,
      url: "https://masterfut.com",
      techs: ["Next.js", "Node.js", "Redis", "Stripe API", "Tailwind CSS"],
      description: "Plateforme e-commerce spécialisée dans la vente instantanée de produits digitaux avec comptes utilisateurs, passerelles de paiement, dashboard client et administration complète.",
      challenge: "Garantir la livraison automatique et instantanée de codes/clés d'accès en situation de fort trafic concurrent, tout en évitant les double-achats de clés uniques et la fraude par cartes bancaires.",
      solution: "Mise en place d'un système de file d'attente Redis pour sérialiser les achats de clés uniques, liaison avec Stripe Webhooks hautement sécurisés et un moteur de distribution asynchrone sécurisé par jetons d'accès temporaires.",
      result: "Plus de 100 000 transactions automatisées sans aucune collision de stock de clés, temps moyen de livraison de 2 secondes après paiement, et réduction du taux de litige pour fraude à < 0.1%.",
      visualBg: "from-indigo-950/40 to-slate-900/40 border-indigo-500/10",
      visualElement: (
        <div className="w-full h-full flex flex-col justify-between p-6 text-[10px] font-mono text-zinc-400">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-white font-bold text-xs">MasterFut Dashboard</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-sans font-semibold">Live</span>
          </div>
          <div className="space-y-2 my-4">
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span>Clés en stock :</span>
              <span className="text-white">4,289 pcs</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span>Commandes / min :</span>
              <span className="text-white">12 transactions</span>
            </div>
            <div className="flex justify-between">
              <span>Queue status :</span>
              <span className="text-indigo-400">Idle (0 ms delay)</span>
            </div>
          </div>
          <div className="h-12 bg-indigo-500/5 rounded border border-indigo-500/10 flex items-center justify-around font-sans">
            <div className="text-center">
              <div className="text-xs font-bold text-white">4.8k €</div>
              <div className="text-[8px] text-zinc-500">Ventes aujourd&apos;hui</div>
            </div>
            <div className="w-[1px] h-6 bg-white/5" />
            <div className="text-center">
              <div className="text-xs font-bold text-white">100%</div>
              <div className="text-[8px] text-zinc-500">Automatisé</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "almoulate",
      title: "Al Moulate Immobilier",
      subtitle: "Plateforme & ERP Interne Immobilier",
      category: "SaaS & ERP",
      icon: <Home className="w-5 h-5 text-emerald-400" />,
      url: "https://www.almoulate.com/",
      adminUrl: "https://new.almoulateimmobilier.com/",
      techs: ["Laravel", "MySQL", "Tailwind CSS", "PDF Engine", "Charts.js"],
      description: "Site vitrine professionnel couplé à une plateforme interne (ERP) complète pour gérer la comptabilité, les ventes de biens, les contrats légaux, les relances clients et le reporting financier.",
      challenge: "Centraliser les actions comptables et juridiques d'agents indépendants tout en évitant les erreurs de saisie financière et la perte de temps liée à la rédaction manuelle des contrats de vente.",
      solution: "Développement d'un ERP sous Laravel sécurisé avec gestion fine des rôles (RBAC), base de données relationnelle MySQL normalisée, et moteur de génération automatique de contrats PDF basés sur des templates dynamiques.",
      result: "Temps administratif de rédaction des contrats divisé par 10 (de 45 min à 3 min par bien), visibilité financière à 100% en temps réel pour la direction, et zéro divergence d'écritures comptables constatée.",
      visualBg: "from-emerald-950/40 to-slate-900/40 border-emerald-500/10",
      visualElement: (
        <div className="w-full h-full flex flex-col justify-between p-6 text-[10px] font-mono text-zinc-400">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-white font-bold text-xs">Al Moulate ERP</span>
            <span className="text-zinc-500">v2.4.1</span>
          </div>
          <div className="space-y-1.5 my-3">
            <div className="h-4 bg-white/5 rounded px-2 flex items-center justify-between">
              <span>Contrat #2026-921</span>
              <span className="text-emerald-400 text-[8px] font-sans font-semibold">Généré PDF</span>
            </div>
            <div className="h-4 bg-white/5 rounded px-2 flex items-center justify-between">
              <span>Biens sous mandat</span>
              <span className="text-white">142 unités</span>
            </div>
            <div className="h-4 bg-white/5 rounded px-2 flex items-center justify-between">
              <span>Rapprochement Bancaire</span>
              <span className="text-emerald-400 text-[8px] font-sans font-semibold">100% Conforme</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center font-sans">
            <div className="bg-zinc-950 border border-white/5 p-1.5 rounded">
              <div className="text-[8px] text-zinc-500">Commissions</div>
              <div className="text-xs font-bold text-emerald-400">+18.5%</div>
            </div>
            <div className="bg-zinc-950 border border-white/5 p-1.5 rounded">
              <div className="text-[8px] text-zinc-500">Ventes Q1</div>
              <div className="text-xs font-bold text-white">4.2M €</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "aligarage",
      title: "Ali Garage",
      subtitle: "Système de Gestion de Garage (ERP & CRM)",
      category: "CRM & ERP",
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      url: "https://aligarage.site/",
      techs: ["React", "PHP", "PostgreSQL", "Tailwind CSS", "State Machine"],
      description: "Application complète de gestion de garage intégrant le suivi des véhicules, le diagnostic des réparations, la comptabilité, la facturation légale et l'historique d'entretien par client.",
      challenge: "Créer une interface robuste, ultra-simple et rapide pour des mécaniciens en atelier (peu enclins aux outils complexes) et automatiser la facturation des pièces détachées fluctuantes.",
      solution: "Interface tablette tactile ultra-épurée avec boutons géants, moteur de recherche instantané PostgreSQL sur les immatriculations et les clients, et automate d'état React guidant le mécanicien de l'entrée du véhicule à la sortie.",
      result: "Temps d'encaissement et de facturation divisé par 4, aucun oubli de pièces facturées en atelier, et amélioration de la fidélisation client de 25% grâce aux alertes SMS automatiques pour les révisions.",
      visualBg: "from-amber-950/40 to-slate-900/40 border-amber-500/10",
      visualElement: (
        <div className="w-full h-full flex flex-col justify-between p-6 text-[10px] font-mono text-zinc-400">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-white font-bold text-xs">Garage Console</span>
            <span className="text-amber-400 font-sans font-semibold">Atelier Actif</span>
          </div>
          <div className="my-4 flex items-center justify-between gap-2">
            <div className="flex-1 bg-zinc-950 border border-white/5 p-2 rounded">
              <div className="text-[8px] text-zinc-500">Véhicules Entrants</div>
              <div className="text-sm font-extrabold text-white mt-0.5">8</div>
            </div>
            <div className="flex-1 bg-zinc-950 border border-white/5 p-2 rounded">
              <div className="text-[8px] text-zinc-500">Factures du jour</div>
              <div className="text-sm font-extrabold text-amber-400 mt-0.5">14</div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[8px] text-zinc-500 bg-white/5 p-1 rounded">
            <span>Dernier diagnostic : BMW E90 - Turbo</span>
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          </div>
        </div>
      ),
    },
    {
      id: "ka3ba",
      title: "Ka3ba",
      subtitle: "Agence de Voyage Premium & Booking Platform",
      category: "Voyage & Booking SaaS",
      icon: <Compass className="w-5 h-5 text-indigo-400" />,
      url: "https://ka3ba.com",
      adminUrl: "https://app.ka3ba.com",
      techs: ["Next.js", "Framer Motion", "Node.js", "PostgreSQL", "Docker"],
      description: "Site vitrine haut de gamme et application interne de réservation touristique de luxe. Intègre la gestion des réservations hôtelières et aériennes, le CRM client et le suivi de facturation.",
      challenge: "Proposer un design ultra-fluide reflétant l'image premium de la marque (animations complexes, fluidité absolue) sans sacrifier le temps de chargement des informations de recherche complexes.",
      solution: "Next.js avec Server Components pour le rendu instantané, Framer Motion pour des transitions fluides inter-pages et une base PostgreSQL optimisée avec indexation géographique pour la recherche rapide de destinations.",
      result: "Augmentation du taux de conversion en ligne de 45%, taux de rebond divisé par deux grâce aux performances accrues, et gestion automatisée des réservations sans aucun doublon.",
      visualBg: "from-indigo-950/40 to-slate-900/40 border-indigo-500/10",
      visualElement: (
        <div className="w-full h-full flex flex-col justify-between p-6 text-[10px] font-mono text-zinc-400">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-white font-bold text-xs">Ka3ba Bookings</span>
            <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[8px] font-sans font-semibold">Premium API</span>
          </div>
          <div className="space-y-2 my-4">
            <div className="flex justify-between items-center">
              <span>Dubai VIP Pack</span>
              <span className="text-emerald-400">Confirmé</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Maldives Retreat</span>
              <span className="text-emerald-400">Confirmé</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-[85%]" />
            </div>
          </div>
          <div className="flex justify-between text-[8px] text-zinc-500">
            <span>Quota API hôtels : 98% OK</span>
            <span>Client Satisfaction: 4.9/5</span>
          </div>
        </div>
      ),
    },
  ];

  const getTabLabel = (tab: "about" | "challenge" | "solution") => {
    switch (tab) {
      case "about":
        return "À propos";
      case "challenge":
        return "Le Challenge";
      case "solution":
        return "La Solution & Résultat";
    }
  };

  return (
    <section id="projects" className="relative py-24 border-t border-white/5 bg-zinc-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
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
            <ExternalLink className="w-3.5 h-3.5" />
            Réalisations &amp; Cas Pratiques
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Des Projets Concrets à Fort <br />
            <span className="text-gradient-primary">Impact Business</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base mt-2"
          >
            Cliquez sur les onglets de chaque projet pour découvrir le challenge technique résolu.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj, idx) => {
            const currentTab = activeProjectTab[proj.id] || "about";
            const setTab = (tab: "about" | "challenge" | "solution") => {
              setActiveProjectTab((prev) => ({ ...prev, [proj.id]: tab }));
            };

            return (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 50, damping: 15, delay: idx * 0.1 }}
                key={proj.id}
                className="flex flex-col"
              >
                <GlowCard className="p-0 overflow-hidden flex flex-col h-full flex-1">
                  {/* Top Header visual area */}
                  <div className={`relative h-64 bg-gradient-to-br ${proj.visualBg} border-b border-white/5 flex items-center justify-center overflow-hidden`}>
                    {/* Dark translucent overlay */}
                    <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-[2px]" />
                    
                    {/* Simulated Interface Graphic */}
                    <div className="relative w-[80%] h-[75%] rounded-xl bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                      {proj.visualElement}
                    </div>
                  </div>

                  {/* Body Content area */}
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Project Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            {proj.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white leading-tight">
                              {proj.title}
                            </h3>
                            <p className="text-xs text-zinc-500 font-medium">
                              {proj.category}
                            </p>
                          </div>
                        </div>
                        
                        {/* Links */}
                        <div className="flex gap-2.5">
                          {proj.adminUrl && (
                            <a
                              href={proj.adminUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 rounded-lg border border-white/5 bg-zinc-900/60 text-zinc-400 hover:text-white text-xs transition-colors duration-200"
                            >
                              App/Admin
                            </a>
                          )}
                          <a
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 text-xs flex items-center gap-1 transition-all duration-200"
                          >
                            Site
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {proj.techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-white/5 text-[10px] font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Interactive Tabs */}
                      <div className="flex border-b border-white/5 mb-6 text-xs font-semibold gap-2">
                        {(["about", "challenge", "solution"] as const).map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setTab(tab)}
                            className={`pb-2 relative px-2 transition-colors duration-200 ${
                              currentTab === tab ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                            }`}
                          >
                            {currentTab === tab && (
                              <motion.div
                                layoutId={`projectTabBorder-${proj.id}`}
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500"
                              />
                            )}
                            {getTabLabel(tab)}
                          </button>
                        ))}
                      </div>

                      {/* Tab Content Display */}
                      <div className="min-h-[140px] text-sm text-zinc-300 leading-relaxed mb-6">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentTab}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.15 }}
                          >
                            {currentTab === "about" && (
                              <p>{proj.description}</p>
                            )}
                            
                            {currentTab === "challenge" && (
                              <div className="space-y-2">
                                <div className="flex items-center gap-1 text-red-400 font-semibold text-xs">
                                  <Shield className="w-3.5 h-3.5" /> Le Défi Technique
                                </div>
                                <p className="text-zinc-300">{proj.challenge}</p>
                              </div>
                            )}

                            {currentTab === "solution" && (
                              <div className="space-y-4">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-1 text-indigo-400 font-semibold text-xs">
                                    <Cpu className="w-3.5 h-3.5" /> Résolution Technique
                                  </div>
                                  <p className="text-zinc-300">{proj.solution}</p>
                                </div>
                                <div className="space-y-1 border-t border-white/5 pt-2">
                                  <div className="flex items-center gap-1 text-emerald-400 font-semibold text-xs">
                                    <TrendingUp className="w-3.5 h-3.5" /> Résultat Métier (ROI)
                                  </div>
                                  <p className="text-zinc-300 font-medium text-white">{proj.result}</p>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
