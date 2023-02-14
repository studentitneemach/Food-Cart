import React, { Fragment } from "react";
import './Header.css';
import mealImage  from '../../meals.jpg'
import HeaderCartButton from "./HeaderCartbutton";
const Header =(props)=>{
    return (
        <Fragment>
<header className="header">
    <h1>React Meals</h1>
    <HeaderCartButton onClick={props.onShowCart} />
</header>
<div className="main-image ">
    <img src={mealImage} alt='image' />
</div>

        </Fragment>
    )
}

export default Header;