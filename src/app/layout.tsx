import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arslanahmed.me"),
  title: "Arslan Ahmed Naseem | Full-Stack Software Engineer",
  description: "Portfolio of Arslan Ahmed Naseem, a Full-Stack Software Engineer specializing in Mobile Development, AI Integration, and Full-Stack Architecture.",
  openGraph: {
    title: "Arslan Ahmed Naseem | Full-Stack Software Engineer",
    description: "Software Engineer specializing in Mobile Development, AI Integration, and Full-Stack Architecture.",
    url: "https://arslanahmed.me",
    siteName: "Arslan Ahmed Portfolio",
    images: [
      {
        url: "/profile.webp",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arslan Ahmed Naseem | Full-Stack Software Engineer",
    description: "Software Engineer specializing in Mobile Development, AI Integration, and Full-Stack Architecture.",
    images: ["/profile.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground selection:bg-primary/30 flex flex-col">
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://arslanahmed.me/#person",
                  name: "Arslan Ahmed Naseem",
                  url: "https://arslanahmed.me",
                  image: "https://arslanahmed.me/profile.webp",
                  jobTitle: "Full-Stack Software Engineer",
                  description:
                    "Software Engineer specializing in Mobile Development, AI Integration, and Full-Stack Architecture.",
                  sameAs: [
                    "https://github.com/mearslanahmed",
                    "https://linkedin.com/in/mearslanahmed",
                    "https://www.fiverr.com/users/mearslanahmed",
                    "https://medium.com/@mearslanahmed",
                    "https://www.youtube.com/@mearslanahmed",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://arslanahmed.me/#website",
                  url: "https://arslanahmed.me",
                  name: "Arslan Ahmed Portfolio",
                  description:
                    "Portfolio of Arslan Ahmed Naseem, a Full-Stack Software Engineer specializing in Mobile Development, AI Integration, and Full-Stack Architecture.",
                  author: { "@id": "https://arslanahmed.me/#person" },
                },
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
