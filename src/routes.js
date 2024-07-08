import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage/RegisterPage'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import StorePage from "./pages/Store/StorePage";
import Container from "./components/Container/Container";


export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path='/' element={<RegisterPage />}/>
                    <Route path='/loja' element={<StorePage />}/>
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}