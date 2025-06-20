import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', address: '' });
  const cart = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    localStorage.setItem('checkoutData', JSON.stringify({ form, cart }));
    navigate('/invoice');
  };

  return (
     <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', boxSizing: 'border-box', }}>
    <h2 style={{ fontSize: 50, fontWeight: 700, textAlign: 'center' }}>Checkout</h2>

    <input
      name="name"
      placeholder="Name"
      onChange={handleChange}
      style={styles.input}
    />

    <input
    type='tel'
      pattern="[0-9]{10}"
      maxLength="10"
      name="phone"
      placeholder="Phone Number"
      onChange={handleChange}
      style={styles.input}
    />

    <textarea
      name="address"
      placeholder="Address"
      onChange={handleChange}
      style={{ ...styles.input, height: '80px' }}
    ></textarea>

    <button onClick={handleCheckout} style={styles.button}>Generate Invoice</button>
  </div>
  );
};

const styles = {
  input: {
    border: '2px solid #4CAF50',
    borderRadius: '4px',
    padding: '10px',
    margin: '10px 0',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px'
  }
};


export default CheckoutForm;
