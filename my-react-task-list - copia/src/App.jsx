import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./components/TaskList";
import Header from "./components/header";
import useTaskManager from "./hooks/useTaskManager";

const staticList = [
  { name: "Buy a new gaming laptop", completed: false },
  { name: "Complete a previous task", completed: false },
  { name: "Create a video for YouTube", completed: false },
];

const App = () => {
  const { list, addTask, deleteTask, editTask } = useTaskManager(
    JSON.parse(localStorage.getItem("list")) || staticList
  );
  const [name, setName] = useState("");

  const handleAddTask = () => {
    console.log("Adding Task from App component:", name);
    addTask(name);
    setName("");
  };

  return (
    <>
      <Header />
      <div className="row mb-4 mt-5">
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-primary" onClick={handleAddTask}>
            +
          </button>
        </div>
      </div>
      <TaskList tasksList={list} deleteTask={deleteTask} editTask={editTask} />
    </>
  );
};

export default App;
