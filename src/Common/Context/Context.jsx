import { createContext, useState, useEffect } from "react";

export const SendCart = createContext();

export const Context = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Load wishlist items from localStorage
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Update cart items in state and localStorage
  const updateCartItems = (updatedCartItems) => {
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // Update wishlist in state and localStorage
  const updateWishlist = (updatedWishlist) => {
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // addToWishlist function
  const addToWishlist = (wishlistItem) => {
    const wishlistExist = wishlist.find((item) => item.id === wishlistItem.id);
    if (wishlistExist) {
      const updatedWishlist = wishlist.map((item) =>
        item.id === wishlistItem.id ? wishlistItem : item
      );
      updateWishlist(updatedWishlist);
    } else {
      const updatedWishlist = [...wishlist, wishlistItem];
      updateWishlist(updatedWishlist);
    }
  };
  // clearWishlist function
  const clearWishlist = (wishlistItem) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== wishlistItem.id);
    updateWishlist(updatedWishlist);
  };

  // Cart function
  const addToCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item
      );
      updateCartItems(updatedCartItems);
    } else {
      const updatedCartItems = [...cartItems, { ...product, qty: 1 }];
      updateCartItems(updatedCartItems);
    }
  };
  // removeFromCart function 
  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    updateCartItems(updatedCartItems);
  };
  // decreaseCartItem function 
  const decreaseCartItem = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.qty === 1) {
      const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
      updateCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item
      );
      updateCartItems(updatedCartItems);
    }
  };

  return (
    <SendCart.Provider
      value={{
        cartItems,
        addToWishlist,
        clearWishlist,
        wishlist,
        addToCart,
        removeFromCart,
        decreaseCartItem,
      }}
    >
      {props.children}
    </SendCart.Provider>
  );
};

export default Context;
