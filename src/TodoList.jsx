function TodoList({ tasks, deleteTask }) {
	const todoListStyle = {
		backgroundColor: "#fff",
		padding: "20px",
		borderRadius: "8px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
	};

	const taskStyle = {
		padding: "10px",
		border: "1px solid #ddd",
		borderRadius: "5px",
		marginBottom: "10px",
		fontSize: "1rem",
	};

	const buttonStyle = {
		backgroundColor: "#f44336",
		color: "white",
		border: "none",
		borderRadius: "5px",
		padding: "5px 10px",
		cursor: "pointer",
	};

	return (
		<div style={todoListStyle}>
			<h2>Tasks</h2>
			<ul>
				{tasks.map((task, index) => (
					<li key={index} style={taskStyle}>
						{task}
						<button
							style={buttonStyle}
							onClick={() => {
								deleteTask(index);
							}}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
