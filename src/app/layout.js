import Header from "@/components/header/Header";
import {Poppins} from "next/font/google"
import Home from "@/components/header/Home";

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
        {/* <Home /> */}
        <main className="main-container">{children}</main>
      </body>
    </html>
  );
}
