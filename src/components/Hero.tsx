import { ArrowRight, Sparkles } from "lucide-react";
import heroStudent from "@/assets/hero-student.jpg";

export function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden scanlines">
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.78 0.14 80 / 0.35) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.78 0.14 80 / 0.35) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Floating equations */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {["E = mc²", "∑ⁿ", "πr²", "f(x)", "H₂O", "∫dx"].map((t, i) => (
          <span
            key={t}
            className="absolute text-accent/30 font-display text-2xl md:text-4xl animate-float-slow"
            style={{
              left: `${10 + i * 14}%`,
              top: `${15 + (i % 3) * 22}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass gilded eyebrow text-muted-foreground mb-7">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Est · Chennai · Intelligent Mentorship
          </span>
          <h1 className="text-6xl md:text-8xl font-normal leading-[0.95] tracking-tight">
            Learn <span className="serif-italic text-gradient">Smarter.</span><br />Score <span className="serif-italic text-gradient">Higher.</span>
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
            A modern academy where <em className="serif-italic text-foreground">classical scholarship</em> meets
            intelligent mentorship — cinematic learning, personalized growth analytics, and a
            faculty devoted to every student's pursuit of mastery.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#enroll" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground shadow-glow font-medium hover:scale-105 transition">
              Join Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#programs" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass gilded font-medium hover:border-primary transition">
              Explore Programs
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "1,200+", v: "Students Mentored" },
              { k: "98%", v: "Pass Rate" },
              { k: "12+", v: "Subjects Covered" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-3xl md:text-4xl serif-italic text-gradient">{s.k}</dt>
                <dd className="eyebrow text-muted-foreground mt-2">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Editorial portrait */}
        <div className="relative h-[560px] hidden lg:block">
          {/* gilded outer ring */}
          <div className="absolute inset-6 rounded-[2rem] bg-gradient-gold opacity-90 blur-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[88%] h-[92%] rounded-[1.75rem] overflow-hidden gilded shadow-glow">
              <img
                src={heroStudent}
                alt="A focused SCORE MORE student studying under warm lamplight"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* duotone wash */}
              <div className="absolute inset-0 mix-blend-color"
                style={{ background: "linear-gradient(135deg, oklch(0.20 0.06 265 / 0.55), oklch(0.78 0.14 80 / 0.35))" }} />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 50%, oklch(0.10 0.04 265 / 0.85))" }} />
              {/* corner crops */}
              <span className="absolute top-4 left-4 h-6 w-6 border-t border-l border-primary/80" />
              <span className="absolute top-4 right-4 h-6 w-6 border-t border-r border-primary/80" />
              <span className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-primary/80" />
              <span className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-primary/80" />
              {/* caption plate */}
              <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between">
                <div>
                  <div className="eyebrow text-primary">Plate · 01</div>
                  <div className="serif-italic text-2xl text-foreground leading-tight mt-1">The pursuit of mastery.</div>
                </div>
                <div className="eyebrow text-muted-foreground">SCORE&nbsp;·&nbsp;MORE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}