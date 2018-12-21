import React from 'react';
import classes from './Style.css';

import ToolBar from './Nav/Toolbar';

const layout = ( props ) => (
    <div>
        <div>
            <ToolBar />
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </div>
);


export default layout;