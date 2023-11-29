import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import "./i18n";
import MyTheme from "./theme/themeInterface";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme as MyTheme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Router>
        <Routing />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
