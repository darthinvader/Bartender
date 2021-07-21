import styles from "./CocktailForm.module.scss";
import { AddCircle, LocalBar } from "@material-ui/icons";
import CocktailInput from "./CocktailInput/CocktailInput";
import { useState } from "react";

const CocktailForm = ({ addIngredients }) => {
  const [inputs, setInputs] = useState(1);
  const [showAddIngredient, setShowAddIngredient] = useState(true);
  const [ingredients, setIngredients] = useState([""]);

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
  console.log(ingredients);

  const addMoreInputs = () => {
    if (inputs < 3) {
      setInputs(() => {
        if (inputs === 2) {
          setShowAddIngredient(false);
        }
        addIngredient(inputs, "");
        return inputs + 1;
      });
    }
  };

  const CocktailInputs = [];
  for (let i = 0; i < inputs; i++) {
    CocktailInputs.push(
      <CocktailInput
        key={i}
        addIngredient={addIngredient}
        ingredient={ingredients[i]}
        index={i}
      />
    );
  }

  const addCircle = showAddIngredient ? (
    <AddCircle className={styles.AddButton} onClick={addMoreInputs} />
  ) : null;

  return (
    <form className={styles.CocktailForm}>
      <h1 className={styles.Title}>
        <LocalBar />
        Enter Ingredients
        <LocalBar />
      </h1>
      {CocktailInputs}
      {addCircle}
      <button className={styles.SubmitButton}>Search Cocktail</button>
    </form>
  );
};
export default CocktailForm;
