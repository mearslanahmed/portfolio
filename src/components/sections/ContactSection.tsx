import React from 'react';
import dynamic from 'next/dynamic';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FadeIn } from "@/components/ui/fade-in";
import { personalInfo } from "@/data/personalInfo";

const ContactForm = dynamic(() => import("@/components/ContactForm"));

export function ContactSection() {
  return (
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
  );
}
