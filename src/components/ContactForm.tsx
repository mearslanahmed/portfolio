"use client";

import { useState } from "react";
import { Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [result, setResult] = useState("idle");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    // Key is loaded securely from env to avoid Windows Defender issues
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
    formData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        
        // Optionally reset the success message after 5 seconds
        setTimeout(() => setResult("idle"), 5000);
      } else {
        setResult("Error");
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Live region for screen readers — announces form status changes */}
      <div role="alert" aria-live="assertive" aria-atomic="true">
        {result === "Form Submitted Successfully" && (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3 text-emerald-500 animate-in fade-in slide-in-from-top-2 duration-300">
            <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
            <p className="text-sm font-medium">Message sent! I'll get back to you soon.</p>
          </div>
        )}

        {result === "Error" && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-500 animate-in fade-in slide-in-from-top-2 duration-300">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm">Something went wrong. Please try again or email me directly.</p>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-bold text-secondary-text tracking-wide uppercase">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Your name"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-bold text-secondary-text tracking-wide uppercase">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="you@example.com"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-secondary-text tracking-wide uppercase">Project Details</label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          placeholder="Project details, timeline, budget..."
        />
      </div>
      <button
        type="submit"
        disabled={result === "Sending...."}
        className="w-full inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-8 font-bold text-background shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all mt-2 disabled:opacity-70 disabled:pointer-events-none"
      >
        {result === "Sending...." ? (
          <>
            <Loader2 className="mr-3 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Mail className="ml-3 h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}
