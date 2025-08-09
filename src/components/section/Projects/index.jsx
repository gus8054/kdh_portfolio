import Title from "../../common/Title";
import styles from "./Projects.module.css";
import ReadMeSVG from "../../../assets/readme.svg?react";
import React, { useState } from "react";
import Dialog from "./Dialog";
import projects from "./projects";

export default function Projects() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Title title="PROJECTS" />
        <div className={styles.card_container}>
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
        <div className={styles.card_container}>
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ project }) {
  const [dialogShow, setDialogShow] = useState(false);

  const handleOpen = () => {
    setDialogShow(true);
  };
  const handleClose = () => {
    setDialogShow(false);
  };

  return (
    <article className={styles.card}>
      <h4 className={styles.title}>{project.title}</h4>
      <p className={styles.ext}>
        {project.endedMonth}{" "}
        {project.joinPeople == 1
          ? `(1인 개인 프로젝트)`
          : `${project.joinPeople}인 그룹 프로젝트`}
      </p>
      <hr className={styles.hr} />
      <p className={styles.subtitle}>{project.body}</p>
      <ul className={styles.ul}>
        {project.explainList.map((listItem, idx) => (
          <React.Fragment key={idx}>
            <li className={styles.ul_item}>{listItem}</li>
          </React.Fragment>
        ))}
      </ul>
      <a className={styles.github} href={project.github}>
        깃헙 주소
      </a>
      <div className={styles.skillset}>{project.skillSet.join(", ")}</div>
      <button className={styles.openBtn} onClick={handleOpen}>
        <div>
          <ReadMeSVG />
        </div>
        README
      </button>
      {dialogShow && (
        <Dialog markdownURL={project.markdownURL} handleClose={handleClose} />
      )}
    </article>
  );
}
