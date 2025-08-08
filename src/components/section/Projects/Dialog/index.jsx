import fetchMarkdown from "../fetchMarkdown";
import CodeHighlight from "../CodeHighlight";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import styles from "./Dialog.module.css";

const Dialog = ({ markdownURL, handleClose }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let partition;

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
      <ReactMarkdown components={{ code: CodeHighlight }}>{data}</ReactMarkdown>
    );
  return (
    <div className={styles.dialog_overlay}>
      <div className={styles.dialog}>
        <header>
          README.md
          <button onClick={handleClose}>X</button>
        </header>
        <section className={styles.markdown}>{partition}</section>
      </div>
    </div>
  );
};
export default Dialog;
