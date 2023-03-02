import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import RecipesPage from "./pages/RecipesPage";

ReactDOM.render(
  <ChakraProvider>
    <RecipesPage />
  </ChakraProvider>,
  document.getElementById("root")
);
