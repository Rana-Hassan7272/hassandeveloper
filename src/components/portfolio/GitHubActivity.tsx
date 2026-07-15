import { lazy, Suspense, useEffect, useState } from "react";
import { Star, GitPullRequest, Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { personalInfo, openSourcePRs } from "@/lib/portfolio-data";

const GitHubCalendar = lazy(async () => {
  const mod: any = await import("react-github-calendar");
  return { default: mod.default ?? mod.GitHubCalendar };
}) as any;

const GITHUB_STATS = [
  { icon: Github, label: "Public repos", value: "25+" },
  { icon: Star, label: "Stars earned", value: "40k+*" },
  { icon: GitPullRequest, label: "OSS PRs", value: "2" },
  { icon: () => <span className="text-lg">🤗</span>, label: "HF assets", value: "3+" },
];

export function GitHubActivity() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <Section
      id="github"
      eyebrow="Open Source"
      title="Contributions that land"
      subtitle="Merged PRs on projects with real production users — where the details matter."
    >
      {/* Contribution graph */}
      <div className="card-elevated p-6 md:p-8">
        <div className="mono mb-6 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>
            <span className="text-primary">▸</span> github.com/
            {personalInfo.githubUsername}
          </span>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-accent-glow"
          >
            View profile <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <div className="overflow-x-auto min-h-[180px]">
          {mounted ? (
            <Suspense fallback={<div className="h-[160px] animate-pulse rounded bg-surface-2/40" />}>
              <GitHubCalendar
                username={personalInfo.githubUsername}
                colorScheme="dark"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                theme={{
                  dark: ["#191B21", "#312e81", "#4f46e5", "#6366F1", "#818CF8"],
                }}
              />
            </Suspense>
          ) : (
            <div className="h-[160px] animate-pulse rounded bg-surface-2/40" />
          )}
        </div>


        {/* Stats grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-6 md:grid-cols-4">
          {GITHUB_STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="rounded-lg bg-surface-2/40 p-4">
                <div className="mb-2 text-primary">
                  <Icon />
                </div>
                <div className="mono text-xl font-semibold text-foreground">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
        <p className="mono mt-3 text-[10px] text-muted-foreground/60">
          *combined stars of upstream repos I've contributed to
        </p>
      </div>

      {/* OSS PR cards */}
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {openSourcePRs.map((pr) => (
          <a
            key={pr.prNumber}
            href={pr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl card-elevated p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="mono text-sm text-muted-foreground">
                <span className="text-accent-glow">{pr.repo}</span>
              </div>
              <div className="inline-flex items-center gap-1 rounded-md border border-border bg-surface-2 px-2 py-1 text-[11px]">
                <Star className="h-3 w-3 text-accent-glow" /> {pr.stars}
              </div>
            </div>
            <div className="mono mb-2 text-xs text-primary">
              PR {pr.prNumber}
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {pr.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {pr.summary}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm text-accent-glow">
              View PR
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
