import { coffee, tea } from "../utils/data";
import "./App.css";
import { Button } from "./components/Button";
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
	const newCustomer = (
		<div>
			<h1>{greeting}</h1>
			{description}
			<DrinkSearch />
			<Button drinkOne={tea.name} drinkTwo={coffee.name} />
		</div>
	);

	return (
		<div>
			<div className='App'>
				{userDrink ? <DrinkChoice drink={userDrink} /> : newCustomer}
			</div>
		</div>
	);
};

export default App;
