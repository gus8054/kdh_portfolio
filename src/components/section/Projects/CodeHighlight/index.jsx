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

export default CodeHighlight;
