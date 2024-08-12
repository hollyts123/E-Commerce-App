"use client";
import { useState } from 'react';
import sizeStyles from './size.module.css';
import Product from '../../interfaces/Product';

interface sizeProps {
    className?: string;
    product: Product;
}

const Size: React.FC<sizeProps> = ({ className, product }) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const handleSizeClick = (size: string) => {
        setSelectedSize(size);
    }

    return (
        <div className={className}>
            <h2 className={sizeStyles['select-size']}>Select Size</h2>
            <div className={sizeStyles['size-card-wrap']}>
                {product.sizes.map((size, index) => (
                    <div
                        key={index}
                        className={`${sizeStyles['size-card']} ${selectedSize === size ? sizeStyles['active'] : ''}`}
                        onClick={() => handleSizeClick(size)}
                    >
                        {size}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Size;