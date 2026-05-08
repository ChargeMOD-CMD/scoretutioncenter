import { useEffect, useRef, useState } from "react";

export function CursorOrb() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
    };
    const loop = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 22}px, ${ry - 22}px, 0)`;
      requestAnimationFrame(loop);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    loop();
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, []);

  return (
    <>
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-accent shadow-glow mix-blend-screen hidden md:block" />
      <div
        ref={ring}
        className={`pointer-events-none fixed left-0 top-0 z-[9998] h-11 w-11 rounded-full border border-primary/60 transition-[width,height,opacity,background] duration-200 mix-blend-screen hidden md:block ${hover ? "scale-150 bg-primary/10 border-accent" : ""}`}
      />
    </>
  );
}