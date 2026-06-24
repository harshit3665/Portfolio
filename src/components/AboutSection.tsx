"use client";

import { motion } from "framer-motion";
import { Code, Server, Brain, Shield, Rocket, Monitor, Layout, Database } from "lucide-react";

const interests = [
  { name: "Full Stack Development", icon: <Layout className="w-5 h-5" /> },
  { name: "Java Backend Engineering", icon: <Server className="w-5 h-5" /> },
  { name: "Machine Learning", icon: <Brain className="w-5 h-5" /> },
  { name: "Artificial Intelligence", icon: <Code className="w-5 h-5" /> },
  { name: "Cyber Security", icon: <Shield className="w-5 h-5" /> },
  { name: "Drone Technology", icon: <Rocket className="w-5 h-5" /> },
  { name: "Human Computer Interaction", icon: <Monitor className="w-5 h-5" /> },
  { name: "System Design", icon: <Database className="w-5 h-5" /> },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-foreground/80 leading-relaxed"
          >
            <p>
              I am a Cyber Security undergraduate at Poornima College of Engineering with strong experience in 
              <span className="text-foreground font-semibold"> Full Stack Development, Java, Spring Boot, React, Next.js, Artificial Intelligence, and Machine Learning.</span>
            </p>
            <p>
              I enjoy building software products that combine modern web technologies with AI to solve practical problems. My approach is centered around creating robust backend architectures and matching them with futuristic, highly interactive frontends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold mb-6">My Interests</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors border border-white/5"
                >
                  <div className="text-accent">{interest.icon}</div>
                  <span className="font-medium text-sm">{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
