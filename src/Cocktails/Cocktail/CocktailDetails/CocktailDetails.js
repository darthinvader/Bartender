import styles from "./CocktailDetails.module.scss";
import { useEffect, useState } from "react";
import cocktailRequest from "../../../requests/cocktailAxios";
const determineIngredients = (drink) => {
  const keys = Object.keys(drink).filter((key) =>
    key.includes("strIngredient")
  );
  const values = keys.map((key) => drink[key]);
  return values;
};

const determineMeasurements = (drink) => {
  const keys = Object.keys(drink).filter((key) => key.includes("strMeasure"));
  const values = keys.map((key) => drink[key]);
  return values;
};

const CocktailDetails = ({ cocktailName }) => {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [measurements, setMeasurements] = useState([]);
  const [glass, setGlass] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await cocktailRequest(`search.php?s=${cocktailName}`);
        const [drink] = response.data.drinks;
        setIngredients(determineIngredients(drink));
        setMeasurements(determineMeasurements(drink));
        setInstructions(drink.strInstructions);
        setGlass(drink.strGlass);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cocktailName]);

  const length = ingredients.length;
  const measuredIngredients = [];
  for (let i = 0; i < length; i++) {
    measuredIngredients.push(
      <div>
        <h2>Ingredients:</h2>
        <p>
          {measurements[i]}
          {ingredients[i]}
        </p>
      </div>
    );
  }

  return (
    <div>
      {measuredIngredients}
      <h2>Instructions:</h2>
      <p>{instructions}</p>
      <h2>Serving Glass:</h2>
      <p>{glass}</p>
    </div>
  );
};

export default CocktailDetails;
