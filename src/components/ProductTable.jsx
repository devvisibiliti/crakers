import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';

import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice'; // Adjust the import path as necessary



const ProductTable = ({ products = [] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantities, setQuantities] = useState(() => {
    return products.reduce((acc, product) => {
      acc[product.id] = 0;
      return acc;
    }, {});
  });

  const handleQuantityChange = (id, value) => {
    const qty = Math.max(0, parseInt(value) || 0); // ✅ Allow 0
    setQuantities(prev => ({ ...prev, [id]: qty }));
  };

  // const handleAddAllToCart = () => {
  //   products.forEach(product => {
  //     const quantity = quantities[product.id];
  //     if (quantity > 0) {
  //       dispatch(addToCart({ ...product, name:product.name || product.title, quantity }));
  //     }
  //   });
  // };

  const handleAddAllToCart = () => {
  let hasItems = false;

  products.forEach(product => {
    const quantity = quantities[product.id];
    if (quantity > 0) {
      hasItems = true;
      dispatch(addToCart({
        id: product.id,
        name: product.name || product.title,
        image: product.image,
        offerPrice: product.offerPrice,
        quantity,
      }));
    }
  });

  if (hasItems) {
    navigate('/cart');
  } else {
    alert('Please select at least one item to continue.');
  }
};


     return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>MRP</th>
            <th>Offer Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
  {products.map(product => {
    const qty = quantities[product.id];
    const total = qty * product.offerPrice;

    return (
      <tr key={product.id}>
        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom:15 }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        </td>
        <td style={{textAlign:'center'}}>{product.name}</td>
        <td style={{textAlign:'center'}}>{product.description}</td>
        <td style={{textAlign:'center'}}><s>₹{product.mrp}</s></td>
        <td style={{ color: 'green', textAlign:'center' }}>₹{product.offerPrice}</td>
        <td style={styles.quantityCell}>
          <input
            type="number"
            value={qty}
            min="0"
            onChange={(e) => handleQuantityChange(product.id, e.target.value)}
            style={styles.input}
          />
        </td>
        <td>
          {qty > 0 ? <strong>₹{total.toFixed(2)}</strong> : "-"}
        </td>
      </tr>
    );
  })}
</tbody>

      </table>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handleAddAllToCart} style={styles.button}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  input: {
  width: '60px',
  padding: '4px 6px',
  textAlign: 'center',
  border: '1px solid #888',
  borderRadius: '4px',
  appearance: 'auto',        // Ensures default browser arrows show
  WebkitAppearance: 'number-input', // Chrome/Safari
  MozAppearance: 'textfield',       // Firefox (fallback)
},

  quantityCell: {
    // border: '2px solid #4CAF50',
    padding: '8px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px'
  }
};



export default ProductTable;
