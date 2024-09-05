"use client";
import { useState } from 'react';
import productInCartStyles from './ProductInCart.module.css';
import Product from '../../interfaces/Product';

interface ProductInCartProps {
  className?: string;
  product: Product;
  quantity: number;
}

const ProductInCart: React.FC<ProductInCartProps> = ({ className, product, quantity }) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);

  const increaseQuantity = () => {
    setLocalQuantity(localQuantity + 1);
  }

  const decreaseQuantity = () => {
    if (localQuantity > 0) {
      setLocalQuantity(localQuantity - 1);
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
          <div className={productInCartStyles['product-item-btn-wrap']}>
            <button className={productInCartStyles['product-item-btn']} onClick={decreaseQuantity}>-</button>
            <p className={productInCartStyles['product-item-qty']}>{localQuantity}</p>
            <button className={productInCartStyles['product-item-btn']} onClick={increaseQuantity}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
