"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Machine Learning Intern",
    company: "Linux World Informatics Pvt Ltd",
    date: "June 2025 – August 2025",
    responsibilities: [
      "Data preprocessing and cleaning",
      "Exploratory Data Analysis (EDA)",
      "Feature Engineering",
      "Model Training (Logistic Regression, Decision Trees)",
      "Data Visualization",
      "Performance Optimization",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Learn and Build",
    date: "July 2024 – August 2024",
    responsibilities: [
      "Responsive UI Development",
      "Interactive Web Design",
      "HTML, CSS, JavaScript",
      "UI/UX Improvements",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-accent transform -translate-x-1/2 mt-1.5 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <Briefcase className="w-3 h-3 text-accent" />
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 w-full">
                  <div
                    className={`glass p-6 rounded-2xl md:mx-8 relative group hover:border-accent/50 transition-colors duration-300`}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <h4 className="text-accent font-medium mb-3">{exp.company}</h4>
                    
                    <div className="flex items-center text-sm text-foreground/60 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.date}
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((task, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-accent mt-1">•</span>
                          <span className="text-foreground/80 text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
