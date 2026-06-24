"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Let&apos;s build something great together.</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50">Email</p>
                  <a href="mailto:harshitsharma3665@gmail.com" className="text-lg font-medium hover:text-accent transition-colors">
                    harshitsharma3665@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50">Phone</p>
                  <a href="tel:+917597588014" className="text-lg font-medium hover:text-accent transition-colors">
                    +91 7597588014
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50">Location</p>
                  <p className="text-lg font-medium">Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/harshitsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 glass rounded-full hover:bg-white/10 hover:text-accent transition-all duration-300"
              >
                <GithubIcon width={20} height={20} className="mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/harshit-sharma-070b79256/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 glass rounded-full hover:bg-white/10 hover:text-accent transition-all duration-300"
              >
                <LinkedinIcon width={20} height={20} className="mr-2" />
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-medium rounded-full hover:scale-105 transition-transform duration-300"
              >
                <Download size={20} className="mr-2" />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-colors duration-300"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
