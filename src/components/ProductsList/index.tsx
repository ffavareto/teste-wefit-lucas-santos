import { Product } from '../../pages/Home';
import { ProductItem } from '../ProductItem';
import { ProductsContainer } from './styles';

interface ProductsListProps {
    products: Product[] | null,
    onAddItemsToCart: (id: number) => void
}

export function ProductsList({ products, onAddItemsToCart }: ProductsListProps) {
    return (
        <ProductsContainer>
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
        </ProductsContainer>
    )
}