import React, { useContext } from "react";
import CartContext from "../../Store/Cart-Context";
import Model from "../UI/Model";
import './Cart.css';
import CartItem from './CartItem';


const Cart =(props)=>{
    const cartCTX =  useContext(CartContext);
const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;
const hasItem = cartCTX.items.length > 0 ;

const cartItemRemoveHandler = id=>{

}
const cartItemAddHandler = item=>{
    
}
const cartItems = ( <ul className="cart-items ">{cartCTX.items.map((item)=> <CartItem 
    key={item.id} name={item.name} amount ={item.amount} price={item.price}
     onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}
    />)}</ul> )
return (
    <Model  onClose={props.onClose} >
    <div className="">
        {cartItems}
        <div className="total">
<span>Total Amount</span>
<span>{totalAmount}</span>
        </div>
        <div className="actions">
            <button className="button--alt" onClick={props.onClose}>Close</button>
            {hasItem && <button className="button">Order </button>}
        </div>
    </div>
    </Model>
)
}

export default Cart;