import fetchMarkdown from "../fetchMarkdown";
import CodeHighlight from "../CodeHighlight";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import styles from "./Dialog.module.css";
import cn from "classnames";

const Dialog = ({ markdownURL, handleClose }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let partition;
  const handleOverClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };
  useEffect(() => {
    setLoading(true);
    fetchMarkdown(markdownURL)
      .then((result) => setData(result))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) partition = <div className={styles.skeleton}></div>;
  else if (error)
    partition = <div className={styles.skeleton}>ERROR: {error.message}</div>;
  else
    partition = (
      <Markdown components={{ code: CodeHighlight }}>{data}</Markdown>
    );
  return (
    <div className={styles.dialog_overlay} onClick={handleOverClick}>
      <div className={styles.dialog}>
        <div className={styles.header}>
          README.md
          <button className={styles.close_btn} onClick={handleClose}>
            X
          </button>
        </div>
        <section
          className={cn(styles["markdown-body"], styles.markdown_section)}>
          {partition}
        </section>
      </div>
    </div>
  );
};
export default Dialog;
