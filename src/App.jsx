import "./App.css";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
// import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from "./Utils/LocalStorage";
import { TaskProvider } from "./Context/TaskContext";

function App() {
	// const [tasks, setTasks] = useState([]);

	// useEffect(() => {
	// 	const fetchData = () => {
	// 		const savedTask = loadTasksFromLocalStorage();
	// 		if (savedTask) {
	// 			setTasks(savedTask);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);

	// useEffect(() => {
	// 	if (tasks.length > 0) {
	// 		saveTasksToLocalStorage(tasks);
	// 	}
	// }, [tasks]);

	return (
		<TaskProvider>
			<div className="App">
				<h1>Todo List</h1>
				<AddTask />
				<TodoList />
			</div>
		</TaskProvider>
	);
}

export default App;
