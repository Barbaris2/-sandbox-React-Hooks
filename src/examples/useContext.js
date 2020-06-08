import React, { useContext } from 'react';
import CodeBox from '../components/codeBox/CodeBox';
import { codeContext } from '../codeString/codeString';

const myContext = React.createContext("It's me, context");

export const Context = () => {
  const context = useContext(myContext);

  return (
    <>
      <h1> useContext: {context} </h1>
      <CodeBox codeString={codeContext} />;
    </>
  );
};
