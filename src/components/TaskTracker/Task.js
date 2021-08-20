import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  const { id, text, day, reminder } = task;
  return (
    <div
      className={`task ${reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(id)}
    >
      <h3>
        {text}
        <button onClick={() => onDelete(id)}>
          <i className="fas fa-trash-alt fa-2x"></i>
        </button>
      </h3>
      <p>{day}</p>
    </div>
  );
};

export default Task;
