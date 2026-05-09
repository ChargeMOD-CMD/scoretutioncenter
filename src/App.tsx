import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About, Programs, Dashboard, Faculty, Success, Enroll, Contact, Footer } from "@/components/Sections";
import { AIMentor } from "@/components/AIMentor";
import { CursorOrb } from "@/components/CursorOrb";
import { BackgroundFX } from "@/components/BackgroundFX";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <BackgroundFX />
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
