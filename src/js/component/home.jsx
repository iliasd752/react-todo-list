import React, { useState } from "react";
import ToDoForm from "./ToDoForm/ToDoForm";
import TodoItem from "./TodoItem/TodoItem";


const Home = () => {

	const [todos, setTodos] = useState([]);


const addTodo = (text) => {
let id = 1;
if (todos.length > 0) {
	id = todos[0].id + 1
}

let todo = {id: id, text: text}
let newTodos = [todo, ...todos];
setTodos(newTodos)

};

	return (
		<div className="todo-app">
			<h1>Tasks to do</h1>
			<ToDoForm addTodo = {addTodo}/>
			{todos.map((todo) = () => {
				return <TodoItem todo={todo} />
			})}
		</div>
	);
};

export default Home;
