import Link from "next/link";
import Image from "next/image";
import styles from "../../style/header.module.css";

export default function Header() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Image src="/assets/s.png" width="30" height="30" alt="sofia" />
				<h1>Sofia Melo</h1>
			</div>
			<ul className={styles.link_items}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/About">Sobre</Link>
				</li>
				<li>
					<Link href="/Contact">Contato</Link>
				</li>
			</ul>
		</nav>
	);
}
