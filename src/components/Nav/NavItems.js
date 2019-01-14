import React from 'react';
import classes from './Style.css';
import {NavLink} from "react-router-dom";

const navItems = (props) => (
    <ul className={classes.NavItems}>
        <NavLink className={classes.Item} to="/buildburger">Burger Builder</NavLink>
        <NavLink className={classes.Item} to="/orders">Past Orders</NavLink>
        <NavLink className={classes.Item} to="/">Log out</NavLink>
    </ul>
);

export default navItems;
