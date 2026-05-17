"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaEnvelope,
  FaGoogle,
} from "react-icons/fa";
import toast from "react-hot-toast";

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
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields before sending.");
      return false;
    }
    return true;
  };

  const handleWhatsApp = () => {
    if (!validateForm()) return;

    const text = `Hello Ahmed,%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/201009234199?text=${text}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Opening WhatsApp...");
  };

  const handleGmail = () => {
    if (!validateForm()) return;

    const subject = encodeURIComponent(
      `New Contact from ${formData.name} - Portfolio`,
    );
    const body = encodeURIComponent(
      `Hello Ahmed,\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`,
    );
    const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=elsawafahmed740@gmail.com&su=${subject}&body=${body}`;

    window.open(mailtoUrl, "_blank");
    toast.success("Opening Gmail...");
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Immersive Ambient Background Lights */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -left-32 w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[180px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[150px] pointer-events-none -z-10"
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
            Get In{" "}
            <span className="text-gradient drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              Touch
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)]" />
          <p className="text-gray-400 mt-8 text-center max-w-2xl text-xl font-light leading-relaxed">
            Have an exciting project in mind or want to collaborate? Fill the
            form below and choose how you want to reach me.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Information & Quick Links (5 columns) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass p-10 rounded-[2.5rem] flex flex-col relative overflow-hidden group hover:border-primary/40 transition-all duration-700 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400 font-light mb-10 leading-relaxed text-lg">
                I&apos;m always open to discussing web development work or
                partnership opportunities.
              </p>

              <div className="flex flex-col gap-5 flex-1">
                <a
                  href="mailto:elsawafahmed740@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-dark/40 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group/link"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-primary/20 transition-colors">
                    <FaEnvelope className="text-xl text-gray-300 group-hover/link:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium tracking-wide">
                      Email
                    </p>
                    <p className="text-white font-semibold break-all">
                      elsawafahmed740@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/201009234199"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-dark/40 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 transition-all duration-300 group/link"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-[#25D366]/20 transition-colors">
                    <FaWhatsapp className="text-xl text-gray-300 group-hover/link:text-[#25D366] transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium tracking-wide">
                      WhatsApp
                    </p>
                    <p className="text-white font-semibold">+201009234199</p>
                  </div>
                </a>

                <a
                  href="/assets/Ahmed_Elsawaf_Ahmed_Elsawaf_CV.pdf"
                  download
                  className="mt-auto flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  <FaDownload className="text-lg" /> Download Resume
                </a>
              </div>

              {/* Socials Row */}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                <a
                  href="https://linkedin.com/in/ahmed-elsawaf-9aa3642b4"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:border-transparent text-gray-400 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/a7med0mo3taz"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white hover:border-transparent text-gray-400 hover:text-dark transition-all duration-300"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (7 columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="glass p-10 md:p-14 rounded-[2.5rem] flex flex-col relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-white/10 h-full">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

              <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2 relative z-10">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-400 ml-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="User Name"
                    className="w-full px-5 py-4 rounded-2xl bg-dark/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-dark/80 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2 relative z-10">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-400 ml-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="user@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-dark/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-secondary/50 focus:bg-dark/80 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-10 relative z-10">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-400 ml-1"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-2xl bg-dark/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-dark/80 transition-all duration-300 resize-none"
                />
              </div>

              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-sm text-gray-400 font-medium mb-4 ml-1">
                  Choose how to send:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                  {/* Send via WhatsApp */}
                  <button
                    onClick={handleWhatsApp}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-bold tracking-wide hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.1)] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:-translate-y-1"
                  >
                    <FaWhatsapp className="text-xl" /> Send via WhatsApp
                  </button>

                  {/* Send via Gmail */}
                  <button
                    onClick={handleGmail}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#EA4335]/10 border border-[#EA4335]/20 text-[#EA4335] font-bold tracking-wide hover:bg-[#EA4335] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(234,67,53,0.1)] hover:shadow-[0_0_25px_rgba(234,67,53,0.4)] hover:-translate-y-1"
                  >
                    <FaGoogle className="text-lg" /> Send via Gmail
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
