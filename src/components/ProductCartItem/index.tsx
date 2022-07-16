import { Product } from '../../pages/Home';
import styles from './productCartItem.module.css';
import trash from '../../assets/trash.svg';
import add from '../../assets/add.svg';
import remove from '../../assets/remove.svg';
import { useState } from 'react';
import { formatCurrency } from '../ProductItem';

interface ProductCartItemProps {
    product: Product;
    onRemoveItemFromCart: (id: number) => void,
    onAddOneMoreSameItemToCart: (id: number) => void,
    onRemoveOneLessSameItemToCart: (id: number) => void,
}

export function ProductCartItem({ product, onRemoveItemFromCart, onAddOneMoreSameItemToCart, onRemoveOneLessSameItemToCart }: ProductCartItemProps) {
    
    function subTotal(amount: number, price: number) {
        return price * amount;
    }

    return (
        <tr className={styles.row}>
            <td>
                <img src={product.image} alt="" />
            </td>

            <td>
                <span>{product.title}</span>
                <span>{formatCurrency(product.price)}</span>
            </td>

            <td className={styles.amount}>
                <button
                    onClick={() => onRemoveOneLessSameItemToCart(product.id)}
                    disabled={product.amount! < 2}
                >
                    <img src={remove} alt="" />
                </button>
                <input type="text" readOnly value={product.amount} />
                <button
                    onClick={() => onAddOneMoreSameItemToCart(product.id)}
                >
                    <img src={add} alt="" />
                </button>
            </td>

            <td>
                <span>{formatCurrency(subTotal(product.amount!, product.price))}</span>
            </td>

            <td>
                <button
                    onClick={() => onRemoveItemFromCart(product.id)}
                >
                    <img src={trash} alt="" />
                </button>
            </td>
        </tr>
    )
}