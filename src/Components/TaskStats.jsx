import React from 'react';

function TaskStats({ tasks, setFilter }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="task-stats">
      <button onClick={() => setFilter('total')}>Total: {total}</button>
      <button onClick={() => setFilter('completed')}>Completed: {completed}</button>
      <button onClick={() => setFilter('pending')}>Pending: {pending}</button>
    </div>
  );
}

export default TaskStats;
