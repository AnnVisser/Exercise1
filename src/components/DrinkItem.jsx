import "./DrinkItem.css";

export const DrinkItem = ({ drink, clickOn }) => {
	return (
		<button className='drink-item' onClick={() => clickOn(drink)}>
			<img src={drink.imgUrl} alt={drink.alt}></img>
			<p>{drink.name}</p>
		</button>
	);
};
