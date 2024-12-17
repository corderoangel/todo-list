import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
	const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);

	const deleteTask = (taskIndex) => {
		setTasks(tasks.filter((_, index) => index !== taskIndex));
	};

	return (
		<div className="App">
			<TodoList tasks={tasks} deleteTask={deleteTask} />
		</div>
	);
}

export default App;
