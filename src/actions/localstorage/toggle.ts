import { Todo } from "../../models/Todo";
import { GetTodosLocalStorage } from "./get";

export const ToggleTodoLocalStorage = (todo: Todo) => {
  const todos = GetTodosLocalStorage();
  const todoIndex = todos.findIndex((t) => t.id === todo.id);
  if (todoIndex > -1) {
    todos[todoIndex].completed = !todos[todoIndex].completed;
  }
  localStorage.setItem("todos", JSON.stringify(todos));
};
