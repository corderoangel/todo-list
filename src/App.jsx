import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const savedTasks = JSON.parse(localStorage.getItem("tasks"));
		if (savedTasks) {
			setTasks(savedTasks);
		}
	}, []);

	useEffect(() => {
		if (tasks.length > 0) {
			localStorage.setItem("tasks", JSON.stringify(tasks));
		}
	}, [tasks]);

	const [newTask, setNewTask] = useState("");

	const deleteTask = (taskIndex) => {
		setTasks(tasks.filter((_, index) => index !== taskIndex));
	};

	const addTask = (event) => {
		event.preventDefault();
		if (newTask.trim() === "") return;
		setTasks((prevTasks) => [...prevTasks, newTask]);
		setNewTask("");
	};

	return (
		<div className="App">
			<h1>Todo List</h1>
			<form onSubmit={addTask}>
				<input
					type="text"
					value={newTask}
					onChange={(event) => {
						setNewTask(event.target.value);
					}}
					placeholder="Add a new task"
				/>
				<button type="submit">Add</button>
			</form>
			<TodoList tasks={tasks} deleteTask={deleteTask} />
		</div>
	);
}

export default App;
