import Title from "../../common/Title";
import styles from "./Skills.module.css";
import data from "./data";

function Group({ GroupSVG, title, list = [] }) {
  return (
    <div className={styles.group}>
      <div>
        <GroupSVG />
      </div>
      <h3>{title}</h3>
      <ul>
        {list.map((item) => (
          <li
            key={item.name}
            style={{ color: item.color, backgroundColor: item.bgColor }}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function GroupContainer() {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Group
          key={item.title}
          GroupSVG={item.svg}
          title={item.title}
          list={item.list}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section className={styles.section}>
      <Title title="Skills" />
      <GroupContainer />
    </section>
  );
}
