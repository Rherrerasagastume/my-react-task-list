// src/ChakraProvider.jsx
import { ChakraProvider as ChakraUIProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import React from "react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "teal.100",
        color: "teal.800",
      },
    },
  },
});

const ChakraProvider = ({ children }) => (
  <ChakraUIProvider theme={theme}>
    <CSSReset />
    {children}
  </ChakraUIProvider>
);

export default ChakraProvider;
