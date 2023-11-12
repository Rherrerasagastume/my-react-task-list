import React from "react";
import Task from "./Task";

const TaskList = ({ tasksList, deleteTask, editTask }) => {
  return (
    <>
      {tasksList.map((task, index) => (
        <Task
          key={index}
          id={index}
          name={task.name}
          isChecked={(checked) => {
            
          }}
          isDeleted={(id) => {
            deleteTask(id);
          }}
          isUpdated={(id, updatedName) => {
            editTask(id, { name: updatedName });
          }}
        />
      ))}
      {}
    </>
  );
};

export default TaskList;
