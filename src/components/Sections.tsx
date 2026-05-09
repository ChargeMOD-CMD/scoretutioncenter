import { useEffect, useRef, useState } from "react";
import {
  Target, Compass, Trophy, Sigma, Atom, FlaskConical, Leaf, BookOpen, Globe2, Languages,
  GraduationCap, Brain, ChartLine, Award, Users, Phone, MessageCircle, Mail, MapPin, Clock,
} from "lucide-react";

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-2xl mb-14">
      <span className="eyebrow text-primary inline-flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-gold" /> {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl md:text-6xl font-normal tracking-tight leading-[1.05]">{title}</h2>
      {sub && <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{sub}</p>}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="About the Centre"
          title={<>Where intelligence meets <span className="text-gradient">ambition.</span></>}
          sub="SCORE MORE Tuition Centre is a modern academic coaching institute built on concept-based learning, structured mentorship, and personalized growth strategies for every student."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, t: "Teaching Philosophy", d: "Concept-first instruction with real-world examples that build durable understanding." },
            { icon: Compass, t: "Academic Mission", d: "Empower every learner with the clarity, confidence and tools to outperform their goals." },
            { icon: Trophy, t: "Success Vision", d: "Cultivate a generation of intelligent, self-driven, future-ready students." },
          ].map(({ icon: I, t, d }) => (
            <div key={t} data-cursor="hover" className="glass rounded-2xl p-7 hover:-translate-y-1 transition-transform shadow-card">
              <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow"><I className="h-5 w-5 text-primary-foreground" /></div>
              <h3 className="mt-5 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROGRAMS = [
  { t: "Primary Coaching", g: "Grades 1–5", d: "Foundation building with curiosity-led learning." },
  { t: "Middle School", g: "Grades 6–8", d: "Concept depth and study skill formation." },
  { t: "High School", g: "Grades 9–10", d: "Board exam mastery & analytical thinking." },
  { t: "Higher Secondary", g: "Grades 11–12", d: "Advanced coaching for boards & competitive exams." },
];
const SUBJECTS = [
  { i: Sigma, n: "Mathematics" },
  { i: Atom, n: "Physics" },
  { i: FlaskConical, n: "Chemistry" },
  { i: Leaf, n: "Biology" },
  { i: BookOpen, n: "Science" },
  { i: Languages, n: "English" },
  { i: Globe2, n: "Social Science" },
  { i: Brain, n: "Study Skills" },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Programs & Subjects"
          title={<>Structured paths from <span className="text-gradient">curiosity to mastery.</span></>}
          sub="From Primary to Higher Secondary — every program is designed around clarity, practice and confident performance."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRAMS.map((p, i) => (
            <div key={p.t} data-cursor="hover" className="group relative glass rounded-2xl p-6 overflow-hidden hover:-translate-y-1 transition shadow-card">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-50 transition" />
              <span className="text-xs text-accent">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{p.t}</h3>
              <div className="text-xs text-muted-foreground">{p.g}</div>
              <p className="mt-4 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {SUBJECTS.map(({ i: Icon, n }) => (
            <div key={n} data-cursor="hover" className="flex items-center gap-3 px-4 py-3 rounded-xl glass hover:border-accent transition">
              <Icon className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">{n}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Dashboard() {
  const subjects = [
    { n: "Mathematics", v: 92 },
    { n: "Physics", v: 88 },
    { n: "Chemistry", v: 81 },
    { n: "Biology", v: 95 },
    { n: "English", v: 87 },
  ];
  return (
    <section id="dashboard" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="AI Student Dashboard"
          title={<>Visualize <span className="text-gradient">growth in real-time.</span></>}
          sub="Every student receives a personal analytics view — track performance, set intelligent goals, and see your learning curve evolve."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-7 shadow-card lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm text-muted-foreground">Performance Analytics</div>
                <div className="text-2xl font-display font-bold mt-1">Term Progress</div>
              </div>
              <ChartLine className="h-5 w-5 text-accent" />
            </div>
            <div className="space-y-5">
              {subjects.map((s) => (
                <div key={s.n}>
                  <div className="flex justify-between text-sm mb-2"><span>{s.n}</span><span className="text-accent font-medium">{s.v}%</span></div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full bg-gradient-primary rounded-full transition-all duration-1000" style={{ width: `${s.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            {[
              { i: Trophy, k: 89, s: "%", l: "Avg Score" },
              { i: Award, k: 24, s: "+", l: "Top Rankers" },
              { i: Brain, k: 96, s: "%", l: "Concept Clarity" },
            ].map(({ i: I, k, s, l }) => (
              <div key={l} className="glass rounded-2xl p-6 shadow-card flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow"><I className="h-5 w-5 text-primary-foreground" /></div>
                <div>
                  <div className="text-3xl font-display font-bold text-gradient"><Counter to={k} suffix={s} /></div>
                  <div className="text-xs text-muted-foreground">{l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FACULTY = [
  { n: "Ms. Aishwarya R.", r: "Lead Mathematics Mentor", e: "12+ years" },
  { n: "Mr. Karthik S.", r: "Physics & Chemistry", e: "10+ years" },
  { n: "Ms. Divya P.", r: "Biology & Science", e: "9+ years" },
  { n: "Mr. Suresh M.", r: "English & Social", e: "14+ years" },
];
export function Faculty() {
  return (
    <section id="faculty" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Faculty" title={<>Mentors who <span className="text-gradient">shape futures.</span></>} sub="A handpicked team of subject experts trained in modern pedagogy and one-to-one mentorship." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FACULTY.map((f) => (
            <div key={f.n} data-cursor="hover" className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition shadow-card">
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow mb-4">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="font-semibold">{f.n}</div>
              <div className="text-xs text-accent mt-1">{f.r}</div>
              <div className="text-xs text-muted-foreground mt-2">{f.e} experience</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Success() {
  const top = [
    { n: "Aarav K.", s: "98.4%", c: "Grade 12 · Science" },
    { n: "Meera S.", s: "97.2%", c: "Grade 10 · CBSE" },
    { n: "Vihaan R.", s: "96.8%", c: "Grade 12 · Commerce" },
  ];
  return (
    <section id="success" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Student Success" title={<>Real students. <span className="text-gradient">Real results.</span></>} />
        <div className="grid md:grid-cols-3 gap-6">
          {top.map((t, i) => (
            <div key={t.n} className="relative glass rounded-2xl p-7 shadow-card overflow-hidden">
              <div className="absolute top-4 right-4 text-xs text-accent">Rank #{i + 1}</div>
              <Award className="h-8 w-8 text-accent mb-4" />
              <div className="text-4xl font-display font-bold text-gradient">{t.s}</div>
              <div className="mt-3 font-semibold">{t.n}</div>
              <div className="text-xs text-muted-foreground">{t.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Enroll() {
  const [done, setDone] = useState(false);
  return (
    <section id="enroll" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass rounded-3xl p-8 md:p-12 shadow-card relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent">Enrollment</span>
              <h2 className="mt-3 text-4xl font-bold">Book your <span className="text-gradient">free consultation.</span></h2>
              <p className="mt-4 text-muted-foreground">Tell us about your child's grade and goals. Our mentors will craft a personalized roadmap — no commitment required.</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Users className="h-4 w-4 text-accent" /> One-to-one mentor mapping</li>
                <li className="flex gap-2"><Brain className="h-4 w-4 text-accent" /> Diagnostic skill assessment</li>
                <li className="flex gap-2"><ChartLine className="h-4 w-4 text-accent" /> Personalized growth plan</li>
              </ul>
            </div>
            {done ? (
              <div className="flex flex-col items-center justify-center text-center glass rounded-2xl p-10">
                <Trophy className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold">You're all set!</h3>
                <p className="text-sm text-muted-foreground mt-2">Our mentor will reach out within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setDone(true); }}
                className="space-y-3"
              >
                <input required placeholder="Student name" className="w-full bg-background/60 rounded-xl px-4 py-3 text-sm border border-border focus:border-accent outline-none" />
                <input required type="tel" placeholder="Parent phone" className="w-full bg-background/60 rounded-xl px-4 py-3 text-sm border border-border focus:border-accent outline-none" />
                <input type="email" placeholder="Email (optional)" className="w-full bg-background/60 rounded-xl px-4 py-3 text-sm border border-border focus:border-accent outline-none" />
                <select required defaultValue="" className="w-full bg-background/60 rounded-xl px-4 py-3 text-sm border border-border focus:border-accent outline-none">
                  <option value="" disabled>Select program</option>
                  {PROGRAMS.map((p) => <option key={p.t}>{p.t}</option>)}
                </select>
                <textarea rows={3} placeholder="Goals or weak subjects" className="w-full bg-background/60 rounded-xl px-4 py-3 text-sm border border-border focus:border-accent outline-none" />
                <button className="w-full py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition">Request Free Consultation</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Contact" title={<>Let's start your <span className="text-gradient">growth journey.</span></>} />
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { i: Phone, t: "Call", v: "+91 78452 27330", h: "tel:+917845227330" },
            { i: MessageCircle, t: "WhatsApp", v: "Chat with us", h: "https://wa.me/917845227330" },
            { i: Mail, t: "Email", v: "info@scoremoretuition.com", h: "mailto:info@scoremoretuition.com" },
            { i: MapPin, t: "Location", v: "Chennai, Tamil Nadu", h: "#" },
          ].map(({ i: I, t, v, h }) => (
            <a key={t} href={h} data-cursor="hover" className="glass rounded-2xl p-6 hover:-translate-y-1 transition shadow-card block">
              <I className="h-5 w-5 text-accent mb-3" />
              <div className="text-xs text-muted-foreground">{t}</div>
              <div className="font-medium mt-1">{v}</div>
            </a>
          ))}
        </div>
        <div className="mt-6 glass rounded-2xl p-6 flex items-center gap-3 text-sm text-muted-foreground shadow-card">
          <Clock className="h-4 w-4 text-accent" />
          <span><b className="text-foreground">Hours:</b> Weekdays 4:00 PM – 9:00 PM · Weekends 9:00 AM – 6:00 PM</span>
        </div>
        <div className="mt-6 glass rounded-2xl p-2 shadow-card overflow-hidden">
          <div className="rounded-xl overflow-hidden bg-white">
            <iframe
              title="SCORE MORE Tuition Centre — Location"
              src="https://www.google.com/maps?q=Chennai,Tamil+Nadu,India&hl=en&z=12&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, colorScheme: "light" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 mt-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} SCORE MORE Tuition Centre. Learn Smarter. Score Higher.</div>
        <div className="flex items-center gap-4">
          <a href="tel:+917845227330" className="hover:text-foreground">+91 78452 27330</a>
          <a href="mailto:info@scoremoretuition.com" className="hover:text-foreground">info@scoremoretuition.com</a>
        </div>
      </div>
    </footer>
  );
}