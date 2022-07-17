import { Product } from '../../pages/Home';
import trash from '../../assets/trash.svg';
import add from '../../assets/add.svg';
import remove from '../../assets/remove.svg';
import { formatCurrency } from '../ProductItem';
import { AmountContainer, RowContainer } from './styles';

interface ProductCartItemProps {
    product: Product;
    onRemoveItemFromCart: (id: number) => void,
    onAddOneMoreSameItemToCart: (id: number) => void,
    onRemoveOneLessSameItemToCart: (id: number) => void,
    onHandleAmountQtdItemCart: (id: number, value: number) => void,
}

export function ProductCartItem({
    product,
    onRemoveItemFromCart,
    onAddOneMoreSameItemToCart,
    onRemoveOneLessSameItemToCart,
    onHandleAmountQtdItemCart 
}: ProductCartItemProps) {
    
    function subTotal(amount: number, price: number) {
        return price * amount;
    }

    return (
        <RowContainer>
            <td>
                <img src={product.image} alt="" />
            </td>

            <td>
                <span>{product.title}</span>
                <span>{formatCurrency(product.price)}</span>
            </td>

            <AmountContainer>
                <button
                    onClick={() => onRemoveOneLessSameItemToCart(product.id)}
                    disabled={product.amount! < 2}
                >
                    <img src={remove} alt="" />
                </button>
                <input
                    type="number"
                    value={product.amount}
                    onChange={(e) => onHandleAmountQtdItemCart(
                        product.id, Number(e.target.value)
                    )}
                />
                <button
                    onClick={() => onAddOneMoreSameItemToCart(product.id)}
                >
                    <img src={add} alt="" />
                </button>
            </AmountContainer>

            <td>
                <span>
                    {formatCurrency(subTotal(product.amount!, product.price))}
                </span>
            </td>

            <td>
                <button
                    onClick={() => onRemoveItemFromCart(product.id)}
                >
                    <img src={trash} alt="" />
                </button>
            </td>
        </RowContainer>
    )
}