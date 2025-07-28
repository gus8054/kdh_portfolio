import styles from "./Navbar.module.css";

export default function Navbar({ isActive, handleClick }) {
  return (
    <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
      <ul>
        <li>
          <a href="#about-me" onClick={handleClick}>
            About me
          </a>
        </li>
        <li>
          <a href="#skills" onClick={handleClick}>
            Skills
          </a>
        </li>
        <li>
          <a href="#archiving" onClick={handleClick}>
            Archiving
          </a>
        </li>
        <li>
          <a href="#certificate" onClick={handleClick}>
            Certificate
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#career" onClick={handleClick}>
            Career
          </a>
        </li>
      </ul>
    </nav>
  );
}
