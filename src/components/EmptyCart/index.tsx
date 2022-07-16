import { Link } from 'react-router-dom';
import emptyCart from '../../assets/empty-cart.svg';
import styles from './emptyCart.module.css';

export function EmptyCart() {
    return (
        <div className={styles.emptyCart}>
            <h3>Parece que não há nada por aqui :(</h3>
            <img src={emptyCart} alt="" />
            <button>
                <Link to="/">
                    Voltar
                </Link>
            </button>
        </div>
    )
}