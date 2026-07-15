import { useState } from "react";
import { X, Github, ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { projects, personalInfo } from "@/lib/portfolio-data";
import { isGoogleDriveUrl } from "@/lib/portfolio-data";

export function Projects() {
  const [modal, setModal] = useState<string | null>(null);
  const active = projects.find((p) => p.id === modal);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <Section
        id="projects"
        eyebrow="Selected work"
        title="Systems that ship"
        subtitle="Production-grade projects with real metrics — not tutorials, not portfolios of tutorials."
        action={
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-1 px-4 py-2 text-sm text-foreground transition-all hover:border-primary/40"
          >
            <Github className="h-4 w-4" /> All repos <ArrowRight className="h-3.5 w-3.5" />
          </a>
        }
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              large
              onPlay={() => setModal(p.id)}
            />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onPlay={() => setModal(p.id)}
              />
            ))}
          </div>
        )}
      </Section>

      {modal && active?.demoVideoUrl && (
        <div
          onClick={() => setModal(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
        >
          <button
            onClick={() => setModal(null)}
            className="absolute right-6 top-6 rounded-full border border-border bg-surface-1 p-2 text-foreground hover:bg-surface-2"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-black"
          >
            {isGoogleDriveUrl(active.demoVideoUrl) ? (
              <iframe
                src={active.demoVideoUrl}
                title={`${active.title} demo`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="aspect-video w-full border-0"
              />
            ) : (
              <video
                src={active.demoVideoUrl}
                controls
                autoPlay
                playsInline
                className="w-full"
              />
            )}
            <div className="border-t border-border bg-surface-1 p-4">
              <div className="font-medium text-foreground">{active.title}</div>
              <div className="text-sm text-muted-foreground">{active.tagline}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
