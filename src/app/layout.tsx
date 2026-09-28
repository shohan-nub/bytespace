import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins-family",
  weight: ["600"],
  subsets: ["latin"],
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
