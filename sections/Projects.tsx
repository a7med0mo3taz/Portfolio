"use client";

import { motion, Variants } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaLock } from "react-icons/fa";

// Real Projects Extracted from GitHub & Categorized
const projectCategories = [
  {
    categoryTitle: "Production & Live Platforms",
    description: "Real-world applications deployed and accessible to users.",
    projects: [
      {
        id: "job-sphere",
        title: "Job Sphere (AI-Powered)",
        description: "An AI-powered job matching platform where users can get comprehensive profile matches before applying. Features Google OAuth, CV optimization, and detailed action plans to land dream roles.",
        tech: ["Next.js", "React", "Tailwind CSS", "AI Integration"],
        github: "private",
        demo: "https://job-sphere-project.vercel.app", 
        isPrivate: true,
        image: "/assets/projects/job_sphere.png",
        gradient: "from-blue-500/20 to-cyan-600/20",
      },
      {
        id: "elsawaf-consultation",
        title: "Elsawaf Consultation Office",
        description: "A modern, professional web platform built for a consultation office. Designed to elegantly showcase services, expertise, and facilitate direct client communication.",
        tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
        github: "private",
        demo: "https://www.elsawwafconsulting.com/", 
        isPrivate: true,
        image: "/assets/projects/elsawaf_consultation.png",
        gradient: "from-indigo-500/20 to-blue-600/20",
      },
      {
        id: "sakany",
        title: "Sakany",
        description: "A comprehensive real estate and housing platform designed to streamline property searches. Built with a modern, responsive interface to enhance the user experience.",
        tech: ["React", "Tailwind CSS", "i18n", "Framer Motion"],
        github: "private",
        demo: "https://sakany-nu.vercel.app/home?lang=ar", 
        isPrivate: true,
        image: "/assets/projects/sakany.png",
        gradient: "from-emerald-500/20 to-teal-600/20",
      },
      {
        id: "graduation-party",
        title: "Graduation Party",
        description: "An elegant and interactive web platform created to celebrate and organize a graduation event. Features smooth animations and an engaging user interface.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        github: "private",
        demo: "https://graduation-party-2026.vercel.app/", 
        isPrivate: true,
        image: "/assets/projects/graduation_party.png",
        gradient: "from-purple-500/20 to-pink-600/20",
      },
      {
        id: "thiet-website",
        title: "THIET Website",
        description: "A comprehensive institutional website for an educational entity. Designed to deliver information clearly while maintaining a highly professional and modern aesthetic.",
        tech: ["React", "Tailwind CSS", "Vite"],
        github: "private",
        demo: "https://thiet-website.vercel.app/", 
        isPrivate: true,
        image: "/assets/projects/thiet_website.png",
        gradient: "from-blue-500/20 to-sky-600/20",
      },
    ]
  },
  
  {
    categoryTitle: "Coursework & Bootcamps",
    description: "Mini-projects and assignments completed during professional training programs.",
    projects: [
      {
        id: "e-commerce",
        title: "E-Commerce Platform",
        description: "A comprehensive online shopping store featuring product listings, detailed views, and cart management.",
        tech: ["React.js", "Tailwind CSS", "API Integration"],
        github: "https://github.com/a7med0mo3taz/E-coomerce",
        demo: "https://e-coomerce-nu.vercel.app/",
        isPrivate: false,
        image: "/assets/projects/e_coomerce.png",
        gradient: "from-emerald-500/20 to-teal-600/20",
      },
      {
        id: "movie-app",
        title: "Movie App",
        description: "A dynamic movie discovery application built to browse trending films and search across vast movie databases.",
        tech: ["React.js", "Tailwind CSS", "API Integration"],
        github: "https://github.com/a7med0mo3taz/Movie-App",
        demo: "https://movie-app-flame-iota-75.vercel.app",
        isPrivate: false,
        image: "/assets/projects/movie_app.png",
        gradient: "from-indigo-500/20 to-violet-600/20",
      },
      {
        id: "tanta-royal",
        title: "Tanta Royal School",
        description: "A responsive, modern React website built with Tailwind CSS and Flowbite, showcasing the school’s programs, news, gallery, and contact info. Features include dark mode, multilingual support, and interactive sliders.",
        tech: ["React.js", "Tailwind CSS", "Flowbite"],
        github: "https://github.com/a7med0mo3taz/Tanta-Royal-School",
        demo: "https://tanta-royal-school.vercel.app/",
        isPrivate: false,
        image: "/assets/projects/tanta_royal.png",
        gradient: "from-cyan-500/20 to-blue-600/20",
      },
      {
        id: "startt-framework",
        title: "Startt Framework",
        description: "Designed as a simulation of a professional personal portfolio using React and Tailwind CSS. Features highly responsive layouts and modern design aesthetics.",
        tech: ["React.js", "Tailwind CSS"],
        github: "https://github.com/a7med0mo3taz/startt-framework",
        demo: "https://start-framewoek.vercel.app/",
        isPrivate: false,
        image: "/assets/projects/startt_framework.png",
        gradient: "from-purple-500/20 to-pink-600/20",
      },
      {
        id: "yummy",
        title: "Yummy Recipes",
        description: "A website specializing in global and local food recipes. Includes categories, region filtering, and high-quality image interfaces.",
        tech: ["JavaScript", "API Integration", "CSS3" ,"Jquery"],
        github: "https://github.com/a7med0mo3taz/Yummy-",
        demo: "https://a7med0mo3taz.github.io/Yummy-/",
        isPrivate: false,
        image: "/assets/projects/yummy.png",
        gradient: "from-orange-500/20 to-red-600/20",
      },
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "tween", ease: "easeOut", duration: 0.5 } 
  },
};

