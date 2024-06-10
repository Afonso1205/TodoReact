import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  const isExpired =
    todo.completionDate && new Date(todo.completionDate) < new Date();

  return (
    <div className="todo">
      <div
        className="content"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div className="actions">
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
      {todo.completionDate && (
        <div className="completion-date">
          {new Date(todo.completionDate).toLocaleDateString()}
          {isExpired && <span className="expired"> - Em Atraso</span>}
        </div>
      )}
    </div>
  );
};

export default Todo;
