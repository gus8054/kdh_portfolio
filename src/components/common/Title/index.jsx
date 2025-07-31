import styles from "./Title.module.css";
import ClipSVG from "../../../assets/clip.svg?react";

export default function Title({ title, mode = "black" }) {
  return (
    <h1 className={`${styles.title} ${mode === "white" ? styles.white : ""}`}>
      <div>
        <ClipSVG />
      </div>
      {title}
    </h1>
  );
}