import Image from "next/image";

// Clean Placeholder Component for Images
const ProjectImagePlaceholder = ({ title, gradient }: { title: string, gradient: string }) => (
  <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out`}>
    <div className="absolute inset-0 bg-dark/40 backdrop-blur-sm" />
    {/* Abstract pattern overlay */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
    
    <div className="relative z-10 text-center px-6">
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
        <FaCode className="text-2xl text-white/80" />
      </div>
      <h4 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">{title}</h4>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      
      {/* Immersive Ambient Background Lights (Hidden on mobile) */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-1/3 -right-32 w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 gpu-accelerated" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="hidden md:block absolute bottom-0 -left-32 w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[100px] pointer-events-none -z-10 gpu-accelerated" 
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="mb-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white text-center">
            My <span className="text-gradient drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Projects</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)]" />
          <p className="text-gray-400 mt-8 text-center max-w-2xl text-xl font-light leading-relaxed">
            A comprehensive collection of my recent work, highlighting modern web development practices and scalable architectures.
          </p>
        </motion.div>

        {/* Iterate through Categories */}
        <div className="flex flex-col gap-24 max-w-7xl mx-auto">
          {projectCategories.map((category, catIdx) => (
            <div key={catIdx} className="flex flex-col">
              
              {/* Category Header */}
              <motion.div 
                className="mb-10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-white mb-2 border-l-4 border-primary pl-4">{category.categoryTitle}</h3>
                <p className="text-gray-400 text-lg pl-5">{category.description}</p>
              </motion.div>

              {/* Projects Grid */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {category.projects.map((project) => (
                  <motion.div 
                    key={project.id} 
                    variants={itemVariants} 
                    className="glass rounded-[2rem] overflow-hidden group hover:border-white/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col relative bg-dark/40"
                  >
                    
                    {/* Visual Banner */}
                    <div className="w-full h-[220px] relative overflow-hidden border-b border-white/10">
                      {project.image ? (
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <ProjectImagePlaceholder title={project.title} gradient={project.gradient} />
                      )}
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-1 relative">
                      
                      <h4 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                      
                      {/* Highly Visible Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 text-xs font-bold tracking-wider uppercase shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p className="text-gray-300 text-base leading-relaxed mb-8 font-light flex-1">{project.description}</p>
                      
                      {/* Links Section */}
                      <div className="flex flex-wrap items-center gap-4 mt-auto pt-6 border-t border-white/10">
                        {/* Demo Button */}
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-dark font-bold hover:bg-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                        >
                          <FaExternalLinkAlt className="text-sm" /> Live Preview
                        </a>
                        
                        {/* Source Code Button / Private Badge */}
                        {project.isPrivate ? (
                          <div className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-dark border border-white/5 text-gray-500 font-semibold cursor-not-allowed">
                            <FaLock className="text-sm" /> Private Source
                          </div>
                        ) : (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass hover:bg-white/10 hover:border-white/30 text-white font-semibold transition-all"
                          >
                            <FaGithub className="text-lg" /> Source Code
                          </a>
                        )}
                      </div>

                    </div>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
