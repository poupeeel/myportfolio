"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Expertises", href: "#expertises" },
  { label: "Projets", href: "#projects" },
  { label: "Parcours", href: "#timeline" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll background
      setScrolled(window.scrollY > 20);

      // Check active section
      const sections = navLinks.map((link) => link.href.substring(1));
      sections.push("contact"); // include contact section

      let currentSection = "hero";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-zinc-950/60 backdrop-blur-md border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2 group font-semibold text-lg tracking-tight text-white"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform duration-200">
              A
            </div>
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent font-medium">
              Ayoub<span className="text-indigo-400 font-bold">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/40 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="relative inline-flex items-center justify-center gap-1 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1">
                Me contacter
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900/50 border border-white/5"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 pt-24 px-6 bg-zinc-950/98 md:hidden flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                    }}
                    className={`text-2xl font-semibold py-2 transition-colors ${
                      isActive ? "text-indigo-400" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 border-t border-white/10 pt-6"
            >
              <p className="text-zinc-500 text-sm">Disponibilité : Freelance & CDI</p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="w-full text-center py-4 rounded-xl font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center gap-2"
              >
                Me contacter
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
