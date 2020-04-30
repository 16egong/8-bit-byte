import React from "react";
import "./Recipe.css";
import BoiledWater from "../../assets/images/recipeimages/boilwater.png";

const styles = {
  pic: {
    width: "auto",
    height: "auto",
  },
};

const RecipePage = () => {
  return (
    <div className="recipe">
      <div className="row">
        <div className="column">
          <img src={BoiledWater} alt="water" style={styles.pic} />
          <h1 className="recipe-name">Boiled Water</h1>
          <p className="recipe-instruction">
            A description about stuff that this thing is about. Yea, cool!
            <br />
            <br />
            <br />
            <br />
            Difficulty: Easy
            <br />
            <br />
            Earn: 10 XP
          </p>
        </div>
        <div className="column">
          <img src={BoiledWater} alt="water" style={styles.pic} />
          <h1 className="recipe-name">Boiled Water</h1>
          <p className="recipe-instruction">
            A description about stuff that this thing is about. Yea, cool!
            <br />
            <br />
            <br />
            <br />
            Difficulty: Easy
            <br />
            <br />
            Earn: 10 XP
          </p>
        </div>
        <div className="column">
          <img src={BoiledWater} alt="water" style={styles.pic} />
          <h1 className="recipe-name">Boiled Water</h1>
          <p className="recipe-instruction">
            A description about stuff that this thing is about. Yea, cool!
            <br />
            <br />
            <br />
            <br />
            Difficulty: Easy
            <br />
            <br />
            Earn: 10 XP
          </p>
        </div>
      </div>
      <hr style={{ border: "3px #7C7C7C solid" }} />
      <h1 className="recipe-level" style={{ textAlign: "center" }}>
        Easy Recipe
      </h1>
      <h3 className="cuisine-type" style={{ textAlign: "center" }}>
        Asian Cuisine
      </h3>
      <div className="row">
        <div className="column">
          <img src={BoiledWater} alt="water" style={styles.pic} />
          <h1 className="recipe-name">Boiled Water</h1>
          <p className="recipe-instruction">
            A description about stuff that this thing is about. Yea, cool!
            <br />
            <br />
            <br />
            <br />
            Difficulty: Easy
            <br />
            <br />
            Earn: 10 XP
          </p>
        </div>
        <div className="column">
          <img src={BoiledWater} alt="water" style={styles.pic} />
          <h1 className="recipe-name">Boiled Water</h1>
          <p className="recipe-instruction">
            A description about stuff that this thing is about. Yea, cool!
            <br />
            <br />
            <br />
            <br />
            Difficulty: Easy
            <br />
            <br />
            Earn: 10 XP
          </p>
        </div>
        <div className="column">
          <img src={BoiledWater} alt="water" style={styles.pic} />
          <h1 className="recipe-name">Boiled Water</h1>
          <p className="recipe-instruction">
            A description about stuff that this thing is about. Yea, cool!
            <br />
            <br />
            <br />
            <br />
            Difficulty: Easy
            <br />
            <br />
            Earn: 10 XP
          </p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={BoiledWater} alt="water" style={styles.pic} />
          <h1 className="recipe-name">Boiled Water</h1>
          <p className="recipe-instruction">
            A description about stuff that this thing is about. Yea, cool!
            <br />
            <br />
            <br />
            <br />
            Difficulty: Easy
            <br />
            <br />
            Earn: 10 XP
          </p>
        </div>
        <div className="column">
          <img src={BoiledWater} alt="water" style={styles.pic} />
          <h1 className="recipe-name">Boiled Water</h1>
          <p className="recipe-instruction">
            A description about stuff that this thing is about. Yea, cool!
            <br />
            <br />
            <br />
            <br />
            Difficulty: Easy
            <br />
            <br />
            Earn: 10 XP
          </p>
        </div>
        <div className="column">
          <img src={BoiledWater} alt="water" style={styles.pic} />
          <h1 className="recipe-name">Boiled Water</h1>
          <p className="recipe-instruction">
            A description about stuff that this thing is about. Yea, cool!
            <br />
            <br />
            <br />
            <br />
            Difficulty: Easy
            <br />
            <br />
            Earn: 10 XP
          </p>
        </div>
      </div>
      <hr style={{ border: "3px #7C7C7C solid" }} />
    </div>
  );
};

export default RecipePage;
