import React from "react";
import {VeganButton, GlutenButton, VegetarianButton} from "../DietButton";
import "./page.css";
import ByteButton from "../ByteButton";

function DietaryPage(props) {
    return (
        <div className = "diet-page">
            <div className="diet-buttons">
                  <ByteButton
                      to="/loading"
                      label="Finish"
                      onClick={() => {
                        // props.changeActive("map");
                      }}
                  />
                  {/*TODO: Add different color and additional spacing  */}
                  <ByteButton 
                      to="/advanced"
                      label="Advanced"
                      onClick={() => {
                        // props.changeActive("advanced");
                      }}
                  />
              </div>
            <div className="button-section">
                <div className="diet-row">
                    <VeganButton />
                    <VegetarianButton />
                    <VeganButton />
                    <VeganButton />
                </div>
                <div className="diet-row">
                    <VeganButton />
                    <VegetarianButton />
                    <VeganButton />
                    <VeganButton />
                </div>
                <div className="diet-row">
                    <VeganButton />
                    <VegetarianButton />
                    <VeganButton />
                    <VeganButton />
                </div>
                <div className="diet-row">
                    <VeganButton />
                    <VegetarianButton />
                    <VeganButton />
                    <VeganButton />
                </div>
            </div>
        </div>
    );
  };
  
  export default DietaryPage;