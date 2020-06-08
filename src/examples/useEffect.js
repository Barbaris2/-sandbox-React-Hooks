import React, { useState, useEffect } from 'react';
import CodeBox from '../components/codeBox/CodeBox';
import { codeEffect, codeEffectAsync } from '../codeString/codeString';

//---------useEffect------------

export const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>​{' '}
      <button onClick={() => setCount(count - 1)}>-1</button>
      <CodeBox codeString={codeEffect} />
    </>
  );
};

//---------useEffect with async------------

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
    [] // Empty array ensures effect is only run on mount and unmount
  );

  return (
    <>
      <h1>{user ? `${user.name.first} ${user.name.last}` : 'Loading...'}</h1>
      <CodeBox codeString={codeEffectAsync} />
    </>
  );
};
