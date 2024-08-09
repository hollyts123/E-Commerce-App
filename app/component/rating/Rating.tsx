"use client";
import ratingStyles from './Rating.module.css';

interface RatingProps {
    className?: string;
    rating: number;
}

const Rating: React.FC<RatingProps> = ({ className, rating }) => {

    return (
        <div className={className}>
            <div className={ratingStyles['rating-wrap']}>
                <img className={ratingStyles['rating-icon']} src='/productCard/rating.svg' alt='Start icon' />
                <p className={ratingStyles['rating-value']}>{rating.toFixed(1)}</p>
            </div>
        </div>
    )
}

export default Rating;