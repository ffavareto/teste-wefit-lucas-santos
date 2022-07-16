import styles from './product.module.css';
import addToCartIcon from '../../assets/add-to-cart.svg';
import { Product } from '../../pages/Home';

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
        <div className={styles.product}>
            <div className={styles.info}>
                <img src={image} alt="" />
                <p>{ title }</p>
            </div>
            <div className={styles.buy}>
                <p>{ formatCurrency(price) }</p>
                <button
                    onClick={() => onAddItemsToCart(id)}
                    disabled={alreadyInList()}
                    title={alreadyInList() ? 'Produto já adicionado' : 'Adicionar ao carrinho'}
                >
                    <img src={addToCartIcon} width="28" />
                    <span>Adicionar ao carrinho</span>
                </button>
            </div>
        </div>
    )
}