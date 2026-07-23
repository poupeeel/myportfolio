import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertises from "@/components/sections/Expertises";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium cursor trail */}
      <CustomCursor />

      {/* Floating navigation header */}
      <Navbar />

      {/* Page Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Expertises />
        <Projects />
        <Timeline />
        <TechStack />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
