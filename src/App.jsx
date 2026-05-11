import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Members from './components/Members';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-night text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Members />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
