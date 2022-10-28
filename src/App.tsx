import React, { useState, useRef } from 'react';

function App() {
	const [items, setItems] = useState([]);
	const inputRef = useRef();

	function onSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		const value = inputRef.current.value;
		if (value === '') {
			return;
		} else {
			setItems((prev) => {
				return [...prev, value];
			});
			inputRef.current.value = '';
		}
	}

	return (
		<>
			Search:
			<input type="search" />
			<br />
			<br />
			<form onSubmit={onSubmit}>
				New Item: <input type="text" ref={inputRef} />
				<button type="submit">Add</button>
			</form>
			<h3>Items:</h3>
			{items.map((item: string) => (
				<div>{item}</div>
			))}
		</>
	);
}

export default App;
