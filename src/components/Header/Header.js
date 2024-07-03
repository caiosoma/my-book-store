import HeaderLink from '../HeaderLink/HeaderLink'
import './Header.css'

const Header = () => {
    return (
        <header className="banner-main">
            <div>
                <img src='../imgs/booklogo.png' alt='livrinho' width="68px" />
            </div>
            <nav>
                <HeaderLink url='/'>
                    Home
                </HeaderLink>
                <HeaderLink url='/loja'>
                    Loja
                </HeaderLink>
                <HeaderLink url='/conta'>
                    Minha Conta
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header 