import React from 'react';
import classes from './Style.css';

const Logo = (props) => (
        <img className={classes.Logo} style={{height: props.height}} src={'https://freeiconshop.com/wp-content/uploads/edd/burger-flat.png'} alt={'Logo'}/>
);

    export default Logo;