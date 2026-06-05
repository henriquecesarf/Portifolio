import { experiences } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experiencia" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Carreira"
          title="Experiência profissional"
          description="Projetos de alta escala, sistemas em tempo real e entregas com impacto mensurável."
        />

        <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-white/10 md:before:left-1/2 md:before:-translate-x-px">
          {experiences.map((item, index) => (
            <article
              key={item.company}
              className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${
                index % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
              }`}
            >
              <div className="md:text-right">
                <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-2 border-sky-400 bg-[#0a0f1a] md:left-1/2 md:-translate-x-1/2" />
                <p className="pl-10 text-sm font-medium text-sky-400 md:pl-0">{item.period}</p>
                <h3 className="mt-1 pl-10 text-xl font-semibold text-white md:pl-0">
                  {item.role}
                </h3>
                <p className="pl-10 text-slate-400 md:pl-0">
                  {item.company} · {item.location}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:ml-0">
                <ul className="space-y-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
