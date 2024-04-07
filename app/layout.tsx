import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"] });

const customFont = localFont({
  src: "../public/fonts/Gambarino-Regular.otf",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Farmeaze",
  description:
    "We delivers on-demand & offers expert analysis, Your one-stop agri-business solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${customFont.variable}`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
