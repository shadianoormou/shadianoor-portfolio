import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Research from "@/components/Research";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="relative">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Achievements />
      <Education />
      <Certifications />
      <Research />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
