import React from 'react';
import classes from './Style.css';

const navItems = (props) => (
    <ul className={classes.NavItems}>
        <li className={classes.Item}><a href="/">Burger Builder</a></li>
        <li className={classes.Item}><a href="/">Checkout</a></li>
    </ul>
);

export default navItems;
