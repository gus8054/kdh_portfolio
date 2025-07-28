import MenuSVG from "../../../assets/menu.svg?react";
import styles from "./SpreadNavBtn.module.css";

export default function SpreadNavBtn({ handleClick }) {
  return (
    <div className={styles.menu} onClick={handleClick}>
      <MenuSVG />
    </div>
  );
}
