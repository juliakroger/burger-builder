import React, { Component } from 'react';

import Burger from '../components/Burger';
import BuildControls from '../components/BuildControls';
import Modal from '../components/Modal';
import OrderSummary from '../components/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1.0,
    meat: 1.5,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }


    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            }).reduce((sum, el) => {
                return sum + el;
            },0)
        this.setState({purchaseable: sum > 0})
    }

    addIngredientHandler = (type) => {
        //Updating the number of the ingredient
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        //updating the burger price
        const PriceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + PriceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        //Updating the number of the ingredient
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        //updating the burger price
        const PriceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - PriceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHendler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert('You continue  your order')
    }

    render() {
        const disabledInfo = {
          ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <div>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHendler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  totalPrice={this.state.totalPrice}
                                  cancelPurchase={this.purchaseCancelHendler}
                                  continuePurchase={this.purchaseContinueHandler}  />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <h3>Total Price: $<strong>{this.state.totalPrice.toFixed(2)}</strong></h3>
                <BuildControls
                    ingredientRemoved = {this.removeIngredientHandler}
                    ingredientAdded = {this.addIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchaseable}
                    ingredients={this.state.ingredients}
                    ordered={this.purchaseHandler}
         s       />

            </div>
        );
    }
}

export default BurgerBuilder;