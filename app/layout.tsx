'use client'; // Required for client-side components in the App Router

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MenuBar from "./components/menubar";
// import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Sethu palaniyappan | Full Stack Engineer",
  description: "Professional portfolio of Sethu Palaniyappan, a Full Stack Engineer with expertise in Java, Spring Boot, React, and cloud technologies.",
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MenuBar />
        {children}
        {/* <ThemeProvider attribute="class" defaultTheme="system">
        </ThemeProvider> */}
      </body>
    </html>
  );
}
