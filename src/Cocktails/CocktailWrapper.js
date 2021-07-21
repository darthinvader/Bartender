import { useState } from "react";
import Cocktail from "./Cocktail/Cocktail";
import CocktailForm from "./CocktailForm/CocktailForm";
import styles from "./CocktailWrapper.module.scss";

const CocktailWrapper = () => {
  const [ingredients, setIngredients] = useState([]);
  const [cocktail, setCocktail] = useState({});

  const addIngredients = (ingredients) => {
    setIngredients(ingredients);
  };

  const CocktailBody =
    ingredients.length !== 0 ? (
      <Cocktail
        name="Bloody Mary"
        img="https://jiggr.co.uk/images/cocktails/bloody-mary.jpeg"
      />
    ) : (
      <CocktailForm addIngredients={addIngredients} />
    );

  return (
    <>
      <div className={styles.BigImage}></div>
      <div className={styles.CocktailWrapper}>{CocktailBody}</div>
    </>
  );
};

export default CocktailWrapper;
