import React from "react";
import DietButton from './DietButton';
import vegan from '../../imgs/vegan_icon.png';
import vegetarian from '../../imgs/vegetarian_icon.png';

const VeganButton = () => {
    return <DietButton img={vegan} text="vegan"/>;
  };
  
const GlutenButton = () => {
    return <DietButton />;
};

const VegetarianButton = () => {
    return <DietButton img={vegetarian} text="vegetarian"/>;
};

export { VeganButton, GlutenButton, VegetarianButton };
export default DietButton;