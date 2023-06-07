import React, { useState } from "react";
import axios from "axios";

const TaskForm = () => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/tasks", { task });
      alert("Task added successfully!");
      setTask("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
