import { FaTrash } from "react-icons/fa";
import "./TaskItem.css";
const TaskItem = ({ task, deleteTask, index }) => {
	const taskStyle = {
		padding: "10px",
		border: "1px solid #ddd",
		borderRadius: "5px",
		marginBottom: "10px",
		fontSize: "1rem",
	};

	const iconStyle = {
		cursor: "pointer",
		fontSize: "1.2rem",
		color: "#f44336",
		transition: "color 0.3s",
	};

	const iconHoverStyle = {
		color: "#e53935",
	};

	return (
		<li className="taskItem" key={index} style={taskStyle}>
			{task}
			<FaTrash
				style={iconStyle}
				onMouseEnter={(e) => (e.target.style.color = iconHoverStyle.color)}
				onMouseLeave={(e) => (e.target.style.color = iconStyle.color)}
				onClick={() => deleteTask(index)}
			/>
		</li>
	);
};

export default TaskItem;
