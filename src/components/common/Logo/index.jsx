import styles from "./Logo.module.css";
import cn from "classnames";
export default function Logo({ handleClick, scrolled }) {
  console.log(scrolled);
  return (
    <a
      href="#top"
      className={cn(styles.logo, scrolled && styles.scroll)}
      onClick={handleClick}>
      KDH's Portfolio
    </a>
  );
}
