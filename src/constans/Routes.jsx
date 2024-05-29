import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About'

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>Undefined is not a function jeje</h1>} />
        </Routes>
    )
}

export default RoutesIndex
