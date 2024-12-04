import styles from "../listas/lista.module.css";
export default function Listas() {
	const racas = ["Vira-lata", "Pit-bull", "Shitzu", "Labrador","Pug"];

  const racasObj = [
		{
			id: 1,
			raca: "Cachorro",
		},
		{
			id: 2,
			raca: "Cachorro",
		},
		{
			id: 3,
			raca: "Cachorro",
		},
		{
			id: 4,
			raca: "Cachorro",
		},
		{
			id: 5,
			raca: "Cachorro",
		},
	];
	return (
		<div>
			<h1 className={styles.lista}>Listas</h1>
			<h2 className={styles.lista1}>Lista comum</h2>
			<ul className={styles.list}>
				{racas.map((raca, i) => (
					<li key={i}>
						{i + 1} - {raca}
					</li>
				))}
			</ul>

			<div>
				<h2 className={styles.lista1}>Lista de objetos</h2>
				{racasObj.map((racaObj) => (
					<div key={racaObj.id}>
						<ul className={styles.list}>
							<li>
								<h3>{racaObj.id}</h3>
								<p>{racaObj.raca}</p>
							</li>
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
