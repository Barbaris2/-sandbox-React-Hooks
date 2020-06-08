import React from 'react';
import CodeBox from '../components/codeBox/CodeBox';
import { codeMemo } from '../codeString/codeString';

export const Memo = () => {
  return (
    <>
      <p>
        Эти два хука похожи. Оснавная задача уменьшение количества
        перерендеринга{' '}
      </p>
      <CodeBox codeString={codeMemo} />;
    </>
  );
};
