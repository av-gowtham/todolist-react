import PropTypes from "prop-types";

function TodoCard({ todo, handleDeleteTodo, index, handleEditTodo }) {
  return (
    <li className="todoItem">
      {todo}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoCard;

TodoCard.propTypes = {
  todo: PropTypes.string,
  handleDeleteTodo: PropTypes.func,
  handleEditTodo: PropTypes.func,
  index: PropTypes.number,
};
