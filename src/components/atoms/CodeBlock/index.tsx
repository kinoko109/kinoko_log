import Highlight, { defaultProps, Language } from "prism-react-renderer";
import React from "react";
import { CodeBlockProps } from "./types";

const CodeBlock = (props: CodeBlockProps) => {
  const { children, className } = props;

  const language = className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language as Language}
    >
      {({
        className: preClassName,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <pre className={preClassName} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            // TODO CodeBlockのコンポーネント修正atomじゃないのと下記keyに配列
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
