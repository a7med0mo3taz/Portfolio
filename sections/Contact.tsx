"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaEnvelope,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_CONFIG,
  WHATSAPP_NUMBER,
} from "@/lib/emailjs.config";
import { RESUME_DOWNLOAD_URL } from "@/constants/resume";

/* ─────────────────────── animation variants ─────────────────────── */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};

/* ═══════════════════════ component ══════════════════════════════════ */

export default function Contact() {
  /* form state */
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  /* ── validation ── */
  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /* ── EmailJS send ── */
  const handleEmailSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Ahmed Elsawaf",
        },
        EMAILJS_CONFIG.publicKey,
      );
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully! I'll reply soon. ✅");
      setTimeout(() => setSent(false), 5000);
    } catch {
      toast.error("Failed to send. Please try again or reach me directly.");
    } finally {
      setSending(false);
    }
  };

  /* ── Send via WhatsApp ── */
  const handleSendWa = () => {
    if (!validate()) return;
    
    const text = `Hello Ahmed,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  /* ─────────────── render ─────────────── */
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* ── Ambient lights ── */}
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

      {/* ═══ Main Content ═══ */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* section header */}
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
            Have an exciting project in mind or want to collaborate? Reach me
            instantly via WhatsApp or send a direct email below.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* ══ Left column — contact info ══ */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass p-10 rounded-[2.5rem] flex flex-col relative overflow-hidden group hover:border-primary/30 transition-all duration-700 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400 font-light mb-10 leading-relaxed text-lg">
                I&apos;m always open to discussing new projects, creative ideas,
                or partnership opportunities.
              </p>

              <div className="flex flex-col gap-4 flex-1">
                {/* Email link */}
                <motion.a
                  whileHover={{ x: 4 }}
                  href="mailto:elsawafahmed740@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-dark/40 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group/link"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-primary/20 transition-colors shrink-0">
                    <FaEnvelope className="text-xl text-gray-400 group-hover/link:text-primary transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 font-medium tracking-wider uppercase mb-0.5">
                      Email
                    </p>
                    <p className="text-white font-semibold text-sm truncate">
                      elsawafahmed740@gmail.com
                    </p>
                  </div>
                </motion.a>

                {/* WhatsApp Info */}
                <motion.a
                  whileHover={{ x: 4 }}
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-dark/40 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 transition-all duration-300 group/link text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-[#25D366]/20 transition-colors shrink-0">
                    <FaWhatsapp className="text-xl text-gray-400 group-hover/link:text-[#25D366] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium tracking-wider uppercase mb-0.5">
                      WhatsApp
                    </p>
                    <p className="text-white font-semibold text-sm">
                      +20 100 923 4199
                    </p>
                  </div>
                </motion.a>

                {/* Download Resume */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={RESUME_DOWNLOAD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                >
                  <FaDownload className="text-lg" /> Download Resume
                </motion.a>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                <motion.a
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/in/ahmed-elsawaf-9aa3642b4"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:border-transparent text-gray-400 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin className="text-lg" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/a7med0mo3taz"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white hover:border-transparent text-gray-400 hover:text-dark transition-all duration-300"
                >
                  <FaGithub className="text-lg" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* ══ Right column — email form ══ */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="glass p-8 md:p-12 rounded-[2.5rem] flex flex-col relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-white/10 h-full">
              {/* decorative glow */}
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/10 rounded-full blur-[90px] pointer-events-none" />
              <div className="absolute -top-20 -left-20 w-56 h-56 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <FaEnvelope className="text-primary text-base" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Send a Message
                  </h3>
                </div>

                {/* ── Success overlay ── */}
                <AnimatePresence>
                  {sent && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-[2.5rem] bg-dark/95 backdrop-blur-md"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                          damping: 15,
                          delay: 0.1,
                        }}
                        className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(6,182,212,0.3)]"
                      >
                        <FaCheckCircle className="text-4xl text-primary" />
                      </motion.div>
                      <h4 className="text-white text-2xl font-bold mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-gray-400 text-sm">
                        I&apos;ll get back to you as soon as possible.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Form ── */}
                <form
                  ref={formRef}
                  onSubmit={handleEmailSend}
                  noValidate
                  className="flex flex-col gap-5 flex-1"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold text-gray-400 uppercase tracking-widest ml-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ahmed Elsawaf"
                        disabled={sending}
                        className={`w-full px-5 py-4 rounded-2xl bg-white/[0.03] border text-white placeholder-gray-600 focus:outline-none transition-all duration-300 disabled:opacity-50 ${
                          errors.name
                            ? "border-red-500/50 focus:border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]"
                            : "border-white/8 focus:border-primary/50 focus:shadow-[0_0_20px_rgba(6,182,212,0.15)] focus:bg-white/[0.06]"
                        }`}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs ml-1 mt-0.5"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-gray-400 uppercase tracking-widest ml-1"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        disabled={sending}
                        className={`w-full px-5 py-4 rounded-2xl bg-white/[0.03] border text-white placeholder-gray-600 focus:outline-none transition-all duration-300 disabled:opacity-50 ${
                          errors.email
                            ? "border-red-500/50 focus:border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]"
                            : "border-white/8 focus:border-secondary/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.15)] focus:bg-white/[0.06]"
                        }`}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs ml-1 mt-0.5"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-gray-400 uppercase tracking-widest ml-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      disabled={sending}
                      placeholder="Tell me about your project, idea, or how we can work together..."
                      className={`w-full px-5 py-4 rounded-2xl bg-white/[0.03] border text-white placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none disabled:opacity-50 ${
                        errors.message
                          ? "border-red-500/50 focus:border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]"
                          : "border-white/8 focus:border-primary/50 focus:shadow-[0_0_20px_rgba(6,182,212,0.15)] focus:bg-white/[0.06]"
                      }`}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs ml-1 mt-0.5"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Send buttons */}
                  <div className="pt-4 border-t border-white/5 mt-auto">
                    <div className="flex flex-col sm:flex-row gap-4">

                      {/* Secondary Action: Send via WhatsApp */}
                      <motion.button
                        type="button"
                        onClick={handleSendWa}
                        disabled={sending}
                        whileHover={!sending ? { scale: 1.02, y: -2 } : {}}
                        whileTap={!sending ? { scale: 0.98 } : {}}
                        className="flex-1 flex items-center justify-center gap-2.5 py-4 px-4 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-bold text-sm hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.1)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] disabled:opacity-60"
                      >
                        <FaWhatsapp className="text-xl" />
                        Send via WhatsApp
                      </motion.button>
                      
                      {/* Primary Action: Send via Email */}
                      <motion.button
                        type="submit"
                        disabled={sending}
                        whileHover={!sending ? { scale: 1.02, y: -2 } : {}}
                        whileTap={!sending ? { scale: 0.98 } : {}}
                        className="flex-1 relative py-4 rounded-2xl font-bold text-white bg-red-500 overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:shadow-[0_0_35px_rgba(239,68,68,0.5)] group border border-red-500/50"
                      >
                        {/* shimmer on hover */}
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <span className="relative flex items-center justify-center gap-3">
                          {sending ? (
                            <>
                              <FaSpinner className="animate-spin text-lg" />
                              Sending…
                            </>
                          ) : (
                            <>
                              <FaEnvelope className="text-lg group-hover:scale-110 transition-transform duration-300" />
                              Send via Email
                            </>
                          )}
                        </span>
                      </motion.button>

                      
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
