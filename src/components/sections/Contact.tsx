import { portfolioData } from '../../data/portfolioData';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="neon-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            My inbox is always open. Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="glass-card p-6 border-slate-800 flex items-center gap-6 group hover:border-primary/50 transition-all">
              <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-sm font-mono text-slate-400 mb-1">Email</h3>
                <p className="text-lg font-medium text-slate-200">{portfolioData.personalInfo.email}</p>
              </div>
            </a>

            <div className="glass-panel p-6 rounded-xl border border-slate-800 flex items-center gap-6">
              <div className="p-4 bg-secondary/10 rounded-xl text-secondary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-sm font-mono text-slate-400 mb-1">Phone</h3>
                <p className="text-lg font-medium text-slate-200">{portfolioData.personalInfo.phone}</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-slate-800 flex items-center gap-6">
              <div className="p-4 bg-primary/10 rounded-xl text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-sm font-mono text-slate-400 mb-1">Location</h3>
                <p className="text-lg font-medium text-slate-200">{portfolioData.personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Social Links & CTA */}
          <div className="glass-panel p-8 rounded-2xl border border-slate-800 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-slate-200">Connect Online</h3>
            <p className="text-slate-400 mb-8">
              I am actively looking for new entry-level opportunities in software development or machine learning. Let's build something great together.
            </p>
            
            <div className="space-y-4 mb-8">
              <a 
                href={portfolioData.socials.linkedIn} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 glass-card border-slate-700 hover:border-primary group"
              >
                <div className="flex items-center gap-4 text-slate-300 group-hover:text-primary transition-colors">
                  <LinkedinIcon size={24} />
                  <span className="font-medium">LinkedIn Profile</span>
                </div>
                <ArrowRight size={20} className="text-slate-500 group-hover:text-primary transition-colors" />
              </a>
              
              <a 
                href={portfolioData.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 glass-card border-slate-700 hover:border-primary group"
              >
                <div className="flex items-center gap-4 text-slate-300 group-hover:text-primary transition-colors">
                  <GithubIcon size={24} />
                  <span className="font-medium">GitHub Repository</span>
                </div>
                <ArrowRight size={20} className="text-slate-500 group-hover:text-primary transition-colors" />
              </a>
            </div>

            <a 
              href={`mailto:${portfolioData.personalInfo.email}`} 
              className="w-full py-4 bg-primary text-background font-bold text-center rounded-lg hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(255,0,60,0.4)]"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
