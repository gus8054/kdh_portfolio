import DecryptedText from "../../common/DecryptedText";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>- 김동현 -</h1>
        <h1 className={styles.title}>프론트 엔드 개발자 포트폴리오</h1>
        <hr className={styles.hr} />

        <p className={styles.body}>안녕하세요.</p>

        <p className={styles.body}>본질에 집중하는 프론트 엔드 개발자</p>
        <p className={styles.body}>김동현입니다.</p>

        <a href="#about-me" className={styles.more}>
          더 알아보기
        </a>
      </div>
    </section>
  );
}
