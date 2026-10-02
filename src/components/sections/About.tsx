import { Code, Server, Database, Brain } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const About = () => {
  const highlights = [
    {
      icon: <Code className="text-primary" size={24} />,
      title: "Data Structures & Algorithms",
      description: "Strong foundation in problem-solving and algorithmic thinking."
    },
    {
      icon: <Server className="text-primary" size={24} />,
      title: "Object-Oriented Design",
      description: "Writing clean, maintainable, and scalable software architectures."
    },
    {
      icon: <Brain className="text-secondary" size={24} />,
      title: "Machine Learning",
      description: "Practical application of ML models, NLP, and data analysis."
    },
    {
      icon: <Database className="text-secondary" size={24} />,
      title: "Database Management",
      description: "Efficient querying and data modeling using SQL."
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="neon-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="glass-panel p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-slate-200">
              Computer Science <span className="text-primary">Postgraduate</span>
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              I am currently pursuing my <strong>Master of Computer Applications (MCA)</strong> at <em>BIT Mesra, Ranchi</em>. With a robust background built during my BCA, I am deeply passionate about translating complex logic into highly functional software systems.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              My technical journey is driven by an obsession with <strong>problem-solving</strong>. Whether I am optimizing a data structure, designing an object-oriented architecture, or training a machine learning model for natural language processing, I strive for precision and efficiency.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I am actively seeking an entry-level software development or machine learning role where I can contribute my academic foundation to real-world, high-impact engineering challenges.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass-card p-6 border-slate-800">
                <div className="bg-surface p-3 rounded-lg inline-block mb-4 border border-primary/20 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-200 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
