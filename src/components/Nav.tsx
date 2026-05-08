import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#faculty", label: "Faculty" },
  { href: "#success", label: "Success" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
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
          <a href="#enroll" className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition">Enroll Free</a>
        </nav>
      </div>
    </header>
  );
}