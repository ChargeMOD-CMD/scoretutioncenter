import { Link } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#faculty", label: "Faculty" },
  { href: "#success", label: "Success" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="glass rounded-full px-5 py-2.5 flex items-center justify-between shadow-card">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display font-semibold tracking-tight">SCORE <span className="text-gradient">MORE</span></span>
          </Link>
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-foreground transition story-link">{l.label}</a></li>
            ))}
          </ul>
          <a href="#enroll" className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition">Enroll Free</a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground shadow-glow"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden mt-3 glass rounded-2xl p-4 shadow-card animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col gap-3 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-1 text-muted-foreground hover:text-foreground transition">{l.label}</a>
                </li>
              ))}
              <li>
                <a href="#enroll" onClick={() => setOpen(false)} className="mt-2 inline-flex w-full justify-center text-sm font-medium px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground shadow-glow">Enroll Free</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}