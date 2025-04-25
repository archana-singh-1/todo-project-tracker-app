import React, { useState } from 'react';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';
import TaskStats from './TaskStats.jsx';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-manager">
      <TaskForm onAdd={addTask} />
      <TaskStats tasks={tasks} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default TaskManager;
