import { useState } from "react";
import { useTasks } from "../Context/TaskContext";
import "./AddTask.css";
import image from "../assets/image.png"; // Ajusta la ruta según tu estructura

function AddTask() {
	const [task, setTask] = useState("");
	const { addTask } = useTasks();

	const handleAddTask = () => {
		if (task.trim()) {
			addTask(task);
			setTask("");
		}
	};

	return (
		<div className="addTask">
			<h1>Todo List</h1>
			<input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task" />
			<button onClick={handleAddTask}>
				Add <span>Add</span>
			</button>
			<div>
				<img src={image} />
			</div>
		</div>
	);
}

export default AddTask;
