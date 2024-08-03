import ProductCard from './component/product/ProductCard';

export default function Home() {
  return (
    <div className="main">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 product-card-container">
        <ProductCard className='product-card'/>
        <ProductCard className='product-card'/>
        <ProductCard className='product-card'/>
        <ProductCard className='product-card'/>
        <ProductCard className='product-card'/>
        <ProductCard className='product-card'/>
        <ProductCard className='product-card'/>
        <ProductCard className='product-card'/>
      </div>
    </div>
  );
}
