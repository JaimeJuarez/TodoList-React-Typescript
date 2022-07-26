import { AddTodo } from "./AddTodo";

export const MainView = () => {
  return (
    <main>
      <div className="todoListCont">
        <h1>TodoList</h1>
        <hr />
        <form>
          <AddTodo></AddTodo>
          <div className="select">
            <select name="todo-select" className="filter-select">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
        <div className="todo-container">
          <div className="todo-list"></div>
        </div>
      </div>
    </main>
  );
};
