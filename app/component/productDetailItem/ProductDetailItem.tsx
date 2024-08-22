"use client";
import productDetailItemStyles from './ProductDetailItem.module.css';
import Rating from '../rating/Rating';
import Product from '../../interfaces/Product';
import Size from '../../component/size/size';
import AddToCart from '../addToCart/AddToCart';

interface productDetailProps {
    className?: string;
    product: Product;
}

const ProductDetailItem: React.FC<productDetailProps> = ({ className, product }) => {
    return (
        <div className={className}>
            <div className={productDetailItemStyles['rating-container']}>
                <Rating
                    className={productDetailItemStyles['rating-item']}
                    rating={product.rating}
                />
                <p className={productDetailItemStyles.reviews}><span className={productDetailItemStyles.reviewQty}>(85)</span> Reviews</p>
            </div>
            <h3 className={productDetailItemStyles['product-name']}>{product.name}</h3>
            <p className={productDetailItemStyles['product-price']}>{product.price}</p>
            <Size product={product} />
            <AddToCart
                className={productDetailItemStyles['add-to-cart-item']}
                initialQuantity={0}
                onAddToCart={(quantity) => {
                    alert(`Adding ${quantity} items to the cart`);
                }}
            />
        </div>
    )
}

export default ProductDetailItem;