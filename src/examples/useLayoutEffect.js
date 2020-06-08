import React, { useLayoutEffect } from 'react';

import CodeBox from '../components/codeBox/CodeBox';
import { codeLayoutEffect } from '../codeString/codeString';

export const Modal = ({ onClose }) => {
  useLayoutEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = 'visible');
  }, []); // Empty array ensures effect is only run on mount and unmount

  return (
    <div className='modalOverlay' onClick={onClose}>
      <div className='modal'>
        <h2>Modal Title</h2>
        <p> Вы не сможете 'скролить' это окно</p>
      </div>
      <CodeBox codeString={codeLayoutEffect} />
    </div>
  );
};
