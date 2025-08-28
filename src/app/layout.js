import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "My portfolio built with Next.js, React, and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-gray-900 text-white`}
      >
        {/* Background Glows */}
        {/* Top Left */}
        <div className="fixed top-0 left-0 w-96 h-96 bg-purple-900/40 rounded-full blur-3xl opacity-25 animate-pulse -z-10"></div>
        {/* Bottom Right */}
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-900/40 rounded-full blur-3xl opacity-25 animate-pulse -z-10"></div>
        {/* Middle Left */}
        <div className="fixed top-1/2 left-1/4 w-80 h-80 bg-indigo-800/30 rounded-full blur-3xl opacity-20 animate-pulse -z-10"></div>
        {/* Middle Right */}
        <div className="fixed top-2/3 right-1/4 w-96 h-96 bg-pink-800/30 rounded-full blur-3xl opacity-20 animate-pulse -z-10"></div>

        {children}
      </body>
    </html>
  );
}
