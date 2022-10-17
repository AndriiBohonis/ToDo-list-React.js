import { useState } from "react";
function TodoForm({ addTask }) {
	const [userInput, setUserInput] = useState('')
	const handleSabmit = (event) => {
		event.preventDefault();
		addTask(userInput)
		setUserInput('')

	}

	const handleChange = (event) => {
		setUserInput(event.currentTarget.value)
}
	
	return (
		<form onSubmit={handleSabmit}  >
			<input
				type="text"
				value={userInput}
				placeholder='Заміточка...'
				onChange={handleChange}
			/>
			<button type="submit" >Додати</button>
		</form>

	)
}

export default TodoForm;