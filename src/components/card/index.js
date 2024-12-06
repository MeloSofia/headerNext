import styles from "../card/card.module.css"
export default function Card({nome, raca, peso, cor}){
  return (
		<div className={styles.card}>
			<h2>{nome}</h2>
			<p className={styles.p}>Raça: {raca}</p>
			<p className={styles.p}>Peso: {peso}</p>
			<p className={styles.p}>Cor: {cor}</p>
		</div>
	);
}