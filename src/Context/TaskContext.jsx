import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);

	const deleteTask = (taskIndex) => {
		setTasks(tasks.filter((_, index) => index !== taskIndex));
	};

	const addTask = (newTask) => {
		if (newTask.trim() === "") return;
		setTasks((prevTasks) => [...prevTasks, newTask]);
	};

	return <TaskContext.Provider value={{ tasks, deleteTask, addTask }}> {children} </TaskContext.Provider>;
};

export const useTasks = () => {
	return useContext(TaskContext);
};
