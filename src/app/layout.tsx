import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Parv Upadhyay | Software & AI Engineer Portfolio",
  description: "Explore the portfolio of Parv Upadhyay, a Computer Science student specializing in AI/ML and Software Development. Showcasing projects like RecycleEasy and Speech Emotion Recognition.",
  keywords: ["AI Engineer", "Software Developer", "Machine Learning", "Next.js", "React", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
