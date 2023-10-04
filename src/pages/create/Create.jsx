import "./Create.css";
import { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientsInput = useRef(null);
  const navigate = useNavigate();
  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + "Minutes",
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const ing = newIngredients.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredients]);
    }
    setNewIngredients("");
    ingredientsInput.current.focus();
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);
  return (
    <div className="create">
      <h2 className="page-title">Add A New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredents:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredients(e.target.value)}
              value={newIngredients}
              ref={ingredientsInput}
            />
            <button onClick={handleAdd} className="btn">
              Add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:
          {ingredients.map((ings) => (
            <em key={ings}>{ings}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Method:</span>
          <textarea
            cols="30"
            rows="10"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          ></textarea>
        </label>

        <label>
          <span>Cooking Time (in minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn"> Submit </button>
      </form>
    </div>
  );
};

export default Create;
