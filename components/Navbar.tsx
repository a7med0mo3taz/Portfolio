"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { RESUME_DRIVE_URL } from "@/constants/resume";

const navLinks = [
  { name: "Home", href: "#home", icon: FaHome },
  { name: "About", href: "#about", icon: FaUser },
  { name: "Skills", href: "#skills", icon: FaCode },
  { name: "Projects", href: "#projects", icon: FaBriefcase },
  { name: "Contact", href: "#contact", icon: FaEnvelope },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection based on scroll position
      const sections = navLinks.map((link) => link.name.toLowerCase());
      const current = sections.find((section) => {
        const el = document.getElementById(
          section === "home" ? "home" : section,
        );
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -200 && rect.top <= 300;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.charAt(0).toUpperCase() + current.slice(1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header (Floating Glass Pill) */}
      <header
        className={`fixed z-50 transition-all duration-500 hidden lg:flex items-center justify-between ${
          scrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl px-8 py-4 glass rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 bg-dark/60 backdrop-blur-xl"
            : "top-0 left-0 right-0 w-full px-12 py-6 bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          href="#home"
          className={`font-bold tracking-tighter transition-all duration-300 ${scrolled ? "text-xl" : "text-2xl"}`}
        >
          Ahmed Elsawaf <span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="flex items-center gap-10" aria-label="Desktop Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.name)}
              className="relative text-sm font-semibold tracking-wide transition-colors group"
            >
              <span
                className={
                  activeSection === link.name
                    ? "text-white"
                    : "text-gray-400 group-hover:text-white"
                }
              >
                {link.name}
              </span>

              {/* Animated Underline */}
              {activeSection === link.name && (
                <motion.div
                  layoutId="desktop-active-nav"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Resume Action */}
        <a
          href={RESUME_DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] flex items-center justify-center ${
            scrolled
              ? "px-6 py-2 text-sm bg-primary text-dark hover:bg-white"
              : "px-6 py-2.5 text-sm border border-primary/50 text-white hover:bg-primary hover:text-dark hover:border-transparent"
          }`}
        >
          Resume
        </a>
      </header>

      {/* Mobile Header */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 z-40 px-5 transition-all duration-300 flex justify-between items-center ${scrolled ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-3" : "py-5"}`}
      >
        <Link href="#home" className="text-xl font-bold tracking-tighter">
          Ahmed Elsawaf <span className="text-primary">.</span>
        </Link>
        <a
          href={RESUME_DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 text-xs font-bold rounded-full bg-primary text-dark shadow-[0_0_10px_rgba(6,182,212,0.4)] hover:bg-white transition-colors"
        >
          Resume
        </a>
      </div>

      {/* Mobile Bottom Dock (Floating iOS Style) */}
      <nav aria-label="Mobile Navigation" className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-[100]">
        <div className="bg-[#0f1115]/90 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex justify-between items-center shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                aria-label={`Navigate to ${link.name}`}
                className="relative flex flex-col items-center justify-center w-14 h-14 z-10"
              >
                {/* Active Indicator Bubble */}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-bubble"
                    className="absolute -top-4 w-12 h-12 bg-dark rounded-full shadow-lg border-4 border-[#050505] flex items-center justify-center -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    {/* Inner glowing core for the popped up active icon */}
                    <div className="absolute inset-0 bg-primary/20 rounded-full" />
                  </motion.div>
                )}

                {/* Icon */}
                <Icon
                  className={`text-xl transition-all duration-300 ${isActive ? "text-primary -translate-y-5" : "text-gray-400"}`}
                />

                {/* Text Label */}
                <span
                  className={`text-[10px] font-semibold transition-all duration-300 absolute bottom-1 ${isActive ? "opacity-100 text-primary translate-y-0" : "opacity-100 text-gray-500"}`}
                >
                  {isActive ? "•" : link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
