import { motion } from "framer-motion";
import { Section } from "./Section";
import { experience } from "@/lib/portfolio-data";
import { ClickableMedia } from "./MediaPreview";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title="Where I've built"
      subtitle="Internships, freelance at scale, and upstream contributions."
    >
      <div className="relative">
        <div
          className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2"
          aria-hidden
        />

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`relative pl-16 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${
                i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""
              }`}
            >
              <div className="absolute left-4 top-2 flex h-5 w-5 items-center justify-center rounded-full border border-primary/50 bg-background md:left-1/2 md:-translate-x-1/2">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <div className="card-elevated overflow-hidden p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-2 mono text-xs text-muted-foreground">
                    {exp.company.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{exp.role}</div>
                    <div className="text-sm text-accent-glow">{exp.company}</div>
                  </div>
                </div>
                <div className="mono mb-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <span>{exp.period}</span>
                  <span>·</span>
                  <span>{exp.location}</span>
                </div>
                {"proofImage" in exp && exp.proofImage && (
                  <div className="mb-4 overflow-hidden rounded-lg border border-border bg-surface-2">
                    <ClickableMedia
                      src={exp.proofImage}
                      alt={`${exp.company} proof`}
                      containerClassName="min-h-[180px] max-h-[280px]"
                      mediaClassName="max-h-[280px] object-contain object-top"
                    />
                  </div>
                )}
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
