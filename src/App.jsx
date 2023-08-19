import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { useState } from "react";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
	const greeting = "Hello overly valued guest!";
	const description = (
		<p>
			In this virtual café you can enjoy the virtual joy of ordering virtual
			drinks, which of course, you will only be able to drink in a virtual
			manner.
		</p>
	);
	const [userDrink, setUserDrink] = useState();

	return (
		<div className='App'>
			{userDrink ? (
				<DrinkChoice drink={userDrink} />
			) : (
				<>
					<h1>{greeting}</h1>
					<DrinkSearch clickOn={setUserDrink} />
				</>
			)}
		</div>
	);
};

export default App;
