import { useState } from "react";
import { useTasks } from "../Context/TaskContext";

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
		<div>
			<input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task" />
			<button onClick={handleAddTask}>Add</button>
		</div>
	);
}

export default AddTask;
