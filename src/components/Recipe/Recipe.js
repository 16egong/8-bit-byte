import React from "react";
import RecipeSelect from "./RecipeSelect";
import recipeData from "../../data/recipeData";
import "./Recipe.css";
import BoiledWater from "../../assets/images/recipeimages/boilwater.png";
import RecipeItem from "./RecipeItem";

const styles = {
  pic: {
    width: "auto",
    height: "auto",
  },
};

const RecipeSelectionPage = (props) => {
  return (
    <div>
      <div className="recipe-container">
        {recipeData.asian.easy.map((r, n) => {
          return (
            <RecipeSelect
              key={n}
              title={r.title}
              description={r.description}
              difficulty={r.difficulty}
              experience={r.experience}
              src={r.src}
              id={r.id}
            />
          );
        })}
      </div>
      <br />
      <hr style={{ border: "3px #7C7C7C solid" }} />
      <div className="recipe-level">
        <h2 className="goblin-text" style={{ textAlign: "center" }}>
          Medium Recipes
        </h2>
      </div>
      <div className="recipe-container">
        {recipeData.asian.medium.map((r, n) => {
          return (
            <RecipeSelect
              key={n}
              title={r.title}
              description={r.description}
              difficulty={r.difficulty}
              experience={r.experience}
              src={r.src}
              id={r.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecipeSelectionPage;
