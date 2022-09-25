import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import Home from '../pages/Home'

const HomeRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default HomeRouter