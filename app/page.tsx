'use client';
import { useState } from 'react';
import ProductCard from './component/productCard/ProductCard';
import SearchBar from './component/searchBar/SearchBar';
import Product from './interfaces/Product';
import productsData from '../products.json';
import ProductCategory from './component/productCategory/ProductCategory';
import productCategoryData from '../productCategories.json';
import Navbar from './component/navbar/Navbar';

export default function Home() {
  const [visibleCategories, setVisibleCategories] = useState(4);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categoriesToShow = productCategoryData.slice(0, visibleCategories);
  const productsToShow = productsData.slice(0, visibleProducts);

  const handleViewAllCategories = () => {
    setVisibleCategories((prevVisibleCategories) => prevVisibleCategories + 4);
  };

  const handleViewAll = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  const handleCategoryClick = (id: number) => {
    setActiveCategory(id);
  };

  // Defining the ProductCategory type locally in Home component
  type ProductCategoryType = {
    id: number;
    name: string;
    image: string;
  };

  return (
    <div className="main">
      <SearchBar className="search-bar" />
      
      <div className="product-category-wrapper">
        <h3 className="recommended">Shop by category</h3>
        <button className="view-all-btn" onClick={handleViewAllCategories}>View All</button>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-8 products-category-items-container">
        {categoriesToShow.map((category: ProductCategoryType) => (
          <ProductCategory
            key={category.id}
            name={category.name}
            image={category.image}
            isActive={category.id === activeCategory}
            onClick={() => handleCategoryClick(category.id)}
            className="product-category-item"
          />
        ))}
      </div>

      <div className="recommended-wrap">
        <h3 className="recommended">Recommended</h3>
        <button className="view-all-btn" onClick={handleViewAll}>View All</button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 product-card-container">
        {productsToShow.map((product: Product) => (
          <ProductCard key={product.id} className="product-card" product={product} />
        ))}
      </div>

      <Navbar className='navbar-item'/>
    </div>
  );
}