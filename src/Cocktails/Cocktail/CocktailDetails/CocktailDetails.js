import styles from "./CocktailDetails.module.scss";
import { useEffect, useState } from "react";
import cocktailRequest from "../../../requests/cocktailAxios";
const determineIngredients = (drink) => {
  const keys = Object.keys(drink).filter(
    (key) => key.includes("strIngredient") && drink[key]
  );
  const values = keys.map((key) => drink[key]);
  return values;
};

const determineMeasurements = (drink) => {
  const keys = Object.keys(drink).filter(
    (key) => key.includes("strMeasure") && drink[key]
  );
  const values = keys.map((key) => drink[key]);
  return values;
};

const CocktailDetails = ({ name }) => {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [measurements, setMeasurements] = useState([]);
  const [glass, setGlass] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await cocktailRequest(`search.php?s=${name}`);
        console.log(response);
        const [drink] = response.data.drinks;
        setIngredients(determineIngredients(drink));
        setMeasurements(determineMeasurements(drink));
        setInstructions(drink.strInstructions);
        setGlass(drink.strGlass);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [name]);

  const length = ingredients.length;
  const measuredIngredients = [];
  for (let i = 0; i < length; i++) {
    measuredIngredients.push(
      <div key={ingredients[i]}>
        <p>
          {measurements[i]}
          {ingredients[i]}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Ingredients:</h2>
      {measuredIngredients}
      <h2>Instructions:</h2>
      <p>{instructions}</p>
      <h2>Serving Glass:</h2>
      <p>{glass}</p>
    </div>
  );
};

export default CocktailDetails;
