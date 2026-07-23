"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quels sont vos délais typiques de livraison pour un projet web ?",
    answer: "Les délais dépendent de l'envergure. Un site vitrine premium ou une page produit prend généralement 2 à 3 semaines. Pour des projets complexes comme un ERP, un CRM sur mesure ou une plateforme SaaS multi-utilisateurs, le cycle complet (Figma, développement frontend/backend et tests d'assurance qualité) s'étend généralement sur 6 à 12 semaines.",
  },
  {
    question: "Comment assurez-vous la sécurité des paiements et des données ?",
    answer: "J'applique des normes de sécurité rigoureuses : communications chiffrées HTTPS/TLS, sanitisation systématique des entrées utilisateurs (protection XSS/CSRF/Injections SQL), mots de passe hachés avec bcrypt. Pour les paiements, j'utilise l'API Stripe avec validation stricte par webhooks cryptés, garantissant qu'aucune donnée de carte bancaire ne transite en clair sur le serveur.",
  },
  {
    question: "Puis-je suivre le développement du projet en temps réel ?",
    answer: "Tout à fait. La transparence est clé. Nous divisons le projet en jalons hebdomadaires. Je vous fournis un lien vers un environnement de test ('staging') mis à jour en continu à chaque étape validée. Vous pouvez ainsi manipuler et tester l'application au fur et à mesure de sa construction.",
  },
  {
    question: "Proposez-vous un accompagnement après le déploiement ?",
    answer: "Oui. Chaque projet inclut une garantie de support technique gratuit de 30 jours à compter du déploiement en production pour corriger tout bug technique. Au-delà, je propose des forfaits de maintenance mensuels incluant la mise à jour des dépendances, les sauvegardes régulières et l'hébergement.",
  },
  {
    question: "Êtes-vous disponible pour travailler avec mon équipe interne ?",
    answer: "Oui, je collabore régulièrement avec des agences ou des équipes de développement internes en tant que Lead Full Stack. Je m'intègre facilement dans vos process agiles, vos canaux Slack et vos flux de travail Git (pull requests, code reviews, documentation Postman).",
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 border-t border-white/5 bg-zinc-900/10">
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
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ &amp; Renseignements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Questions <span className="text-gradient-primary">Fréquentes</span>
          </motion.h2>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-white hover:text-indigo-400 transition-colors"
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-indigo-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-zinc-400 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
