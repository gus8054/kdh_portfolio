import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <h1>- 김동현 -</h1>
      <h1>프론트 엔드 개발자 포트폴리오</h1>
      <hr />
      <p>안녕하세요.</p>
      <p>본질에 집중하는 프론트 엔드 개발자</p>
      <p>김동현입니다.</p>
      <a href="#about-me">더 알아보기</a>
    </section>
  );
}
