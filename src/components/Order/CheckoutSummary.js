import React from 'react';
import Burger from '../Burger/Burger';
import classes from '../Style.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckOutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width:'100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
                <button className={classes.OrderButton} onClick={props.onCheckout}>CONTINUE</button>
        </div>
    );
}

export default checkoutSummary;