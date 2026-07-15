import { ArrowUpRight, Bot, Layers, Rocket } from "lucide-react";
import { Section } from "./Section";
import { services, personalInfo } from "@/lib/portfolio-data";

const ICONS = [Bot, Layers, Rocket];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Freelance"
      title="Available for elite builds"
      subtitle="Production-grade AI engagements — not toy prototypes. Delivered on Fiverr with 5/5 rating across 30+ projects."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {services.map((s, i) => {
          const Icon = ICONS[i];
          return (
            <div key={s.title} className="card-elevated flex flex-col p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="mono rounded-md border border-border bg-surface-2/60 px-2 py-0.5 text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={personalInfo.socials.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-between rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-xs font-medium text-foreground transition-all hover:border-primary/40 hover:text-accent-glow"
              >
                Hire on Fiverr
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
