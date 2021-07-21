import styles from "./CocktailForm.module.scss";
import { AddCircle, LocalBar } from "@material-ui/icons";
import CocktailInput from "./CocktailInput/CocktailInput";
const CocktailForm = (props) => {
  return (
    <form className={styles.CocktailForm}>
      <h1 className={styles.Title}>
        <LocalBar />
        Enter Ingredients
        <LocalBar />
      </h1>
      <CocktailInput />
      <AddCircle className={styles.AddButton} />
      <button className={styles.SubmitButton}>Search Cocktail</button>
    </form>
  );
};
export default CocktailForm;
