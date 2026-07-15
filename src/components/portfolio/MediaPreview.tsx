import { useEffect, useState } from "react";
import { ExternalLink, Maximize2, X } from "lucide-react";

export function isImageUrl(url: string) {
  return /\.(png|jpe?g|webp|gif)(\?|$)/i.test(url);
}

export function isPdfUrl(url: string) {
  return /\.pdf(\?|$)/i.test(url);
}

export function useMediaPreview() {
  const [preview, setPreview] = useState<{ url: string; title?: string } | null>(null);
  return {
    preview,
    openPreview: (url: string, title?: string) => setPreview({ url, title }),
    closePreview: () => setPreview(null),
  };
}

interface MediaPreviewModalProps {
  url: string;
  title?: string;
  onClose: () => void;
}

export function MediaPreviewModal({ url, title, onClose }: MediaPreviewModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const image = isImageUrl(url);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-background/95 p-3 backdrop-blur-md sm:p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full border border-border bg-surface-1 p-2 text-foreground hover:bg-surface-2 sm:right-6 sm:top-6"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-border bg-surface-1 shadow-elevated"
        onClick={(e) => e.stopPropagation()}
      >
        {(title || !image) && (
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3">
            {title && <div className="truncate text-sm font-medium text-foreground">{title}</div>}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex shrink-0 items-center gap-1.5 text-xs text-accent-glow hover:underline"
            >
              Open in new tab <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}

        <div className="min-h-0 flex-1 overflow-auto bg-white">
          {image ? (
            <img
              src={url}
              alt={title ?? "Preview"}
              className="mx-auto block h-full min-h-[60vh] w-full object-contain p-2"
            />
          ) : (
            <iframe src={url} title={title ?? "Document"} className="h-full min-h-[80vh] w-full border-0" />
          )}
        </div>
      </div>
    </div>
  );
}

interface ClickableMediaProps {
  src: string;
  alt: string;
  kind?: "image" | "pdf" | "auto";
  containerClassName?: string;
  mediaClassName?: string;
}

export function ClickableMedia({
  src,
  alt,
  kind = "auto",
  containerClassName = "",
  mediaClassName = "",
}: ClickableMediaProps) {
  const [open, setOpen] = useState(false);
  const resolved = kind === "auto" ? (isPdfUrl(src) ? "pdf" : "image") : kind;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative block w-full overflow-hidden text-left ${containerClassName}`}
        aria-label={`View full ${alt}`}
      >
        {resolved === "pdf" ? (
          <div className="relative h-full min-h-[200px] w-full bg-white">
            <iframe
              src={`${src}#toolbar=0&navpanes=0&view=FitH`}
              title={alt}
              className="pointer-events-none absolute left-0 top-0 h-[220%] w-[220%] origin-top-left scale-[0.45] border-0"
            />
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`h-full w-full object-contain ${mediaClassName}`}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors group-hover:bg-background/50">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/90 px-3 py-1.5 text-xs font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
            <Maximize2 className="h-3.5 w-3.5" />
            View full
          </span>
        </div>
      </button>

      {open && <MediaPreviewModal url={src} title={alt} onClose={() => setOpen(false)} />}
    </>
  );
}
