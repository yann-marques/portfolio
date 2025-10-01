import type { Metadata } from "next";
import { Lato, IBM_Plex_Mono, Lexend, Lilita_One } from "next/font/google";
import "./globals.css";

const latoSans = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  display: 'swap',
  weight: "100"
});

const ibmPlex = IBM_Plex_Mono({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700"]
})

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const lilita_one = Lilita_One({
  variable: "--font-lilita",
  subsets: ["latin"],
  display: 'swap',
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "ymarques portfolio",
  description: "Portfolio of Yann",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-black" lang="en">
      <body
        className={`${latoSans.variable} ${ibmPlex.variable} ${lexend.variable} ${lilita_one.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
