// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Center,
  Grid,
  GridItem,
  Box,
  Image,
  Text,
  Tag,
} from "@chakra-ui/react";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const RecipeList = ({ recipes, onSelect }) => {
  return (
    <Center>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={8}
        p={6}>
        {recipes.map((recipe) => (
          <GridItem key={recipe.recipe.url} colSpan={1}>
            <Box
              borderWidth="0px"
              bg={"#FFF"}
              borderRadius="xl"
              overflow="hidden"
              onClick={() => onSelect(recipe.recipe)}
              cursor="pointer">
              <Image
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                h={150}
                w="100%"
                objectFit="cover"
              />
              <Box p="6" h={300}>
                <Center>
                  <Box d="flex" align="center">
                    <small>
                      {recipe.recipe.mealType.map((x) => x.toUpperCase())}
                    </small>
                    <Text fontWeight="semibold" fontSize="xl">
                      {recipe.recipe.label}
                    </Text>
                    <Box>
                      {recipe.recipe.healthLabels
                        .filter((x) => x === "Vegan" || x === "Vegetarian")
                        .map((healthLabel) => (
                          <Tag key={healthLabel} colorScheme="purple" m={1}>
                            {healthLabel}
                          </Tag>
                        ))}
                    </Box>
                    <Box>
                      {recipe.recipe.dietLabels.map((dietLabel) => (
                        <Tag key={dietLabel} colorScheme="green" m={1}>
                          {dietLabel}
                        </Tag>
                      ))}
                    </Box>
                    <Box>
                      <small>
                        Dish:
                        {recipe.recipe.dishType.map((dt) => capitalize(dt))}
                      </small>
                    </Box>
                    {recipe.recipe.cautions.length > 0 && (
                      <small>Cautions:</small>
                    )}
                    <Box>
                      {recipe.recipe.cautions.map((caution) => (
                        <Tag key={caution} colorScheme="red" m={1}>
                          {caution}
                        </Tag>
                      ))}
                    </Box>
                  </Box>
                </Center>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Center>
  );
};

export default RecipeList;
