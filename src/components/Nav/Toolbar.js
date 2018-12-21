import React from 'react';
import classes from './Style.css';
import Logo from './Logo';


const ToolBar = (props) => (
    <header className={classes.ToolBar}>
        <div><i className="material-icons" onClick={props.open}>menu</i></div>
        <Logo height="52px"/>
            <p className={classes.Item}><a href="/">Log out</a></p>
    </header>
);

export default ToolBar;