import React, { useContext } from "react";
import './MealsItem.css';
import MealsItemForm from './MealsForm';
import CartContext from "../../../Store/Cart-Context";

const MealsItem=({meal})=>{
    const cartCTX =useContext(CartContext);

    const price = `$${meal.price.toFixed(2)}` ;
    const addItemCartHandler = amount=>{
        cartCTX.addItem({
            id: meal.id, name : meal.name,
            amount : meal.amount,price : meal.price
        })
    }
    return <li className="meal">
        <div>
            <h3>{meal.name}</h3>
        <div className="description">
            {meal.description}
        </div>
        </div>
        <div className="price">{price}</div>
        <div>
<MealsItemForm  id={meal.id} onAddToCart={addItemCartHandler}/>
        </div>
    </li>
}

export default MealsItem;