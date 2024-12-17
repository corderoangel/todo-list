import { useState } from "react";

const AddTask = ({ addTask }) => {
	const [newTask, setNewTask] = useState("");
	const handleInputChange = (event) => {
		setNewTask(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addTask(newTask);
		setNewTask("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={newTask} onChange={handleInputChange} placeholder="Add a new task" />
			<button type="submit">Add</button>
		</form>
	);
};

export default AddTask;
