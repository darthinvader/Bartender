import { useState } from "react";
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
    <div className={styles.CocktailWrapper}>
      <CocktailForm />
    </div>
  );
};

export default CocktailWrapper;
