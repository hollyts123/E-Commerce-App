"use client";
import productStyles from './ProductCard.module.css';
import Rating from '../rating/Rating';
import { useState } from 'react';

interface ProductCardProps {
    className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ className }) => {
    const [isLiked, setIsLiked] = useState(false);
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    }
    return (
        <div className={className}>
            <div className={productStyles['product-wrap']}>
            <img className={productStyles['product-img']} src="/products/product.svg" alt="Product image" />
            <Rating className={productStyles.rating} />
            <img className={productStyles['like-img']}
                src={isLiked ? '/productCard/liked.svg' : '/productCard/like.svg'}
                alt='Heart icon'
                onClick={handleLikeClick}
            />
            <p className={productStyles['product-name']} >Cotton shirt Regular Fit</p>
            <div className={productStyles['price-wrap']}>
                <p className={productStyles.price}>RM 100.00</p>
                <img src='/productCard/bag.svg' alt='Bag icon' />
            </div>
        </div>
        </div>
    )
}

export default ProductCard;