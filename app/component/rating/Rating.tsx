"use client";
import ratingStyles from './Rating.module.css';

interface RatingProps {
    className?: string;
}

const Rating: React.FC<RatingProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className={ratingStyles['rating-wrap']}>
                <img className={ratingStyles['rating-icon']} src='/productCard/rating.svg' alt='Start icon' />
                <p className={ratingStyles['rating-value']}>4.9</p>
            </div>
        </div>
    )
}

export default Rating;