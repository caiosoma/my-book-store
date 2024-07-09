import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage/RegisterPage'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import StorePage from "./pages/Store/StorePage";
import AccountPage from "pages/AccountPage/AccountPage";

export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path='/' element={<RegisterPage />}/>
                    <Route path='/loja' element={<StorePage />}/>
                    <Route path='/conta' element={<AccountPage />}/>
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}