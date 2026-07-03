"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function ShareProject({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = `https://arslannaseem.com/projects/${slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(`Check out this project: ${title} by Arslan Ahmed Naseem`);

  return (
    <div className="mt-8 pt-8 border-t border-border">
      <h3 className="font-heading font-bold mb-4">Share Project</h3>
      <div className="flex items-center gap-3">
        <button
          onClick={handleCopy}
          className="p-2 rounded-md bg-background border border-border text-secondary-text hover:text-foreground hover:bg-surface transition-colors focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Copy link"
          title="Copy link"
        >
          {copied ? <Check className="w-5 h-5 text-green-500" /> : <Link2 className="w-5 h-5" />}
        </button>
        
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md bg-background border border-border text-secondary-text hover:text-foreground hover:bg-surface transition-colors focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Share on X"
          title="Share on X"
        >
          <FaXTwitter className="w-5 h-5" />
        </a>
        
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md bg-background border border-border text-secondary-text hover:text-[#0A66C2] hover:bg-surface transition-colors focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
