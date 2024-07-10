import TodoCard from "./TodoCard";
import PropTypes from "prop-types";

function TodoList(props) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} index={todoIndex} key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDeleteTodo: PropTypes.func,
};
