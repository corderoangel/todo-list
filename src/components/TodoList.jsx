import { useTasks } from "../Context/TaskContext";
import TaskItem from "./TaskItem";

function TodoList() {
	const { tasks, deleteTask } = useTasks();

	const todoListStyle = {
		backgroundColor: "#fff",
		padding: "20px",
		borderRadius: "8px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
	};

	return (
		<div style={todoListStyle}>
			<h2>Tasks</h2>
			<ul>
				{tasks.map((task, index) => (
					<TaskItem key={index} task={task} index={index} deleteTask={deleteTask} />
				))}
			</ul>
		</div>
	);
}

export default TodoList;
