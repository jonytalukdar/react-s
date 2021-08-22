import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ onTask }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const taskHandler = (e) => {
    setTask(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const reminderHandler = (e) => {
    setReminder(e.currentTarget.checked);
  };

  const addTask = (e) => {
    e.preventDefault();
    const taskData = {
      id: Math.random().toString(),
      text: task,
      day: date,
      reminder: reminder,
    };
    setTask('');
    setDate('');
    setReminder(false);
    onTask(taskData);
  };

  return (
    <form onSubmit={addTask}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={task}
          onChange={taskHandler}
        />
      </div>
      <div className="form-control">
        <label>Time And Date</label>
        <input
          type="text"
          placeholder="Add Date"
          value={date}
          onChange={dateHandler}
        />
      </div>
      <div className="form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={reminderHandler}
        />
      </div>
      <button className="btn btn-block" type="submit" disabled>
        Save
      </button>
    </form>
  );
};

AddTask.propTypes = {
  onTask: PropTypes.func.isRequired,
};

export default AddTask;
