import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Invoice = () => {
  const data = JSON.parse(localStorage.getItem('checkoutData'));
  const navigate = useNavigate();
  const invoiceRef = useRef();

  useEffect(() => {
    if (data) {
      sendWhatsAppMessage();
    }
  }, []);

  const sendWhatsAppMessage = () => {
    const yourNumber = '917418486358'; // <-- Replace with your full WhatsApp number (NO +)
    const total = data.cart.reduce((sum, i) => sum + i.offerPrice * i.quantity, 0);
    
    const message = encodeURIComponent(
      `🧨 New Order Received!\n\n👤 Name: ${data.form.name}\n📞 Phone: ${data.form.phone}\n🏠 Address: ${data.form.address}\n\n🛒 Items:\n` +
      data.cart.map(item => `• ${item.name} x${item.quantity} = ₹${item.offerPrice * item.quantity}`).join('\n') +
      `\n\n💰 Total: ₹${total}`
    );

    // Open WhatsApp with pre-filled message to your number
    window.open(`https://wa.me/${yourNumber}?text=${message}`, '_blank');
  };

  const downloadInvoice = () => {
    const content = invoiceRef.current.innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'invoice.html';
    a.click();
  };

  if (!data) return <p>No invoice found</p>;

  return (
    <div>
      <h2 style={{ fontSize: 50, fontWeight: 700, textAlign: 'center' }}>Invoice</h2>
      <div ref={invoiceRef} style={{ border: '1px solid #ccc', padding: '20px' }}>
        <p style={{ fontSize: 20, fontWeight: 500, textAlign: 'center' }}><strong>Name:</strong> {data.form.name}</p>
        <p style={{ fontSize: 20, fontWeight: 500, textAlign: 'center' }}><strong>Phone:</strong> {data.form.phone}</p>
        <p style={{ fontSize: 20, fontWeight: 500, textAlign: 'center' }}><strong>Address:</strong> {data.form.address}</p>
        <hr />
        {data.cart.map(item => (
          <p key={item.id}>{item.name} x {item.quantity} = ₹{item.offerPrice * item.quantity}</p>
        ))}
        <hr />
        <h3 style={{ fontSize: 20, fontWeight: 500, textAlign: 'center' }}>Total: ₹{data.cart.reduce((sum, i) => sum + i.offerPrice * i.quantity, 0)}</h3>
      </div>
      <button onClick={downloadInvoice} style={{ fontSize: 20, fontWeight: 700, textAlign: 'center', padding:10,margin:10, backgroundColor:'#4CAF50', borderRadius:5 }}>Download Invoice</button>
      <button onClick={() => navigate('/')} style={{ fontSize: 20, fontWeight: 700, textAlign: 'center', padding:10,margin:10, backgroundColor:'#000080',color:'#FFFFFF', borderRadius:5 }}>Back to Home</button>
    </div>
  );
};

export default Invoice;
