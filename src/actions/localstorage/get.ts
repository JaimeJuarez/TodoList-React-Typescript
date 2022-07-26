import { Todo } from "../../models/Todo";

export const GetTodosLocalStorage = (): Todo[] => {
  if (!localStorage.getItem("todos")) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem("todos") ?? "[]");
  }
};
