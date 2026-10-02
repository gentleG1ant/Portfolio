import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { Modal } from './components/ui/Modal';
import { portfolioData } from './data/portfolioData';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar onResumeClick={() => setIsResumeOpen(true)} />
      <main>
        <Hero onResumeClick={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />

      <Modal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} title="Resume Preview">
        <div className="flex flex-col items-center">
          <div className="w-full text-left space-y-6 mb-8">
            <div className="border-b border-slate-700 pb-4">
              <h3 className="text-2xl font-bold text-slate-100">{portfolioData.personalInfo.name}</h3>
              <p className="text-primary font-mono text-sm">{portfolioData.personalInfo.title}</p>
              <div className="flex gap-4 text-xs text-slate-400 mt-2 font-mono">
                <span>{portfolioData.personalInfo.email}</span>
                <span>{portfolioData.personalInfo.phone}</span>
                <span>{portfolioData.personalInfo.location}</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2 text-primary">Objective</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{portfolioData.personalInfo.careerObjective}</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2 text-primary">Education</h4>
              <ul className="space-y-3 text-sm">
                {portfolioData.education.map((edu, idx) => (
                  <li key={idx} className="flex justify-between items-start">
                    <div>
                      <strong className="text-slate-200 block">{edu.degree}</strong>
                      <span className="text-slate-400">{edu.institution} {edu.score ? `— ${edu.score}` : ''}</span>
                    </div>
                    <span className="font-mono text-secondary whitespace-nowrap">{edu.year}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2 text-primary">Projects</h4>
              <ul className="space-y-3 text-sm">
                {portfolioData.projects.map((proj) => (
                  <li key={proj.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <strong className="text-slate-200">{proj.title}</strong>
                      <span className="font-mono text-xs text-slate-500">{proj.status}</span>
                    </div>
                    <p className="text-slate-400 text-xs mb-1">{proj.summary}</p>
                    <p className="text-primary/70 text-xs font-mono">{proj.techStack.join(', ')}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-4">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert('In production, this downloads resume.pdf'); }}
              className="px-6 py-2 bg-primary text-background font-semibold rounded hover:bg-primary/90 transition-colors"
            >
              Download PDF
            </a>
            <button 
              onClick={() => setIsResumeOpen(false)}
              className="px-6 py-2 glass-panel text-slate-200 font-semibold rounded hover:border-primary/50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
