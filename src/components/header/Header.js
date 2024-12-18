"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import React, { useState } from "react";

export default function Header() {
	const [isNavVisible, setIsNavVisible] = useState(true);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	const Nav = () => {
		setIsNavVisible(!isNavVisible);
	};
	return (
		<>
			<header className="header">
				<nav className={styles.navbar}>
					<div className={styles.logo}>
						<Image src="/assets/s.png" width="30" height="30" alt="sofia" />
						<h1 className="titulo">Sofia Melo</h1>
						<button onClick={Nav} className="burguer">
							<Image
								src="/assets/cardapio.png"
								width="30"
								height="30"
								alt="hamburguer"
							></Image>
						</button>
					</div>
					{isNavVisible && (
						<ul className={styles.link_items}>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/about">Sobre</Link>
							</li>
							<li>
								<Link href="/contact">Contato</Link>
							</li>
							<li>
								<Link href="/listas">Listas</Link>
							</li>
							<li>
								<Link href="/props">Props</Link>
							</li>
							<li>
								<Link href="/filter">Filter</Link>
							</li>
							<li>
								<Link href="/efeitos">Efeitos</Link>
							</li>
						</ul>
					)}
				</nav>
			</header>
		</>
	);
}
