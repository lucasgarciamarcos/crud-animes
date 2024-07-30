import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Animes from './pages/Animes'

const RoutesConfig: React.FC = () => {
    return (
        <Routes>
            <Route path="/" Component={Animes}></Route>
        </Routes>
    )
}

export default RoutesConfig