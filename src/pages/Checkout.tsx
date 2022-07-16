import { useEffect } from "react";
import { CheckoutCard } from "../components/CheckoutCard";
import { Header } from "../components/Header";

export function Checkout() {

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <>
            <Header amountItemsInCart={0}/>
            <CheckoutCard />
        </>
    )
}