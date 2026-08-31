import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Team from "@/sections/Team";
import Projects from "@/sections/Projects";
import Process from "@/sections/Process";
import WhyUs from "@/sections/WhyUs";
import Pricing from "@/sections/Pricing";
import Contact from "@/sections/Contact";
import Faq from "@/sections/Faq";
import LogoMarquee from "@/components/LogoMarquee";
import MotionController from "@/components/MotionController";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <LogoMarquee />
      <Projects />
      <Process />
      <WhyUs />
      <Pricing />
      <Contact />
      <Faq />
      <Footer />
      <MotionController />
    </main>
  );
}
