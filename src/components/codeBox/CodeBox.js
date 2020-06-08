import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBox = ({ codeString }) => {
  return (
    <div
      style={{
        width: '36rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left'
      }}
    >
      <SyntaxHighlighter language='jsx' style={gruvboxDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBox;
