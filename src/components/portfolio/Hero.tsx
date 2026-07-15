import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { personalInfo, heroStats } from "@/lib/portfolio-data";
import { AnimatedNumber } from "./AnimatedNumber";

export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden">
      <img
        src={personalInfo.heroImage}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" aria-hidden />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-background/50 px-3.5 py-1.5 text-xs backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-success/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="text-foreground/90">{personalInfo.availability}</span>
          <span className="mono text-[10px] text-muted-foreground/60">·</span>
          <span className="mono text-[10px] text-foreground/80">Pakistan</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl font-semibold leading-[1.02] tracking-tight text-foreground drop-shadow-sm md:text-7xl lg:text-8xl"
        >
          Muhammad Hassan
          <br />
          <span className="text-accent-gradient">Shahbaz</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg text-foreground/90 md:text-xl"
        >
          {personalInfo.headline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 text-base text-muted-foreground md:text-lg"
        >
          Pakistan
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-background/50 px-5 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:border-primary/40 hover:bg-background/70"
          >
            <Sparkles className="h-4 w-4 text-accent-glow" />
            Let&apos;s Talk
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-10 md:grid-cols-4"
        >
          {heroStats.map((s) => (
            <div key={s.label}>
              <div className="mono text-2xl font-semibold text-foreground md:text-3xl">
                {s.prefix ?? ""}
                <AnimatedNumber value={s.value} decimals={s.decimals} />
                {s.suffix ?? ""}
              </div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
