import React from 'react';
import classes from './Style.css';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {logout} from "../../store/actions/Auth";

const navItems = (props) => (
    <ul className={classes.NavItems}>
        <NavLink to="/buildburger" className={classes.Item}><li>Burger Builder</li></NavLink>
        <NavLink className={classes.Item} to="/orders"><li>Past Orders</li></NavLink>
        <p className={classes.Item} onClick={() => props.logout}>Log out</p>
    </ul>
);

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout)
  };
};

export default connect(null, mapDispatchToProps)(navItems);
