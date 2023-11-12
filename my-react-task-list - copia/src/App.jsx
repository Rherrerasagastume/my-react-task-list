// App.jsx
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./components/TaskList";
import Header from "./components/header";
import useTaskManager from "./hooks/useTaskManager";

const staticList = [
  { name: "Buy a new gaming laptop", description: "Research the latest models.", completed: false },
  { name: "Complete a previous task", description: "Finish the report.", completed: false },
  { name: "Create a video for YouTube", description: "Plan and record a new video.", completed: false },
];

const App = () => {
  const { list, name, description, setName, setDescription, addTask, deleteTask, editTask } = useTaskManager(
    JSON.parse(localStorage.getItem("list")) || staticList
  );

  const handleAddTask = () => {
    addTask();
  };

  return (
    <>
      <Header />
      <div className="row">
        <div className="col-12">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Nombre de la tarea"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Descripción de la tarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAddTask}>
            Agregar tarea
          </button>
        </div>
        <div className="col-12">
          <TaskList tasksList={list} deleteTask={deleteTask} editTask={editTask} />
        </div>
      </div>
    </>
  );
};

export default App;
