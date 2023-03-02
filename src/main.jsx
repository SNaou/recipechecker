import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import RecipesPage from "./pages/RecipesPage";

const root = createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <RecipesPage />
  </ChakraProvider>
);
