import React, { useState } from "react";
import "./TaskForm.css";

function TaskForm() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task) {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  return (
    <div>
      <form className="task-form" onSubmit={handleSubmit}>
        <h2>Add Task</h2>
        <div className="form-group">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task"
            required
          />
        </div>
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>

      <div className="task-list">
        <h2>Task List</h2>
        <ul>
          {taskList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskForm;
