import { createSlice } from '@reduxjs/toolkit'

const TodoSystem=createSlice({

    name:"TODO",
    initialState:[],
    reducers:{
        addTodo(state,action){
            state.push(action.payload)
        },
        removeTodo(state,action){
            //removeadd todo ka logic 

                const data=action.payload
              return state=state.filter((value,index)=> value!=data )
        }
    }

})

export const {addTodo,removeTodo} = TodoSystem.actions //addtodo home page pe, removetodo todo page pe  
export default TodoSystem.reducer //ye jayga store page pe 