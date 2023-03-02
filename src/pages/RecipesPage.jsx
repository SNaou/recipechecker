// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Center, Input, Heading, Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import RecipeList from "../components/RecipeList";

const RecipesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data.hits);

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
        <RecipeList recipes={searchResults} />
      </Flex>
    </Center>
  );
};

export default RecipesPage;
