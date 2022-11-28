import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../features/TodoSlice";

const Todo = () => {
  const result = useSelector((state) => state.Todo); // useselector default vabe state pabe
  const dispatch = useDispatch();
  const [addtodo, settodo] = useState();
  const [data, setdata] = useState(result);
  const [filterValue, setfilterValue] = useState()


  useEffect(() => {
    setdata(result);
  }, [result]);

  const addHandeler = () => {
    dispatch(addTodo({ title: addtodo }));
    settodo("");
  };

  const deletetodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const editTodo = (id) => {
    settodo("");
    dispatch(updateTodo({ id, addtodo }));
  };
  
   const GlobalFilter = (e)=> {
    // console.log("udpated vlaue check",e.target.value)
    const userValue = filterValue  //parseInt(e.target.value)
    if(userValue === ""){
      console.log('inner');
      setdata(result)
      return
    }

    var UpdateValue = [...data]
    // console.log("data",data);
    const filterdvlaue = UpdateValue.filter((item, index)=> item.title === userValue)
    console.log("filter value", filterdvlaue);
    // return filterdvlaue
    setdata(filterdvlaue)
    
    }

  return (
    <div>
      <p>Simple Todo</p>
      <input onChange={((e)=>{setfilterValue(e.target.value)})} placeholder="filter" type="text"/>
      <button onClick={()=>{GlobalFilter()}} >search</button>
      <br/>

      <input
        onChange={(e) => {
          settodo(e.target.value);
        }}
        value={addtodo}
        type="text"
        placeholder="todos"
      />
      <button onClick={addHandeler}>Ok</button>

      <div>
        <p>All todo</p>
        { data &&
        data?.map((item, index) => (
          <div>
            <p key={item.id}>
              {item.id} {item.title}{" "}
              <button
                onClick={() => {
                  editTodo(item.id);
                }}
              >
                update
              </button>{" "}
              <button
                onClick={() => {
                  deletetodo(item.id);
                }}
              >
                delete
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
