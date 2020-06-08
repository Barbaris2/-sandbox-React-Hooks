import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <Fragment>
      <div className='navbar'>
        <Link to='/'>
          <i className='fa fa-home'></i>
        </Link>
        <Link to='/context'>useContext</Link>
        <div className='dropdown'>
          <button className='dropbtn'>
            useState() <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropdown-content'>
            <Link to='/counter'>Counter</Link>
            <Link to='/counterinput'>Counter with input</Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropbtn'>
            useEffect() <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropdown-content'>
            <Link to='/effect'>useEffect</Link>
            <Link to='/effectAsync'>useEffect with Async</Link>
          </div>
        </div>
        <Link to='/ref'>useRef</Link>
        <Link to='/reducer'>useReducer</Link>
        <Link to='/layoutEffect'>useLayoutEffect</Link>
        <Link to='/memo'>useMemo & useCallback</Link>
      </div>
    </Fragment>
  );
};

export default Navbar;
