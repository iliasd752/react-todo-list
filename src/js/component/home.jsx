import React from "react";
import ToDoForm from "./ToDoForm/ToDoForm";


const Home = () => {
	return (
		<div className="todo-app">
			<h1>Todo List</h1>
			<ToDoForm />
		</div>
	);
};

export default Home;
