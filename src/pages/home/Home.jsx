import "./Home.css";
import { useFetch } from "../../hooks/useFetch";

//Import Components
import RecipeList from "../../componets/RecipeList";
const Home = () => {
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading .....</p>}
      {recipe && <RecipeList recipeList={recipe} />}
    </div>
  );
};

export default Home;
