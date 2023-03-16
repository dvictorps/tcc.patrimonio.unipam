import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import PermanentDrawerLeft from '../components/PermanentDrawerLeft'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}
