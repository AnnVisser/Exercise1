import { TextInput } from "./TextInput";
import { useState } from "react";
import { DrinkList } from "./DrinkList";
import { availableDrinks } from "../../utils/data";

export const DrinkSearch = ({ clickOn }) => {
	const [searchField, setSearchField] = useState("test drink");

	return (
		<>
			<label>Search for drinks here:</label>
			<TextInput />
			<DrinkList clickOn={clickOn} drinks={availableDrinks} />
		</>
	);
};
