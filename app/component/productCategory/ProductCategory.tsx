
'use client';
import productCategoryStyles from './ProductCategory.module.css';

interface ProductCategoryProps {
  className?: string;
  name: string;
  image: string;
  isActive: boolean;
  onClick: () => void;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ className, name, image, isActive, onClick }) => {
  return (
    <div
      className={`${className} ${productCategoryStyles['product-category-wrap']} ${isActive ? productCategoryStyles.clicked : ''}`}
      onClick={onClick}
    >
      <div>
        <img className={productCategoryStyles['product-category-img']} src={image} alt="Product category image" />
        <h3 className={productCategoryStyles['product-category-name']}>{name}</h3>
      </div>
    </div>
  );
};

export default ProductCategory;