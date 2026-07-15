import { Github, Linkedin, PenTool, Briefcase, FileCode2 } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface-1/40">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="mono text-sm font-medium text-foreground">
              Hassan<span className="text-primary">.</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              AI/ML Engineer · Pakistan
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FooterIcon href={personalInfo.socials.github}>
              <Github className="h-4 w-4" />
            </FooterIcon>
            <FooterIcon href={personalInfo.socials.linkedin}>
              <Linkedin className="h-4 w-4" />
            </FooterIcon>
            <FooterIcon href={personalInfo.socials.medium}>
              <PenTool className="h-4 w-4" />
            </FooterIcon>
            <FooterIcon href={personalInfo.socials.leetcode}>
              <FileCode2 className="h-4 w-4" />
            </FooterIcon>
            <FooterIcon href={personalInfo.socials.fiverr}>
              <Briefcase className="h-4 w-4" />
            </FooterIcon>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
          © {year} Muhammad Hassan Shahbaz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-1 text-muted-foreground transition-all hover:border-primary/40 hover:text-accent-glow"
    >
      {children}
    </a>
  );
}
