import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title] = useState("Mi Aplicación de Tareas");

  const closeMenu = () => {
    onClose();
  };

  return (
    <Box bg="teal" color="white" width="100%" p={4} display="flex" justifyContent="space-between" alignItems="center">
      <Button variant="ghost" onClick={onOpen}>
        <HamburgerIcon />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Box as="nav" textAlign="center">
              <ul>
                <li>
                  <Link to="/" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/tareas" onClick={closeMenu}>
                    Tareas
                  </Link>
                </li>
                <li>
                  <Link to="/sobre-nosotros" onClick={closeMenu}>
                    Sobre Nosotros
                  </Link>
                </li>
              </ul>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box textAlign="center" flex="1">
        <Heading as="h1" size="lg">
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export default Menu;
