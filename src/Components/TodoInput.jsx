import PropTypes from "prop-types";

function TodoInput(props) {
  const { handleAddTodo, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter todo..."
      ></input>
      <button
        onClick={() => {
          if (!todoValue) {
            alert("Enter todo");
            return;
          }
          handleAddTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;

TodoInput.propTypes = {
  handleAddTodo: PropTypes.func,
  todoValue: PropTypes.string,
  setTodoValue: PropTypes.func,
};
