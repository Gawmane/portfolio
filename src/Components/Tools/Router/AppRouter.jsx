import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../Pages/NotFound/NotFound'
import { Home } from '../../Pages/Home/Home'
import { Login } from '../../Pages/Login/Login'


export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route pate='/login' element={<Login />} />
            <Route pate='*' element={<NotFound />} />
        </Routes>
    )

}