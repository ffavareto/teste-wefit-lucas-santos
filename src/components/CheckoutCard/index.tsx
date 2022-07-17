import successBuy from '../../assets/success-buy.svg';
import { Link } from 'react-router-dom';
import { CheckoutCardContainer } from './styles';

export function CheckoutCard() {
    return (
        <CheckoutCardContainer>
            <h3>Compra realizada com sucesso!</h3>
            <img src={successBuy} alt="" />
            <button>
                <Link to="/">
                    Voltar
                </Link>
            </button>
        </CheckoutCardContainer>
    )
}