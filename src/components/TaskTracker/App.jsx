import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
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
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

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

  const addTask = (taskData) => {
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      body: JSON.stringify(taskData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks((prevState) => {
          return [data, ...prevState];
        });
      });
  };

  const showToggle = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onShowToggle={showToggle}
        showTask={showAddTask}
      />
      {showAddTask && <AddTask onTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h2 style={{ textAlign: 'center', color: 'red' }}>No Task Available</h2>
      )}
    </div>
  );
};

export default App;
