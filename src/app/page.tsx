import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience, Achievements } from "@/components/Experience";
import { Contact, Footer } from "@/components/Contact";
import { portfolioData } from "@/data/portfolio";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Engineering with <span className="text-secondary">Purpose</span></h2>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
          {portfolioData.about}
        </p>

      </div>
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
