import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Azees Abdul | Full Stack Developer",
  description:
    "Results-driven Full Stack Developer with hands-on experience designing and deploying scalable web and mobile applications. Proven expertise in MERN stack, API design, and CI/CD workflows.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "Next.js",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
