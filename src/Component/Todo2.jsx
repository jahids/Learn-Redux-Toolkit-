import React from 'react';
import { useSelector } from 'react-redux';

const Todo2 = () => {
    const result = useSelector((state)=>state.Todo)
    console.log("Todo 2", result)

    return (
        <div>
            <p>hey todo 2 testted</p>
        </div>
    );
};

export default Todo2;