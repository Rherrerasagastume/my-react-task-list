import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Task from "./Task";

const TaskList = (props) => {
  const [completeTask, setCompleteTask] = useState(() => {
    
    return props.tasksList.reduce((count, task) => (task.complete ? count : count + 1), 0);
  });

  const handleCheckboxChange = (taskId, checked) => {
    
    setCompleteTask((prevCompleteTask) => prevCompleteTask + (checked ? -1 : 1));

    const tasks = JSON.parse(localStorage.getItem("taskList")) || [];

    const updatedTasks = tasks.map((task, index) => {
      if (index === taskId) {
        return { ...task, complete: checked };
      }
      return task;
    });

    localStorage.setItem("taskList", JSON.stringify(updatedTasks));

    if (props.isChecked) {
      props.isChecked(checked);
    }
  };

  return (
    <Box textAlign="center" width={"100%"}>
      {props.tasksList.map((task, index) => (
        <Task
          key={index}
          id={index}
          name={task.name}
          description={task.description}
          complete={task.complete}
          isChecked={(checked) => handleCheckboxChange(index, checked)}
          isDeleted={(id) => {
            if (props.deleteTask) {
              props.deleteTask(id);
            }
          }}
          isUpdated={(id, updatedTask) => {
            if (props.editTask) {
              props.editTask(id, updatedTask);
            }
          }}
        />
      ))}
      <p>Tareas pendientes: {completeTask}</p>
    </Box>
  );
};

export default TaskList;
