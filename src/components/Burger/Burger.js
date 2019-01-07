import React from 'react';
import classes from '../Style.css';
import BurgerIngredient from './BurgerIngredient';


const Burger = (props) => {
    let burgerIngredients = Object.keys( props.ingredients )
        .map(igKey => {
            return [...Array( props.ingredients[igKey] )]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    if (burgerIngredients.length === 0){
       burgerIngredients = <p>Start adding ingredients!</p>
    }
  return (
      <div className={classes.Burger}>
          <BurgerIngredient type="bread-top"/>
          {burgerIngredients}
          <BurgerIngredient type="bread-bottom"/>
      </div>
  );
};

export default Burger;