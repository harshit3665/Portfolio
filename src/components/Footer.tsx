"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 glass mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-bold tracking-tighter block mb-2">
              HS<span className="text-accent">.</span>
            </a>
            <p className="text-foreground/60 text-sm max-w-sm">
              Building scalable applications, AI-powered solutions, and innovative technologies.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/harshitsharma" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
              <span className="sr-only">GitHub</span>
              <GithubIcon width={24} height={24} />
            </a>
            <a href="https://www.linkedin.com/in/harshit-sharma-070b79256/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon width={24} height={24} />
            </a>
            <a href="mailto:harshitsharma3665@gmail.com" className="text-foreground/60 hover:text-accent transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between">
          <p className="text-sm text-foreground/40">
            &copy; {new Date().getFullYear()} Harshit Sharma. All rights reserved.
          </p>
          <p className="text-sm text-foreground/40 mt-2 md:mt-0">
            Designed & Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
