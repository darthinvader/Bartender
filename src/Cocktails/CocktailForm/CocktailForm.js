import styles from "./CocktailForm.module.scss";
import { LocalBar } from "@material-ui/icons";
import CocktailInput from "./CocktailInput/CocktailInput";
import { useState } from "react";

const CocktailForm = ({ createCocktail }) => {
  const [ingredient, setIngredient] = useState([""]);

  const addIngredient = (ingredient) => {
    setIngredient(ingredient);
  };

  const sendBackIngredient = (e) => {
    e.preventDefault();
    createCocktail(ingredient);
  };

  return (
    <form className={styles.CocktailForm}>
      <h1 className={styles.Title}>
        <LocalBar />
        Enter Ingredient
        <LocalBar />
      </h1>
      <CocktailInput addIngredient={addIngredient} ingredient={ingredient} />
      <button className={styles.SubmitButton} onClick={sendBackIngredient}>
        Search Cocktail
      </button>
    </form>
  );
};
export default CocktailForm;
