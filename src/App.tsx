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
          <div className="w-full bg-surface/50 p-6 rounded-lg border border-slate-700 mb-6 text-center">
            <h3 className="text-xl font-bold text-slate-200 mb-2">{portfolioData.personalInfo.name}</h3>
            <p className="text-primary font-mono text-sm mb-4">{portfolioData.personalInfo.title}</p>
            <p className="text-slate-400 text-sm">
              Resume preview is integrated. In a production environment, this window displays an interactive PDF viewer or direct HTML resume layout.
            </p>
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
