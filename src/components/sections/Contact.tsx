"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  MapPin,
  MessageSquareShare,
} from "lucide-react";
import GlowCard from "../GlowCard";

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit comporter au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  subject: z.string().min(5, { message: "L'objet doit comporter au moins 5 caractères." }),
  message: z.string().min(10, { message: "Le message doit comporter au moins 10 caractères." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          reply_to: data.email,
          subject: data.subject,
          message: data.message,
        },
        { publicKey }
      );
      console.log("EmailJS success:", result.status, result.text);
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error: unknown) {
      // EmailJS throws a plain object { status, text } on API errors
      const ejsError = error as { status?: number; text?: string };
      console.error(
        "EmailJS error — status:",
        ejsError?.status,
        "| text:",
        ejsError?.text,
        "| raw:",
        error
      );
      setSubmitError(
        `Erreur d'envoi${ejsError?.text ? ` : ${ejsError.text}` : ""}. Contactez-moi directement par email.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="relative py-24 border-t border-white/5 bg-zinc-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Background glowing orb */}
      <div className="absolute bottom-[10%] left-[5%] w-[35rem] h-[35rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

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
            <Phone className="w-3.5 h-3.5" />
            Coordonnées &amp; Formulaire
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Lançons Votre Projet <span className="text-gradient-primary">Ensemble</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base mt-2"
          >
            Une idée ? Un besoin technique d&apos;urgence ? Laissez-moi un message, réponse sous 24h.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status card */}
            <GlowCard glowColor="rgba(99, 102, 241, 0.15)" className="p-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-white">Disponibilité : Immédiate</span>
              </div>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                Recherche des missions de développement freelance complexes (SaaS, ERP, CRM) ou opportunités CDI Senior.
              </p>
            </GlowCard>

            {/* Practical Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-zinc-900/10">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-500">Email professionnel</h4>
                  <a href="mailto:ayoubboubalgha63@gmail.com" className="text-sm font-bold text-white hover:text-indigo-400 transition-colors">
                    ayoubboubalgha63@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-zinc-900/10">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquareShare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-500">WhatsApp direct</h4>
                  <a href="https://wa.me/212682726527" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-emerald-400 transition-colors">
                    +212 6 82 72 65 27
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-zinc-900/10">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-500">Localisation & Fuseau</h4>
                  <span className="text-sm font-bold text-white">Kenitra, Maroc (GMT+1)</span>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-white/5 text-zinc-400 hover:text-white transition-all duration-300 text-sm font-semibold"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-white/5 text-zinc-400 hover:text-white transition-all duration-300 text-sm font-semibold"
              >
                <Github className="w-4 h-4 text-white" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlowCard className="p-8">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message envoyé avec succès !</h3>
                  <p className="text-zinc-400 max-w-sm">
                    Merci pour votre intérêt. Je reviens vers vous par email sous 24 heures maximum.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                      Nom / Entreprise
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className={`w-full px-4 py-3 bg-zinc-950/80 border rounded-xl text-white text-sm outline-none transition-colors ${
                        errors.name ? "border-red-500/50" : "border-white/5 focus:border-indigo-500/50"
                      }`}
                      placeholder="Jean Dupont"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                      Adresse email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className={`w-full px-4 py-3 bg-zinc-950/80 border rounded-xl text-white text-sm outline-none transition-colors ${
                        errors.email ? "border-red-500/50" : "border-white/5 focus:border-indigo-500/50"
                      }`}
                      placeholder="jean.dupont@entreprise.com"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
                    )}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                      Objet du message
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register("subject")}
                      className={`w-full px-4 py-3 bg-zinc-950/80 border rounded-xl text-white text-sm outline-none transition-colors ${
                        errors.subject ? "border-red-500/50" : "border-white/5 focus:border-indigo-500/50"
                      }`}
                      placeholder="Demande de devis pour projet SaaS"
                    />
                    {errors.subject && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.subject.message}</span>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                      Votre Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      className={`w-full px-4 py-3 bg-zinc-950/80 border rounded-xl text-white text-sm outline-none transition-colors resize-none ${
                        errors.message ? "border-red-500/50" : "border-white/5 focus:border-indigo-500/50"
                      }`}
                      placeholder="Décrivez votre idée, vos objectifs et vos contraintes..."
                    />
                    {errors.message && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>
                    )}
                  </div>

                  {/* Error message */}
                  {submitError && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                    >
                      {submitError}
                    </motion.p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.2)] disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
