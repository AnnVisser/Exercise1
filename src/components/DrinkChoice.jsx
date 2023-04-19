export const DrinkChoice = ({ drink }) => {
	return (
		<>
			<p>{drink.name}</p>
			<img width='100px, 100px' src={drink.imgUrl} alt={drink.alt}></img>

			<p>Your drink will be ready in a few minutes.</p>
		</>
	);
};
