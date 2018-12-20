import React from 'react';

const layout = ( props ) => (
    <div>
        <div>
            Toolbar, SideDraawer, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </div>
);


export default layout;