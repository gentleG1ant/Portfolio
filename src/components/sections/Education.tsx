import { portfolioData } from '../../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative border-t border-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic <span className="neon-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-1/2" />

          <div className="space-y-12">
            {portfolioData.education.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-10 h-10 bg-background border-2 border-primary rounded-full md:-translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)] z-10 -translate-x-5 md:-translate-x-0">
                    <GraduationCap size={18} className="text-primary" />
                  </div>

                  {/* Desktop Layout Containers */}
                  <div className={`hidden md:block w-1/2 pr-12 text-right ${isEven ? 'order-1' : 'order-3 opacity-0'}`}>
                    {isEven && (
                      <div className="glass-panel p-6 rounded-xl hover:border-primary/40 transition-colors">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-mono text-sm rounded-full mb-3 border border-primary/20">
                          {edu.year}
                        </span>
                        <h3 className="text-xl font-bold text-slate-200 mb-2">{edu.degree}</h3>
                        <p className="text-slate-400 font-medium mb-2">{edu.institution}</p>
                        {edu.score && (
                          <p className="text-sm font-mono text-secondary">Score: {edu.score}</p>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className={`hidden md:block w-1/2 pl-12 ${!isEven ? 'order-3' : 'order-1 opacity-0'}`}>
                    {!isEven && (
                      <div className="glass-panel p-6 rounded-xl hover:border-primary/40 transition-colors">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-mono text-sm rounded-full mb-3 border border-primary/20">
                          {edu.year}
                        </span>
                        <h3 className="text-xl font-bold text-slate-200 mb-2">{edu.degree}</h3>
                        <p className="text-slate-400 font-medium mb-2">{edu.institution}</p>
                        {edu.score && (
                          <p className="text-sm font-mono text-secondary">Score: {edu.score}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden w-full pl-20 pr-4">
                    <div className="glass-panel p-6 rounded-xl hover:border-primary/40 transition-colors">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-mono text-sm rounded-full mb-3 border border-primary/20">
                        {edu.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-200 mb-2">{edu.degree}</h3>
                      <p className="text-slate-400 font-medium mb-2">{edu.institution}</p>
                      {edu.score && (
                        <p className="text-sm font-mono text-secondary">Score: {edu.score}</p>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
