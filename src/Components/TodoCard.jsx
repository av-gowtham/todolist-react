import PropTypes from "prop-types";

function TodoCard({ todo }) {
  return (
    <li className="todoItem">
      {todo}
      <div>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </li>
  );
}

export default TodoCard;

TodoCard.propTypes = {
  todo: PropTypes.string,
};
