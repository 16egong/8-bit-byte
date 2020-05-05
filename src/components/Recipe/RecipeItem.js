import React from "react";
import ReactPlayer from "react-player";
import allRecipes from "../../data/allRecipes";
import "./recipe-item.css";

const RecipeItem = ({ id }) => {
  let recipe = allRecipes[id];
  return (
    <div className="recipe-item-container">
      <div className="recipe-item-player-wrapper">
        <ReactPlayer
          className="react-player"
          url={recipe.url}
          width="100%"
          height="100%"
          controls
        />
      </div>
      <div className="recipe-item-title-container">
        <p>Level: Easy</p>
        <p style={{ fontSize: "2rem" }}>Boiled Water</p>
        <p>Serves: {recipe.servings}</p>
      </div>
    </div>
  );
};

export default RecipeItem;
