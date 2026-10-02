import { portfolioData } from '../../data/portfolioData';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative border-t border-primary/10 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="neon-text">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities spanning systems programming, software architecture, and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioData.skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category} 
              className="glass-card p-8 border-slate-800 relative overflow-hidden group"
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-slate-200 flex items-center gap-3">
                  <span className="text-primary font-mono text-sm">0{index + 1}.</span> 
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-background/80 border border-primary/20 rounded-md text-sm font-mono text-slate-300 shadow-[0_0_10px_rgba(0,240,255,0.05)] hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
