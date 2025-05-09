import Hero from "../components/Hero";
import LogoAnimation from "../components/LogoAnimation";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import KeyMetrics from "../components/KeyMetrics";
import StarsCanvas from "../components/StarsCanvas";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <StarsCanvas />
      <Navbar />
      <Hero />
      <Skills />
      <LogoAnimation />
      <Projects />
      <KeyMetrics />
      <Contact />
    </>
  );
}
