import React, { useState } from "react";
import "./TaskManager.css";
function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("total");
  const [text, setText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const newTask = { id: Date.now(), text, completed: false };
      setTasks([newTask, ...tasks]);
      setText("");
    }
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  return (
    <div className="app-container">
      <div className="sidebar">
        <div>
          <div className="profile">
            <div className="avatar"></div>
            <div>
              <div className="name">Mahima Awasti</div>
              <div className="email">mahima23@navguru.com</div>
            </div>
          </div>
          <input type="text" className="search" placeholder="Search" />
          <div className="task-stats-sidebar">
            <button>🌞 My day</button>
            <button>📅 This week</button>
            <button>🗓️ This month</button>
            {/* <div className="task-stats"> */}
            <button onClick={() => setFilter("total")}>Total: {total}</button>
            <button onClick={() => setFilter("completed")}>
              Completed: {completed}
            </button>
            <button onClick={() => setFilter("pending")}>
              Pending: {pending}
            </button>
            {/* </div> */}
          </div>
        </div>
        <button className="logout">⎋ Logout</button>
      </div>
      <div className="main-view">
      <div className="list-div">
        {filteredTasks.length === 0 ? (
          <p className="no-tasks">No tasks yet. Add one!</p>
        ) : (
          <ul className="task-list">
            {filteredTasks.map((task) => (
              <li key={task.id} className={task.completed ? "completed" : ""}>
                <label>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  {task.text}
                </label>
                <button onClick={() => deleteTask(task.id)}>❌</button>
              </li>
            ))}
          </ul>
        )}
      </div>
        <div className="background">
          <h1>{tasks.length === 0 ? "No tasks" : "Tasks"}</h1>

          <form onSubmit={addTask} className="task-form">
            <input
              type="text"
              placeholder="Add a new task..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" disabled={!text.trim()}>
              ＋
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default TaskManager;
