import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
