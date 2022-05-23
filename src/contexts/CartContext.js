import React, { useState } from 'react';
const CartContext = React.createContext();
const CartProvider = (props) => {
  const [cart, setCart] = useState('Item1');
  return <CartContext.Provider value={{ cart, setCart }}>{props.children}</CartContext.Provider>;
};
export { CartContext, CartProvider };
