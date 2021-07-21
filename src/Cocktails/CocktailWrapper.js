import { useState } from "react";
import Cocktail from "./Cocktail/Cocktail";
import CocktailForm from "./CocktailForm/CocktailForm";
import styles from "./CocktailWrapper.module.scss";
import cocktailRequest from "../requests/cocktailAxios";

const CocktailWrapper = () => {
  const [cocktail, setCocktail] = useState(null);

  const createCocktail = async (ingredient) => {
    try {
      const response = await cocktailRequest(`filter.php?i=${ingredient}`);
      const { drinks } = response.data;
      const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
      setCocktail({
        name: randomDrink.strDrink,
        img: randomDrink.strDrinkThumb,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const CocktailBody = cocktail ? (
    <Cocktail name={cocktail.name} img={cocktail.img} />
  ) : (
    <CocktailForm createCocktail={createCocktail} />
  );

  return (
    <>
      <div className={styles.BigImage}></div>
      <div className={styles.CocktailWrapper}>{CocktailBody}</div>
    </>
  );
};

export default CocktailWrapper;
