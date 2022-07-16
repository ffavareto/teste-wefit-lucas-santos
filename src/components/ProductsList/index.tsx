import styles from './productslist.module.css';
import { Product } from '../../pages/Home';
import { ProductItem } from '../ProductItem';

interface ProductsListProps {
    products: Product[] | null,
    onAddItemsToCart: (id: number) => void
}

export function ProductsList({ products, onAddItemsToCart }: ProductsListProps) {
    return (
        <section className={styles.products}>
            {products?.map(product => (
                <ProductItem
                    id={product.id}
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    onAddItemsToCart={onAddItemsToCart}
                />
            ))}
        </section>
    )
}