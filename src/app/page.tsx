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
import IntroLoader from "@/components/IntroLoader";

export default function Home() {
  return (
    <main className="relative">
      <IntroLoader />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Journey />
      <Projects />
      <Achievements />
      <Certifications />
      <Research />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
