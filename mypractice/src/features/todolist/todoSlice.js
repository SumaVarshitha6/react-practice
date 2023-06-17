import {createSlice} from "@reduxjs/toolkit";
const initialState={
    todos:["moksha toy","clear bills","tissuepapers"]
}
export const todoSlice=createSlice({
    name:"todolist",
    initialState,
    reducers:{
        addTodo:(state,action)=>{state.todos.push(action.payload)},
        deleteTodo:(state,action)=>{state.todos.splice(action.payload,1)}
    }
})
export const {addTodo,deleteTodo}=todoSlice.actions;
export  default todoSlice.reducer;