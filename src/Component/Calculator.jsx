import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Adding, Mainus } from '../features/CalculatorSlice';

const Calculator = () => {
  const [firstnumber, setFirstnumber] = useState();
  const [secoundnumber, setSecoundNumber] = useState()

    const result = useSelector((state)=>state.calculator);
    const dispatch = useDispatch();
    const add = () => {
        dispatch(Adding({firstnumber, secoundnumber}))
    }

    const reduxMainus = () => {
        dispatch(Mainus({firstnumber, secoundnumber}))
    }

    return (
        <div>
            <h1> simple Calculator </h1>
            <input onChange={(e)=>{setFirstnumber(e.target.value)}} type="number" placeholder='first number'/>
            <input onChange={(e)=>{setSecoundNumber(e.target.value)}} type="number" placeholder='secound number'/>
            <h2>result = {result.value}</h2>
            <button onClick={add}>add</button>
            <button onClick={reduxMainus}>mainus</button>

        </div>
    );
};

export default Calculator;