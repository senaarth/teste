import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "will you?",
  description: "te amo..",
};

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{ width: '100%', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/qr.png" alt="qrcode" style={{ maxWidth: '100%' }} />  
        </div>
      </body>
    </html>
  );
}
