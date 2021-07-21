import { useState } from "react";
import Cocktail from "./Cocktail/Cocktail";
import CocktailForm from "./CocktailForm/CocktailForm";
import styles from "./CocktailWrapper.module.scss";
import axios from "axios";

const CocktailWrapper = () => {
  const [cocktail, setCocktail] = useState({});

  const createCocktail = async (ingredient) => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    console.log(response);
  };

  const CocktailBody =
    cocktail.length === 0 ? (
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
