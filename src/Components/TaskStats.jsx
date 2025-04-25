import React from 'react';

function TaskStats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="task-stats">
      <span>Total: {total}</span>
      <span>✅ Completed: {completed}</span>
      <span>⏳ Pending: {pending}</span>
    </div>
  );
}

export default TaskStats;
