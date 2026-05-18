"use client";

import { motion, useInView, useSpring, useTransform, Variants } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaCode } from "react-icons/fa";
import { useEffect, useRef } from "react";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "tween", ease: "easeOut", duration: 0.5 } 
  },
};

const statVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", ease: "easeOut", duration: 0.4 }
  }
};

// Animated Counter Component
function AnimatedCounter({ value, duration = 2, suffix = "" }: { value: number, duration?: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000
  });
  
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className="flex items-center justify-center">
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export default function About() {
  const stats = [
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Projects Completed", value: 10, suffix: "+" },
    { label: "Certificates Earned", value: 4, suffix: "" },
    { label: "Technologies", value: 15, suffix: "+" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      
      {/* Immersive Ambient Background Lights (Hidden on mobile) */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-1/4 right-0 w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none gpu-accelerated" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="hidden md:block absolute bottom-1/4 left-0 w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[90px] -z-10 pointer-events-none gpu-accelerated" 
      />

      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <motion.div 
          className="mb-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
            About <span className="text-gradient drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Me</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)]" />
        </motion.div>

        {/* Premium Content Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Professional Profile */}
          <motion.div variants={cardVariants} className="glass p-10 md:p-14 rounded-[3rem] flex flex-col justify-center relative overflow-hidden group hover:border-primary/40 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:border-primary/30 transition-colors">
                  <FaCode className="text-3xl text-primary" />
                </div>
                <h3 className="text-4xl font-extrabold text-white tracking-tight">Who I Am</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-xl font-light mb-6">
                I am a graduated <strong className="text-white font-medium">Front-End Developer</strong> with strong expertise in modern web technologies including <strong className="text-primary font-medium">React.js, Next.js, Tailwind CSS, and TypeScript</strong>.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                I specialize in building responsive, accessible, and multilingual applications with a focus on performance optimization and clean, maintainable code. I am a fast learner and an adaptable team player, with a proven ability to translate complex business needs into highly intuitive, premium user experiences.
              </p>
            </div>
          </motion.div>

          {/* Education & Achievements Column */}
          <motion.div variants={containerVariants} className="flex flex-col gap-10">
            
            {/* Education Card */}
            <motion.div variants={cardVariants} className="glass p-8 md:p-10 rounded-[2.5rem] flex flex-col relative overflow-hidden group hover:border-white/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shadow-inner">
                    <FaGraduationCap className="text-2xl text-secondary drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
                </div>
                
                <h4 className="text-white font-semibold text-xl leading-tight mb-2">Bachelor&apos;s Degree</h4>
                <p className="text-gray-300 text-base leading-relaxed mb-1">Tanta Institute of Engineering & Technology</p>
                <p className="text-gray-500 text-sm">Specialization: Communications & Computers</p>
                
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-widest uppercase border border-secondary/20">Graduated</span>
                </div>
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div variants={cardVariants} className="glass p-8 md:p-10 rounded-[2.5rem] flex flex-col relative overflow-hidden group hover:border-primary/40 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex-1">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-inner">
                    <FaCertificate className="text-2xl text-primary drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Main Certifications</h3>
                </div>
                
                <h4 className="text-white font-semibold text-xl leading-tight mb-2">Front-End Web Development</h4>
                <p className="text-gray-300 text-base leading-relaxed">Route IT Training Center, Alexandria</p>
                
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase border border-primary/20">07/2024 – 12/2024</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Animated Statistics Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={statVariants}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-white/20 transition-all duration-500 hover:bg-white/[0.03]"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-500">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
