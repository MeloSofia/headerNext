import Header from "@/components/header/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
});

export const metadata = {
	title: "Next.js",
	description: "Aplicação de Front-End II",
	charset: "UTF-8",
	author: "Sofia Melo",
	keywords: "HTML, CSS, JavaScript, React. Next.js",
};
export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<head />
			<body className={poppins.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
