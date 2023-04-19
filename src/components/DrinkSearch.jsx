import { TextInput } from "./TextInput";
import { useState } from "react";

export const DrinkSearch = () => {
	const [searchField, setSearchField] = useState("test drink");

	return (
		<>
			<label>Search for drinks here:</label>
			<TextInput />
			<p>{searchField}</p>
		</>
	);
};
