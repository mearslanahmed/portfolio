import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-background">
      <div className="max-w-md w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-9xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/30">
          404
        </h1>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-secondary-text">
            Looks like you've ventured into unknown territory. The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="pt-8">
          <Link 
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-foreground px-8 py-4 font-bold text-background shadow-xl hover:scale-105 active:scale-95 transition-all group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
