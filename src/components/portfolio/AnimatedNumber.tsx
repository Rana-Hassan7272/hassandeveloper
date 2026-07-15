import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  value: number;
  duration?: number;
  decimals?: number;
}

export function AnimatedNumber({ value, duration = 1.6, decimals }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const d = decimals ?? (Number.isInteger(value) ? 0 : value < 10 ? 2 : 1);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted = inView
    ? display.toLocaleString(undefined, {
        minimumFractionDigits: d,
        maximumFractionDigits: d,
      })
    : (0).toFixed(d);

  return (
    <span ref={ref} className="inline-block">
      {formatted}
    </span>
  );
}
