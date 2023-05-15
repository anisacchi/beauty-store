import React, {
  createContext, useContext, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const Cart = createContext();
export const CartState = () => useContext(Cart);

export const CartContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item.pid === product.pid && item.variant === product.variant,
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity,
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (
          cartProduct.pid === product.pid
          && cartProduct.variant === product.variant
        ) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
        return { ...cartProduct };
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, cid: uuidv4(), quantity }]);
    }
    toast.success(`${quantity} ${product.name} added to the cart.`);
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const cartItemQuantity = (cid, value) => {
    const foundItem = cartItems.find((item) => item.cid === cid);
    if (value === 'inc') {
      const updatedItems = cartItems.map((item) => (item.cid === cid
        ? { ...item, quantity: item.quantity + 1 }
        : item));
      setCartItems(updatedItems);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundItem.price);
    } else if (value === 'dec') {
      if (foundItem.quantity > 1) {
        const updatedItems = cartItems.map((item) => (item.cid === cid
          ? { ...item, quantity: item.quantity - 1 }
          : item));
        setCartItems(updatedItems);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundItem.price);
      }
    }
  };

  const onRemove = (cid) => {
    const foundItem = cartItems.find((item) => item.cid === cid);
    const updatedItems = cartItems.filter((item) => item.cid !== cid);

    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundItem.quantity);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - (foundItem.quantity * foundItem.price));
    setCartItems(updatedItems);
  };

  const cartProviderValue = useMemo(() => ({
    cartItems,
    totalPrice,
    totalQuantities,
    qty,
    setQty,
    incQty,
    decQty,
    onAdd,
    onRemove,
    cartItemQuantity,
  }));

  return <Cart.Provider value={cartProviderValue}>{children}</Cart.Provider>;
};

CartContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

CartContext.defaultProps = {
  children: undefined,
};
