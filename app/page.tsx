import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ScrollProgressBar } from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <Projects />
      <Achievements />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
