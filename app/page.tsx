'use client';
import ProductCard from './component/productCard/ProductCard';
import SearchBar from './component/searchBar/SearchBar';
import Product from './interfaces/Product';
import productsData from '../products.json';
import { useState } from 'react';

export default function Home() {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const productsToShow = productsData.slice(0, visibleProducts);

  const handleViewAll = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  }

  return (
    <div className="main">
      <SearchBar className='search-bar' />
      <div className='recommended-wrap'>
        <h3 className='recommended'>Recommended</h3>

        {/* {visibleProducts < productsData.length && (
          <p className='view-all-btn' onClick={handleViewAll}>View All</p>
        )} */}

        <button className='view-all-btn' onClick={handleViewAll}>View All</button>

      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 product-card-container">
        {
          productsToShow.map((product: Product) => (
            <ProductCard key={product.id} className="product-card" product={product} />
          ))}
      </div>
    </div>
  );
}
