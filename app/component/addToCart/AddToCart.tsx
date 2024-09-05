"use client";

import { useContext, useState } from 'react';
import addToCartStyles from './AddToCart.module.css';
import { CartContext } from '@/app/component/cartContext/CartContext';
import Product from '@/app/interfaces/Product';

interface AddToCartProps {
    className?: string;
    initialQuantity?: number;
    product: Product;
}

const AddToCart: React.FC<AddToCartProps> = ({ className, initialQuantity = 1, product }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
            alert(`${quantity} ${product.name} added to the cart!`);
        }
    };

    return (
        <div className={className}>
            <div className={addToCartStyles['add-to-cart-container']}>
                <div className={addToCartStyles['add-to-card-count-wrap']}>
                    <button
                        className={addToCartStyles['add-to-card-count-btn']}
                        onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                    >
                        -
                    </button>
                    <p className={addToCartStyles['add-to-card-count']}>{quantity}</p>
                    <button
                        className={addToCartStyles['add-to-card-count-btn']}
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        +
                    </button>
                </div>
                <button className={addToCartStyles['add-to-cart-btn']} onClick={handleAddToCart}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default AddToCart;
