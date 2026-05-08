import { useState } from "react";
import { Sparkles, X, Send } from "lucide-react";

type Msg = { role: "user" | "ai"; text: string };

const QUICK = [
  "Recommend a study plan",
  "How to prepare for exams?",
  "Which subjects do you teach?",
  "How do I enroll?",
];

function reply(q: string): string {
  const s = q.toLowerCase();
  if (s.includes("enroll") || s.includes("join") || s.includes("admission"))
    return "You can enroll by filling the consultation form below or calling +91 78452 27330. The first session is free!";
  if (s.includes("subject") || s.includes("teach"))
    return "We coach Mathematics, Science, Physics, Chemistry, Biology, English & Social Science from Primary through Higher Secondary.";
  if (s.includes("exam") || s.includes("prepare"))
    return "Our exam prep blends concept clarity, weekly mock tests, and personalized revision sheets — students typically gain 18-25% in 3 months.";
  if (s.includes("plan") || s.includes("study"))
    return "Tell me your grade and weak subject — I'll craft a 4-week structured plan with daily 45-min focus blocks and weekend revisions.";
  if (s.includes("fee") || s.includes("price") || s.includes("cost"))
    return "Fees vary by grade & subject load. Book a free consultation and we'll share a transparent plan tailored to your goals.";
  if (s.includes("time") || s.includes("hour"))
    return "Weekdays 4–9 PM, Weekends 9 AM–6 PM. We offer flexible batches around school hours.";
  return "Great question! I'm SCORE MORE AI Mentor. Ask me about programs, study plans, exam prep, or enrollment.";
}

export function AIMentor() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "ai", text: "Hi! I'm your SCORE MORE AI Mentor. How can I guide your academic journey today?" },
  ]);
  const [input, setInput] = useState("");

  const send = (t: string) => {
    const text = t.trim();
    if (!text) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => setMsgs((m) => [...m, { role: "ai", text: reply(text) }]), 450);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI Mentor"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-70 animate-pulse-glow" />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
          <Sparkles className="h-7 w-7" />
        </span>
      </button>

      {open && (
        <div className="fixed bottom-28 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] glass rounded-2xl shadow-card overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-primary/20">
            <div>
              <div className="text-sm font-semibold text-foreground">SCORE MORE AI Mentor</div>
              <div className="text-xs text-muted-foreground">Online • Intelligent guidance</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /></button>
          </div>
          <div className="p-4 max-h-80 overflow-y-auto space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.role === "user" ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {QUICK.map((q) => (
              <button key={q} onClick={() => send(q)} className="text-xs px-2.5 py-1 rounded-full border border-border/60 hover:border-accent text-muted-foreground hover:text-foreground transition">{q}</button>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="p-3 border-t border-border/50 flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask the mentor…" className="flex-1 bg-background/60 rounded-full px-3 py-2 text-sm outline-none border border-border focus:border-accent" />
            <button className="rounded-full bg-gradient-primary p-2 text-primary-foreground"><Send className="h-4 w-4" /></button>
          </form>
        </div>
      )}
    </>
  );
}