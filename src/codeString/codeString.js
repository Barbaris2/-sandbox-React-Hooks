export const codeCounter = `
import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>​
      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
};
`;

export const codeCounterInput = `
import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>​
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input
        type='number'
        value={count}
        onChange={e => setCount(e.target.value)} 
      />
    </>
  );
};
`;

export const codeContext = `
import React, { useContext } from 'react';

const myContext = React.createContext("It's me, context");

export const Context = () => {
  const context = useContext(myContext);

  return <h1> useContext: {context} </h1>;
};
`;

export const codeEffect = `
import React, { useState, useEffect } from 'react';

export const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  });

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>​
      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
};
`;

export const codeEffectAsync = `
import React, { useState, useEffect } from 'react';

const fetchUser = async setUser => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  setUser(data.results[0]);
};

export const EffectAsync = () => {
  const [user, setUser] = useState(null);

  useEffect(
    () => {
      fetchUser(setUser);
    },
    [] /* Empty array ensures effect 
          is only run on mount and unmount */
  );

  return (
    <>
      <h1>
        {
          user 
            ? \`\${user.name.first} \${user.name.last}\` 
            : 'Loading...'
        }
      </h1>
    </>
  );
};`;

export const codeRef = `
import React, { useRef, useEffect } from 'react';

export const Ref = () => {
  const ref = useRef(null);

  // Set focus to 2-nd element when component rendered
  useEffect(() => {
    ref.current.focus();
  });

  return (
    <>
      <div className='ref'>
        <input type='text' />
        <input ref={ref} type='number' />
      </div>
    </>
  );
};
`;

export const codeReducer = `
import React, { useReducer } from 'react';

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
      <button 
        onClick={() => dispatch({ type: 'increment' })}>+1
      </button>
      <button 
        onClick={() => dispatch({ type: 'decrement' })}>-1
      </button>
    </>
  );
};
`;

export const codeLayoutEffect = `
import React, { useLayoutEffect } from 'react';

export const Modal = ({ onClose }) => {
  useLayoutEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = 'visible');
  }, []); 

  return (
    <div className='modalOverlay' onClick={onClose}>
      <div className='modal'>
        <h2>Modal Title</h2>
        <p>Modal content</p>
      </div>
    </div>
  );
};
`;

export const codeMemo = `
import React, { useCallback, useMemo } from 'react';

// Callback
const Callback = useCallback(() => { sum(a, b); }, [a, b]);

// Memo
const Value = useMemo(() => sum(a, b), [a, b]);
`;
