import "./RecipeList.css";
import { Link } from "react-router-dom";
const RecipeList = ({ recipeList }) => {
  if (recipeList.length === 0) {
    return <div className="error">Recipes No Found</div>;
  }
  return (
    <div className="recipe-list">
      {recipeList.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
