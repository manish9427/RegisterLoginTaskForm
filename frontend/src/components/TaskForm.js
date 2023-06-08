import React, { useState } from "react";
import "./TaskForm.css";

function TaskForm() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
            required
          />
          <button type="submit">Add Task</button>
        </div>
      </form>
      {tasks.length > 0 ? (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks added yet.</p>
      )}
    </div>
  );
}

export default TaskForm;
