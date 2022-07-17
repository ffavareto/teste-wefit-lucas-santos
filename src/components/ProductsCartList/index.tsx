import { Product } from "../../pages/Home";
import { ProductCartItem } from "../ProductCartItem";
import { formatCurrency } from '../ProductItem';
import { Link } from 'react-router-dom';
import { BuyContainer, CartContainer, TableContainer } from "./styles";

interface ProductsCartListProps {
    productsInCart: Product[];
    onRemoveItemFromCart: (id: number) => void,
    onAddOneMoreSameItemToCart: (id: number) => void,
    onRemoveOneLessSameItemToCart: (id: number) => void,
    onHandleAmountQtdItemCart: (id: number, value: number) => void,
}

export function ProductsCartList({
    productsInCart,
    onRemoveItemFromCart,
    onAddOneMoreSameItemToCart,
    onRemoveOneLessSameItemToCart,
    onHandleAmountQtdItemCart
}: ProductsCartListProps) {

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
        <CartContainer>
            <TableContainer>
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
                            onHandleAmountQtdItemCart={onHandleAmountQtdItemCart}
                        />
                    ))}
                </tbody>
            </TableContainer>
            <hr />

            <BuyContainer>
                <button>
                    <Link to="/checkout">
                        Finalizar Pedido
                    </Link>
                </button>

                <div>
                    <span>Total</span>
                    <p>{formatCurrency(calcTotal()!)}</p>
                </div>
            </BuyContainer>
        </CartContainer>
    )
}