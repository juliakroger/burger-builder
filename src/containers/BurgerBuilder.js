import React, { Component } from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/BurgerControls/BuildControls';
import Modal from '../components/UI/Modal';
import OrderSummary from '../components/Order/OrderSummary';
import Spinner from '../components/UI/Spinnerload/Spinner';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import axios from '../axios-orders';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.7,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 3,
        purchaseable: false,
        purchasing: false,
        loading: false
    }

    componentDidMount() {
        axios.get('https://burger-builder-2019.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
            })
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
        const queryParams = [];
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' +  this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render() {
        const disabledInfo = {
          ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = <Spinner/>;


        if (this.state.ingredients) {
            burger = (
                <div>
                    <Burger ingredients={this.state.ingredients} />
                    <h3>Total Price: $<strong>{this.state.totalPrice.toFixed(2)}</strong></h3>
                    <BuildControls
                        ingredientRemoved = {this.removeIngredientHandler}
                        ingredientAdded = {this.addIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchaseable}
                        ingredients={this.state.ingredients}
                        ordered={this.purchaseHandler}
                    />
                </div>
            );

            orderSummary = <OrderSummary ingredients={this.state.ingredients}
                            totalPrice={this.state.totalPrice}
                            cancelPurchase={this.purchaseCancelHendler}
                            continuePurchase={this.purchaseContinueHandler} />
        }

        if (this.state.loading){
            orderSummary = <Spinner />;
        }

        return (
            <div>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHendler}>
                    {orderSummary}
                </Modal>
                {burger}
            </div>
        );
    }
}

export default ErrorHandler(BurgerBuilder, axios);