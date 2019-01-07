import React from 'react';
import classes from '../Style.css';
import Logo from '../Nav/Logo';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        })
    return (
        <div>
            <Logo height="65px"/>
            <h3>Your order:</h3>
            <p>A delicius burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h3>Total Price: $<strong>{props.totalPrice.toFixed(2)}</strong></h3>
            <p>Continue to Checkout?</p>
            <button onClick={props.cancelPurchase} className={classes.Danger}>Cancel</button>
            <button className={classes.Success} onClick={props.continuePurchase}>Continue</button>

        </div>
    );
};

export default orderSummary;