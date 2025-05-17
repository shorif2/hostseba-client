import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HostSeba - Premium Web Hosting & Domain Services",
  description: "Premium Web hosting & Domain Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} `}>
      <body className="antialiased">
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
