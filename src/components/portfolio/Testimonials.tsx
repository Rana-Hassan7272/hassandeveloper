import { Star } from "lucide-react";
import { Section } from "./Section";
import { testimonials, personalInfo } from "@/lib/portfolio-data";
import { ClickableMedia } from "./MediaPreview";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Clients"
      title="What clients say"
      subtitle="Selected verified Fiverr reviews across ML, RAG, and full-stack engagements."
      action={
        <a
          href={personalInfo.socials.fiverr}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent-glow hover:underline"
        >
          View all on Fiverr →
        </a>
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <div key={i} className="card-elevated flex flex-col overflow-hidden">
            <div className="relative min-h-[200px] bg-surface-2">
              <ClickableMedia
                src={t.image}
                alt={`Review from ${t.country}`}
                containerClassName="min-h-[200px] max-h-[280px]"
                mediaClassName="max-h-[280px] object-contain object-top"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-3 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-accent-glow text-accent-glow"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="text-sm font-medium text-foreground">{t.name}</div>
                <div className="mono mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span>{t.country}</span>
                  <span>·</span>
                  <span>{t.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
