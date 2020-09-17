import React, { useContext } from 'react';
import countercontext from './CounterContext';

const Child = () => {
    let counterValue = useContext(countercontext)
    console.log(counterValue);

    return(

        <>
        <h2>This is First child using countercontext</h2>
        <h2>Counter Value is {counterValue[0]}</h2>

        <button onClick={()=> {counterValue[1](++counterValue[0])}}>
        increment context</button>
        </>
    )
}
export default Child;