import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Undefined is not a function</h1>} />
        </Routes>
    )
}

export default RoutesIndex
