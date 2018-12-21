import React from 'react';
import classes from './Style.css';
import Logo from './Logo';

const ToolBar = (props) => (
    <header className={classes.ToolBar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default ToolBar;