"use client";

import { motion, Variants } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiJavascript, SiRedux, SiHtml5, SiCss, SiSass, 
  SiBootstrap, SiMui, SiGit, SiGithub, SiVercel 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillCategories = [
  {
    title: "Core & Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", bg: "group-hover/item:bg-yellow-400/10", border: "group-hover/item:border-yellow-400/50", shadow: "shadow-[0_0_20px_rgba(250,204,21,0.2)]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", bg: "group-hover/item:bg-blue-500/10", border: "group-hover/item:border-blue-500/50", shadow: "shadow-[0_0_20px_rgba(59,130,246,0.2)]" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500", bg: "group-hover/item:bg-orange-500/10", border: "group-hover/item:border-orange-500/50", shadow: "shadow-[0_0_20px_rgba(249,115,22,0.2)]" },
      { name: "CSS3", icon: SiCss, color: "text-blue-400", bg: "group-hover/item:bg-blue-400/10", border: "group-hover/item:border-blue-400/50", shadow: "shadow-[0_0_20px_rgba(96,165,250,0.2)]" },
      { name: "SCSS", icon: SiSass, color: "text-pink-500", bg: "group-hover/item:bg-pink-500/10", border: "group-hover/item:border-pink-500/50", shadow: "shadow-[0_0_20px_rgba(236,72,153,0.2)]" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: SiReact, color: "text-cyan-400", bg: "group-hover/item:bg-cyan-400/10", border: "group-hover/item:border-cyan-400/50", shadow: "shadow-[0_0_20px_rgba(34,211,238,0.2)]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white", bg: "group-hover/item:bg-white/10", border: "group-hover/item:border-white/50", shadow: "shadow-[0_0_20px_rgba(255,255,255,0.2)]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", bg: "group-hover/item:bg-teal-400/10", border: "group-hover/item:border-teal-400/50", shadow: "shadow-[0_0_20px_rgba(45,212,191,0.2)]" },
      { name: "Material-UI", icon: SiMui, color: "text-blue-500", bg: "group-hover/item:bg-blue-500/10", border: "group-hover/item:border-blue-500/50", shadow: "shadow-[0_0_20px_rgba(59,130,246,0.2)]" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500", bg: "group-hover/item:bg-purple-500/10", border: "group-hover/item:border-purple-500/50", shadow: "shadow-[0_0_20px_rgba(168,85,247,0.2)]" },
    ],
  },
  {
    title: "Tools & Ecosystem",
    skills: [
      { name: "Redux", icon: SiRedux, color: "text-purple-600", bg: "group-hover/item:bg-purple-600/10", border: "group-hover/item:border-purple-600/50", shadow: "shadow-[0_0_20px_rgba(147,51,234,0.2)]" },
      { name: "REST APIs", icon: TbApi, color: "text-green-400", bg: "group-hover/item:bg-green-400/10", border: "group-hover/item:border-green-400/50", shadow: "shadow-[0_0_20px_rgba(74,222,128,0.2)]" },
      { name: "Git", icon: SiGit, color: "text-orange-600", bg: "group-hover/item:bg-orange-600/10", border: "group-hover/item:border-orange-600/50", shadow: "shadow-[0_0_20px_rgba(234,88,12,0.2)]" },
      { name: "GitHub", icon: SiGithub, color: "text-white", bg: "group-hover/item:bg-white/10", border: "group-hover/item:border-white/50", shadow: "shadow-[0_0_20px_rgba(255,255,255,0.2)]" },
      { name: "Vercel", icon: SiVercel, color: "text-white", bg: "group-hover/item:bg-white/10", border: "group-hover/item:border-white/50", shadow: "shadow-[0_0_20px_rgba(255,255,255,0.2)]" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const categoryVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "tween", ease: "easeOut", duration: 0.5 } 
  },
};

const itemVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { type: "tween", ease: "easeOut", duration: 0.3 } 
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      
      {/* Immersive Ambient Background Lights (Hidden on mobile) */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-1/4 -left-32 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 gpu-accelerated" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="hidden md:block absolute bottom-1/4 -right-32 w-[60vw] h-[60vw] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10 gpu-accelerated" 
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="mb-24 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-center tracking-tight text-white">
            Technical <span className="text-gradient drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Skills</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)]" />
          <p className="text-gray-400 mt-8 text-center max-w-2xl text-xl font-light leading-relaxed">
            A comprehensive overview of my technical stack, focusing on modern front-end technologies and scalable architecture.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={categoryVariants}
              whileHover={{ y: -5 }}
              className="glass p-8 md:p-10 rounded-[3rem] flex flex-col border border-white/5 hover:border-white/15 bg-dark/40 backdrop-blur-xl transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.3)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <h3 className="text-2xl font-extrabold mb-10 text-white text-center tracking-tight relative z-10">{category.title}</h3>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-5 relative z-10"
                variants={containerVariants}
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.div 
                    key={skillIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`flex flex-col items-center justify-center p-4 bg-dark/60 rounded-[1.5rem] border border-white/5 transition-all duration-300 w-[110px] h-[110px] group/item cursor-pointer hover:shadow-lg ${skill.bg} ${skill.border}`}
                  >
                    <skill.icon className={`text-4xl mb-3 ${skill.color} group-hover/item:scale-110 group-hover/item:rotate-[-5deg] group-hover/item:drop-shadow-[0_0_10px_currentColor] transition-all duration-300`} />
                    <span className={`text-xs font-bold text-gray-400 text-center tracking-wider transition-colors duration-300 group-hover/item:${skill.color}`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
