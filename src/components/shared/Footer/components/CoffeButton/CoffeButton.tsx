import useMediaQuery from "@hooks/useMediaQuery";
import styles from "./CoffeButton.module.scss";
import smallCoffee from "@images/coffee_small.png";

const CoffeButton = () => {
  const isMobileBreakpoint = useMediaQuery(363);

  return (
    <div
      className={`${styles.coffeeButton} ${
        isMobileBreakpoint ? styles.small : ""
      }`}
    >
      <a href="https://cafecito.app/pabloacosta" rel="noopener" target="_blank">
        {!isMobileBreakpoint ? (
          <img
            srcSet="https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x"
            src="https://cdn.cafecito.app/imgs/buttons/button_1.png"
            alt="Invitame un café en cafecito.app"
          />
        ) : (
          <img src={smallCoffee} alt="Invitame un café en cafecito.app" />
        )}
      </a>
    </div>
  );
};

export default CoffeButton;
