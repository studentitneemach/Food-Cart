import React, { useContext } from "react";
import "./HeaderCartButton.css";
import CartIcon from '../Cart/CarIcon';
import CartContext from "../../Store/Cart-Context";

const HeaderCartButton =(props)=>{
    const cartCTX = useContext(CartContext);
    const numberOfCartItem = cartCTX.items.reduce((curNumber,items)=>{
        return curNumber+items.amount;
    },0);
    return (
<button className="button" onClick={props.onClick}>
    <span className="icon"><CartIcon /></span>
    <span >Your Cart </span>
    <span className="badge"> {numberOfCartItem}</span>
</button>
    )
}
export default HeaderCartButton;