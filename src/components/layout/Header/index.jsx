import Navbar from "../Navbar";
import Logo from "../../common/Logo";
import SpreadNavBtn from "../../common/SpreadNavBtn";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isActive, setActive] = useState(false);
  const headerRef = useRef(null);
  const handleClick = (e) => {
    // e.stopPropagation();
    setActive((pre) => !pre);
  };
  const handleLogoClick = () => setActive(false);
  const handleOuterClickClose = (e) => {
    if (isActive && !headerRef.current?.contains(e.target)) setActive(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleOuterClickClose);
    return () => {
      document.removeEventListener("click", handleOuterClickClose);
    };
  }, [isActive]);
  return (
    <header id="top" className={styles.header} ref={headerRef}>
      <Logo handleClick={handleLogoClick} />
      <SpreadNavBtn handleClick={handleClick} />
      <Navbar isActive={isActive} handleClick={handleClick} />
    </header>
  );
}
