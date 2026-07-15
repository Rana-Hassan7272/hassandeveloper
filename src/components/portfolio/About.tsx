import { Github, Linkedin, FileCode2, PenTool, Briefcase } from "lucide-react";
import { Section } from "./Section";
import { personalInfo } from "@/lib/portfolio-data";
import { ClickableMedia } from "./MediaPreview";

const MINI_STATS = [
  { value: "3rd", label: "FYP · University" },
  { value: "400+", label: "HF downloads" },
  { value: "2 OSS PRs", label: "vLLM + LiteLLM" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineer, not tourist"
      subtitle="I build production AI, not prototypes. From first-principles transformers to shipped RAG platforms."
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-16">
        <div className="md:col-span-2">
          <div className="group relative aspect-square overflow-hidden rounded-2xl card-elevated">
            <div className="absolute inset-0 bg-mesh opacity-60" aria-hidden />
            <ClickableMedia
              src={personalInfo.aboutImage}
              alt={personalInfo.name}
              containerClassName="h-full w-full"
              mediaClassName="h-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all group-hover:ring-primary/30" />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-border/70 bg-background/70 p-3 backdrop-blur-md">
              <div className="mono text-[11px] text-muted-foreground">📍 Pakistan</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
            <p>
              I&apos;m a production-focused AI engineer from Pakistan. I ship production-ready
              RAG systems, multi-agent LangGraph pipelines, and full MLOps platforms — the kind
              that survive real users, not just demos. My flagship,{" "}
              <span className="font-medium text-foreground">FinGuard AI</span>, placed{" "}
              <span className="font-medium text-foreground">3rd in the university FYP competition</span>{" "}
              as Pakistan&apos;s first fully-automated personal finance platform.
            </p>
            <p>
              I also build full-stack websites with MERN and Next.js — production sites that are
              fast, SEO-optimized, and scaled for real traffic. For non-technical clients, I design
              workflow automation that turns manual, repetitive work into reliable systems and saves
              hours every week.
            </p>
            <p>
              I care about the stack end-to-end: from BPE tokenizers, KV-caches, and LoRA adapters
              up through FastAPI + Celery workers, Kubernetes rollouts, and Prometheus drift alerts.
              I contribute upstream to{" "}
              <a
                href="https://github.com/vllm-project/vllm/pull/42557"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-glow underline-offset-4 hover:underline"
              >
                vLLM
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/BerriAI/litellm/pull/27998"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-glow underline-offset-4 hover:underline"
              >
                LiteLLM
              </a>{" "}
              because open source is where I learned what production actually means.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {MINI_STATS.map((s) => (
              <div key={s.label} className="card-elevated p-4">
                <div className="mono text-lg font-semibold text-foreground md:text-xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground md:text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <SocialIcon href={personalInfo.socials.github} label="GitHub">
              <Github className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={personalInfo.socials.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={personalInfo.socials.huggingface} label="HuggingFace">
              🤗
            </SocialIcon>
            <SocialIcon href={personalInfo.socials.medium} label="Medium">
              <PenTool className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={personalInfo.socials.leetcode} label="LeetCode">
              <FileCode2 className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={personalInfo.socials.fiverr} label="Fiverr">
              <Briefcase className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </Section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      aria-label={label}
      className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-surface-1 px-3 text-xs text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
    >
      {children}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
