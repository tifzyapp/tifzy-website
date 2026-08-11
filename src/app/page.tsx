import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AppShowcase from "@/components/AppShowcase";
import Stats from "@/components/Stats";
import WhyChoose from "../components/WhyChoose";
import Features from "../components/Features";
import Packages from "../components/Packages";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Download from "../components/Download";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#070715]">

      {/* ===== Animated Background ===== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="bg-glow-purple top-[-150px] left-[-120px]" />

        <div className="bg-glow-pink top-[35%] right-[-140px]" />

        <div className="bg-glow-blue bottom-[-120px] left-[35%]" />

      </div>

      {/* ===== Website Content ===== */}

      <div className="relative z-10">

       <ParticlesBackground />
       
        <Navbar />

        <Hero />

        <Stats />

        <WhyChoose />

        <Features />

        <AppShowcase />

        <Packages />

        <HowItWorks />

        <Testimonials />

        <Download />

        <Contact />

        <Footer />

      </div>

    </main>
  );
}