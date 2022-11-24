import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../features/CounterSlice';

const SimpleCounter = () => {
    const reduxData = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    console.log('redux tool', reduxData)
    return (<div>
        <h2>Simple Redux Counter Application</h2>

        <h1> {
            reduxData.value
        }</h1>
        <button onClick={
            () => dispatch(increment())
        }>increment</button>
        <button onClick={
            () => dispatch(decrement())
        }>Decrement</button>

    </div>);
};

export default SimpleCounter;
