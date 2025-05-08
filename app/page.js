import Hero from "../components/Hero";
import LogoAnimation from "../components/LogoAnimation";
import Stack from "../components/Stack";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import KeyMetrics from "../components/KeyMetrics";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stack />
      <LogoAnimation />
      <Portfolio />
      <KeyMetrics />
    </>
  );
}
