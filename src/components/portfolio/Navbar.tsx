import { Link } from "@tanstack/react-router";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/portfolio-data";
import { scrollToTop } from "./ScrollControls";

const NAV_LINKS = [
  { label: "Home", href: "#top", isHome: true },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

function handleNavClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  link: (typeof NAV_LINKS)[number],
  onDone?: () => void,
) {
  if (link.isHome) {
    e.preventDefault();
    scrollToTop();
    onDone?.();
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="mono text-sm font-medium tracking-tight text-foreground hover:text-accent-glow transition-colors"
        >
          Hassan<span className="text-primary">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={personalInfo.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-1 px-3.5 py-2 text-xs font-medium text-foreground transition-all hover:border-primary/50 hover:bg-surface-2"
          >
            <Download className="h-3.5 w-3.5" />
            CV
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l, () => setOpen(false))}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-surface-1 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface-1 px-3.5 py-2.5 text-sm font-medium"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
