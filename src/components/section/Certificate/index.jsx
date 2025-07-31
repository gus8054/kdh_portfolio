import styles from "./Certificate.module.css";
import Title from "../../common/Title";

function Card({ title, agency, date }) {
  return (
    <div className={styles.card}>
      <p>{agency}</p>
      <h4>{title}</h4>
      <p>{date}</p>
    </div>
  );
}

export default function Certificate() {
  return (
    <section className={styles.section}>
      <Title title="Certificate" mode="white" />
      <Card title="SQLD" agency="Kdata(데이터자격검정)" date="2023.12.15" />
      <Card title="정보처리기사" agency="한국산업인력공단" date="2019.11.22" />
      <Card
        title="정보처리기능사"
        agency="한국산업인력공단"
        date="2016.12.05"
      />
      <Card
        title="리눅스마스터2"
        agency="KAIT(정보통신기술자격검정)"
        date="2015.06.13"
      />
    </section>
  );
}
