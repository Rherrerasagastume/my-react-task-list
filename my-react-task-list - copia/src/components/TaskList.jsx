import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Task from "./Task";

const TaskList = (props) => {
  const [completeTask, setCompleteTask] = useState(0);

  return (
    <Box textAlign="center" width={"100%"}>
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
      <p>Tareas pendientes: {props.tasksList.length - completeTask}</p>
    </Box>
  );
};

export default TaskList;
