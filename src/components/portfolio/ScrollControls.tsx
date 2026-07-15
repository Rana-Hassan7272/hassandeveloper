import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const PAGE_SECTIONS = [
  "home",
  "trusted-by",
  "about",
  "skills",
  "projects",
  "github",
  "experience",
  "achievements",
  "services",
  "testimonials",
  "certifications",
  "education",
  "blog",
  "contact",
] as const;

const SCROLL_OFFSET = 96;

function getSectionTop(id: string) {
  const el = document.getElementById(id);
  if (!el) return null;
  return el.getBoundingClientRect().top + window.scrollY;
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function scrollToNextSection() {
  const current = window.scrollY + SCROLL_OFFSET;

  for (const id of PAGE_SECTIONS) {
    const top = getSectionTop(id);
    if (top !== null && top > current + 40) {
      window.scrollTo({ top: Math.max(0, top - SCROLL_OFFSET), behavior: "smooth" });
      return;
    }
  }
}

function hasNextSection() {
  const current = window.scrollY + SCROLL_OFFSET;
  return PAGE_SECTIONS.some((id) => {
    const top = getSectionTop(id);
    return top !== null && top > current + 40;
  });
}

export function ScrollControls() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowUp(window.scrollY > 320);
      setShowDown(hasNextSection());
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!showUp && !showDown) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 sm:bottom-8 sm:right-8"
      aria-label="Scroll controls"
    >
      {showUp && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-elevated backdrop-blur-md transition-all hover:border-primary/50 hover:bg-surface-1 hover:text-accent-glow"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
      {showDown && (
        <button
          type="button"
          onClick={scrollToNextSection}
          aria-label="Scroll to next section"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-elevated backdrop-blur-md transition-all hover:border-primary/50 hover:bg-surface-1 hover:text-accent-glow"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
