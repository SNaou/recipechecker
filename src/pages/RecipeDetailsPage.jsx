// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const RecipeDetailsPage = ({ recipe }) => {
  const {
    label,
    image,
    healthLabels,
    ingredientLines,
    mealType,
    dishType,
    cautions,
    totalTime,
    servings,
    totalNutrients,
  } = recipe.recipe;

  return (
    <Box
      p="1rem"
      bg="white"
      shadow="md"
      borderWidth="1px"
      w="700px"
      h="800px"
      m="1rem">
      <Image src={image} alt={label} />
      <Text fontWeight="bold" fontSize="xl">
        {label}
      </Text>
      <Text fontSize="sm">Diet: {healthLabels.join(", ")}</Text>
      <Text fontSize="sm">Cautions: {cautions.join(", ")}</Text>
      <Text fontSize="sm">Meal Type: {mealType}</Text>
      <Text fontSize="sm">Dish Type: {dishType}</Text>
      <Text fontSize="sm">Total Cooking Time: {totalTime} minutes</Text>
      <Text fontSize="sm">Servings: {servings}</Text>
      <Text fontSize="sm">
        Total Nutrients: Energy (kcal) - {totalNutrients.ENERC_KCAL.quantity}{" "}
        {totalNutrients.ENERC_KCAL.unit}, Protein -{" "}
        {totalNutrients.PROCNT.quantity} {totalNutrients.PROCNT.unit}, Fat -{" "}
        {totalNutrients.FAT.quantity} {totalNutrients.FAT.unit}, Carbs -{" "}
        {totalNutrients.CHOCDF.quantity} {totalNutrients.CHOCDF.unit},
        Cholesterol - {totalNutrients.CHOLE.quantity}{" "}
        {totalNutrients.CHOLE.unit}, Sodium - {totalNutrients.NA.quantity}{" "}
        {totalNutrients.NA.unit}
      </Text>
      <Text fontSize="sm">Ingredients: {ingredientLines.join(", ")}</Text>
    </Box>
  );
};

export default RecipeDetailsPage;
