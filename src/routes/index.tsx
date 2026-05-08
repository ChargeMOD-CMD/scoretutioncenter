import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About, Programs, Dashboard, Faculty, Success, Enroll, Contact, Footer } from "@/components/Sections";
import { AIMentor } from "@/components/AIMentor";
import { CursorOrb } from "@/components/CursorOrb";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen relative">
      <CursorOrb />
      <Nav />
      <main>
        <Hero />
        <About />
        <Programs />
        <Dashboard />
        <Faculty />
        <Success />
        <Enroll />
        <Contact />
      </main>
      <Footer />
      <AIMentor />
    </div>
  );
}
