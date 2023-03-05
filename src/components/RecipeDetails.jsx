import React from "react";
import {
  Container,
  Grid,
  GridItem,
  Image,
  List,
  Box,
  ListItem,
  Text,
  Tag,
  Flex,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

// RecipeDetails component
const RecipeDetails = ({ recipe, onBack }) => {
  const {
    label,
    image,
    healthLabels,
    dietLabels,
    cautions,
    totalNutrients,
    ingredientLines,
    mealType,
    totalTime,
  } = recipe;

  // Create an array of the nutrients that you want to display
  const nutrientLabels = [
    "ENERC_KCAL",
    "PROCNT",
    "FAT",
    "CHOCDF",
    "CHOLE",
    "NA",
  ];

  // Filter the nutrients object to only include the nutrients that you want to display
  const nutrients = Object.keys(totalNutrients)
    .filter((nutrient) => nutrientLabels.includes(nutrient))
    .map((nutrient) => totalNutrients[nutrient]);

  return (
    <Container maxW="2xl" bgColor="#FFF" padding={0} marginBottom={0}>
      <Flex alignItems="center" marginBottom="4">
        <Button
          colorScheme="teal"
          variant="solid"
          size="sm"
          leftIcon={<ArrowBackIcon />}
          onClick={onBack}>
          Back to Recipes
        </Button>
      </Flex>
      <Image src={image} alt={label} h={150} w="100%" objectFit="cover" />
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <GridItem colSpan="3" padding="10">
          <small>{mealType.map((x) => x.toUpperCase())}</small>
          <Text fontWeight="semibold" fontSize="3xl">
            {label}
          </Text>
          <List>
            <ListItem>Total cooking time: {totalTime}</ListItem>
            <ListItem>Servings: {recipe.yield} </ListItem>
          </List>
          <Text fontSize="2xl" fontWeight="semibold">
            Ingredients
          </Text>
          <List>
            {ingredientLines.map((ingredient, index) => (
              <ListItem key={index} marginTop="4">
                {ingredient}
              </ListItem>
            ))}
          </List>
        </GridItem>
        <GridItem colSpan="3" padding="5">
          <Box>
            <Text>Health labels:</Text>
            {healthLabels.map((healthLabel) => (
              <Tag key={healthLabel} colorScheme="purple" m={1}>
                {healthLabel}
              </Tag>
            ))}
          </Box>
          <Box>
            <Text>Diet:</Text>
            {dietLabels.map((dietLabel) => (
              <Tag key={dietLabel} colorScheme="green" m={1}>
                {dietLabel}
              </Tag>
            ))}
          </Box>
          <Box>
            <Text>Caution:</Text>
            {cautions.map((caution) => (
              <Tag key={caution} colorScheme="red" m={1}>
                {caution}
              </Tag>
            ))}
          </Box>
          <Box>
            <Text fontWeight="semibold">Total nutrients:</Text>
          </Box>
          {nutrients.map((nutrient) => (
            <Box key={nutrient.label}>
              <List>
                <ListItem>
                  {Math.floor(nutrient.quantity)} {nutrient.unit}
                </ListItem>
                <ListItem>
                  <Text>{nutrient.label.toUpperCase()}</Text>
                </ListItem>
              </List>
            </Box>
          ))}
        </GridItem>
      </Grid>
    </Container>
  );
};

export default RecipeDetails;
