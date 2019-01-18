import React from 'react';
import classes from '../Style.css';
import Logo from "./OrderSummary";

const checkoutSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}
                    style={{ textTransform: 'capitalize', display: 'inline-block', margin: '0 8px', padding: '5px', border: '1px solid #ccc'}}
                    >
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        })

    return (
        <div className={classes.CheckOutSummary}>
            <h1>We hope it tastes well!</h1>
                <ul >{ingredientSummary}</ul>
            <h1>Total Price: $<strong>{props.price}</strong></h1>
                <button className={classes.OrderButton} onClick={props.onCheckout}>CONTINUE</button>
        </div>
    );
}



export default (checkoutSummary);