import addToCartIcon from '../../assets/add-to-cart.svg';
import { Product } from '../../pages/Home';
import { BuyContainer, ProductContainer, ProductInfoContainer } from './styles';

interface ProductItemProps {
    title: string;
    price: number;
    image: string;
    id: number;
    onAddItemsToCart: (id: number) => void
}

export function formatCurrency(value: number) {
    const locale = navigator.language;

    const result = new Intl.NumberFormat(locale, {
        style: 'currency', currency: 'BRL' 
    }).format(value);

    return result;
}

export function ProductItem({ title, price, image, id, onAddItemsToCart }: ProductItemProps) {

    function alreadyInList() {
        return itensLocalStorage.find(product => product.id === id) !== undefined
    }

    const itensLocalStorage: Product[] = JSON.parse(localStorage.getItem('products')!) || [];

    return (
        <ProductContainer>
            <ProductInfoContainer>
                <img src={image} alt="" />
                <p>{ title }</p>
            </ProductInfoContainer>
            <BuyContainer>
                <p>{ formatCurrency(price) }</p>
                <button
                    onClick={() => onAddItemsToCart(id)}
                    disabled={alreadyInList()}
                    title={alreadyInList() ? 'Produto já adicionado' : 'Adicionar ao carrinho'}
                >
                    <img src={addToCartIcon} width="28" />
                    <span>Adicionar ao carrinho</span>
                </button>
            </BuyContainer>
        </ProductContainer>
    )
}