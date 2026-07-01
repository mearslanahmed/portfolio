import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Briefcase, Mail, Phone, Award, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/personalInfo";
import { getAllProjects } from "@/lib/mdx";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import { skillsData } from "@/data/skills";
import { certificationsData } from "@/data/certifications";
import { testimonialsData } from "@/data/testimonials";
import { FadeIn } from "@/components/ui/fade-in";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import ProjectArchive from "@/components/ProjectArchive";

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-dot-matrix relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none mix-blend-screen" style={{ background: 'radial-gradient(ellipse at top, var(--primary) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] opacity-10 pointer-events-none mix-blend-screen" style={{ background: 'radial-gradient(circle at bottom left, var(--primary) 0%, transparent 50%)' }} />

      <main className="container mx-auto px-4 md:px-8 pt-32 pb-20">
        
        {/* HERO SECTION */}
        <FadeIn className="max-w-4xl mx-auto text-center mb-32 flex flex-col items-center relative">
          
          {/* Cinematic Cutout Profile Picture */}
          <div className="relative w-56 h-56 md:w-72 md:h-72 -mt-4 mb-4 pointer-events-none mx-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.15)] z-0">
            <div className="absolute inset-0" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
              <Image
                src={personalInfo.profilePic}
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-contain object-bottom transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>

          <div className="relative z-20 mt-4">
          
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter text-foreground mb-4 leading-[1.1]">
            Hi, I&apos;m {personalInfo.name.split(" ")[0]}
            <br />
            <span className="bg-gradient-to-br from-primary to-purple-500 bg-clip-text text-transparent">{personalInfo.role}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-text mb-6 max-w-2xl font-medium mx-auto">
            {personalInfo.shortBio}
          </p>

          <div className="flex items-center justify-center gap-2 text-secondary-text mb-8">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Based in Pakistan</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-bold text-background shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              View My Work
            </Link>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface px-8 text-sm font-bold shadow-sm hover:border-primary/50 hover:bg-background transition-all"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </div>
          </div>
        </FadeIn>

        {/* PROJECTS SECTION */}
        <div id="projects" className="scroll-mt-32 mb-40">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-heading font-bold flex items-center gap-4">
                Projects
              </h2>
              <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
            </div>
          </FadeIn>
          
          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.slice(0, 2).map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.1}>
                <Link href={`/projects/${project.slug}`}>
                  <SpotlightCard className="group h-full flex flex-col p-2">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-background/50 border border-border/50 mb-6 flex items-center justify-center p-8">
                      <Image 
                        src={project.metadata.thumbnail} 
                        alt={project.metadata.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="px-6 pb-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.metadata.title}
                      </h3>
                      <p className="text-secondary-text mb-6 flex-1 text-lg">
                        {project.metadata.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.metadata.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-xs font-bold px-3 py-1.5 rounded-full bg-surface border border-border text-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm font-bold text-foreground">
                        Explore Project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Project Archive Table */}
          {projects.length > 2 && (
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-heading font-bold mb-6">Other Projects</h3>
              <ProjectArchive projects={projects.slice(2)} />
            </FadeIn>
          )}
        </div>

        {/* EXPERIENCE SECTION */}
        <div id="experience" className="scroll-mt-32 mb-40">
          <FadeIn>
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-4xl font-heading font-bold flex items-center gap-4">
                Professional Experience
              </h2>
              <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {experienceData.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-primary">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)]">
                  <SpotlightCard className="p-8 glass-card">
                    <div className="flex flex-col mb-6">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full w-fit mb-4">
                        {exp.startDate} — {exp.endDate}
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-1">{exp.role}</h3>
                      <div className="text-secondary-text font-medium text-lg">{exp.company}</div>
                      <div className="text-sm text-secondary-text/70 mt-1">{exp.location}</div>
                    </div>
                    <ul className="space-y-4 text-secondary-text">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="leading-relaxed flex gap-3 text-[15px]">
                          <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ABOUT & EDUCATION */}
        <div id="about" className="scroll-mt-32 mb-40">
          <FadeIn>
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-4xl font-heading font-bold flex items-center gap-4">
                About & Education
              </h2>
              <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <h3 className="text-2xl font-heading font-bold mb-6">Philosophy</h3>
              <div className="prose prose-invert max-w-none text-secondary-text">
                <p className="text-lg leading-relaxed mb-6">
                  {personalInfo.longBio}
                </p>
                <p className="text-lg leading-relaxed">
                  I believe in building software that doesn&apos;t just work, but scales elegantly and solves the user&apos;s underlying problems. My approach is rooted in understanding requirements deeply before writing a single line of code.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn>
                <h3 className="text-2xl font-heading font-bold mb-6">Education</h3>
              </FadeIn>
              {educationData.map((edu, i) => (
                <FadeIn key={edu.id} delay={i * 0.1}>
                  <SpotlightCard className="p-8 glass-card">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                      <div>
                        <h4 className="text-xl font-heading font-bold text-foreground mb-1">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-sm font-bold text-secondary-text bg-surface px-4 py-2 rounded-full border border-border mt-4 md:mt-0 w-fit">
                        {edu.startDate} - {edu.endDate}
                      </div>
                    </div>
                    <ul className="space-y-3 text-secondary-text">
                      {edu.description.map((desc, idx) => (
                        <li key={idx} className="leading-relaxed flex gap-3 text-sm">
                          <span className="text-border mt-1.5 w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* SKILLS & CERTIFICATIONS */}
        <div className="scroll-mt-32 mb-40">
          <FadeIn>
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-4xl font-heading font-bold flex items-center gap-4">
                Skills & Certifications
              </h2>
              <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {skillsData.map((category, i) => (
                <FadeIn key={category.category} delay={i * 0.1}>
                  <h3 className="text-xl font-heading font-bold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-4 py-2 rounded-full bg-surface border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="space-y-6">
              {certificationsData.map((cert, i) => {
                const CardContent = (
                  <SpotlightCard className="p-6 glass-card flex items-center gap-6 group hover:border-primary/50 transition-colors">
                    <div className="w-20 h-16 rounded-lg bg-surface border border-border flex items-center justify-center text-primary shrink-0 overflow-hidden relative group-hover:scale-105 transition-transform">
                      {cert.image ? (
                        <Image src={cert.image} alt={cert.name} width={80} height={64} className="object-cover w-full h-full" />
                      ) : (
                        <Award className="h-8 w-8" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-bold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">{cert.name}</h4>
                      <p className="text-sm text-secondary-text font-medium">{cert.issuer}</p>
                    </div>
                    {cert.link && (
                      <div className="text-secondary-text group-hover:text-primary transition-colors">
                        <ArrowRight className="w-5 h-5 -rotate-45" />
                      </div>
                    )}
                  </SpotlightCard>
                );

                return (
                  <FadeIn key={cert.id} delay={i * 0.1}>
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                        {CardContent}
                      </a>
                    ) : (
                      CardContent
                    )}
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="scroll-mt-32 mb-40">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Client Testimonials</h2>
            <p className="text-secondary-text text-lg max-w-2xl mx-auto">Don&apos;t just take my word for it.</p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, i) => (
              <FadeIn key={testimonial.id} delay={i * 0.1}>
                <SpotlightCard className="p-8 glass-card h-full flex flex-col">
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} className={`w-5 h-5 ${idx < testimonial.rating ? 'text-primary' : 'text-border'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground/90 italic mb-8 flex-1 leading-relaxed text-lg">
                    &quot;{testimonial.review}&quot;
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-sm font-bold text-secondary-text shrink-0">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.clientName}</h4>
                      <p className="text-sm text-secondary-text">{testimonial.platform}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div id="contact" className="scroll-mt-32">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Let&apos;s Talk</h2>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">
              Got an interesting project in mind, need some help scaling your architecture, or just want to chat about code? Drop me a message below and I&apos;ll get back to you soon.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <FadeIn>
              <h3 className="text-2xl font-heading font-bold mb-8">Reach Out Directly</h3>
              <div className="space-y-6">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-sm">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xl mb-1">Email</p>
                    <p className="text-secondary-text group-hover:text-primary transition-colors text-lg">{personalInfo.email}</p>
                  </div>
                </a>
                
                <a href={`https://wa.me/${personalInfo.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-sm">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xl mb-1">WhatsApp</p>
                    <p className="text-secondary-text group-hover:text-primary transition-colors text-lg">{personalInfo.whatsapp}</p>
                  </div>
                </a>

                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-sm">
                    <FaLinkedin className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xl mb-1">LinkedIn</p>
                    <p className="text-secondary-text group-hover:text-primary transition-colors text-lg">Connect with me</p>
                  </div>
                </a>

                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-sm">
                    <FaGithub className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xl mb-1">GitHub</p>
                    <p className="text-secondary-text group-hover:text-primary transition-colors text-lg">Check out my repos</p>
                  </div>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <SpotlightCard className="p-8 md:p-10 glass-card">
                <h3 className="text-2xl font-heading font-bold mb-8">Send a Message</h3>
                <form className="space-y-6" action={`mailto:${personalInfo.email}`} method="post" encType="text/plain">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-secondary-text tracking-wide uppercase">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-border bg-background px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="What should I call you?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-secondary-text tracking-wide uppercase">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-border bg-background px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="hello@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-secondary-text tracking-wide uppercase">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-xl border border-border bg-background px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell me a bit about what you're building..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex h-14 items-center justify-center rounded-xl bg-foreground px-8 font-bold text-background shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all mt-4"
                  >
                    Send Message
                    <Mail className="ml-3 h-5 w-5" />
                  </button>
                </form>
              </SpotlightCard>
            </FadeIn>
          </div>
        </div>

      </main>
    </div>
  );
}
