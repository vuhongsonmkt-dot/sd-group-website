"use client";

import { useEffect, useRef } from "react";

/**
 * Idea Reactor — decorative SVG/CSS scene. Content never depends on it.
 * Pointer tilt only on fine pointers, off under prefers-reduced-motion,
 * animation paused while off-screen. No WebGL, so there is nothing to fail.
 */
export default function IdeaReactor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => el.classList.toggle("is-paused", !e.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches;
    if (calm) return () => io.disconnect();
    let raf = 0;
    const move = (ev: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, (ev.clientX - r.left) / r.width * 2 - 1));
        const y = Math.max(-1, Math.min(1, (ev.clientY - r.top) / r.height * 2 - 1));
        el.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${(x * 9).toFixed(2)}deg`);
      });
    };
    const leave = () => { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); };
    window.addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerleave", leave);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); io.disconnect(); };
  }, []);

  return (
    <div className="sd-reactor" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 520 520" focusable="false">
        <defs>
          <radialGradient id="sdCore" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#39CCD0" stopOpacity=".95" />
            <stop offset=".45" stopColor="#16B4BC" stopOpacity=".4" />
            <stop offset="1" stopColor="#124554" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="260" cy="260" r="210" fill="url(#sdCore)" opacity=".28" />
        <g className="sd-orbit o1"><ellipse cx="260" cy="260" rx="230" ry="86" /><circle cx="490" cy="260" r="7" /></g>
        <g className="sd-orbit o2"><ellipse cx="260" cy="260" rx="200" ry="120" /><circle cx="60" cy="260" r="5" /></g>
        <g className="sd-orbit o3"><ellipse cx="260" cy="260" rx="150" ry="150" strokeDasharray="3 9" /><circle cx="260" cy="110" r="6" /></g>
        <circle className="sd-core" cx="260" cy="260" r="46" fill="url(#sdCore)" />
        <circle cx="260" cy="260" r="46" fill="none" stroke="#70D4D9" strokeOpacity=".55" />
        <path d="M260 236c2 14 8 22 24 24-16 2-22 10-24 24-2-14-8-22-24-24 16-2 22-10 24-24z" fill="#EAF7FA" />
      </svg>
      <span className="sd-chip c1">Chiến lược</span>
      <span className="sd-chip c2">Sáng tạo</span>
      <span className="sd-chip c3">Công nghệ</span>
    </div>
  );
}
