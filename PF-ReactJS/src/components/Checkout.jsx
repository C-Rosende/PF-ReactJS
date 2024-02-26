import React, { useState } from 'react';
import firebase from '../firebase';

const Checkout = ({ cart, removeFromCart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleCheckout = () => {
    const db = firebase.firestore();
    db.collection('orders').add({
      items: cart,
      name,
      email,
      phone,
      status: 'generada',
      date: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(() => {
      alert('Orden generada con éxito');
      Object.keys(cart).forEach(productId => {
        removeFromCart(productId);
      });
    });
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Teléfono" />
      <button onClick={handleCheckout}>Finalizar compra</button>
    </div>
  );
};

export default Checkout;