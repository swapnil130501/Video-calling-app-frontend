import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Room from './pages/Room'
import JoinDetails from './pages/JoinDetails'
import { Auth } from './pages/Auth'

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/room/:id' element={<Room />} />
                <Route path="/join-details" element={<JoinDetails />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </>
    )
}

export default App
