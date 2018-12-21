import React from 'react';
import classes from './Style.css';
import ToolBar from './Nav/Toolbar';
import SideDrawer from './Nav/SideDrawer';

const layout = ( props ) => (
    <div>
        <div>
            <ToolBar />
            <SideDrawer />
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </div>
);


export default layout;