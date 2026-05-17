"use client";

import {
  FaArrowUp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[300px] bg-primary/10 blur-[120px] pointer-events-none -z-10 rounded-t-[100%]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        {/* Floating Glass Dock */}
        <div className="w-full max-w-6xl glass rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 relative overflow-hidden group hover:border-primary/30 transition-colors duration-700">
          {/* Shine effect on hover */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          {/* Left: Brand Identity */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-4xl font-black tracking-tighter text-white mb-2 cursor-default">
              Ahmed Elsawaf <span className="text-primary">.</span>
            </h2>
            <p className="text-gray-400 font-light text-base md:text-lg max-w-xs">
              Front-End Developer
            </p>
          </div>

          {/* Middle: Contact Info (Socials) */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a
              href="mailto:elsawafahmed740@gmail.com"
              aria-label="Email"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-transparent text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
            >
              <FaEnvelope className="text-lg md:text-xl" />
            </a>
            <a
              href="https://wa.me/201009234199"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-transparent text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
            >
              <FaWhatsapp className="text-xl md:text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/ahmed-elsawaf-9aa3642b4"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:border-transparent text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]"
            >
              <FaLinkedin className="text-lg md:text-xl" />
            </a>
            <a
              href="https://github.com/a7med0mo3taz"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:border-transparent text-gray-300 hover:text-dark transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            >
              <FaGithub className="text-lg md:text-xl" />
            </a>
            <a
              href="https://www.facebook.com/share/1JXsV3tgGt/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-transparent text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(24,119,242,0.5)]"
            >
              <FaFacebook className="text-lg md:text-xl" />
            </a>
            <a
              href="https://www.instagram.com/a7med_mo3taz.7?igsh=MWE2ZXgwaWx4Y3VqNw=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(225,48,108,0.5)]"
            >
              <FaInstagram className="text-lg md:text-xl" />
            </a>
          </div>

          {/* Right: Back to Top Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-16 h-16 rounded-full bg-dark/50 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-transparent text-gray-300 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500" />
              <FaArrowUp className="text-2xl relative z-10 group-hover:-translate-y-2 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* Bottom Minimal Copyright */}
        <div className="mt-10 flex flex-col items-center justify-center w-full px-4 text-sm font-medium text-gray-500">
          <p>
            © {new Date().getFullYear()} Ahmed Elsawaf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
