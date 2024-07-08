import { useState } from "react";
import PropTypes from "prop-types";

function TodoInput(props) {
  const { handleAddTodo } = props;

  const [newValue, setNewValue] = useState("");

  return (
    <header>
      <input
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
        placeholder="Enter todo..."
      ></input>
      <button onClick={handleAddTodo(newValue)}>Add</button>
    </header>
  );
}

export default TodoInput;

TodoInput.propTypes = {
  handleAddTodo: PropTypes.func,
};
