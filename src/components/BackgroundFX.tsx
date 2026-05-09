import { useEffect, useRef } from "react";
import bgLibrary from "@/assets/bg-library.jpg";

/**
 * "Celestial Codex" — a signature living background.
 *  - Drifting aurora orbs (gold + cyan)
 *  - Constellation of subject nodes connected by gilded threads
 *  - Floating equations & glyphs
 *  - Film grain + vignette + subtle scanlines
 */
export function BackgroundFX() {
  const canvas = useRef<HTMLCanvasElement>(null);

  // Constellation animated on canvas
  useEffect(() => {
    const c = canvas.current;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    let raf = 0, w = 0, h = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const N = 42;
    const nodes = Array.from({ length: N }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00018,
      vy: (Math.random() - 0.5) * 0.00018,
      r: Math.random() * 1.4 + 0.6,
    }));

    const resize = () => {
      w = c.clientWidth; h = c.clientHeight;
      c.width = w * DPR; c.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // edges
      for (let i = 0; i < N; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > 1) a.vx *= -1;
        if (a.y < 0 || a.y > 1) a.vy *= -1;
        for (let j = i + 1; j < N; j++) {
          const b = nodes[j];
          const dx = (a.x - b.x) * w, dy = (a.y - b.y) * h;
          const d = Math.hypot(dx, dy);
          if (d < 170) {
            const o = (1 - d / 170) * 0.18;
            ctx.strokeStyle = `rgba(232, 181, 71, ${o})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x * w, a.y * h);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.stroke();
          }
        }
      }
      // nodes
      for (const n of nodes) {
        const x = n.x * w, y = n.y * h;
        const g = ctx.createRadialGradient(x, y, 0, x, y, n.r * 6);
        g.addColorStop(0, "rgba(245, 215, 140, 0.9)");
        g.addColorStop(1, "rgba(245, 215, 140, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, n.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  const glyphs = ["E=mc²", "∫dx", "πr²", "∑ⁿ", "α+β", "H₂O", "∇·E", "λ", "θ", "√x", "Δy", "ϕ"];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Real photographic backdrop — atmospheric library */}
      <img
        src={bgLibrary}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.35]"
        style={{ filter: "saturate(0.85) contrast(1.05)" }}
      />
      {/* Duotone wash to lock photo into the gold/navy palette */}
      <div className="absolute inset-0 mix-blend-color"
        style={{ background: "linear-gradient(135deg, oklch(0.18 0.07 265 / 0.85), oklch(0.78 0.14 80 / 0.35) 60%, oklch(0.20 0.07 220 / 0.7))" }} />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, oklch(0.10 0.04 265 / 0.55), oklch(0.10 0.04 265 / 0.75))" }} />

      {/* Aurora orbs */}
      <div className="absolute -top-40 -left-40 h-[60vmax] w-[60vmax] rounded-full opacity-60 blur-3xl animate-aurora-1"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.14 80 / 0.55), transparent 60%)" }} />
      <div className="absolute -bottom-40 -right-40 h-[55vmax] w-[55vmax] rounded-full opacity-50 blur-3xl animate-aurora-2"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.13 200 / 0.45), transparent 60%)" }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[40vmax] w-[40vmax] rounded-full opacity-30 blur-3xl animate-aurora-3"
        style={{ background: "radial-gradient(circle, oklch(0.92 0.10 95 / 0.35), transparent 60%)" }} />

      {/* Constellation canvas */}
      <canvas ref={canvas} className="absolute inset-0 h-full w-full opacity-70" />

      {/* Drifting equation glyphs */}
      <div className="absolute inset-0">
        {glyphs.map((g, i) => (
          <span key={i}
            className="absolute serif-italic text-primary/20 select-none animate-glyph-drift"
            style={{
              left: `${(i * 83) % 100}%`,
              top: `${(i * 47) % 100}%`,
              fontSize: `${1.4 + (i % 4) * 0.6}rem`,
              animationDuration: `${22 + (i % 6) * 4}s`,
              animationDelay: `${-i * 1.3}s`,
            }}>{g}</span>
        ))}
      </div>

      {/* Fine engraved grid */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.92 0.10 95) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.92 0.10 95) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }} />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.78  0 0 0 0 0.35  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }} />

      {/* Vignette */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, oklch(0.08 0.04 265 / 0.65) 100%)" }} />
    </div>
  );
}
