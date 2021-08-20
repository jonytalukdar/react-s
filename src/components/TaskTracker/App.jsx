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

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
