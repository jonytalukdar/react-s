import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ onTask }) => {
  const taskInputRef = useRef();
  const dateInputRef = useRef();
  const reminderInputRef = useRef(false);

  const addTask = (e) => {
    e.preventDefault();

    const task = taskInputRef.current.value;
    const date = dateInputRef.current.value;
    const reminder = reminderInputRef.current.checked;

    const taskData = {
      text: task,
      day: date,
      reminder: reminder,
    };
    taskInputRef.current.value = '';
    dateInputRef.current.value = '';
    reminderInputRef.current.checked = false;

    onTask(taskData);
  };

  return (
    <form onSubmit={addTask}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" ref={taskInputRef} />
      </div>
      <div className="form-control">
        <label>Time And Date</label>
        <input type="text" placeholder="Add Date" ref={dateInputRef} />
      </div>
      <div className="form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          value={reminderInputRef}
          ref={reminderInputRef}
        />
      </div>
      <button className="btn btn-block" type="submit">
        Save
      </button>
    </form>
  );
};

AddTask.propTypes = {
  onTask: PropTypes.func.isRequired,
};

export default AddTask;
