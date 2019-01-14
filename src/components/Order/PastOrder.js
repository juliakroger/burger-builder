import React from 'react';
import classes from '../Style.css';

const PastOrder = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients){
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    return (
        <div className={classes.Order}>
            <h5>Order #{props.index + 1}</h5>
            Ingredients:
            {
                    ingredients.map(ig => {
                        return <span
                            style={{ textTransform: 'capitalize', display: 'inline-block', margin: '0 8px', padding: '5px', border: '1px solid #ccc'}}
                            key={ig.name}>{ig.name} ({ig.amount})</span>;
                    })
            }
            <p>Price: <strong>${Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
        );
};

export default PastOrder;