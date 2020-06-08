import React, { useReducer } from 'react';
import CodeBox from '../components/codeBox/CodeBox';
import { codeReducer } from '../codeString/codeString';

// Store
const initialState = { count: 0 };

// Reducer
const reducer = ({ count }, { type }) => {
  switch (type) {
    case 'increment':
      return { count: count + 1 };
    case 'decrement':
      return { count: count - 1 };
    default:
      return {};
  }
};

export const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      {/* Actions */}
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>{' '}
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <CodeBox codeString={codeReducer} />
    </>
  );
};
