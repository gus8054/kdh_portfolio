import Title from "../../common/Title";
import styles from "./Archiving.module.css";
import GithubSVG from "../../../assets/github.svg?react";
import BlogSVG from "../../../assets/blog.svg?react";
import React from "react";

function Card({ svg, title, link, desc }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.svg_container}>{svg}</div>
      <h3 className={styles.title}>{title}</h3>
      <a href={link} className={styles.link}>
        {title} 이동
      </a>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}
export default function Archiving() {
  return (
    <section id="archiving" className={styles.section}>
      <div className="container">
        <Title title="ARCHIVING" mode="white" />
        <div className={styles.card_container}>
          <Card
            svg={<GithubSVG />}
            title="Github"
            link="https://github.com/gus8054"
            desc="소스 코드 저장소"
          />
          <Card
            svg={<BlogSVG />}
            title="Velog"
            link="https://velog.io/@ehdgus8054/posts"
            desc="공부 및 지식 공유 목적의 블로그"
          />
        </div>
      </div>
    </section>
  );
}
