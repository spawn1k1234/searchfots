import React from "react";
import PropTypes from "prop-types";

const RecipeInfo = ({ icon, text }) => {
  return (
    <div className="recipe-info">
      <span className="icon">{icon}</span>
      <span>{text}</span>
    </div>
  );
};

RecipeInfo.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default RecipeInfo;
