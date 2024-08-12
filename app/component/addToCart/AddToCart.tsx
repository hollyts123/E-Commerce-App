"use client";
import {useState} from 'react';
import addToCartStyles from './AddToCart.module.css';

interface addToCardProps {
    className?: string;
    initialQuantity?: number;
    onAddToCart: (quantity: number) => void;
}

const AddToCart: React.FC<addToCardProps> = ({className, initialQuantity = 1, onAddToCart}) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleQtyIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleQtyDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className={className}>

        </div>
    );
}
