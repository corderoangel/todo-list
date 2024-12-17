function TodoList({ tasks }) {
	return (
		<div>
			<h2>Tasks</h2>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>{task}</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
