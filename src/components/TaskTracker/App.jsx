import React, { useState } from 'react';
import Header from './Header';
import './style.css';
import Tasks from './Tasks';

const tasksData = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Meeting at Feridns',
    day: 'Feb 7th at 1:30pm',
    reminder: false,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(tasksData);

  const deleteTask = (id) => {
    const removedTask = tasks.filter((task) => id !== task.id);
    setTasks(removedTask);
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h2 style={{ textAlign: 'center', color: 'red' }}>No Task Available</h2>
      )}
    </div>
  );
};

export default App;
