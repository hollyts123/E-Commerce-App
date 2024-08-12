"use client";
import { useState } from 'react';
import addToCartStyles from './AddToCart.module.css';

interface addToCardProps {
    className?: string;
    initialQuantity?: number;
    onAddToCart: (quantity: number) => void;
}

const AddToCart: React.FC<addToCardProps> = ({ className, initialQuantity = 1, onAddToCart }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleQtyIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleQtyDecrement = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        onAddToCart(quantity);
    }

    return (
        <div className={className}>
            <div className={addToCartStyles['add-to-cart-container']}>
                <div className={addToCartStyles['add-to-card-count-wrap']}>
                    <button className={addToCartStyles['add-to-card-count-btn']} onClick={handleQtyDecrement}>-</button>
                    <p className={addToCartStyles['add-to-card-count']}>{quantity}</p>
                    <button className={addToCartStyles['add-to-card-count-btn']} onClick={handleQtyIncrement}>+</button>
                </div>
                <button className={addToCartStyles['add-to-cart-btn']} onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    );
}

export default AddToCart;
