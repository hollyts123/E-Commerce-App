"use client";
import { useState } from 'react';
import productInCartStyles from './ProductInCart.module.css';
import Product from '../../interfaces/Product';

interface ProductInCartProps {
    className?: string;
    product: Product;
}

const ProductInCart: React.FC<ProductInCartProps> = ({ className, product }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className={className}>
            <div className={productInCartStyles['product-item-container']}>
                <img className={productInCartStyles['product-item-img']} src={product.images[0]} />
                <div className={productInCartStyles['product-item-info']}>
                    <h2 className={productInCartStyles['product-item-info-name']}>{product.name}</h2>
                    <p className={productInCartStyles['product-item-info-size']}><span>Size: </span>{product.sizes[0]}</p>
                    <h3 className={productInCartStyles['product-item-info-price']}>{product.price}</h3>
                </div>
                <div className={productInCartStyles['product-item-controls']}>
                    <input
                        type="checkbox"
                        id="checkout"
                        name="checkout"
                        value="checked"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        className={productInCartStyles['checkbox-input']}
                    />
                    <img
                        src={isChecked ? '/productInCart/checked.svg' : '/productInCart/unchecked.svg'}
                        alt={isChecked ? 'Checked' : 'Unchecked'}
                        className={productInCartStyles['checkbox-icon']}
                        onClick={() => setIsChecked(!isChecked)}
                    />
                    <div className={productInCartStyles['product-item-btn-wrap']}>
                        <button className={productInCartStyles['product-item-btn']} onClick={decreaseQuantity}>-</button>
                        <p className={productInCartStyles['product-item-qty']}>{quantity}</p>
                        <button className={productInCartStyles['product-item-btn']} onClick={increaseQuantity}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInCart;