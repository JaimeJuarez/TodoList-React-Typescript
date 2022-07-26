import { useTodoContext } from "../context/TodoContext";

export const EditTodo = () => {
  const { todos, toggleTodo, removeTodo, editTodo } = useTodoContext();

  return <div>EditTodo</div>;
};
