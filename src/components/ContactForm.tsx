"use client";

import React, { useState, useRef, useEffect } from "react";
import { Loader2, ArrowUpRight, Check, AlertCircle } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const nameInputRef = useRef<HTMLInputElement>(null);

  // UX Rule: Autofocus primary input on mount for immediate typing
  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  // Validation helper
  const validateField = (name: string, value: string): string | undefined => {
    if (!value.trim()) {
      if (name === "name") return "Please enter your name";
      if (name === "email") return "Please enter your email address";
      if (name === "message") return "Please write a brief message";
    }
    if (name === "email" && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) {
        return "Please enter a valid email (e.g. name@domain.com)";
      }
    }
    return undefined;
  };

  const handleBlur = (field: "name" | "email" | "message") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time error clearance once corrected
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  // UX Rule: Support Command/Ctrl + Enter to submit from anywhere in the form
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Mark all as touched and validate
    const nameErr = validateField("name", formData.name);
    const emailErr = validateField("email", formData.email);
    const msgErr = validateField("message", formData.message);

    setTouched({ name: true, email: true, message: true });
    setErrors({ name: nameErr, email: emailErr, message: msgErr });

    if (nameErr || emailErr || msgErr) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const resData = await response.json();
      if (resData.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTouched({});
        setErrors({});
        if (onSuccess) onSuccess();
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} noValidate className="space-y-4 text-left">
      {/* Status Announcements (A11y live region) */}
      <div role="status" aria-live="polite">
        {status === "success" && (
          <div className="py-3 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-2 animate-in fade-in duration-200">
            <Check className="w-4 h-4 shrink-0 text-emerald-500" />
            <span>Message sent successfully. I&apos;ll get back to you shortly.</span>
          </div>
        )}

        {status === "error" && (
          <div className="py-3 px-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-600 dark:text-red-400 flex items-start gap-2 animate-in fade-in duration-200">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
            <span>Unable to send message. Please try again or reach out via email.</span>
          </div>
        )}
      </div>

      {/* Name Field */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="name" className="block text-xs font-semibold text-secondary-text uppercase tracking-wider">
            Name <span className="text-foreground/40 font-normal">*</span>
          </label>
        </div>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur("name")}
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder="Your full name"
          className={`w-full rounded-xl border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-secondary-text/40 focus:outline-none transition-colors ${
            errors.name && touched.name
              ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
              : "border-border focus:border-foreground"
          }`}
        />
        {errors.name && touched.name && (
          <p id="name-error" className="text-xs text-red-500 flex items-center gap-1 mt-1 animate-in fade-in duration-150">
            <AlertCircle className="w-3 h-3" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="email" className="block text-xs font-semibold text-secondary-text uppercase tracking-wider">
            Email <span className="text-foreground/40 font-normal">*</span>
          </label>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          inputMode="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder="you@company.com"
          className={`w-full rounded-xl border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-secondary-text/40 focus:outline-none transition-colors ${
            errors.email && touched.email
              ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
              : "border-border focus:border-foreground"
          }`}
        />
        {errors.email && touched.email && (
          <p id="email-error" className="text-xs text-red-500 flex items-center gap-1 mt-1 animate-in fade-in duration-150">
            <AlertCircle className="w-3 h-3" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="message" className="block text-xs font-semibold text-secondary-text uppercase tracking-wider">
            Message <span className="text-foreground/40 font-normal">*</span>
          </label>
          <span className="text-[11px] text-secondary-text/60 font-mono">
            {formData.message.length}/1000
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur("message")}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell me about your project, timeline, or idea..."
          className={`w-full rounded-xl border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-secondary-text/40 focus:outline-none transition-colors resize-none ${
            errors.message && touched.message
              ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
              : "border-border focus:border-foreground"
          }`}
        />
        {errors.message && touched.message && (
          <p id="message-error" className="text-xs text-red-500 flex items-center gap-1 mt-1 animate-in fade-in duration-150">
            <AlertCircle className="w-3 h-3" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <ArrowUpRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
