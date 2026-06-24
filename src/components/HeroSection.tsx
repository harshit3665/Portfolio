"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8 border border-white/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-sm font-medium">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
          >
            Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500">Harshit Sharma</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Software Developer passionate about building scalable applications, AI-powered solutions, and innovative technologies that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-foreground dark:bg-white dark:text-black rounded-full overflow-hidden transition-transform hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href="/resume.pdf"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-transparent border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors w-full sm:w-auto"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-transparent border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors w-full sm:w-auto"
            >
              <Mail className="mr-2 w-4 h-4" />
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
