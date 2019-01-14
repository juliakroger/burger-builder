import React from 'react';
import classes from './Style.css';
import Logo from './Logo';


const ToolBar = (props) => (
    <header className={classes.ToolBar}>
        <div><i className="material-icons" onClick={props.open}>menu</i></div>
        <Logo height="46px"/>
    </header>
);

export default ToolBar;