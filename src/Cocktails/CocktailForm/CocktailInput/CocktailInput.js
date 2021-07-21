import styles from "./CocktailInput.module.scss";
const CocktailInput = ({ addIngredient, ingredient }) => {
  return (
    <input
      className={styles.CocktailInput}
      type="text"
      id="Ingredient"
      name="Ingredient"
      placeholder="Ingredient"
      onChange={(e) => addIngredient(e.target.value)}
      value={ingredient}
    />
  );
};
export default CocktailInput;
