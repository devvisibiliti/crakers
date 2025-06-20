import React, { useEffect } from 'react';
import ProductTable from './ProductTable';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProducts } from '../slices/productSlice'; // Adjust path


const products = [
  {
    id: 1,
    name: 'Fancy Crackers',
    description: 'Colorful fireworks for celebration.',
    mrp: 500,
    offerPrice: 350,
    image: "https://hips.hearstapps.com/hmg-prod/images/screenshot-2025-04-21-at-2-09-06-pm-680689d0db6cb.png"
  },
  {
    id: 2,
    name: 'Gift Box',
    description: 'Premium selection of crackers.',
    mrp: 1000,
    offerPrice: 800,
    image: "/assets/home/Solar3.jpeg"

  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(setProducts(products));
}, [dispatch]);
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Available Products</h2>
      <ProductTable products={products} />
      
    </div>
  );
};

export default ProductList;
