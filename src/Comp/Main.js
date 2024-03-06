import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Home'
import Todo from './Todo'
import Nav from './Nav'
export default function Main() {
  return (
    <div>

        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}  />
                <Route path="/todo" element={<Todo/>}  />
            </Routes>
        </BrowserRouter>

    </div>
  )
}
