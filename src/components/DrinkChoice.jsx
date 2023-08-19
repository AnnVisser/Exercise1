import { Button } from "./Button";

export const DrinkChoice = ({ drink, clickOn }) => {
	return (
		<>
			<p>{drink.name}</p>
			<img width='100px, 100px' src={drink.imgUrl} alt={drink.alt}></img>

			<p>Your drink will be ready in a few minutes.</p>

			<Button text={"Change selection"} clickOn={() => clickOn()} />
		</>
	);
};
