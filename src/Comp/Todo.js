import React from 'react'
import { useSelector } from 'react-redux'
import { removeTodo } from '../Redux/TodoReducer'
import { useDispatch } from 'react-redux'
export default function Todo() {    
        const dispatch=useDispatch()
       const mytodo=useSelector((state)=>state.todo)


       const deleteTodo=(x)=>{
       
        dispatch(removeTodo(x))

       }
       
  return (
    <div style={{height:"100vh"}} className='container-fixed bg-dark d-flex justify-content-center'>

        <div className='col-xl-6 mt-5'>
        <table className='table  table-striped table-dark'>
            <tbody>
            <tr>
                <td>Todos</td>
                <td>Action</td>
            </tr>
            
            {
                mytodo.map((value,index)=>{
                    return(
                        <tr>
                        <td>{value}</td>
                        <td><button className='btn btn-danger' onClick={()=>{deleteTodo(value)}}>remove todo</button></td>
                    </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>

    </div>
  )
}
