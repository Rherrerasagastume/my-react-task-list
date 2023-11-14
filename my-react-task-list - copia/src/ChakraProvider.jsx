
import { ChakraProvider as ChakraUIProvider, CSSReset, useColorMode } from "@chakra-ui/react";
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

const ChakraProvider = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraUIProvider theme={theme} colorMode={colorMode}>
      <CSSReset />
      {children}
    </ChakraUIProvider>
  );
};

export default ChakraProvider;
