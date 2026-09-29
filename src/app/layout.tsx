import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: "./fonts/poppins-600.ttf",
  variable: "--font-poppins-family",
  weight: "600",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace | Learn, create, grow",
  description: "Unlock your creativity and grow with ByteSpace courses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}