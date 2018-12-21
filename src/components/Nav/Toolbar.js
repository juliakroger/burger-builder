import React from 'react';
import classes from './Style.css';
import NavItems from './NavItems';
import Logo from './Logo';

const ToolBar = (props) => (
    <header className={classes.ToolBar}>
        <div>MENU</div>
        <Logo height="52px"/>
            <p className={classes.Item}><a href="/">Log out</a></p>
    </header>
);

export default ToolBar;