import styles from "../props/props.module.css";

import Card from '@/components/card'

const dogs = [
	{
		id: 1,
		nome: "Perigo",
		raca: "Vira-lata",
		peso: 1.5,
		cor: "Branco",
	},
	{
		id: 2,
		nome: "Bob",
		raca: "Pit-bull",
		peso: 30,
		cor: "Marrom",
	},
	{
		id: 3,
		nome: "Mel",
		raca: "Pug",
		peso: 8,
		cor: "Preto",
	},
];

export default function Props() {
  return (
		<div>
			<h1 className={styles.props}>Props</h1>;
			<div>
				{dogs.map((dog) => (
					<Card
						key={dog.id}
						nome={dog.nome}
						raca={dog.raca}
						peso={dog.peso}
						cor={dog.cor}

					/>
				))}
			</div>
		</div>
	);
}
