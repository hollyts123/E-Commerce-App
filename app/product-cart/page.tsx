"use client";
import Link from 'next/link';
import { useContext } from 'react';
import styles from './page.module.css';
import ProductInCart from '../component/productInCart/ProductInCart';
import { CartContext } from '@/app/component/cartContext/CartContext';
import PromoCode from '../component/promoCode/PromoCode';

export default function ProductCart() {
    const { cartItems } = useContext(CartContext);

    return (
        <div className={styles.main}>
            <div className={styles['page-title-container']}>
                <Link href='/'><button className={styles['back-to-products-btn']}>
                    <img src='back-btn.svg' />
                </button></Link>
                <h2 className={styles['page-title']}>My Cart</h2>
                <p>Delete</p>
            </div>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <ProductInCart key={item.product.id} product={item.product} quantity={item.quantity} />
                ))
            ) : (
                <p className='my-4'>Your cart is empty</p>
            )}
        </div>
    );
}
