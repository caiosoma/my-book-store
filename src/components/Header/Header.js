import HeaderLink from '../HeaderLink/HeaderLink'
import './Header.css'

const Header = () => {
    return (
        <header className="banner-main">
            <div>
                <img src='../imgs/livrin.png' alt='livrinho' width="68px" />
            </div>
            <nav>
                <HeaderLink url='/'>
                    Início
                </HeaderLink>
                <HeaderLink url='/loja'>
                    Catálogo
                </HeaderLink>
                <HeaderLink url='/conta'>
                    Minha Conta
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header 