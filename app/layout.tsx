import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
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
  title: "Ahmed Moataz | Front-End Developer",
  description: "Portfolio of Ahmed Moataz, a highly skilled Front-End Developer specializing in React.js, Next.js, TypeScript, and modern futuristic UI/UX design.",
  keywords: ["Ahmed Moataz", "Front-End Developer", "React Developer", "Next.js", "Portfolio", "Web Developer", "Egypt"],
  authors: [{ name: "Ahmed Moataz", url: "https://github.com/a7med0mo3taz" }],
  creator: "Ahmed Moataz",
  openGraph: {
    title: "Ahmed Moataz | Front-End Developer",
    description: "Portfolio of Ahmed Moataz, showcasing modern web development projects and premium UI designs.",
    url: "https://ahmed-moataz.vercel.app", // Adjust if needed
    siteName: "Ahmed Moataz Portfolio",
    images: [
      {
        url: "/assets/og-image.jpg", // Fallback to logo or profile image if not present
        width: 1200,
        height: 630,
        alt: "Ahmed Moataz Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Moataz | Front-End Developer",
    description: "Portfolio of Ahmed Moataz, a highly skilled Front-End Developer.",
    images: ["/assets/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white selection:bg-primary/30 relative min-h-screen bg-[#050505]`}
      >
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        {children}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#111',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />
      </body>
    </html>
  );
}
