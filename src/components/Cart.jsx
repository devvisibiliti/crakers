import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../slices/cartSlice'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.offerPrice * item.quantity, 0);

  return (
    <div>
      <h3 style={{ ...styles.table, backgroundColor: '#4CAF50', fontSize:50, fontWeight:700, textAlign:'center' }}>Cart</h3>
      {cart.length === 0 ? <p>No items in cart</p> : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Product</th><th>Qty</th><th>Price</th><th>Total</th><th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td style={{textAlign:'center'}}>{item.name}</td>
                <td style={{textAlign:'center'}}>{item.quantity}</td>
                <td style={{textAlign:'center'}}>₹{item.offerPrice}</td>
                <td style={{textAlign:'center'}}>₹{item.offerPrice * item.quantity}</td>
                <td>
                  <button onClick={() => dispatch(removeItem(item.id))} style={{backgroundColor:'#4CAF50', padding:5, borderRadius:2, margin:5}}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h3 style={{padding:15,margin:10, fontWeight:700, backgroundColor:'#4CAF50', textAlign:'center'}}>Total: ₹{total}</h3>
      <button onClick={() => navigate('/checkout')} style={{backgroundColor:'#4CAF50', padding:15,margin:10, borderRadius:2}}>Proceed to Checkout</button>
    </div>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },}

export default Cart;
