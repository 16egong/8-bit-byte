import React from "react";
import "./Recipe.css";
import BoiledWater from "../../assets/images/recipeimages/boilwater.png";

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
                <h6 className="goblin-text">{title}</h6>
                <p className="recipe-info-container">
                    {description}
                    <br />
                    <br />
                    <br />
                    {difficulty}
                    <br />
                    <br />
                    {experience}
                </p>
            </div>
        </div>
    );
};

export default RecipeSelect;