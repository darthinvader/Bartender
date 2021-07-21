import styles from "./CocktailInput.module.scss";
const CocktailInput = ({ index, addIngredient, ingredient }) => {
  return (
    <input
      className={styles.CocktailInput}
      type="text"
      id="Ingredient"
      name="Ingredient"
      placeholder="Ingredient"
      onChange={(e) => addIngredient(index, e.target.value)}
      value={ingredient}
    />
  );
};
export default CocktailInput;
