import React from 'react';

const Task = ({ task }) => {
  const { text } = task;
  return (
    <div className="task">
      <h3>{text}</h3>
    </div>
  );
};

export default Task;
