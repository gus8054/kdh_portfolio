import Title from "../../common/Title";
import styles from "./Projects.module.css";
import ReadMeSVG from "../../../assets/readme.svg?react";
import { forwardRef, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ShikiHighlighter, isInlineCode } from "react-shiki";

const CodeHighlight = ({ className, children, node }) => {
  const code = String(children).trim();
  const language = className?.match(/language-(\w+)/)?.[1];
  const isInline = node ? isInlineCode(node) : false;

  return !isInline ? (
    <ShikiHighlighter language={language} theme="github-dark">
      {code}
    </ShikiHighlighter>
  ) : (
    <code className={className}>{code}</code>
  );
};

const fetchMarkdown = async () => {
  const res = await fetch("/readme/portfolio.md");
  if (res.ok) {
    return res.text();
  }
  throw new Error(res.statusText);
};

const Dialog = forwardRef((_, ref) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchMarkdown()
      .then((result) => setData(result))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleClick = () => {
    ref.current.close();
  };

  return (
    <dialog ref={ref} closedby="any" className={styles.dialog}>
      <header>
        README.md
        <button onClick={handleClick}>X</button>
      </header>
      <section className={styles.markdown}>
        {isLoading ? (
          "Loading..."
        ) : error ? (
          `Error : ${error}`
        ) : (
          <ReactMarkdown components={{ code: CodeHighlight }}>
            {data}
          </ReactMarkdown>
        )}
      </section>
    </dialog>
  );
});

function Card() {
  const dialogRef = useRef(null);
  const handleClick = () => {
    dialogRef.current.showModal();
  };
  return (
    <article className={styles.card}>
      <h4>포트폴리오 웹사이트</h4>
      <p>2025.07 (1인 개인 프로젝트)</p>
      <hr />
      <p>포트폴리오 웹사이트</p>
      <ul>
        <li>나만의 포트폴리오를 위한 웹사이트 개발</li>
        <li>마크업 파일 랜더링</li>
        <li>모달</li>
      </ul>
      <a href="https://example.com">https://example.com</a>
      <div>TypeScript, React, CSS Module, AWS, Route 53, S3</div>
      <button onClick={handleClick}>
        <div>
          <ReadMeSVG />
        </div>
        README
      </button>
      <Dialog ref={dialogRef} />
    </article>
  );
}
export default function Projects() {
  return (
    <section className={styles.section}>
      <Title title="PROJECTS" />
      <Card />
    </section>
  );
}
