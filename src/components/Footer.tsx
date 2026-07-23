"use client";

import { useEffect, useState } from "react";
import { MessageSquareShare, Mail, Cpu } from "lucide-react";

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

export default function Footer() {
  const [responseTime, setResponseTime] = useState(12);

  useEffect(() => {
    // Simulate real-time backend performance metrics
    const interval = setInterval(() => {
      setResponseTime(Math.floor(Math.random() * 8) + 8); // fluctuates between 8ms and 15ms
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-zinc-950 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & description */}
          <div className="md:col-span-2 space-y-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              className="inline-flex items-center gap-2 font-semibold text-lg text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Ayoub<span className="text-indigo-400 font-bold">.dev</span>
              </span>
            </a>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
              Développeur Full Stack Senior spécialisé dans la conception de plateformes SaaS, ERP, CRM et e-commerce haut de gamme.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Plan du site</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  À propos de moi
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  Projets récents
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("stack");
                  }}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  Stack Technique
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  Me contacter
                </a>
              </li>
            </ul>
          </div>

          {/* Performance & Status */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Statut Technique</h4>
            
            <div className="flex items-center gap-2 p-3 rounded-lg bg-zinc-900/50 border border-white/5 w-max">
              <Cpu className="w-4 h-4 text-emerald-400 animate-pulse" />
              <div className="text-[10px] font-mono text-zinc-400">
                Latence API : <span className="text-emerald-400 font-bold">{responseTime}ms</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Hébergé sur Vercel Edge Network</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & socials */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {currentYear} Ayoub.dev. Tous droits réservés. Code ultra-propre rédigé sous Next.js 15.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:ayoubboubalgha63@gmail.com"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayoub-boubalgha-b55434244/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/poupeeel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/212682726527"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="WhatsApp"
            >
              <MessageSquareShare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
