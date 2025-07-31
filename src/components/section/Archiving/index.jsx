import Title from "../../common/Title";
import styles from "./Archiving.module.css";
import GithubSVG from "../../../assets/github.svg?react";
import BlogSVG from "../../../assets/blog.svg?react";

function Card({ link, desc, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      {children}
      <a href={link} className={styles.link}>
        {link.replace("https://", "")}
      </a>
      <p>{desc}</p>
    </div>
  );
}
export default function Archiving() {
  return (
    <section className={styles.section}>
      <Title title="ARCHIVING" mode="white" />
      <Card link="https://github.com/gus8054" desc="소스 코드 저장소">
        {
          <>
            <div>
              <GithubSVG />
            </div>
            <h3>Github</h3>
          </>
        }
      </Card>
      <Card
        link="https://velog.io/@ehdgus8054/posts"
        desc="공부 및 지식 공유 목적의 블로그">
        {
          <>
            <div>
              <BlogSVG />
            </div>
            <h3>Velog</h3>
          </>
        }
      </Card>
    </section>
  );
}
