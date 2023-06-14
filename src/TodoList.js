import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={value}
          placeholder="Add a new task"
          onChange={e => setValue(e.target.value)}
          required
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = text => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  };

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <TodoForm addTask={addTask} />
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
            style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
          >
            {task.text}
            <div>
              <button
                className="btn btn-success btn-sm mr-1"
                onClick={() => completeTask(index)}
              >
                Mark as done
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;