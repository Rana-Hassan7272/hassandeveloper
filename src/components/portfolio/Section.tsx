import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  action,
  children,
  className,
}: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32 ${
        className ?? ""
      }`}
    >
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <div className="mono mb-3 inline-flex items-center gap-2 text-xs text-primary">
              <span className="h-px w-8 bg-primary/60" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl text-gradient">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
        {action && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {action}
          </motion.div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
