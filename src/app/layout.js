import localFont from "next/font/local";
import styles from "../style/globals.css";
import Header from "@/components/header/Header";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next.js",
  description: "Criação de um header com next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <Header />
        {children}
      </body>
    </html>
  );
}
