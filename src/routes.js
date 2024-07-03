import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage/RegisterPage'
import Header from './components/Header/Header'


export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path='/' element={<RegisterPage />}/>
                </Routes>
        </BrowserRouter>
    )
}