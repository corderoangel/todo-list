import "./App.css";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
// import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from "./Utils/LocalStorage";
import { TaskProvider } from "./Context/TaskContext";
import Modal from "./components/Modal";
import { useState } from "react";

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
	const [isOpenModal, setIsOpenModal] = useState(false);

	const openModal = () => setIsOpenModal(true);

	const closeModal = () => setIsOpenModal(false);

	return (
		<TaskProvider>
			<div className="App">
				<AddTask />
				<TodoList />
				<button onClick={openModal}>Open modal</button>
			</div>
			<Modal isOpen={isOpenModal} onClose={closeModal}>
				<h2>Modal</h2>
				<p>Modal example and portals in react</p>
			</Modal>
		</TaskProvider>
	);
}

export default App;
