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

  return (
    <>
      <div className={styles.BigImage}></div>
      <div className={styles.CocktailWrapper}>
        {/* <Cocktail
          name="Bloody Mary"
          img="https://jiggr.co.uk/images/cocktails/bloody-mary.jpeg"
        /> */}
        <CocktailForm addIngredient={addIngredients} />
      </div>
    </>
  );
};

export default CocktailWrapper;
