"use client";
import {useParams} from 'next/navigation';
import styles from './page.module.css';
import ProductInCart from '../component/productInCart/ProductInCart';
import productsData from '../../products.json';
import Product from '../interfaces/Product';

export default function ProductCart() {
    return (
        <div className={styles.main}>
            <div className={styles['page-title-container']}>
                <button className={styles['back-to-products-btn']}>&lt;</button>
                <h2 className={styles['page-title']}>My Cart</h2>
                <p>Delete</p>
            </div>
            {productsData.map((product: Product) => (
                <ProductInCart key={product.id} product={product}/>
            ))}
        </div>
    );
}