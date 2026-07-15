import { useState } from "react";
import { Award, ChevronRight, ExternalLink, X } from "lucide-react";
import { Section } from "./Section";
import { certifications } from "@/lib/portfolio-data";
import type { Certification } from "@/lib/portfolio-data";
import { ClickableMedia, MediaPreviewModal } from "./MediaPreview";

export function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);
  const [preview, setPreview] = useState<{ url: string; title: string } | null>(null);

  const openPreview = (url: string, title: string) => setPreview({ url, title });
  const mainPreview = (c: Certification) => c.mainCertPdf ?? c.mainCertImage;

  return (
    <>
      <Section
        id="certifications"
        eyebrow="Credentials"
        title="Verified certifications"
        subtitle="Specializations completed with graded assessments and capstone projects."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => {
            const main = mainPreview(c);
            return (
              <div key={c.id} className="card-elevated flex flex-col overflow-hidden">
                <div className="relative min-h-[240px] bg-surface-2">
                  {main ? (
                    <ClickableMedia
                      src={main}
                      alt={c.title}
                      kind={c.mainCertPdf ? "pdf" : "image"}
                      containerClassName="h-full min-h-[240px]"
                      mediaClassName="bg-white p-2"
                    />
                  ) : (
                    <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-3 p-6 text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-surface-1 text-primary">
                        <Award className="h-7 w-7" />
                      </div>
                      <p className="text-xs text-muted-foreground">Certificate coming soon</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                  <div className="mt-0.5 text-xs text-accent-glow">{c.issuer}</div>
                  <div className="mono mt-2 text-[11px] text-muted-foreground">{c.detail}</div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {main && (
                      <button
                        type="button"
                        onClick={() => openPreview(main, c.title)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-2 px-3 py-1.5 text-xs text-foreground transition-all hover:border-primary/40"
                      >
                        <ExternalLink className="h-3 w-3" /> Main cert
                      </button>
                    )}
                    {c.courses.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setActive(c)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-2 px-3 py-1.5 text-xs text-foreground transition-all hover:border-primary/40 hover:text-accent-glow"
                      >
                        View all ({c.courses.filter((x) => x.pdfUrl).length}/{c.courseCount})
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-surface-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <div className="font-medium text-foreground">{active.title}</div>
                <div className="text-xs text-muted-foreground">{active.issuer}</div>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="rounded-full border border-border bg-surface-2 p-2"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="overflow-y-auto p-4">
              <div className="space-y-2">
                {active.courses.map((course) => (
                  <button
                    key={course.title}
                    type="button"
                    disabled={!course.pdfUrl}
                    onClick={() =>
                      course.pdfUrl && openPreview(course.pdfUrl, `${active.title} — ${course.title}`)
                    }
                    className="flex w-full items-center justify-between rounded-lg border border-border bg-surface-2/60 px-4 py-3 text-left text-sm transition-all hover:border-primary/40 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span className="text-foreground">{course.title}</span>
                    {course.pdfUrl ? (
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-accent-glow" />
                    ) : (
                      <span className="mono text-[10px] text-muted-foreground">Soon</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {preview && (
        <MediaPreviewModal
          url={preview.url}
          title={preview.title}
          onClose={() => setPreview(null)}
        />
      )}
    </>
  );
}
