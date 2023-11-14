import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box textAlign="center" p="4">
      <Heading as="h2" size="2xl" mb="4">
        Bienvenido a la Aplicación de Tareas
      </Heading>
      <Text fontSize="xl">
        Esta aplicación te permite gestionar y organizar tus tareas de manera efectiva. Puedes agregar nuevas tareas,
        editarlas, marcarlas como completadas y eliminarlas. ¡Esperamos que sea de gran utilidad para ti!
      </Text>
    </Box>
  );
};

export default Home;
