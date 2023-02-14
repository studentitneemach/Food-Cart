import React from "react";
import './CartItem.css';

const CartItem =(props)=>{
    const price = `$${props.price}`;
    return (
        <li className="cart-item">
<div>
    <h2>{props.name}</h2>
    <div className="summary">
        <span className="price">{price}</span>
        <span className="amount">X {props.amount}</span>
         </div>
</div>
<div className="actions ">
<span className="button" onClick={props.onRemove}>-</span>
<span className="button" onClick={props.onAdd}>+</span>
</div>
        </li>
    )
}

export default CartItem