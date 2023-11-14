import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import TaskList from "./TaskList";

const Tareas = ({ tasksList, deleteTask, editTask }) => {
  return (
    <Box p="4" height="100vh" textAlign="center" mx="auto">
      
      <TaskList tasksList={tasksList} deleteTask={deleteTask} editTask={editTask} />
    </Box>
  );
};

export default Tareas;
