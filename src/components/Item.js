import React from "react";
import {useState} from "react";


function Item({ name, category }) {
  const [cartItem, setCartItem] = useState(true);
  const itemInCart = cartItem ? "" : "in-cart";
  const [buttonText, setButtonText] = useState(true);
  const showText = buttonText ? "Add to Cart" : "Remove From Cart";

  function addCartItem() {
    setCartItem(cartItem => !cartItem);
    setButtonText(buttonText => !buttonText);
  }
  return (
    <li className={itemInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCartItem}>{showText}</button>
    </li>
  );
}

export default Item;
