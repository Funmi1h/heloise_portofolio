import type { Metadata } from "next";
import { Geist, Caveat, Reenie_Beanie} from "next/font/google";
import "./globals.css";
import './token.css';
 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const reenieBeanie = Caveat({
  variable: "--font-reenie",
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Héloïse AKOHOU",
  description: "Portofolio",
};

export default function RootLayout({ children, }: {children: React.ReactNode;}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${caveat.variable} ${reenieBeanie.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
