"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Trophy, Star } from "lucide-react";

const achievements = [
  { title: "IEEE Certificate of Appreciation", icon: <Award className="w-5 h-5" /> },
  { title: "Oracle Networking Professional Certification", icon: <CheckCircle className="w-5 h-5" /> },
  { title: "Multiple successful Full Stack Projects", icon: <Star className="w-5 h-5" /> },
  { title: "Machine Learning Internship Experience", icon: <Trophy className="w-5 h-5" /> },
  { title: "AI Application Development Experience", icon: <CheckCircle className="w-5 h-5" /> },
];

const stats = [
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "25+" },
  { label: "Internships", value: "2" },
  { label: "Years of Learning", value: "4+" },
];

export function AchievementsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Technical Highlights (Stats) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 text-center rounded-3xl"
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-foreground/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Achievements & Milestones</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 glass p-4 rounded-2xl border border-transparent hover:border-accent/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground/90">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
