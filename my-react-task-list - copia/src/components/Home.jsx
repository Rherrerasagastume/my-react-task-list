import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box height="100vh" textAlign="center" p="4">
      <Text as="h2" fontSize="2xl" fontWeight="bold" mb="4">
        Bienvenido a la Aplicación de Tareas
      </Text>
      <Text fontSize="xl">
        Esta aplicación te permite gestionar y organizar tus tareas de manera efectiva. Puedes agregar nuevas tareas,
        editarlas, marcarlas como completadas y eliminarlas. ¡Esperamos que sea de gran utilidad para ti!
      </Text>
    </Box>
  );
};

export default Home;
