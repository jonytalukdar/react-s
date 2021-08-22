import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import Header from './Header';
import './style.css';
import Tasks from './Tasks';

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

  // delete task
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    const removedTask = tasks.filter((task) => id !== task.id);
    setTasks(removedTask);
  };

  // toggle reminder
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };
  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // add task
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

  // showToggle
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
