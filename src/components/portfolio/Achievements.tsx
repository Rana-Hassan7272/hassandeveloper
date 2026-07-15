import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { achievements } from "@/lib/portfolio-data";
import { AnimatedNumber } from "./AnimatedNumber";
import { ClickableMedia } from "./MediaPreview";

export function Achievements() {
  return (
    <Section
        id="achievements"
        eyebrow="Signals"
        title="Numbers that don't lie"
        subtitle="Competitive rankings, model downloads, and platform ratings — audited by third parties, not me."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <article key={a.title} className="group card-elevated relative overflow-hidden">
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-0"
                aria-label={`Open ${a.title}`}
              />

              <div className="relative z-10 p-6 pointer-events-none">
                {"image" in a && a.image && (
                  <div className="pointer-events-auto mb-4 overflow-hidden rounded-lg border border-border bg-surface-2">
                    <ClickableMedia
                      src={a.image}
                      alt={a.title}
                      containerClassName="min-h-[160px] max-h-[220px] bg-surface-2"
                      mediaClassName="max-h-[220px] object-contain object-top p-1"
                    />
                  </div>
                )}

                <div className="absolute right-4 top-4 text-muted-foreground/40 transition-all group-hover:text-accent-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                <div className="mono text-xs text-primary">{a.title}</div>
                <div className="mt-3 flex items-baseline gap-1">
                  {"displayText" in a && a.displayText ? (
                    <span className="mono text-2xl font-semibold text-gradient md:text-3xl">
                      {a.displayText}
                    </span>
                  ) : (
                    <>
                      <span className="mono text-3xl font-semibold text-gradient md:text-4xl">
                        <AnimatedNumber value={a.value} />
                      </span>
                      <span className="mono text-sm text-muted-foreground">{a.suffix}</span>
                    </>
                  )}
                </div>
                <div className="mt-2 text-sm font-medium text-foreground">{a.subtitle}</div>
                <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.detail}</div>
              </div>
            </article>
          ))}
        </div>
      </Section>
  );
}
