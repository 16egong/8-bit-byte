import React from "react";
import "./Recipe.css";

const RecipeSelect = (props) => {
  let { title, description, difficulty, experience, src, id } = props;
  return (
    <div className="recipe-select-container">
      <img
        className="recipe-select-image"
        src={require(`../../assets/images/recipeimages/${src}`)}
        alt="boiling water"
      />
      <div className="recipe-text-container">
        <h6 id="title">{title}</h6>
        <p id="description">{description}</p>
        <p className="experience">{difficulty}</p>
        <p className="experience">{experience}</p>
      </div>
    </div>
  );
};

export default RecipeSelect;
