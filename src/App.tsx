
import Navbar from './components/Navbar';
import Section from './components/Section';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />

      <main>
        <Hero />

        <Section id="skills" title="Technical Skills" className="bg-slate-900/50">
          <Skills />
        </Section>

        <Section id="experience" title="Work Experience">
          <Experience />
        </Section>

        <Section id="projects" title="Featured Projects" className="bg-slate-900/50">
          <Projects />
        </Section>

        <Section id="education" title="Education & Certifications">
          <Education />
        </Section>

        <Section id="contact" title="Get In Touch" className="pb-32">
          <Contact />
        </Section>
      </main>

      <footer className="py-8 bg-slate-950 text-center text-slate-500 text-sm border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Utukuru Bharath Kumar. All rights reserved.</p>
          <p className="flex items-center gap-2">Built with <span className="text-white">React</span> & <span className="text-white">Tailwind</span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
