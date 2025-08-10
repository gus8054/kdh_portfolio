import Title from "../../common/Title";
import styles from "./Skills.module.css";
import data from "./data";

function Group({ GroupSVG, title, list = [] }) {
  return (
    <div className={styles.group}>
      <div className={styles.svg_container}>
        <GroupSVG />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.ul}>
        {list.map((item) => (
          <li
            key={item.name}
            className={styles.ul_item}
            style={{ "--color": item.color, "--bg": item.bgColor }}>
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
    <section id="skills" className={styles.section}>
      <div className="container">
        <Title title="Skills" />
        <GroupContainer />
      </div>
    </section>
  );
}
