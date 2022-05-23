import React, { useContext } from 'react';
import { CartContext, CartProvider } from '../../contexts/CartContext';

function Cart() {
  const cartContext = useContext(CartContext);
  return <CartProvider>{cartContext.cart}</CartProvider>;
}

export default Cart;
