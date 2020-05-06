import React from "react";
import RecipeSelect from "./RecipeSelect";
import recipeData from "../../data/recipeData";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Title from "../Title";
import "./Recipe.css";
import RecipeItem from "./RecipeItem";

const RecipeSelectionPage = (props) => {
  let match = useRouteMatch();
  let { cuisine } = useParams();
  return (
    <Switch>
      <Route path={`${match.path}/:recipeID`}>
        <RecipeItem />
      </Route>
      <Route path={match.path}>
        <div className="recipe-level-divider">
          <hr style={{ border: "3px #7C7C7C solid" }} />
          <Title title="Easy Recipes" subtitle={`${cuisine} Cuisine`} />
        </div>
        <div className="recipe-container">
          {recipeData.asian.easy.map((r, n) => {
            return (
              <Link
                to={`${match.url}/${r.id}`}
                style={{ textDecoration: "none" }}
              >
                <RecipeSelect
                  key={n}
                  title={r.title}
                  description={r.description}
                  difficulty={r.difficulty}
                  experience={r.experience}
                  src={r.src}
                  id={r.id}
                />
              </Link>
            );
          })}
        </div>
        <br />
        <div className="recipe-level-divider">
          <hr style={{ border: "3px #7C7C7C solid" }} />
          <Title title="Medium Recipes" subtitle={`${cuisine} Cuisine`} />
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
      </Route>
    </Switch>
  );
};

export default RecipeSelectionPage;
