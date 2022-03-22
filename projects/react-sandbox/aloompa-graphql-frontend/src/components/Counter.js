import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import classes from './Counter.module.css';

const Counter = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div className={classes['counter']}>
        <div>
          <h1>⸜(ؔᶿധؔᶿ)⸝ Happy Geek Points = {count}</h1>
        </div>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            Increment
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            Decrement
          </button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    );
  };

export default Counter;