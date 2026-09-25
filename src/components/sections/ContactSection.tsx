"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Copy, Check, ChevronDown, X } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { personalInfo } from "@/data/personalInfo";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
});

export function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-32 mb-24 md:mb-32">
      <FadeIn className="max-w-2xl mx-auto text-center">
        <h2 id="contact-heading" className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
          Let&apos;s Talk
        </h2>

        <p className="text-secondary-text text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto">
          Have an interesting project in mind, need help scaling your architecture, or want to collaborate? Let&apos;s build something great.
        </p>

        {/* Action Buttons: Balanced 2-Pill Layout */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm"
          >
            {isOpen ? (
              <>
                <X className="h-4 w-4" />
                <span>Close Form</span>
              </>
            ) : (
              <>
                <MessageSquare className="h-4 w-4" />
                <span>Send a Message</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </>
            )}
          </button>

          {/* Visually prominent email pill with 1-click copy */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-border bg-surface px-5 text-sm font-semibold text-foreground hover:bg-background hover:border-foreground/30 active:scale-95 transition-all cursor-pointer"
            title="Click to copy email"
          >
            <Mail className="h-4 w-4 text-secondary-text" />
            <span className="font-mono text-xs md:text-sm font-medium">
              {copied ? "Email Copied to Clipboard!" : personalInfo.email}
            </span>
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-secondary-text opacity-70" />
            )}
          </button>
        </div>

        {/* Revealing Form with Smooth Motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.98, y: -8 }}
              animate={{ opacity: 1, height: "auto", scale: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, scale: 0.98, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mt-8 text-left"
            >
              <div className="rounded-3xl border border-border bg-surface/80 p-6 md:p-8 max-w-lg mx-auto shadow-lg">
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-border/70">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Direct Message</h3>
                    <p className="text-xs text-secondary-text">I typically respond within 24 hours.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg text-secondary-text hover:text-foreground hover:bg-background transition-colors cursor-pointer"
                    aria-label="Close form"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <ContactForm onSuccess={() => setTimeout(() => setIsOpen(false), 3000)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </FadeIn>
    </section>
  );
}
