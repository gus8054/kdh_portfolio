import Navbar from "../Navbar";
import Logo from "../../common/Logo";
import SpreadNavBtn from "../../common/SpreadNavBtn";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";

export default function Header() {
  const [isActive, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const handleClick = (e) => {
    setActive((pre) => !pre);
  };

  const handleLogoClick = () => setActive(false);

  const handleOuterClickClose = (e) => {
    if (isActive && !headerRef.current?.contains(e.target)) setActive(false);
  };

  const handleScroll = (e) => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOuterClickClose);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("click", handleOuterClickClose);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);
  return (
    <header
      className={cn(styles.header, scrolled && styles.scroll)}
      ref={headerRef}>
      <div className={cn("container", styles.headerInner)}>
        <Logo handleClick={handleLogoClick} scrolled={scrolled} />
        <SpreadNavBtn handleClick={handleClick} />
        <Navbar
          isActive={isActive}
          handleClick={handleClick}
          scrolled={scrolled}
        />
      </div>
    </header>
  );
}
