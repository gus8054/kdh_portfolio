import Title from "../../common/Title";
import styles from "./Projects.module.css";
import ReadMeSVG from "../../../assets/readme.svg?react";
import SearchSVG from "../../../assets/search.svg?react";
import React, { useEffect, useState } from "react";
import Dialog from "./Dialog";
import { createPortal } from "react-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects/projects.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err.message));
  }, []);
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <Title title="PROJECTS" />
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

  const handleReadmeOpen = () => {
    setDialogShow(true);
  };
  const handleReadmeClose = (e) => {
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
      <a className={styles.github} href={project.github} target="_blank">
        깃헙 주소
      </a>
      <div className={styles.skillset}>{project.skillSet.join(", ")}</div>
      <div className={styles.buttons}>
        <button className={styles.openBtn} onClick={handleReadmeOpen}>
          <div>
            <ReadMeSVG />
          </div>
          README
        </button>
        {project?.build && (
          <a className={styles.openBtn} href={project.build} target="_blank">
            <div>
              <SearchSVG />
            </div>
            배포 보러가기
          </a>
        )}
      </div>
      {dialogShow &&
        createPortal(
          <Dialog
            markdownURL={project.markdownURL}
            handleClose={handleReadmeClose}
          />,
          document.body
        )}
    </article>
  );
}
