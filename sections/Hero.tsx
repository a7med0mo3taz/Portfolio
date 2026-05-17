"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact } from "react-icons/fa";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const floatVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for parallax
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  // Transforms for different layers
  const backgroundX = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const backgroundY = useTransform(smoothY, [-0.5, 0.5], [-50, 50]);

  const shapesX = useTransform(smoothX, [-0.5, 0.5], [40, -40]);
  const shapesY = useTransform(smoothY, [-0.5, 0.5], [40, -40]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Dynamic Animated Glowing Background with Parallax */}
      <motion.div
        style={{ x: backgroundX, y: backgroundY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-primary/10 blur-[130px] -z-10 pointer-events-none"
      />

      {/* Floating Ambient Shapes with Parallax */}
      <motion.div
        style={{ x: shapesX, y: shapesY }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 45, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md"
        />
        <motion.div
          animate={{ y: [0, 40, 0], rotate: [0, -45, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full border border-secondary/30 bg-secondary/5 backdrop-blur-md"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
        />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative">
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-3/5 text-center lg:text-left pt-10 lg:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="inline-block px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium tracking-wide uppercase mb-6 text-sm backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white"
          >
            Hi, I&apos;m Ahmed Elsawaf
            <br />
            <span className="text-gradient drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              Front-End Developer
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            I craft modern, premium, and interactive web experiences with a
            focus on performance, scalable architecture, and stunning visual
            design.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-5 justify-center lg:justify-start items-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-primary text-dark font-bold hover:bg-white transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="glass px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 hover:border-white/40 transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center lg:justify-start gap-6"
          >
            {[
              {
                icon: FaGithub,
                href: "https://github.com/a7med0mo3taz",
                hover:
                  "hover:text-white hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
                label: "GitHub Profile",
              },
              {
                icon: FaLinkedin,
                href: "https://linkedin.com/in/ahmed-elsawaf-9aa3642b4",
                hover:
                  "hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:shadow-[0_0_20px_rgba(0,119,181,0.3)]",
                label: "LinkedIn Profile",
              },
              {
                icon: FaEnvelope,
                href: "mailto:elsawafahmed740@gmail.com",
                hover:
                  "hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
                label: "Email Contact",
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-12 h-12 flex items-center justify-center rounded-full glass text-gray-400 transition-all duration-300 ${social.hover}`}
              >
                <social.icon className="text-xl" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual / Image Profile */}
        <motion.div
          className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="relative group w-[320px] h-[420px] md:w-[420px] md:h-[540px] xl:w-[460px] xl:h-[600px]"
            variants={floatVariants}
            animate="animate"
          >
            {/* Glowing borders & backdrop with pulse */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[2.5rem] blur-2xl group-hover:blur-3xl group-hover:opacity-80 transition-all duration-700"
            />
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/20 bg-dark/40 backdrop-blur-md z-10" />

            {/* The Image Container */}
            <div className="absolute inset-3 rounded-[2rem] overflow-hidden z-20 border border-white/10 bg-dark/80 group-hover:border-primary/50 transition-colors duration-700">
              <Image
                src="/assets/profile.jpg"
                alt="Ahmed Elsawaf - Front-End Developer Portrait"
                fill
                className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                priority
              />
              {/* Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent opacity-90" />
            </div>

            {/* Floating UI Elements over the image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -left-6 md:-left-16 top-45 md:top-40 z-30 glass px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 shadow-[0_15px_40px_rgba(0,0,0,0.6)] border-white/20"
            >
              <div className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
              </div>
              <span className="text-xs md:text-sm font-bold text-white tracking-wide">
                Available for work
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -right-4 md:-right-12 bottom-20 md:bottom-28 z-30 glass px-3 py-2 md:px-5 md:py-4 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/20 backdrop-blur-xl group"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-md animate-pulse" />
                <FaReact className="text-lg md:text-2xl text-primary animate-[spin_8s_linear_infinite]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-base font-extrabold text-white leading-tight tracking-wide">
                  React & Next.js
                </span>
                <span className="text-[8px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5 md:mt-1">
                  Developer
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
