// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Center, Input, Heading, Flex } from "@chakra-ui/react";
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
    <Center bg={"#3A98B9"} px={50}>
      <Flex flexDirection="column" justifyContent="center">
        {selectedRecipe ? (
          <RecipeDetails
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipe(null)}
          />
        ) : (
          <div>
            <Flex justifyContent="center">
              <form>
                <Heading color={"#FFF"} my={5}>
                  Sous recipes checker
                </Heading>
                <Input
                  bg={"#FFF"}
                  type="text"
                  id="search"
                  placeholder="Seach recipes"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </form>
            </Flex>
            <RecipeList recipes={searchResults} onSelect={setSelectedRecipe} />
          </div>
        )}
      </Flex>
    </Center>
  );
};

export default RecipesPage;
