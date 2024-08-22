"use client";
import Link from 'next/link';
import styles from './page.module.css';
import ProductInCart from '../component/productInCart/ProductInCart';
import productsData from '../../products.json';
import Product from '../interfaces/Product';
import PromoCode from '../component/promoCode/PromoCode';

export default function ProductCart() {
    return (
        <div className={styles.main}>
            <div className={styles['page-title-container']}>
                <Link href='/'><button className={styles['back-to-products-btn']}>
                    <img src='back-btn.svg' />
                </button></Link>
                <h2 className={styles['page-title']}>My Cart</h2>
                <p>Delete</p>
            </div>
            {productsData.map((product: Product) => (
                <ProductInCart key={product.id} product={product}/>
            ))}
            <PromoCode />
        </div>
    );
}