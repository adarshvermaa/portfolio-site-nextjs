import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { GitHubRepos } from "@/components/sections/github-repos";
import { FreelanceServices } from "@/components/sections/freelance-services";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen selection:bg-cyan-500/20 selection:text-cyan-200">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubRepos />
      <FreelanceServices />
      <Contact />
      <Footer />
    </main>
  );
}
