import Navbar from "../Navbar";
import Logo from "../../common/Logo";
import SpreadNavBtn from "../../common/SpreadNavBtn";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive((pre) => !pre);
  };
  return (
    <header id="top" className={styles.header}>
      <Logo />
      <SpreadNavBtn handleClick={handleClick} />
      <Navbar isActive={isActive} handleClick={handleClick} />
    </header>
  );
}
