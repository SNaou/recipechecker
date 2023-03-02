// eslint-disable-next-line no-unused-vars
import React from "react";

// RecipeDetails component
const RecipeDetails = ({ recipe }) => {
  const { label, image, healthLabels, ingredientLines, mealType, dishType } =
    recipe;
  return (
    <div>
      <h1>{label}</h1>
      <img src={image} alt={label} />
      <p>Diet: {healthLabels.join(", ")}</p>
      <h2>Ingredients</h2>
      <ul>
        {ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Meal Type: {mealType}</p>
      <p>Dish Type: {dishType}</p>
    </div>
  );
};

export default RecipeDetails;
