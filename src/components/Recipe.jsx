import React from "react";
import PropTypes from "prop-types";
import RecipeInfo from "./RecipeInfo";

const Recipe = ({ recipe, icons }) => {
  return (
    <div className="recipe">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className="recipe-img" />
      <div className="info">
        <RecipeInfo icon={icons.time} text={`${recipe.time} mins`} />
        <RecipeInfo
          icon={icons.servings}
          text={`Servings: ${recipe.servings}`}
        />
        <RecipeInfo
          icon={icons.calories}
          text={`Calories: ${recipe.calories}`}
        />
        <RecipeInfo
          icon={icons.difficulty}
          text={`Difficulty: ${recipe.difficulty}`}
        />
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  icons: PropTypes.shape({
    time: PropTypes.element.isRequired,
    servings: PropTypes.element.isRequired,
    calories: PropTypes.element.isRequired,
    difficulty: PropTypes.element.isRequired,
  }).isRequired,
};

export default Recipe;
