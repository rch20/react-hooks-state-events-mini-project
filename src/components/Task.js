import React from "react";

function Task({ text, category, onDeleteTask }) {
  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteTask(text);
  };

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text"> {category}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
