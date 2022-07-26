import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

export const AddTodo = () => {
  const [todoValue, setTodoValue] = useState("");

  const { addTodo } = useTodoContext();

  return (
    <>
      <input
        type="text"
        name="todo "
        className="todo-input"
        placeholder="Add a todo"
        autoComplete="off"
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
      />
      <button
        type="submit"
        className="todo-button"
        onClick={(e) => {
          e.preventDefault();
          addTodo(todoValue);
          setTodoValue("");
        }}
      >
        <i className="fas fa-plus-square "></i>
      </button>
    </>
  );
};
