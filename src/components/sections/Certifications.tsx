import { portfolioData } from '../../data/portfolioData';
import { Award } from 'lucide-react';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative border-t border-primary/10 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="neon-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center max-w-4xl mx-auto">
          {portfolioData.certifications.map((cert, index) => (
            <div 
              key={index} 
              className="glass-card p-6 border-slate-800 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,0,60,0.25)]">
                <Award size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-slate-200 mb-1">{cert.name}</h3>
              <p className="text-sm font-mono text-secondary">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
