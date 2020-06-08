import React, { useRef, useEffect } from 'react';
import CodeBox from '../components/codeBox/CodeBox';
import { codeRef } from '../codeString/codeString';

export const Ref = () => {
  const ref = useRef(null);

  // Set focus to 2-nd element when component rendered
  useEffect(() => {
    ref.current.focus();
  });

  return (
    <>
      <p>После рендеринга компонентов устанавливается фокус на втором input</p>
      <div className='ref'>
        <input type='text' />
        <input ref={ref} type='number' />
      </div>
      <CodeBox codeString={codeRef} />
    </>
  );
};
