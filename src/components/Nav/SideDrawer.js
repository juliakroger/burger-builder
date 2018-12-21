import React from 'react';
import classes from './Style.css';
import Logo from './Logo';
import NavItems from './NavItems';


const sideDrawer = (props) => {

    return (
        <div className={classes.SideDrawer}>
            <Logo height="75px"/>
            <nav>
                <NavItems />
            </nav>
        </div>
    );
};

export default sideDrawer;