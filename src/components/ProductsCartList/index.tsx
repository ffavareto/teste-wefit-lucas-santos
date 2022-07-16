import styles from './productsCartList.module.css';
import { Product } from "../../pages/Home";
import { ProductCartItem } from "../ProductCartItem";
import { formatCurrency } from '../ProductItem';
import { Link } from 'react-router-dom';

interface ProductsCartListProps {
    productsInCart: Product[];
    onRemoveItemFromCart: (id: number) => void,
    onAddOneMoreSameItemToCart: (id: number) => void,
    onRemoveOneLessSameItemToCart: (id: number) => void,
}

export function ProductsCartList({ productsInCart, onRemoveItemFromCart, onAddOneMoreSameItemToCart, onRemoveOneLessSameItemToCart }: ProductsCartListProps) {

    function calcTotal() {
        const products: Product[] = JSON.parse(localStorage.getItem('products')!) || [];
        
        if (products.length > 0) {
            return products.reduce((acc, att) => {
                return acc += att.amount! * att.price
            }, 0)
        } else {
            return 0;
        }
    }

    return (
        <div className={styles.cartContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Produto</th>
                        <th>Qtd</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productsInCart.map(product => (
                        <ProductCartItem
                            product={product}
                            key={product.id}
                            onRemoveItemFromCart={onRemoveItemFromCart}
                            onAddOneMoreSameItemToCart={onAddOneMoreSameItemToCart}
                            onRemoveOneLessSameItemToCart={onRemoveOneLessSameItemToCart}
                        />
                    ))}
                </tbody>
            </table>
            <hr />

            <div className={styles.buy}>
                <button>
                    <Link to="/checkout">
                        Finalizar Pedido
                    </Link>
                </button>

                <div>
                    <span>Total</span>
                    <p>{formatCurrency(calcTotal()!)}</p>
                </div>
            </div>
        </div>
    )
}