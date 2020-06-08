import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Counter, CounterInput } from './examples/useState';
import { Context } from './examples/useContext';
import { Effect, EffectAsync } from './examples/useEffect';
import { Ref } from './examples/useRef';
import { Reducer } from './examples/useReducer';
import { Modal } from './examples/useLayoutEffect';
import { Memo } from './examples/useMemo';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Route
          path='/'
          render={() => <h2>Welcome to sandbox for React Hooks</h2>}
          exact
        />
        <Route path='/counter' component={Counter} />
        <Route path='/counterinput' component={CounterInput} />
        <Route path='/context' component={Context} />
        <Route path='/effect' component={Effect} />
        <Route path='/effectAsync' component={EffectAsync} />
        <Route path='/ref' component={Ref} />
        <Route path='/reducer' component={Reducer} />
        <Route path='/layoutEffect' component={Modal} />
        <Route path='/memo' component={Memo} />
      </Router>
    </div>
  );
}

export default App;
