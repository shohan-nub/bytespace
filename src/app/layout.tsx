import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: [
    { path: "./fonts/poppins-500.ttf", weight: "500" },
    { path: "./fonts/poppins-600.ttf", weight: "600" },
  ],
  variable: "--font-poppins-family",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "./fonts/satoshi-400.woff2", weight: "400" },
    { path: "./fonts/satoshi-500.woff2", weight: "500" },
    { path: "./fonts/satoshi-700.woff2", weight: "700" },
  ],
  variable: "--font-satoshi-family",
  display: "swap",
});

const clash = localFont({
  src: "./fonts/clash-display-700.woff2",
  variable: "--font-clash-family",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace | Learn, create, grow",
  description: "Unlock your creativity and grow with ByteSpace courses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${satoshi.variable} ${clash.variable}`}>
      <body>{children}</body>
    </html>
  );
}
