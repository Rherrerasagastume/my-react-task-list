import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box, Input, Textarea, Button,Text } from "@chakra-ui/react";
import Header from "./components/header";
import Home from "./components/Home";
import SobreNosotros from "./components/SobreNosotros";
import Tareas from "./components/Tareas";
import Menu from "./components/Menu";
import useTaskManager from "./hooks/useTaskManager";


const staticList = [
  {
    name: "Buy a new gaming laptop",
    description: "Research the latest models.",
    complete: false,
  },
  {
    name: "Complete a previous task",
    description: "Finish the report.",
    complete: false,
  },
  {
    name: "Create a video for YouTube",
    description: "Plan and record a new video.",
    complete: false,
  },
];

const App = () => {
  const {
    list,
    name,
    description,
    setName,
    setDescription,
    addTask,
    deleteTask,
    editTask,
  } = useTaskManager(staticList.map((task) => ({ ...task })));

  const handleAddTask = () => {
    addTask();
  };

  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <Box className="row">
                <Box className="col-12">
                  <Home />
                </Box>
              </Box>
            }
          />
          <Route
            path="/tareas"
            element={
              <Box textAlign="center" w="100vw" p={0}>
                <Box textAlign="center" width="100%">
                <Text as="h2" fontSize="2xl" fontWeight="bold" mb="4">
                  Listado de Tareas
                </Text>
                  <Input
                    type="text"
                    mb="2"
                    placeholder="Nombre de la tarea"
                    value={name}
                    width="70%"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Textarea
                    mb="2"
                    placeholder="Descripción de la tarea"
                    value={description}
                    width="70%"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <Button width="70%" colorScheme="teal" onClick={handleAddTask} mt="2">
                    Agregar tarea
                  </Button>
                </Box>
                <Box className="col-12">
                  <Tareas
                    tasksList={list}
                    deleteTask={deleteTask}
                    editTask={editTask}
                  />
                </Box>
              </Box>
            }
          />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
