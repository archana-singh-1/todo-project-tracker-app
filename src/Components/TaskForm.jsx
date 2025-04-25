import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);  // Call the onAdd function passed as prop
      setText('');  // Clear input field after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}  // Update text state as user types
      />
      <button type="submit" disabled={!text.trim()}>Add</button>  {/* Disabled if no input */}
    </form>
  );
}

export default TaskForm;
