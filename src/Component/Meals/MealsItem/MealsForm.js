import React, { useState } from "react";
import './MealsItemForm.css';
import Inputs from '../../UI/Inputs'
import { useRef } from "react";

const MealsItemForm =(props)=>{
    const [amountIsValid,setAmountIsValid] = useState(true)
const amountInputRef = useRef()
    const submitHandler=(event)=>{
event.preventDefault();
const enteredAmount =  amountInputRef.current.value;
const enteredAmountNumber =  +enteredAmount;
if(enteredAmount.trim().length === 0  || enteredAmountNumber < 1 || enteredAmountNumber > 5){
setAmountIsValid(false)
    return ;
}
props.onAddToCart(enteredAmountNumber)
}

    return (
        <form className="form" onSubmit={submitHandler}>
<Inputs 
ref={amountInputRef}
label="Amount"
 input={ {
    id: 'amount_' + props.id,
 type : "number",
 min : 1,
 max:5,
 step: 1,
 defaultVlaue : "1",
 }}
 />

<button>+ Add</button>
{!amountIsValid && <p>Please Enter Valid amount (1 - 5 ) .</p>}
        </form>
    )
}

export default MealsItemForm;