import React, {useReducer} from 'react';
import counterReducer from './counterReducer.js';
 

const Child2 = ()=>{
    let [state , dispatch] = useReducer(counterReducer , 10)
    console.log(state) 


    return (
        <div>
            <h2>This is the second child using counterRducer</h2>
            <h2>value of couutner reducer of state{state}</h2>
            <button onClick={()=>{dispatch('INCREMENT')}}>increment Reducer</button>

        </div>
    )


}

export default Child2;