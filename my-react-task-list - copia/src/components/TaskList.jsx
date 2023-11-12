// TaskList.jsx
import { useState } from "react";
import Task from "./Task";

const TaskList = (props) => {
  const [completeTask, setCompleteTask] = useState(0);

  return (
    <>
      {props.tasksList.map((task, index) => (
        <Task
          key={index}
          id={index}
          name={task.name}
          description={task.description}
          isChecked={(checked) => {
            setCompleteTask(completeTask + (checked ? 1 : -1));
          }}
          isDeleted={(id) => {
            props.deleteTask(id);
          }}
          isUpdated={(id, updatedTask) => {
            props.editTask(id, updatedTask);
          }}
        />
      ))}
      <p>Tareas pendientes: {props.tasksList.length - completeTask}</p>
    </>
  );
};

export default TaskList;
