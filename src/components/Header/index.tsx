import styles from './header.module.css';
import cartIcon from '../../assets/cart-icon.svg';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
    amountItemsInCart: number;
}

export function Header({ amountItemsInCart }: HeaderProps) {
    return (
        <header className={styles.header}>
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
        </header>
    )
}