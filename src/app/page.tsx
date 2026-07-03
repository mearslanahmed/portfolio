import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight, Briefcase, Mail, Phone, Award, Download, ExternalLink } from "lucide-react";
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

// Lazy-load below-the-fold client components to reduce initial JS bundle
const ProjectArchive = dynamic(() => import("@/components/ProjectArchive"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen relative">

      <div className="container mx-auto px-4 md:px-8 pt-32 pb-20">
        
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
            {personalInfo.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-primary">{personalInfo.role}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-text mb-6 max-w-2xl font-medium mx-auto">
            {personalInfo.shortBio}
          </p>



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
        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-32 mb-24 md:mb-32">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <h2 id="projects-heading" className="text-4xl font-heading font-bold flex items-center gap-4">
                Projects
              </h2>
              <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
            </div>
          </FadeIn>
          
          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {projects.slice(0, 4).map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.1}>
                <Link href={`/projects/${project.slug}`} className="group flex flex-col gap-6 h-full">
                  
                  {/* Image Media Block */}
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-surface border border-border/50 transition-colors group-hover:border-primary/30 mb-2">
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-0 pointer-events-none" />
                    <Image 
                      src={project.metadata.thumbnail} 
                      alt={project.metadata.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out z-10" 
                      priority={i < 2}
                    />
                  </div>
                  
                  {/* Typography Block */}
                  <div className="flex flex-col flex-1 px-2">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-heading font-bold group-hover:text-primary transition-colors line-clamp-1">
                        {project.metadata.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-secondary-text group-hover:text-primary group-hover:-rotate-45 transition-all shrink-0" aria-hidden="true" />
                    </div>
                    <p className="text-secondary-text mb-6 flex-1 text-base leading-relaxed line-clamp-2">
                      {project.metadata.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.metadata.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full bg-surface border border-border text-secondary-text group-hover:border-primary/30 group-hover:text-foreground transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Project Archive Table */}
          {projects.length > 4 && (
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-heading font-bold mb-6">More Work</h3>
              <ProjectArchive projects={projects.slice(4)} />
            </FadeIn>
          )}
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-32 mb-24 md:mb-32">
          <FadeIn>
            <div className="flex items-center justify-between mb-16">
              <h2 id="experience-heading" className="text-4xl font-heading font-bold flex items-center gap-4">
                Professional Experience
              </h2>
              <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-12">
            {experienceData.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start">
                  <div className="md:w-1/4 shrink-0 text-secondary-text font-medium text-sm md:text-right mt-1.5">
                    {exp.startDate} - {exp.endDate}
                  </div>
                  <div className="md:w-3/4 flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-1">{exp.role}</h3>
                    <div className="text-secondary-text font-medium text-lg mb-4">{exp.company} <span className="opacity-50 mx-2">·</span> <span className="text-sm">{exp.location}</span></div>
                    
                    <ul className="space-y-4 text-secondary-text">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="leading-relaxed text-[15px]">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ABOUT & EDUCATION */}
        <section id="about" aria-labelledby="about-heading" className="scroll-mt-32 mb-24 md:mb-32">
          <FadeIn>
            <div className="flex items-center justify-between mb-16">
              <h2 id="about-heading" className="text-4xl font-heading font-bold flex items-center gap-4">
                About & Education
              </h2>
              <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <h3 className="text-2xl font-heading font-bold mb-6">My Journey & Philosophy</h3>
              <div className="prose prose-invert max-w-none text-secondary-text">
                <div className="border-l-4 border-primary pl-6 py-2 my-6 bg-surface/10 rounded-r-lg">
                  <p className="text-xl leading-relaxed text-foreground font-medium">
                    {personalInfo.longBio}
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn>
                <h3 className="text-2xl font-heading font-bold mb-6">Education</h3>
              </FadeIn>
              {educationData.map((edu, i) => (
                <FadeIn key={edu.id} delay={i * 0.1} className="mb-12 last:mb-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h4 className="text-xl font-heading font-bold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-primary font-medium">
                        {edu.url ? (
                          <a 
                            href={edu.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline flex items-center gap-1 w-fit"
                          >
                            {edu.institution}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          edu.institution
                        )}
                      </p>
                    </div>
                    <div className="text-sm font-bold text-secondary-text mt-4 md:mt-0 w-fit">
                      {edu.startDate} - {edu.endDate}
                    </div>
                  </div>
                  <div className="space-y-3 text-secondary-text">
                    {edu.description.map((desc, idx) => (
                      <p key={idx} className="leading-relaxed text-[15px]">
                        {desc}
                      </p>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS & CERTIFICATIONS */}
        <section aria-labelledby="skills-heading" className="scroll-mt-32 mb-24 md:mb-32">
          <FadeIn>
            <div className="flex items-center justify-between mb-16">
              <h2 id="skills-heading" className="text-4xl font-heading font-bold flex items-center gap-4">
                Skills & Certifications
              </h2>
              <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 md:gap-12">
            <div>
              {skillsData.map((category, i) => (
                <FadeIn key={category.category} delay={i * 0.1} className="mb-10 last:mb-0">
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">{category.category}</h3>
                  <div className="text-secondary-text leading-relaxed text-[17px] font-medium">
                    {category.skills.join(" · ")}
                  </div>
                </FadeIn>
              ))}
            </div>

            <div>
              {certificationsData.map((cert, i) => (
                <FadeIn key={cert.id} delay={i * 0.1} className="mb-8 last:mb-0">
                  <div className="group flex gap-4 items-start">
                    {cert.image ? (
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-surface/50 border border-border/50 p-1.5 flex items-center justify-center overflow-hidden">
                        <Image src={cert.image} alt={cert.name} width={40} height={40} className="object-contain w-full h-full" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-surface/50 border border-border/50 flex items-center justify-center text-primary overflow-hidden">
                        <Award className="w-6 h-6" />
                      </div>
                    )}
                    <div className="flex flex-col items-start pt-0.5">
                      <h4 className="text-lg font-heading font-bold text-foreground mb-1 leading-snug">{cert.name}</h4>
                      <p className="text-primary font-medium text-sm">
                        {cert.link ? (
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline flex items-center gap-1 w-fit"
                          >
                            {cert.issuer}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          cert.issuer
                        )}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section aria-labelledby="testimonials-heading" className="scroll-mt-32 mb-24 md:mb-32">
          <FadeIn className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-4xl font-heading font-bold mb-4">What Clients Say</h2>
            <p className="text-secondary-text text-lg max-w-2xl mx-auto">Feedback from people I&apos;ve worked with.</p>
          </FadeIn>
          
          <div className="relative flex flex-col overflow-hidden w-full mask-edges py-4">
            {/* Edge Masks for smooth fade-out effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            {/* Top Row - Scrolls Left */}
            <div className="flex w-max animate-marquee gap-8 items-stretch hover:[animation-play-state:paused] pb-4">
              {[...testimonialsData.slice(0, 4), ...testimonialsData.slice(0, 4)].map((testimonial, i) => (
                <div key={`top-${testimonial.id}-${i}`} className="w-[260px] md:w-[300px] shrink-0">
                  <div className="relative p-5 h-full flex flex-col bg-surface/30 border border-border/50 rounded-2xl overflow-hidden group/card hover:border-primary/50 transition-colors shadow-sm hover:shadow-lg">
                    <div className="absolute top-2 right-3 opacity-5 group-hover/card:opacity-10 transition-opacity">
                      <span className="text-6xl font-serif text-primary leading-none">&ldquo;</span>
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-3.5 h-3.5 text-primary fill-primary" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-foreground/90 mb-4 flex-1 leading-relaxed text-sm font-medium">
                        "{testimonial.review}"
                      </p>

                      <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] shrink-0 border border-primary/20">
                            {testimonial.initials || testimonial.clientName.charAt(0)}
                          </div>
                          <div>
                            {testimonial.platform.toLowerCase() === 'fiverr' && personalInfo.fiverr ? (
                              <a href={personalInfo.fiverr} target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary text-[11px] uppercase tracking-wider flex items-center gap-1 transition-colors group/link" title="Verified on Fiverr">
                                {testimonial.clientName}
                                <ExternalLink className="w-2 h-2 text-secondary-text group-hover/link:text-primary transition-colors" />
                              </a>
                            ) : (
                              <p className="font-bold text-foreground text-[11px] uppercase tracking-wider">{testimonial.clientName}</p>
                            )}
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <p className="text-[9px] text-secondary-text">{testimonial.platform}</p>
                              {testimonial.country && (
                                <>
                                  <span className="text-[8px] text-border">•</span>
                                  <span className="text-[10px]">{testimonial.country}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - Scrolls Right */}
            <div className="flex w-max animate-marquee [animation-direction:reverse] gap-8 items-stretch hover:[animation-play-state:paused] pt-4">
              {[...testimonialsData.slice(4), ...testimonialsData.slice(4)].map((testimonial, i) => (
                <div key={`bottom-${testimonial.id}-${i}`} className="w-[260px] md:w-[300px] shrink-0">
                  <div className="relative p-5 h-full flex flex-col bg-surface/30 border border-border/50 rounded-2xl overflow-hidden group/card hover:border-primary/50 transition-colors shadow-sm hover:shadow-lg">
                    <div className="absolute top-2 right-3 opacity-5 group-hover/card:opacity-10 transition-opacity">
                      <span className="text-6xl font-serif text-primary leading-none">&ldquo;</span>
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-3.5 h-3.5 text-primary fill-primary" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-foreground/90 mb-4 flex-1 leading-relaxed text-sm font-medium">
                        "{testimonial.review}"
                      </p>

                      <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] shrink-0 border border-primary/20">
                            {testimonial.initials || testimonial.clientName.charAt(0)}
                          </div>
                          <div>
                            {testimonial.platform.toLowerCase() === 'fiverr' && personalInfo.fiverr ? (
                              <a href={personalInfo.fiverr} target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary text-[11px] uppercase tracking-wider flex items-center gap-1 transition-colors group/link" title="Verified on Fiverr">
                                {testimonial.clientName}
                                <ExternalLink className="w-2 h-2 text-secondary-text group-hover/link:text-primary transition-colors" />
                              </a>
                            ) : (
                              <p className="font-bold text-foreground text-[11px] uppercase tracking-wider">{testimonial.clientName}</p>
                            )}
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <p className="text-[9px] text-secondary-text">{testimonial.platform}</p>
                              {testimonial.country && (
                                <>
                                  <span className="text-[8px] text-border">•</span>
                                  <span className="text-[10px]">{testimonial.country}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-32 mb-16 md:mb-20">
          <FadeIn>
            <div className="flex items-center justify-between mb-6">
              <h2 id="contact-heading" className="text-4xl font-heading font-bold flex items-center gap-4">
                Let&apos;s Talk
              </h2>
              <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
            </div>
            <p className="text-lg text-secondary-text max-w-3xl mb-16 leading-relaxed">
              Got an interesting project in mind, need some help scaling your architecture, or just want to chat about code? Drop me a message below and let&apos;s bring your project to life.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 md:gap-12">
            <FadeIn>
              <h3 className="text-2xl font-heading font-bold mb-8">Reach Out Directly</h3>
              <div className="space-y-6">
                <a href={`mailto:${personalInfo.email}`} aria-label={`Email ${personalInfo.name}`} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-sm">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xl mb-1">Email</p>
                    <p className="text-secondary-text group-hover:text-primary transition-colors text-lg">{personalInfo.email}</p>
                  </div>
                </a>
                
                <a href={`https://wa.me/${personalInfo.whatsapp.replace('+', '')}`} aria-label={`WhatsApp ${personalInfo.name}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-sm">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xl mb-1">WhatsApp</p>
                    <p className="text-secondary-text group-hover:text-primary transition-colors text-lg">{personalInfo.whatsapp}</p>
                  </div>
                </a>

                <a href={personalInfo.linkedin} aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-sm">
                    <FaLinkedin className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xl mb-1">LinkedIn</p>
                    <p className="text-secondary-text group-hover:text-primary transition-colors text-lg">Connect with me</p>
                  </div>
                </a>

                <a href={personalInfo.github} aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
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
              <div className="p-6 md:p-8 border border-border rounded-2xl w-full max-w-[400px] bg-surface/30">
                <div className="mb-8">
                  <h3 className="text-2xl font-heading font-bold mb-2">Send a Message</h3>
                  <p className="text-secondary-text">I typically reply within 24 hours.</p>
                </div>
                
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </section>

      </div>
    </div>
  );
}
