import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./components/TaskList";
import Header from "./components/header";
import { useState } from "react";
const staticList = [
  {
    name: "Buy a new gaming laptop",
  },
  {
    name: "Complete a previus task",
  },
  {
    name: "Create a video for youtube",
  },
];
const App = () => {
  if (!localStorage.getItem("list")) {
    localStorage.setItem("list", JSON.stringify(staticList));
  }

  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")));
  const [name, setName] = useState("");

  return (
    <>
      <Header />
      <div className="row mb-4 mt-5">
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              const newList = [...list, { name }];
              setList(newList);
              setName("");
              localStorage.setItem("list", JSON.stringify(newList));
            }}
          >
            +
          </button>
        </div>
      </div>
      <TaskList
        tasksList={list}
        deleteTask={(id) => {
          const newList = list.filter((el, i) => i !== id);
          setList(newList);
          localStorage.setItem("list", JSON.stringify(newList));
        }}
      />
    </>
  );
};

export default App;
