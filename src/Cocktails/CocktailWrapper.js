import { useState } from "react";
import Cocktail from "./Cocktail/Cocktail";
import CocktailForm from "./CocktailForm/CocktailForm";
import styles from "./CocktailWrapper.module.scss";
import cocktailRequest from "../requests/cocktailAxios";

const CocktailWrapper = () => {
  const [cocktail, setCocktail] = useState(null);
  const [error, setError] = useState(false);

  const createCocktail = async (ingredient) => {
    try {
      setError(false);
      const response = await cocktailRequest(`filter.php?i=${ingredient}`);
      const { drinks } = response.data;
      const drinkNumber = Math.floor(Math.random() * drinks.length);
      const randomDrink = drinks[drinkNumber];
      setCocktail({
        name: randomDrink.strDrink,
        img: randomDrink.strDrinkThumb,
      });
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const back = () => {
    setCocktail(null);
  };

  const CocktailBody = cocktail ? (
    <Cocktail name={cocktail.name} img={cocktail.img} back={back} />
  ) : (
    <CocktailForm createCocktail={createCocktail} error={error} />
  );

  return (
    <>
      <div className={styles.BigImage}></div>
      <div className={styles.CocktailWrapper}>{CocktailBody}</div>
    </>
  );
};

export default CocktailWrapper;
