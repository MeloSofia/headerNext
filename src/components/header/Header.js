import styles from "../../style/header.module.css"
export default function Header(){
    return(
        <div>
            <ul className={styles.body}>
                <li>Início</li>
                <li>Pág 2</li>
                <li>Pág 3</li>
                <li>Pág 4</li>
            </ul>
        </div>
    )
}