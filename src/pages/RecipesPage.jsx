import React, { useState } from "react";
import { Center, Input, Heading, Flex, Box } from "@chakra-ui/react";
import { data } from "../utils/data";
import RecipeList from "../components/RecipeList";
import RecipeDetails from "../components/RecipeDetails";

const RecipesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data.hits);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = (event) => {
    const results = data.hits.filter((recipe) =>
      recipe.recipe.label.toLowerCase().includes(event.target.value)
    );
    setSearchTerm(event.target.value);
    setSearchResults(results);
  };

  return (
    <Box bg={"#3A98B9"} minH="100vh">
      <Flex
        flexDirection="column"
        justifyContent="center"
        px={{ base: 4, md: 50 }}>
        {selectedRecipe ? (
          <RecipeDetails
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipe(null)}
          />
        ) : (
          <Box>
            <Flex justifyContent="center">
              <form>
                <Heading color={"#FFF"} my={{ base: 4, md: 5 }}>
                  Soumaya recipe checker
                </Heading>
                <Input
                  bg={"#FFF"}
                  type="text"
                  id="search"
                  placeholder="Seach recipes"
                  value={searchTerm}
                  onChange={handleSearch}
                  maxW={{ base: "100%", md: "500px" }}
                  mx={{ base: 2, md: 0 }}
                />
              </form>
            </Flex>
            <RecipeList recipes={searchResults} onSelect={setSelectedRecipe} />
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default RecipesPage;
