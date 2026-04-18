import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Azees Abdul | Software Developer Portfolio",
  description:
    "Modern portfolio of Azees Abdul, software developer focused on scalable web apps, strong UX, and design-driven engineering.",
  keywords: [
    "Software Developer",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Three.js",
    "Framer Motion",
    "Design Thinking",
  ],
  openGraph: {
    title: "Azees Abdul | Software Developer Portfolio",
    description:
      "Modern software developer portfolio with projects, experience, and contact details.",
    url: "https://yourdomain.com",
    siteName: "Azees Abdul Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#030a07" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased text-[var(--color-text-primary)]`}
      >
        {children}
      </body>
    </html>
  );
}
