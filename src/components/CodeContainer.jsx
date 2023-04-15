import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { anOldHope as stl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodeContainer = ({ language, value }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="code-container">
      <SyntaxHighlighter language={language} style={stl}>
        {value}
      </SyntaxHighlighter>
      <div className="copy-button">
        <CopyToClipboard text={value} onCopy={handleCopy}>
          <button>{isCopied ? "Copied!" : "Copy to clipboard"}</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CodeContainer;
