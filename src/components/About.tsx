import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Sobre mim"
          title="Resumo profissional"
          description="Um pouco da minha trajetória e do que me move como desenvolvedor."
        />
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-lg leading-relaxed text-slate-300">{profile.summary}</p>
        </div>
      </div>
    </section>
  );
}
