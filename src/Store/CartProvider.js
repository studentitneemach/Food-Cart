import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defualtCartState ={
    items : [],
    totalAmount : 0
}
const cartReducer =(state,action)=>{
if(action.type === "ADD" ){
    const updateItems = state.items.concat(action.item);
    const updateAmount = state.totalAmount + action.item.price * action.item.amount;
    
    return {
        items : updateItems,
        totalAmount : updateAmount
    }
}
return defualtCartState;
}
const CartProvider =(props)=>{
   const [cartState,dispatchCartAction] =  useReducer(cartReducer,defualtCartState);
const addItemCartHandler=(item)=>{ 

    dispatchCartAction({type:"ADD" ,item:item})
}

const removeItemFromCartHandler=(id)=>{
    dispatchCartAction({type:"REMOVE" ,id:id })
}

    const cartContext ={
        items : cartState.items,
        totalAmount :cartState.totalAmount,
        addItem :addItemCartHandler ,
        removeItem : removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;