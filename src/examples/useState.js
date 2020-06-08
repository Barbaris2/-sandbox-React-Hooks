import React, { useState } from 'react';
import CodeBox from '../components/codeBox/CodeBox';
import { codeCounter, codeCounterInput } from '../codeString/codeString';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>​{' '}
      <button onClick={() => setCount(count - 1)}>-1</button>
      <CodeBox codeString={codeCounter} />
    </>
  );
};

export const CounterInput = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>​{' '}
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input
        type='number'
        value={count}
        onChange={e => setCount(e.target.value)}
      />
      <CodeBox codeString={codeCounterInput} />
    </>
  );
};
