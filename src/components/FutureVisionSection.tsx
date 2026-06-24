"use client";

import { motion } from "framer-motion";
import { Sparkles, Eye } from "lucide-react";

export function FutureVisionSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass p-12 md:p-16 rounded-[3rem] relative overflow-hidden group"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
            <Eye size={120} className="text-accent" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center p-3 bg-accent/10 text-accent rounded-2xl mb-8"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60"
            >
              Building the Future of Human-Computer Interaction
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto"
            >
              Currently exploring innovative ideas involving gesture-based UI design systems inspired by futuristic interfaces, where users can create applications using hand gestures, computer vision, and AI-driven design generation.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
