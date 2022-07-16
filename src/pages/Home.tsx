import axios from "axios";
import { useState } from "react";
import { Header } from "../components/Header";
import { ProductsList } from "../components/ProductsList";
import { useFetch } from "../hooks/useFetch";

export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    amount?: number;
}
export function Home() {

    const [cartItems, setCartItems] = useState<Product[]>([]);
    const itensLocalStorage = JSON.parse(localStorage.getItem('products')!) || cartItems;

    function handleAddProductToCart(id: number) {
        axios.get(`http://localhost:3000/products/${id}`).then(response => {

            const product = {
                ...response.data,
                amount: 1
            }

            setCartItems(prev => [...prev, product]);
            localStorage.setItem('products', JSON.stringify([...itensLocalStorage, product]));
        });
    }

    const { data } = useFetch<Product[]>('http://localhost:3000/products');

    return (
        <>
            <Header amountItemsInCart={itensLocalStorage.length}/>
            <ProductsList
                products={data}
                onAddItemsToCart={handleAddProductToCart}
            />
        </>
    )
}