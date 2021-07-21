import styles from "./Cocktail.module.scss";
import CocktailDetails from "./CocktailDetails/CocktailDetails";
const Cocktail = ({ name, img }) => {
  return (
    <>
      <div className={styles.Cocktail}>
        <h1 className={styles.Title}>Your Cocktail Is {name}</h1>
        <img className={styles.Img} src={img} alt="CockTail" />
        <CocktailDetails name={name} />
      </div>
    </>
  );
};

export default Cocktail;
