import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  const { id, text, day, reminder } = task;
  return (
    <>
      <div className="task-container">
        <div
          className={`task ${reminder ? 'reminder' : ''}`}
          onClick={() => onToggle(id)}
        >
          <h3>{text}</h3>
          <p>{day}</p>
        </div>
        <FaTimes
          style={{ cursor: 'pointer', color: 'red' }}
          onClick={() => onDelete(id)}
        />
      </div>
    </>
  );
};

export default Task;
