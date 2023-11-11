import { useState } from "react";
import Task from "./Task";
const TaskList = (props) => {
  const [completeTask, setCompleteTask] = useState(0);
  return (
    <>
      {props.tasksList.map((e, i) => (
        <Task
          key={i}
          id={i}
          name={e.name}
          isChecked={(checked) => {
            setCompleteTask(completeTask + (checked ? 1 : -1));
          }}
          isDeleted={(id) => {
            props.deleteTask(id);
          }}
          isUpdated={(data) => {
            props.editTask(data);
          }}
        />
      ))}
      Tareas pendientes {props.tasksList.length - completeTask}
    </>
  );
};

export default TaskList;
