import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function scrollToBottom() {
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
}

export function ScrollControls() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShowUp(y > 320);
      setShowDown(y < max - 80);
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
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-elevated backdrop-blur-md transition-all hover:border-primary/50 hover:bg-surface-1 hover:text-accent-glow"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
