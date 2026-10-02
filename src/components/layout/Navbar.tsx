import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar = ({ onResumeClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/90 backdrop-blur-md border-b border-primary/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold font-mono">
              <span className="text-slate-200">R</span>
              <span className="text-primary">A</span>
              <span className="text-primary">.</span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {portfolioData.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={onResumeClick}
                className="px-4 py-2 rounded-md text-sm font-medium border border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                Resume
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-primary/20 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {portfolioData.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { setIsOpen(false); onResumeClick(); }}
              className="block w-full text-left px-3 py-2 text-primary font-medium"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
