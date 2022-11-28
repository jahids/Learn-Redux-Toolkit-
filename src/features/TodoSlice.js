import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    
]


const Todoslice = createSlice({
    name : "todos",
    initialState,
    reducers : {
        addTodo : (state, action)=>{
            const newTodo = {
                id : Math.floor(Math.random() * 100),
                title : action.payload.title,
                completed : false
            }
            state.push(newTodo)
        },

        deleteTodo : (state ,  action)=>{
         const deletedId = action.payload.id;
        //  console.log('deleted id', deletedId )
    //   return  state.filter((item, index)=> item.id !== deletedId);
      return  state.filter((item, index)=> item.id !== deletedId);
        },


        updateTodo : (state, action) =>{
            console.log("updated todo",  action.payload)
            const {id, addtodo} = action.payload
        // finding click id
        const FindId = state.filter((item, index)=> item.id === id);

        // specific id updated with addtodo[e.target.value]
        const updatedDAta = [{...FindId[0], title : addtodo, completed : true }]

        // finding without click id [all obj]
        const FindAllObj = state.filter((item, index)=> item.id !== id);
        const ArraaySpread = [...FindAllObj, ...updatedDAta];
        return ArraaySpread;
            
        },


        filterTodo : (state, action) => {
        const {filterValue} = action.payload
            const userValue = filterValue  //parseInt(e.target.value)
            if(userValue === ""){
              console.log('inner');
              return state
            }
        
            var UpdateValue = [...state]
            // console.log("data",data);
            const filterdvlaue = UpdateValue.filter((item, index)=> item.title === userValue)
            console.log("filter value", filterdvlaue);
            // return filterdvlaue
             return filterValue
        }

    }
})


export const { addTodo, deleteTodo, updateTodo, filterTodo} = Todoslice.actions;
export const TodoReducer = Todoslice.reducer;