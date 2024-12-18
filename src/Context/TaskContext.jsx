import { createContext, useContext, useState, useEffect } from "react";
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from "../Utils/LocalStorage";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			const savedTask = loadTasksFromLocalStorage();
			if (savedTask) {
				setTasks(savedTask);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		if (tasks.length > 0) {
			saveTasksToLocalStorage(tasks);
		}
	}, [tasks]);

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
