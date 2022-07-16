import styles from './checkoutCard.module.css';
import successBuy from '../../assets/success-buy.svg';
import { Link } from 'react-router-dom';

export function CheckoutCard() {
    return (
        <div className={styles.checkoutCard}>
            <h3>Compra realizada com sucesso!</h3>
            <img src={successBuy} alt="" />
            <button>
                <Link to="/">
                    Voltar
                </Link>
            </button>
        </div>
    )
}