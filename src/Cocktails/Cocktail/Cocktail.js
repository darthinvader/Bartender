import styles from "./Cocktail.module.scss";
const Cocktail = () => {
  return (
    <>
      <div class={styles.Cocktail}>
        <h1 class={styles.Title}>Your Cocktail Is A Bloody Mary</h1>
        <img
          class={styles.Img}
          src="https://jiggr.co.uk/images/cocktails/bloody-mary.jpeg"
          alt="CockTail"
        />
      </div>
    </>
  );
};

export default Cocktail;
