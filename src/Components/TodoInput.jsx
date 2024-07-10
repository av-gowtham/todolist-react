import PropTypes from "prop-types";

function TodoInput(props) {
  const { handleAddTodo, todoValue, setTodoValue } = props;

  function handleAdd() {
    if (!todoValue) {
      alert("Enter todo");
      return;
    }
    handleAddTodo(todoValue);
    setTodoValue("");
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter todo..."
      ></input>
      <button onClick={handleAdd}>Add</button>
    </header>
  );
}

export default TodoInput;

TodoInput.propTypes = {
  handleAddTodo: PropTypes.func,
  todoValue: PropTypes.string,
  setTodoValue: PropTypes.func,
};
