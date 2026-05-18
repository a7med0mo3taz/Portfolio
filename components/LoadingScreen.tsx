"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loading screen after the page has visually rendered
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Ambient Lighting Behind Loading Element */}
          <div className="absolute w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Cinematic Animated Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 flex items-center"
            >
              Ahmed Elsawaf
              <motion.span 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="text-primary"
              >
                .
              </motion.span>
            </motion.div>

            {/* Premium Loading Bar */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"
              />
            </div>
            
            {/* Percentage Text */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-gray-500 text-xs font-semibold uppercase tracking-[0.2em] mt-4"
            >
              System Initializing
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
