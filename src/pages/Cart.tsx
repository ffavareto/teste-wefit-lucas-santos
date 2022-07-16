import { useState } from "react"
import { EmptyCart } from "../components/EmptyCart";
import { Header } from "../components/Header";
import { ProductsCartList } from "../components/ProductsCartList";
import { Product } from "./Home";

export function Cart() {

    const [cartItems, setCartItems] = useState<Product[]>([]);
    const itensLocalStorage: Product[] = JSON.parse(localStorage.getItem('products')!) || cartItems;

    function removeItemFromLocalStorage(id: number) {
        const itemToRemove = itensLocalStorage.find(item => item.id === id)!;
        const indexItemToRemove = itensLocalStorage.indexOf(itemToRemove);

        itensLocalStorage.splice(indexItemToRemove, 1);
        setCartItems(itensLocalStorage);
        localStorage.setItem('products', JSON.stringify(itensLocalStorage));
    }

    function addOneMoreSameItemToCart(id: number) {
        const item = itensLocalStorage.find(item => item.id === id)!;
        const indexItem = itensLocalStorage.indexOf(item);

        itensLocalStorage[indexItem].amount = itensLocalStorage[indexItem].amount! + 1;
        setCartItems(itensLocalStorage);
        localStorage.setItem('products', JSON.stringify(itensLocalStorage));
    }

    function removeOneLessSameItemToCart(id: number) {
        const item = itensLocalStorage.find(item => item.id === id)!;
        const indexItem = itensLocalStorage.indexOf(item);

        itensLocalStorage[indexItem].amount = itensLocalStorage[indexItem].amount! === 1 ? 1 : itensLocalStorage[indexItem].amount! - 1;
        setCartItems(itensLocalStorage);
        localStorage.setItem('products', JSON.stringify(itensLocalStorage));
    }

    return (
        <>
            <Header amountItemsInCart={itensLocalStorage.length}/>
            {itensLocalStorage.length > 0 ? (
                <ProductsCartList
                    productsInCart={itensLocalStorage}
                    onRemoveItemFromCart={removeItemFromLocalStorage}
                    onAddOneMoreSameItemToCart={addOneMoreSameItemToCart}
                    onRemoveOneLessSameItemToCart={removeOneLessSameItemToCart}
                />
            ): (
                <EmptyCart />
            )}
        </>
    )
}