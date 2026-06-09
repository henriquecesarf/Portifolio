import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/SectionHeading";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { RevealSection } from "@/components/RevealSection";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <RevealSection immediate>
          <Hero />
        </RevealSection>
        <RevealSection>
          <About />
        </RevealSection>
        <RevealSection>
          <Experience />
        </RevealSection>
        <RevealSection>
          <Skills />
        </RevealSection>
        <RevealSection>
          <Education />
        </RevealSection>
        <RevealSection>
          <Projects />
        </RevealSection>
        <RevealSection>
          <Contact />
        </RevealSection>
      </main>
      <Footer />
    </>
  );
}
