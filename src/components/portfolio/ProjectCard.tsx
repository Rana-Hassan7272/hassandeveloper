import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Play, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";
import { isGoogleDriveUrl } from "@/lib/portfolio-data";

interface Props {
  project: Project;
  large?: boolean;
  onPlay: () => void;
}

export function ProjectCard({ project, large, onPlay }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const canHoverVideo = project.demoVideoUrl && !isGoogleDriveUrl(project.demoVideoUrl);

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -3, y: px * 3 });
  };
  const onLeave = () => {
    setTilt({ x: 0, y: 0 });
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  const onEnter = () => {
    if (canHoverVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 120ms ease-out",
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl card-elevated"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-surface-2">
        <div className="absolute inset-0 bg-mesh opacity-40" aria-hidden />
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            canHoverVideo ? "group-hover:opacity-40" : ""
          }`}
        />
        {canHoverVideo && (
          <video
            ref={videoRef}
            src={project.demoVideoUrl}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="mono rounded-md border border-white/10 bg-background/70 px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur-md">
            {project.category}
          </span>
          {project.badge && (
            <span className="mono rounded-md border border-primary/40 bg-primary/15 px-2 py-1 text-[10px] uppercase tracking-wider text-accent-glow backdrop-blur-md">
              {project.badge}
            </span>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
          <h3
            className={`font-semibold text-foreground drop-shadow-lg ${
              large ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-accent-glow">{project.tagline}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mono mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] text-muted-foreground">
          {project.metrics.map((m) => (
            <div key={m} className="flex items-center gap-1.5">
              <span className="text-primary">▹</span>
              <span className="truncate" title={m}>
                {m}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 6).map((t) => (
            <span
              key={t}
              className="mono rounded-md border border-border bg-surface-2/60 px-2 py-0.5 text-[10px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
          {project.techStack.length > 6 && (
            <span className="mono px-2 py-0.5 text-[10px] text-muted-foreground/60">
              +{project.techStack.length - 6}
            </span>
          )}
        </div>

        <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-2 px-3 py-1.5 text-xs text-foreground transition-all hover:border-primary/40 hover:text-accent-glow"
            >
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-2 px-3 py-1.5 text-xs text-foreground transition-all hover:border-primary/40 hover:text-accent-glow"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live
            </a>
          )}
          {project.demoVideoUrl && (
            <button
              onClick={onPlay}
              className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              <Play className="h-3.5 w-3.5" /> Demo
            </button>
          )}
          {!project.demoVideoUrl && (
            <span className="ml-auto text-muted-foreground/60">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
