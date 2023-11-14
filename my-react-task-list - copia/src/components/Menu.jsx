import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title] = useState("Mi Aplicación de Tareas");
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDarkMode, setIsDarkMode] = useState(colorMode === "dark");

  useEffect(() => {
    setIsDarkMode(colorMode === "dark");
  }, [colorMode]);

  const closeMenu = () => {
    onClose();
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode ? "dark" : "light");
      toggleColorMode();
      return newMode;
    });
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setIsDarkMode(storedMode === "dark");
    }
  }, []);

  return (
    <Box
      bg="teal"
      color="white"
      width="100%"
      height="100%"
      p={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Button variant="ghost" onClick={onOpen}>
        <HamburgerIcon />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Box as="nav" textAlign="center">
              <List styleType="none" p={0} m={0}>
                <ListItem mb={2}>
                  <Link to="/" onClick={closeMenu}>
                    <Text fontSize="lg">Home</Text>
                  </Link>
                </ListItem>
                <ListItem mb={2}>
                  <Link to="/tareas" onClick={closeMenu}>
                    <Text fontSize="lg">Tareas</Text>
                  </Link>
                </ListItem>
                <ListItem mb={2}>
                  <Link to="/sobre-nosotros" onClick={closeMenu}>
                    <Text fontSize="lg">Sobre Nosotros</Text>
                  </Link>
                </ListItem>
              </List>
              <Button onClick={toggleDarkMode} variant="ghost" mt={4}>
                {isDarkMode ? <SunIcon color="white" /> : <MoonIcon borderColor="white" />}
              </Button>
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
