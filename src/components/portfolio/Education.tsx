import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <Section id="education" eyebrow="Foundation" title="Education">
      <div className="space-y-5">
        {education.map((edu) => (
          <div key={edu.school} className="card-elevated p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="mono text-xs text-primary">{edu.period}</div>
                <h3 className="mt-1 text-xl font-semibold text-foreground md:text-2xl">
                  {edu.degree}
                </h3>
                <div className="mt-1 text-accent-glow">{edu.school}</div>
                <div className="mono mt-2 text-sm text-muted-foreground">
                  <span className="text-foreground">{edu.score}</span>
                  {edu.school.includes("UET") && (
                    <>
                      <span className="mx-3 text-border">|</span>
                      NSCT 2026: <span className="text-foreground">92.2 percentile</span>
                    </>
                  )}
                </div>
                {edu.coursework.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {edu.coursework.map((c) => (
                      <span
                        key={c}
                        className="mono rounded-md border border-border bg-surface-2/60 px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
