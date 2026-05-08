import { ArrowRight, Sparkles, BookOpen, Brain, Atom, Sigma, FlaskConical, Languages } from "lucide-react";

const ORBIT_ICONS = [BookOpen, Brain, Atom, Sigma, FlaskConical, Languages];

export function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.62 0.21 280 / 0.4) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.62 0.21 280 / 0.4) 1px, transparent 1px)",
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> AI-powered Academic Mentoring · Chennai
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Learn <span className="text-gradient">Smarter.</span><br />Score <span className="text-gradient">Higher.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            A next-generation tuition universe where intelligent mentorship,
            cinematic learning experiences, and personalized growth analytics
            shape every student's success story.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#enroll" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground shadow-glow font-medium hover:scale-105 transition">
              Join Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#programs" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium hover:border-accent transition">
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
                <dt className="text-2xl md:text-3xl font-display font-bold text-gradient">{s.k}</dt>
                <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Knowledge orb */}
        <div className="relative h-[480px] hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-72 w-72 rounded-full bg-gradient-primary shadow-glow animate-pulse-glow flex items-center justify-center">
              <div className="absolute inset-3 rounded-full bg-background/40 backdrop-blur-sm border border-white/10" />
              <Brain className="h-24 w-24 text-primary-foreground relative z-10" />
              {/* orbit ring */}
              <div className="absolute inset-[-60px] rounded-full border border-accent/40" />
              <div className="absolute inset-[-110px] rounded-full border border-primary/30" />
              {ORBIT_ICONS.map((Icon, i) => (
                <div
                  key={i}
                  className="absolute h-12 w-12 rounded-xl glass flex items-center justify-center animate-orbit"
                  style={{ animationDelay: `${-i * 3}s` }}
                >
                  <Icon className="h-5 w-5 text-accent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}