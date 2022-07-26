import { Todo } from "../../models/Todo";
import { GetTodosLocalStorage } from "./get";

export const SaveTodoLocalStorage = (todo: Todo) => {
  const todos = GetTodosLocalStorage();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};
