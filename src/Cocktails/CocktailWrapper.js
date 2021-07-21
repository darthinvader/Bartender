import { useState } from "react";
import Cocktail from "./Cocktail/Cocktail";
import CocktailForm from "./CocktailForm/CocktailForm";
import styles from "./CocktailWrapper.module.scss";

const CocktailWrapper = () => {
  const [ingredients, setIngredients] = useState([]);
  const [cocktail, setCocktail] = useState({});

  const addIngredient = (index, ingredient) => {
    if (ingredients.length <= index) {
      setIngredients([...ingredients, ingredient]);
    } else {
      setIngredients([
        ...ingredients.slice(0, index),
        ingredient,
        ...ingredients.slice(index + 1),
      ]);
    }
  };

  return (
    <>
      <div class={styles.BigImage}></div>
      <div className={styles.CocktailWrapper}>
        {/* <Cocktail
          name="Bloody Mary"
          img="https://jiggr.co.uk/images/cocktails/bloody-mary.jpeg"
        /> */}
        <CocktailForm />
      </div>
    </>
  );
};

export default CocktailWrapper;
