import { GetTodosLocalStorage } from "./get";

export const RemoveTodoLocalStorage = (todo: string) => {
  const todos = GetTodosLocalStorage();
  const todoIndex = todos.findIndex((t) => t.id === todo);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
  localStorage.setItem("todos", JSON.stringify(todos));
};
