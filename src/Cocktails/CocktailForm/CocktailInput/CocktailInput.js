import styles from "./CocktailInput.module.scss";
const CocktailInput = (props) => {
  return (
    <input
      className={styles.CocktailInput}
      type="text"
      id="Ingredient1"
      name="Ingredient2"
      placeholder="Ingredient"
    />
  );
};
export default CocktailInput;
