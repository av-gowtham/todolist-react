import { useEffect, useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newlist) {
    localStorage.setItem("todos", JSON.stringify({ todos: newlist }));
    console.log(
      localStorage.setItem("todos", JSON.stringify({ todos: newlist })),
      "local"
    );
  }

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index;
    });
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  // useEffect(() => {
  //   if (!window.localStorage) {
  //     return;
  //   }

  //   let localTodos = localStorage.getItem("todos");
  //   if (!localTodos) {
  //     return;
  //   }

  //   localTodos = JSON.parse(localTodos).todos;
  //   setTodos(localTodos);
  // }, []);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos).todos);
    }
    console.log("useeffect dome", JSON.parse(storedTodos).todos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
