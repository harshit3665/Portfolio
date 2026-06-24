"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const projects = [
  {
    title: "CSSR – Collapsed Structure Search & Rescue System",
    description: "An AI-powered disaster response system designed to help NDRF teams locate trapped victims under collapsed buildings. Reduces victim detection time from 24-48 hours to approximately 2-4 hours.",
    features: ["Autonomous Drone", "Thermal Imaging", "Ground Penetrating Radar", "Human Detection AI", "GIS Integration", "AR Visualization"],
    technologies: ["AI", "Computer Vision", "Raspberry Pi", "Pixhawk", "Drone Systems", "Machine Learning", "AR"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "AI-Powered Phishing Website Detection System",
    description: "Real-time detection system using URL analysis and feature engineering to classify and block phishing attempts with high accuracy.",
    features: ["URL Analysis", "Feature Engineering", "Classification Models", "Real-time Detection", "Security Dashboard"],
    technologies: ["Python", "Flask", "Pandas", "Scikit-learn", "HTML", "CSS"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "MediMate – AI Smart Health Assistant",
    description: "An intelligent healthcare assistant that provides symptom analysis, emergency detection, and hospital recommendations.",
    features: ["Symptom Analysis", "AI Diagnosis Assistance", "Emergency Detection", "Voice Support", "Hospital Recommendations"],
    technologies: ["Python", "Gemini API", "Streamlit", "AI", "Web Scraping"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Real-Time Delivery Tracking Platform",
    description: "A comprehensive logistics solution featuring live tracking, route updates, and multi-vendor support.",
    features: ["Live Tracking", "Route Updates", "Real-Time Location Sharing", "Multi-vendor Support"],
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Expense Tracker",
    description: "Personal finance management tool with analytics dashboard and automated reports.",
    features: ["Expense Management", "Analytics Dashboard", "Charts & Reports", "Budget Tracking"],
    technologies: ["React", "Spring Boot", "MySQL"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Electricity Billing System",
    description: "A comprehensive billing management system with usage tracking and automated generation.",
    features: ["User Management", "Usage Tracking", "Automated Bill Generation", "Admin Dashboard"],
    technologies: ["React", "Spring Boot", "MongoDB"],
    github: "#",
    demo: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass flex flex-col rounded-3xl overflow-hidden group ${
                project.featured ? "md:col-span-2 lg:col-span-2 bg-accent/5 border-accent/20" : ""
              }`}
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-foreground/5 rounded-2xl">
                    <Layers className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="text-foreground/50 hover:text-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-6 h-6" />
                    </a>
                    <a
                      href={project.demo}
                      className="text-foreground/50 hover:text-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {project.featured && (
                  <span className="inline-block text-xs font-semibold text-accent tracking-wider uppercase mb-2">
                    Featured Project
                  </span>
                )}
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 mb-6 flex-1 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2">Key Features:</p>
                  <ul className="text-sm text-foreground/60 space-y-1">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                    {project.features.length > 4 && <li>• And more...</li>}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-background/50 border border-white/10 text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
