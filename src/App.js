import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import { FaClock, FaFire, FaUtensils, FaTachometerAlt } from "react-icons/fa";
import "./styles.css";

const icons = {
  time: <FaClock />,
  servings: <FaUtensils />,
  calories: <FaFire />,
  difficulty: <FaTachometerAlt />,
};

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipies.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="app">
      <h1>GoITeens Recipes</h1>
      <div className="recipes-list">
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} icons={icons} />
        ))}
      </div>
    </div>
  );
}

export default App;
