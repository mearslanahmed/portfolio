import { Metadata } from "next";
import { getAllProjects } from "@/lib/mdx";

// Import extracted section components
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AboutEducationSection } from "@/components/sections/AboutEducationSection";
import { SkillsCertificationsSection } from "@/components/sections/SkillsCertificationsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Arslan Ahmed Naseem | Full-Stack Software Engineer",
  description: "Portfolio of Arslan Ahmed Naseem, a Full-Stack Software Engineer specializing in Mobile Development, AI Integration, and Full-Stack Architecture.",
  alternates: {
    canonical: "https://arslanahmed.me",
    languages: {
      "en-US": "https://arslanahmed.me",
    },
  },
};

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto px-4 md:px-8 pt-32 pb-20">
        <HeroSection />
        <ProjectsSection projects={projects} />
        <ExperienceSection />
        <AboutEducationSection />
        <SkillsCertificationsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  );
}
