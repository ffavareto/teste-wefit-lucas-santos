import { Link } from 'react-router-dom';
import emptyCart from '../../assets/empty-cart.svg';
import { EmptyCartContainer } from './styles';

export function EmptyCart() {
    return (
        <EmptyCartContainer>
            <h3>Parece que não há nada por aqui :(</h3>
            <img src={emptyCart} alt="" />
            <button>
                <Link to="/">Voltar</Link>
            </button>
        </EmptyCartContainer>
    )
}