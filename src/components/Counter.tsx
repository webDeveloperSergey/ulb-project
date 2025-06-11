import React from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count + 1);

    return (
        <>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={increment}>Увеличить</button>
        </>

    );
};

export default Counter;