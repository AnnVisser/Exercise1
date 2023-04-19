export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
	return (
		<div>
			<h2>Would you like a tea or a coffee?</h2>
			<div className='button-group'>
				<button className='button'>{drinkOne}</button>
				<button className='button'>{drinkTwo}</button>
			</div>
		</div>
	);
};
