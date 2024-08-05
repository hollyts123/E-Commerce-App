"use client";
import productStyles from './ProductCard.module.css';
import Rating from '../rating/Rating';
import { useState } from 'react';
import Product from '../../interfaces/Product';

interface ProductCardProps {
    className?: string;
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ className, product }) => {
    const [isLiked, setIsLiked] = useState(false);
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    }
    return (
        <div className={className}>
            <div className={productStyles['product-wrap']}>
            <img className={productStyles['product-img']} src={product.image} alt="Product image" />
            <Rating className={productStyles.rating} rating={product.rating}/>
            <img className={productStyles['like-img']}
                src={isLiked ? '/productCard/liked.svg' : '/productCard/like.svg'}
                alt='Heart icon'
                onClick={handleLikeClick}
            />
            <p className={productStyles['product-name']}>{product.name}</p>
            <div className={productStyles['price-wrap']}>
                <p className={productStyles.price}>{product.price}</p>
                <img src='/productCard/bag.svg' alt='Bag icon' />
            </div>
        </div>
        </div>
    )
}

export default ProductCard;