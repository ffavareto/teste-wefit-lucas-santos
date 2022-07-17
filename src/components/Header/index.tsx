import cartIcon from '../../assets/cart-icon.svg';
import { NavLink } from 'react-router-dom';

import { HeaderContainer } from './styles'
interface HeaderProps {
    amountItemsInCart: number;
}

export function Header({ amountItemsInCart }: HeaderProps) {
    return (
        <HeaderContainer>
            <NavLink to="/">
                <h2>WebMovies</h2>
            </NavLink>

            <div>
                <NavLink to="/carrinho">
                    <div>
                        <p>Meu Carrinho</p>
                        <span>{ amountItemsInCart } itens</span>
                    </div>
                    <img src={cartIcon} alt="" />
                </NavLink>
            </div>
        </HeaderContainer>
    )
}