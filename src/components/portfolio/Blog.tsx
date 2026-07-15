import { ArrowUpRight, BookOpen } from "lucide-react";
import { Section } from "./Section";
import { blogs, personalInfo } from "@/lib/portfolio-data";

export function Blog() {
  return (
    <Section
      id="blog"
      eyebrow="Writing"
      title="Research & analysis"
      subtitle="Long-form technical writing on RAG failure modes, inference optimization, and production AI systems."
      action={
        <a
          href={personalInfo.socials.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent-glow hover:underline"
        >
          More on Medium →
        </a>
      }
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {blogs.map((b) => (
          <a
            key={b.title}
            href={b.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group card-elevated flex flex-col p-6"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-glow">
              {b.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {b.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {b.tags.map((t) => (
                <span
                  key={t}
                  className="mono rounded-md border border-border bg-surface-2/60 px-2 py-0.5 text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-1 text-sm text-accent-glow">
              Read on Medium
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
