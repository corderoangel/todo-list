import "./App.css";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import { TaskProvider } from "./Context/TaskContext";

function App() {
	return (
		<TaskProvider>
			<div className="App">
				<AddTask />
				<TodoList />
			</div>
		</TaskProvider>
	);
}

export default App;
