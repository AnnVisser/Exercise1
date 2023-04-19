import "./Button.css";

export const Button = ({ drinkOne, drinkTwo }) => {
	return (
		<div className='button-group'>
			<button className='button'>{drinkOne}</button>
			<button className='button'>{drinkTwo}</button>
		</div>
	);
};
