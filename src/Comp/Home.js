import React, { useState } from 'react'
import { addTodo } from '../Redux/TodoReducer'
import { useDispatch } from 'react-redux'
export default function Home() {

   const dispatch= useDispatch()
    const [todo,settodo]=useState("")
    const fun=()=>{
        dispatch(addTodo(todo))
    }

    return (
        <>
            <div className='container-fixed d-flex justify-content-center align-items-center  bg-dark' style={{height:"100vh"}}  >
                <div className='col-xl-6 '> 
                <form className='d-flex '>
                    <input type="text" className='form-control ' placeholder='add Todo' onChange={(e)=>{settodo(e.target.value)}}/>
                    <input className='btn btn-success mx-3' type="button" onClick={fun} value="addTodo" />
                </form>
                </div>
            </div>
        </>
    )
}
