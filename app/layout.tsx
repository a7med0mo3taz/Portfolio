import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmed-Elsawaf.vercel.app"),
  title: {
    default: "Ahmed Elsawaf | Front-End Developer",
    template: "%s | Ahmed Elsawaf",
  },
  description:
    "Explore the portfolio of Ahmed Elsawaf, a Front-End Developer specializing in crafting modern, high-performance, and scalable web applications using React and Next.js.",
  keywords: [
    "Ahmed Elsawaf",
    "Front-End Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer",
    "Egypt",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Ahmed Elsawaf", url: "https://github.com/a7med0mo3taz" }],
  creator: "Ahmed Elsawaf",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ahmed Elsawaf | Front-End Developer",
    description:
      "Explore the portfolio of Ahmed Elsawaf, a Front-End Developer specializing in crafting modern, high-performance, and scalable web applications using React and Next.js.",
    url: "https://ahmed-elsawaf.vercel.app",
    siteName: "Ahmed Elsawaf Portfolio",
    images: [
      {
        url: "/assets/profile.jpg",
        alt: "Ahmed Elsawaf - Front-End Developer Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Elsawaf | Premium Front-End Developer",
    description:
      "Explore the portfolio of Ahmed Elsawaf, a Front-End Developer specializing in crafting modern, high-performance, and scalable web applications.",
    images: ["/assets/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmed Elsawaf",
    jobTitle: "Front-End Developer",
    url: "https://ahmed-Elsawaf.vercel.app",
    sameAs: [
      "https://github.com/a7med0mo3taz",
      "https://linkedin.com/in/ahmed-elsawaf-9aa3642b4",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Open to Work",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white selection:bg-primary/30 relative min-h-screen bg-[#050505]`}
      >
        <LoadingScreen />
        <Navbar />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#111",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />
      </body>
    </html>
  );
}
