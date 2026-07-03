import React from 'react';
import { ExternalLink } from 'lucide-react';
import { personalInfo } from "@/data/personalInfo";
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
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
          &quot;{testimonial.review}&quot;
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
  );
}
