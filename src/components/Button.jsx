import "./Button.css";

export const Button = ({ text, clickOn }) => (
	<button className='button' onClick={clickOn}>
		{text}
	</button>
);
