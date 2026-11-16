import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Romil Movaliya | Software Engineer | AWS Community Builder",
  description: "Software Engineer, AWS Community Builder, and AWS Certified Solutions Architect. Architecting high-performance applications for freight logistics, UK courier delivery, and cloud platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
