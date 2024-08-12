"use client";
import { useParams  } from 'next/navigation';
import ProductPhotoSlider from "../../component/productPhotoSlider/ProductPhotoSlider";
import productDetails from '../../../products.json';
import styles from './page.module.css';
import ProductDetailItem from '../../component/productDetailItem/ProductDetailItem';

export default function ProductDetail() {
    const { id } = useParams();

    // Find the product by ID
    const productItem = productDetails.find((item) => item.id === parseInt(id as string));

    if (!productItem) {
        return (<div>Product not found</div>);
    }

    return (
        <div className={styles.main}>
            <ProductPhotoSlider images={productItem.images} className={styles['product-slider']} />
            <ProductDetailItem product={productItem} className={styles['product-detail-item']} />
        </div>
    );
}