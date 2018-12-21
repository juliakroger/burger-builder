import React from 'react';
import classes from './Style.css';
import Logo from './Logo';
import NavItems from './NavItems';
import Backdrop from '../Backdrop';


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height="75px"/>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </div>
    );
};

export default sideDrawer;