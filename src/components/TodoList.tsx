import { useTodoContext } from "../context/TodoContext";

export const TodoList = () => {
  const { todos, toggleTodo, removeTodo, editTodo } = useTodoContext();

  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return (
          <>
            <div className="todo-list">
              <div className={todo.completed ? "todo completed" : "todo"}>
                <button
                  className="complete-btn"
                  onClick={() => {
                    toggleTodo(todo.id);
                  }}
                >
                  <i
                    className={
                      todo.completed
                        ? "fa-solid fas fa-x"
                        : "fa-solid fas fa-check"
                    }
                  ></i>
                </button>
                <li key={todo.value}>{todo.value}</li>
                <button
                  className="complete-btn"
                  onClick={() => {
                    editTodo(todo.id, todo.value);
                  }}
                >
                  <i className="fa-solid fas fa-pen"></i>
                </button>
                <button
                  className="complete-btn"
                  onClick={() => {
                    removeTodo(todo.id);
                  }}
                >
                  <i className="fa-solid fas fa-trash"></i>
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
