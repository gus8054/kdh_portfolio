import styles from "./Logo.module.css";
export default function Logo({ handleClick }) {
  return (
    <a href="#top" className={styles.logo} onClick={handleClick}>
      KDH's Portfolio
    </a>
  );
}
