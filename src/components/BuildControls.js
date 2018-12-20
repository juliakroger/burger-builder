import React from 'react';

import classes from './Style.css';
import BuildControl from './BuildControl';
const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (

    <div className={classes.BuildControls}>
        {
            controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                removed={() => props.ingredientRemoved(ctrl.type)}
                added={() => props.ingredientAdded(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))
        }
        <button className={classes.OrderButton} onClick={props.ordered} disabled={!props.purchasable} >ORDER NOW</button>
    </div>
);

export default buildControls;