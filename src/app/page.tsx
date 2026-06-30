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

function SectionDivider() {
  return <div className="section-separator" aria-hidden />;
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <RevealSection immediate>
          <Hero />
        </RevealSection>
        <SectionDivider />
        <RevealSection>
          <About />
        </RevealSection>
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <RevealSection>
          <Skills />
        </RevealSection>
        <SectionDivider />
        <RevealSection>
          <Education />
        </RevealSection>
        <SectionDivider />
        <RevealSection>
          <Projects />
        </RevealSection>
        <SectionDivider />
        <RevealSection>
          <Contact />
        </RevealSection>
      </main>
      <Footer />
    </>
  );
}
