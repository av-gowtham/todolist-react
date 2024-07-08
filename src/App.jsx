import { useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "Go to the gym",
    "Get some Apple",
    "Meet Guhan",
  ]);

  function handleAddTodo(newTodo) {
    const AddNewTodoList = [...todos, newTodo];
    setTodos(AddNewTodoList);
  }

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
