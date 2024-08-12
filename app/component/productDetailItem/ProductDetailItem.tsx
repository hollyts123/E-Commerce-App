"use client";
import productDetailItemStyles from './ProductDetailItem.module.css';
import Rating from '../rating/Rating';
import Product from '../../interfaces/Product';
import Size from '../../component/size/size';

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
            <Size product={product}/>
        </div>
    )
}

export default ProductDetailItem;