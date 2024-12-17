import "./App.css";
import TodoList from "./TodoList";

function App() {
	const tasks = ["tarea 1", "tarea 2", "tarea 3"];

	return (
		<>
			<TodoList tasks={tasks} />
		</>
	);
}

export default App;
