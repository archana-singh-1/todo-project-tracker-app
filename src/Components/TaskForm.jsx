import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);  
      setText('');  
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}  
      />
      <button type="submit" disabled={!text.trim()}>Add</button>
    </form>
  );
}

export default TaskForm;
