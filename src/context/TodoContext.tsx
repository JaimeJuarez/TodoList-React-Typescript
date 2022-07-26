import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { v4 as uuid } from "uuid";
import { RemoveTodoLocalStorage } from "../actions/localstorage/delete";
import { GetTodosLocalStorage } from "../actions/localstorage/get";
import { SaveTodoLocalStorage } from "../actions/localstorage/save";
import { ToggleTodoLocalStorage } from "../actions/localstorage/toggle";
import { Todo } from "../models/Todo";

interface TodoContextValue {
  todos: Todo[];
  currentEditingTodo: Todo | null;
  addTodo: (todo: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, value: string) => void;
  toggleTodo: (id: string) => void;
  setCurrentEditingTodo: (todo: Todo | null) => void;
}
const context = createContext<TodoContextValue | null>(null);
export const TodoContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(GetTodosLocalStorage());
  const [currentEditingTodo, setCurrentEditingTodo] = useState<Todo | null>(
    null
  );
  const addTodo: TodoContextValue["addTodo"] = (newTodo) => {
    const todo = {
      id: uuid(),
      value: newTodo,
      completed: false,
    };
    setTodos([...todos, { ...todo }]);
    SaveTodoLocalStorage(todo);
  };
  const removeTodo: TodoContextValue["removeTodo"] = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    RemoveTodoLocalStorage(id);
  };
  const editTodo: TodoContextValue["editTodo"] = (id, value) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, value } : todo)));
    setCurrentEditingTodo(null);
  };
  const toggleTodo: TodoContextValue["toggleTodo"] = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    ToggleTodoLocalStorage(todos.find((todo) => todo.id === id)!);
  };
  return (
    <context.Provider
      value={{
        todos,
        currentEditingTodo,
        addTodo,
        removeTodo,
        editTodo,
        toggleTodo,
        setCurrentEditingTodo,
      }}
    >
      {children}
    </context.Provider>
  );
};
export const useTodoContext = () => {
  return useContext(context)!;
};
