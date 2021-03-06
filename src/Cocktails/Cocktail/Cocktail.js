import styles from "./Cocktail.module.scss";
import CocktailDetails from "./CocktailDetails/CocktailDetails";
const Cocktail = ({ name, img, back }) => {
  return (
    <>
      <div className={styles.Cocktail}>
        <p onClick={back} className={styles.ArrowBack}>
          {"<"}
        </p>

        <h1 className={styles.Title}>Your Cocktail Is {name}</h1>
        <img className={styles.Img} src={img} alt="CockTail" />
        <CocktailDetails name={name} />
      </div>
    </>
  );
};

export default Cocktail;
