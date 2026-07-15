import {
  Briefcase,
  Building2,
  Cloud,
  Cpu,
  GraduationCap,
  Heart,
  Layers,
  Trophy,
} from "lucide-react";
import { trustedByLogos } from "@/lib/portfolio-data";

const ICON_MAP = {
  cloud: Cloud,
  graduation: GraduationCap,
  cpu: Cpu,
  layers: Layers,
  heart: Heart,
  trophy: Trophy,
  briefcase: Briefcase,
  building: Building2,
} as const;

export function TrustedBy() {
  const doubled = [...trustedByLogos, ...trustedByLogos];

  return (
    <section
      aria-label="Worked with and contributed to"
      className="relative border-y border-border/60 bg-surface-1/30 py-10"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mono mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
          Worked with · Contributed to
        </div>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee items-center gap-12">
            {doubled.map((logo, i) => {
              const Icon = ICON_MAP[logo.icon];
              return (
                <div
                  key={`${logo.name}-${i}`}
                  className="group flex shrink-0 items-center gap-3 px-4"
                  title={logo.name}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2/80 text-primary transition-colors group-hover:border-primary/40 group-hover:text-accent-glow">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="mono text-sm font-medium text-muted-foreground/60 transition-colors group-hover:text-foreground">
                    {logo.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
