import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';

function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        {/* Placeholder for future sections */}
        <section id="about" className="min-h-[50vh] flex items-center justify-center border-t border-slate-800">
          <p className="text-slate-500 font-mono">#about section (Pending)</p>
        </section>
        <section id="skills" className="min-h-[50vh] flex items-center justify-center border-t border-slate-800">
          <p className="text-slate-500 font-mono">#skills section (Pending)</p>
        </section>
        <section id="projects" className="min-h-[50vh] flex items-center justify-center border-t border-slate-800">
          <p className="text-slate-500 font-mono">#projects section (Pending)</p>
        </section>
        <section id="education" className="min-h-[50vh] flex items-center justify-center border-t border-slate-800">
          <p className="text-slate-500 font-mono">#education section (Pending)</p>
        </section>
        <section id="contact" className="min-h-[50vh] flex items-center justify-center border-t border-slate-800">
          <p className="text-slate-500 font-mono">#contact section (Pending)</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
