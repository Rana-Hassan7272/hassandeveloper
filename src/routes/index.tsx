import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { TrustedBy } from "@/components/portfolio/TrustedBy";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { GitHubActivity } from "@/components/portfolio/GitHubActivity";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Services } from "@/components/portfolio/Services";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Certifications } from "@/components/portfolio/Certifications";
import { Education } from "@/components/portfolio/Education";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Muhammad Hassan Shahbaz — AI/ML Engineer · LLM Systems Builder" },
      {
        name: "description",
        content:
          "Production-focused AI engineer building production-ready RAG systems, multi-agent LangGraph pipelines, and MLOps platforms. Contributor to vLLM & LiteLLM. Pakistan.",
      },
      {
        property: "og:title",
        content: "Muhammad Hassan Shahbaz — AI/ML Engineer",
      },
      {
        property: "og:description",
        content:
          "RAG systems, multi-agent AI, and MLOps in production. vLLM + LiteLLM contributor. Top 8% NSCT & Kaggle BirdCLEF+ 2026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Muhammad Hassan Shahbaz — AI/ML Engineer" },
      {
        name: "twitter:description",
        content:
          "Production RAG · Multi-agent AI · MLOps · Open source contributor",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Portfolio() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Skills />
        <Projects />
        <GitHubActivity />
        <Experience />
        <Achievements />
        <Services />
        <Testimonials />
        <Certifications />
        <Education />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
