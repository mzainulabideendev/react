import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../assets/Features/todo/todoslice";

const SimpleTodo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>MY Todo</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleTodo;