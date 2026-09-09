import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../assets/Features/todo/todoslice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});