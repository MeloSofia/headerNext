import Link from "next/link"
import Image from "next/image"
import styles from "../../style/header.module.css"
import {Poppins} from "next/font/google"

export default function Header(){
    return(
        <nav>
            <div>
                <Image src="/assets/s.png" width="30" height="30" alt="sofia"/>
                <h1>Sofia Melo</h1>
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/About">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}