import styles from "./Cocktail.module.scss";
const Cocktail = ({ name, img }) => {
  return (
    <>
      <div class={styles.Cocktail}>
        <h1 class={styles.Title}>Your Cocktail Is A {name}</h1>
        <img class={styles.Img} src={img} alt="CockTail" />
      </div>
    </>
  );
};

export default Cocktail;
