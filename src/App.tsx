import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';

function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        {/* Placeholder for future sections */}
        <section id="projects" className="min-h-[50vh] flex items-center justify-center border-t border-slate-800">
          <p className="text-slate-500 font-mono">#projects section (Pending)</p>
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
