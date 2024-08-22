"use client";
import promoCodeStyles from './PromoCode.module.css';

interface PromoCodeProps {
    className?: string;
}

const PromoCode: React.FC<PromoCodeProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className={promoCodeStyles['promo-input-container']}>
                <input type='text' placeholder='Promo Code' id='promo_code' name='promo_code'/>
                <button className={promoCodeStyles['promo-btn']}>Apply</button>
            </div>
        </div>
    )
}

export default PromoCode;