import { Routes, Route } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/carrinho" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
        </Routes>
    )
}