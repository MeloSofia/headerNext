import localFont from "next/font/local";
import styles from "../style/globals.css";
import Header from "@/components/header/Header";
import Head from "next/head";
import {Poppins} from "next/font/google"

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})


export const metadata = {
  title: "Next.js",
  description: "Criação de um header com next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header />
        <main className="main-container">{children}</main>
      </body>
    </html>
  );
}
