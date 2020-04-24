import React from "react";
import {VeganButton, GlutenButton, VegetarianButton} from "../DietButton";
import Title from "../Title";
import "./page.css";

function DietaryPage(props) {
    return (
        <div className="entire-page"  style={{ backgroundColor: props.backgroundColor }}>
            <Title title={props.title} subtitle={props.subtitle} />
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
            </div>
        </div>
    );
  };
  
  export default DietaryPage;