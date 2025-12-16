import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}