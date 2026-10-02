import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

// SVG components for brands
const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero = ({ onResumeClick }: HeroProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glow / Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono mb-4 text-sm md:text-base">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {portfolioData.personalInfo.name}
          </h1>
          
          <div className="inline-block glass-panel px-4 py-2 rounded-full mb-8 border-primary/30">
            <p className="neon-text font-medium text-sm md:text-base">
              {portfolioData.personalInfo.title}
            </p>
          </div>

          <p className="max-w-2xl text-slate-400 text-lg md:text-xl mb-10 leading-relaxed mx-auto">
            {portfolioData.personalInfo.careerObjective}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#projects"
              className="px-8 py-3 bg-primary text-background font-semibold rounded-md hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(255,0,60,0.4)]"
            >
              Explore Projects
            </a>
            <button 
              onClick={onResumeClick}
              className="px-8 py-3 glass-panel text-slate-200 font-semibold rounded-md hover:border-primary/50 transition-colors"
            >
              View Resume
            </button>
          </div>

          {/* Contact Chips */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-mono bg-surface/50 px-3 py-1.5 rounded-full border border-slate-800 hover:border-primary/30">
              <GithubIcon size={16} /> gentleG1ant
            </a>
            <a href={portfolioData.socials.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-mono bg-surface/50 px-3 py-1.5 rounded-full border border-slate-800 hover:border-primary/30">
              <LinkedinIcon size={16} /> raj-aryan-dev
            </a>
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-mono bg-surface/50 px-3 py-1.5 rounded-full border border-slate-800 hover:border-primary/30">
              <Mail size={16} /> Email Me
            </a>
            <span className="flex items-center gap-2 text-slate-400 text-sm font-mono bg-surface/50 px-3 py-1.5 rounded-full border border-slate-800">
              <MapPin size={16} /> {portfolioData.personalInfo.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
