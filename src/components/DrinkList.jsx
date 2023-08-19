import { DrinkItem } from "./DrinkItem";

export const DrinkList = ({ drinks, clickOn }) => {
	return (
		<>
			{drinks.map((drink) => (
				<DrinkItem key={drink.id} drink={drink} clickOn={clickOn} />
			))}
		</>
	);
};
