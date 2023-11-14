import React from "react";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const SobreNosotros = () => {
  return (
    <Box textAlign="center" p="4">
      <Heading as="h2" size="2xl" mb="4">
        Sobre Nosotros
      </Heading>
      <Text fontSize="xl" mb="4">
        Bienvenido a nuestra aplicación de tareas, diseñada para hacer la gestión de tareas más fácil y eficiente.
        Nuestra aplicación te ofrece una solución intuitiva y poderosa para organizar tu vida diaria y maximizar tu
        productividad. Aquí tienes un resumen de las características clave de nuestra aplicación:
      </Text>
      <UnorderedList textAlign="left" fontSize="lg" listStyleType="none" pl="0">
        <ListItem mb="2" fontSize="lg">
          <strong>Organización Efectiva:</strong> Organiza y gestiona tus tareas de manera fácil y efectiva. Crea
          categorías, asigna fechas límite y prioridades para mantenerte en control.
        </ListItem>
        <ListItem mb="2" fontSize="lg">
          <strong>Agrega Nuevas Tareas:</strong> Agrega nuevas tareas de manera sencilla. Simplemente ingresa el nombre y
          la descripción, y estarán disponibles en tu lista de tareas pendientes.
        </ListItem>
        <ListItem mb="2" fontSize="lg">
          <strong>Marca y Edita Tareas:</strong> Marca tareas como completadas y realiza ediciones cuando sea necesario.
          Mantén un historial claro de tus logros y avances.
        </ListItem>
      </UnorderedList>
      <Text fontSize="lg" mt="4">
        <strong>Tecnologías Utilizadas:</strong> Nuestra aplicación está construida con tecnologías modernas como React y
        Chakra UI, lo que garantiza una experiencia de usuario suave y agradable.
      </Text>
    </Box>
  );
};

export default SobreNosotros;
