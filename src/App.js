import React, {  useState } from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import CartProvider from "./Store/CartProvider";

const App =()=>{
  const [cartIsShow , setCartIsShow] = useState(false);
  const shoeCartHandler=()=>{
    setCartIsShow(true)
  }
  const hideCartHandler=()=>{
    setCartIsShow(false)
  }

  return (
    <CartProvider>
     { cartIsShow &&  <Cart onClose={hideCartHandler} />}
    <Header onShowCart={shoeCartHandler} />
    <main>
      <Meals />
    </main>
</CartProvider>
  )
}

export default App;