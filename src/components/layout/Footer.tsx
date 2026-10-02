import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/10 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold font-mono text-slate-200">
            R<span className="text-primary">A</span>.
          </span>
          <p className="text-sm text-slate-400 mt-1">
            © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors text-sm">
            GitHub
          </a>
          <a href={portfolioData.socials.linkedIn} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors text-sm">
            LinkedIn
          </a>
          <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-slate-400 hover:text-primary transition-colors text-sm">
            Email
          </a>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-xs text-slate-500 font-mono">
          Built with Precision & React/Tailwind
        </p>
      </div>
    </footer>
  );
};
