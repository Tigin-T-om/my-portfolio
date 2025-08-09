import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Education />
      <Blog />
      <Contact />
      <Footer /> 
    </main>
  );
}