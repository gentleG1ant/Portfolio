import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ExternalLink, FolderOpen } from 'lucide-react';
import { Modal } from '../ui/Modal';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card flex flex-col h-full overflow-hidden group border-slate-800"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <FolderOpen size={24} />
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-200 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block px-2 py-1 text-xs font-mono rounded border ${
                    project.status === 'Completed' 
                      ? 'border-highlight/30 text-highlight bg-highlight/10' 
                      : 'border-secondary/30 text-secondary bg-secondary/10'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-primary/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedProject(project)}
                className="w-full py-3 bg-surface hover:bg-primary/10 text-slate-300 hover:text-primary transition-colors border-t border-slate-800 text-sm font-medium flex items-center justify-center gap-2"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        title={selectedProject?.title || ""}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className="flex gap-2">
              <span className={`inline-block px-3 py-1 text-sm font-mono rounded border ${
                selectedProject.status === 'Completed' 
                  ? 'border-highlight/30 text-highlight bg-highlight/10' 
                  : 'border-secondary/30 text-secondary bg-secondary/10'
              }`}>
                Status: {selectedProject.status}
              </span>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-slate-200 mb-2">Project Overview</h4>
              <p className="text-slate-400 leading-relaxed">{selectedProject.summary}</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-200 mb-2">Technical Implementation</h4>
              <p className="text-slate-400 leading-relaxed">{selectedProject.details}</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-200 mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-surface border border-slate-700 rounded-md text-sm text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex gap-4">
              {selectedProject.githubUrl && (
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 glass-panel text-slate-200 font-semibold rounded hover:border-primary/50 transition-colors flex items-center gap-2"
                >
                  <GithubIcon size={18} /> View Source
                </a>
              )}
              {selectedProject.liveUrl && (
                <a 
                  href={selectedProject.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-primary text-background font-semibold rounded hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
