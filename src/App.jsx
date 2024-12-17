import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from "./Utils/LocalStorage";

function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			const savedTask = loadTasksFromLocalStorage();
			if (savedTask) {
				setTasks(savedTask);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		if (tasks.length > 0) {
			saveTasksToLocalStorage(tasks);
		}
	}, [tasks]);

	const deleteTask = (taskIndex) => {
		setTasks(tasks.filter((_, index) => index !== taskIndex));
	};

	const addTask = (newTask) => {
		if (newTask.trim() === "") return;
		setTasks((prevTasks) => [...prevTasks, newTask]);
	};

	return (
		<div className="App">
			<h1>Todo List</h1>
			<AddTask addTask={addTask} />
			<TodoList tasks={tasks} deleteTask={deleteTask} />
		</div>
	);
}

export default App;
