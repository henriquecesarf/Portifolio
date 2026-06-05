"use client";

import { ExternalLink, Globe, Smartphone, Star } from "lucide-react";
import { usePortfolioContent } from "@/i18n/I18nProvider";
import type { Project } from "@/i18n/types";
import { SectionHeading } from "./SectionHeading";

function ProjectBadges({
  project,
  primaryLabel,
  platformMobile,
  platformWeb,
}: {
  project: Project;
  primaryLabel: string;
  platformMobile: string;
  platformWeb: string;
}) {
  const platformLabel = project.platform === "mobile" ? platformMobile : platformWeb;
  const PlatformIcon = project.platform === "mobile" ? Smartphone : Globe;
  const platformClassName =
    project.platform === "mobile"
      ? "border-violet-400/30 bg-violet-500/10 text-violet-300"
      : "border-sky-400/30 bg-sky-500/10 text-sky-300";

  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.primary && (
        <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-300">
          <Star size={12} />
          {primaryLabel}
        </span>
      )}
      <span
        className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${platformClassName}`}
      >
        <PlatformIcon size={12} />
        {platformLabel}
      </span>
      {project.company && (
        <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-slate-400">
          {project.company}
        </span>
      )}
    </div>
  );
}

function TechTags({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className={`rounded-md px-2 py-1 text-xs ${
            project.platform === "mobile"
              ? "bg-violet-500/10 text-violet-300"
              : "bg-sky-500/10 text-sky-300"
          }`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function FeaturedProjectCard({
  project,
  primaryLabel,
  platformMobile,
  platformWeb,
}: {
  project: Project;
  primaryLabel: string;
  platformMobile: string;
  platformWeb: string;
}) {
  if (project.primary) {
    return (
      <article className="rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-500/10 via-white/[0.03] to-indigo-500/10 p-8 md:p-10">
        <div className="mb-4 space-y-3">
          <ProjectBadges
            project={project}
            primaryLabel={primaryLabel}
            platformMobile={platformMobile}
            platformWeb={platformWeb}
          />
          <h3 className="text-2xl font-bold text-white md:text-3xl">{project.name}</h3>
        </div>

        <p className="mb-6 max-w-3xl text-base leading-relaxed text-slate-300">
          {project.description}
        </p>

        {project.highlights && (
          <ul className="mb-6 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2 text-sm text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <TechTags project={project} />
      </article>
    );
  }

  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-4 space-y-2">
        <ProjectBadges
          project={project}
          primaryLabel={primaryLabel}
          platformMobile={platformMobile}
          platformWeb={platformWeb}
        />
        <h3 className="font-semibold text-white">{project.name}</h3>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>
      <TechTags project={project} />
    </article>
  );
}

function StudyProjectCard({
  project,
  platformMobile,
  platformWeb,
}: {
  project: Project;
  platformMobile: string;
  platformWeb: string;
}) {
  const platformLabel = project.platform === "mobile" ? platformMobile : platformWeb;
  const PlatformIcon = project.platform === "mobile" ? Smartphone : Globe;
  const platformClassName =
    project.platform === "mobile"
      ? "border-violet-400/30 bg-violet-500/10 text-violet-300"
      : "border-sky-400/30 bg-sky-500/10 text-sky-300";

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="space-y-2">
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${platformClassName}`}
          >
            <PlatformIcon size={12} />
            {platformLabel}
          </span>
          <h3 className="font-semibold text-white group-hover:text-slate-200">{project.name}</h3>
        </div>
        <ExternalLink
          size={16}
          className="shrink-0 text-slate-500 transition group-hover:text-sky-400"
        />
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>
      <TechTags project={project} />
    </a>
  );
}

export function Projects() {
  const { featuredProjects, studyProjects, ui } = usePortfolioContent();
  const primaryProject = featuredProjects.find((project) => project.primary);
  const otherFeatured = featuredProjects.filter((project) => !project.primary);

  return (
    <section id="projetos" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={ui.projects.eyebrow}
          title={ui.projects.title}
          description={ui.projects.description}
        />

        {primaryProject && (
          <div className="mb-8">
            <FeaturedProjectCard
              project={primaryProject}
              primaryLabel={ui.projects.primaryProject}
              platformMobile={ui.projects.platformMobile}
              platformWeb={ui.projects.platformWeb}
            />
          </div>
        )}

        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {otherFeatured.map((project) => (
            <FeaturedProjectCard
              key={project.name}
              project={project}
              primaryLabel={ui.projects.primaryProject}
              platformMobile={ui.projects.platformMobile}
              platformWeb={ui.projects.platformWeb}
            />
          ))}
        </div>

        <div className="mb-8">
          <h3 className="mb-2 text-lg font-semibold text-white">{ui.projects.studyTitle}</h3>
          <p className="text-sm text-slate-400">{ui.projects.studyDescription}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studyProjects.map((project) => (
            <StudyProjectCard
              key={project.name}
              project={project}
              platformMobile={ui.projects.platformMobile}
              platformWeb={ui.projects.platformWeb}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
