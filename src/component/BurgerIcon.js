import classes from 'classnames';
import BurgerStyles from './BurgerIcon.module.css';

function Burger({ menuToggle, setMenuToggle }) {
  return (
    <div
      className={
        menuToggle
          ? classes(BurgerStyles.burger, BurgerStyles.toggle)
          : BurgerStyles.burger
      }
      onClick={() => {
        setMenuToggle(!menuToggle);
      }}
    >
      <div className={BurgerStyles.line1}></div>
      <div className={BurgerStyles.line2}></div>
      <div className={BurgerStyles.line3}></div>
    </div>
  );
}

export default Burger;
