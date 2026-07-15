import { useState } from "react";
import { Section } from "./Section";
import { skillGroups } from "@/lib/portfolio-data";

export function Skills() {
  const [active, setActive] = useState(0);

  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title="Skills, honestly"
      subtitle="No progress bars. These are the tools I ship with in production — grouped by where they live in the stack."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Tab column */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-1 md:col-span-1 md:border-r md:border-border md:pr-6">
          {skillGroups.map((g, i) => (
            <button
              key={g.name}
              onClick={() => setActive(i)}
              className={`flex shrink-0 items-center justify-between rounded-lg px-4 py-3 text-sm transition-all ${
                active === i
                  ? "bg-surface-2 text-foreground"
                  : "text-muted-foreground hover:bg-surface-1 hover:text-foreground"
              }`}
            >
              <span className="text-left">{g.name}</span>
              <span className="mono ml-4 text-xs text-muted-foreground/60">
                {g.skills.length.toString().padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>

        {/* Skills pills */}
        <div className="md:col-span-3">
          <div className="card-elevated p-6 md:p-8">
            <div className="mono mb-6 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="text-primary">▸</span>
              {skillGroups[active].name}
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroups[active].skills.map((s) => (
                <span
                  key={s}
                  className="mono rounded-md border border-border bg-surface-2/60 px-3 py-1.5 text-xs text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-accent-glow"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
