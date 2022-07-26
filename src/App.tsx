import "./app.css";
import { TodoList } from "./components/TodoList";
import { MainView } from "./components/View";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <MainView />
      <TodoList></TodoList>
    </TodoContextProvider>
  );
}

export default App;
